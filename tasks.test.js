import test, { beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { getTasks, saveTasks, getTransactions, saveTransactions, getPreferences, savePreferences, seedDemoData, STORAGE_KEYS } from '../js/services/storage.service.js';
import { storeTask, toggleTask, deleteTask, filteredTasks, isTaskOverdue } from '../js/modules/tasks.model.js';
class MemoryStorage {
  data = new Map();
  getItem(key) { return this.data.get(key) ?? null; }
  setItem(key, value) { this.data.set(key, String(value)); }
}
beforeEach(() => Object.defineProperty(globalThis, 'localStorage', {value: new MemoryStorage(), configurable: true}));
const input = {title:'Entregar proyecto',description:'Subir al repositorio',category:'Universidad',priority:'high',dueDate:'2026-10-20'};
test('crear tarea y recuperarla del almacenamiento', () => {
  const task = storeTask(input);
  assert.equal(task.status, 'pending'); assert.ok(task.id);
  assert.deepEqual(getTasks(), [task]);
  assert.equal(JSON.parse(localStorage.getItem(STORAGE_KEYS.tasks))[0].title, input.title);
});
test('editar conserva id, estado y fecha de creación', () => {
  const original = storeTask(input); toggleTask(original.id);
  storeTask({...input,id:original.id,title:'Proyecto corregido'});
  const updated = getTasks()[0];
  assert.equal(getTasks().length, 1); assert.equal(updated.id, original.id);
  assert.equal(updated.createdAt, original.createdAt); assert.equal(updated.status, 'completed');
  assert.equal(updated.title, 'Proyecto corregido');
});
test('completar, reabrir y borrar persisten el cambio', () => {
  const {id} = storeTask(input);
  toggleTask(id); assert.equal(getTasks()[0].status,'completed');
  toggleTask(id); assert.equal(getTasks()[0].status,'pending');
  deleteTask(id); assert.deepEqual(getTasks(),[]);
});
test('filtros y vencimiento sin confundir hoy ni completadas', () => {
  saveTasks([{...input,id:'1',dueDate:'2000-01-01',status:'pending'},{...input,id:'2',dueDate:'2099-01-01',status:'pending'},{...input,id:'3',dueDate:'2000-01-01',status:'completed'}]);
  assert.equal(filteredTasks('all').length,3); assert.equal(filteredTasks('pending').length,2);
  assert.equal(filteredTasks('completed').length,1); assert.equal(filteredTasks('overdue').length,1);
  assert.equal(isTaskOverdue({...input,status:'pending'},'2026-10-20'),false);
});
test('datos inválidos no escriben tareas', () => {
  for(const patch of [{title:'   '},{title:'x'.repeat(81)},{description:'x'.repeat(241)},{dueDate:'2026-02-30'},{dueDate:''},{category:'inexistente'},{priority:'inexistente'}]) assert.throws(()=>storeTask({...input,...patch}));
  assert.deepEqual(getTasks(),[]);
});
test('ejemplos se insertan una vez y no resucitan tareas eliminadas', () => {
  seedDemoData(); const count=getTasks().length; assert.ok(count>0);
  seedDemoData(); assert.equal(getTasks().length,count);
  saveTasks([]); seedDemoData(); assert.deepEqual(getTasks(),[]);
});
test('actualización conserva las tareas de una versión anterior', () => {
  saveTasks([{...input,id:'anterior',status:'pending'}]);
  seedDemoData(); assert.equal(getTasks().length,1); assert.equal(getTasks()[0].id,'anterior');
});
test('preferencias y transacciones usan claves independientes', () => {
  assert.equal(getPreferences().baseCurrency,'MXN');
  savePreferences({baseCurrency:'USD'}); saveTransactions([{amount:20}]);
  assert.deepEqual(getTransactions(),[{amount:20}]);
  assert.equal(getPreferences().baseCurrency,'USD'); assert.deepEqual(getTasks(),[]);
});
test('fallo de almacenamiento y datos corruptos no dan éxito falso', () => {
  localStorage.setItem(STORAGE_KEYS.tasks,'{invalid'); assert.throws(()=>getTasks(),/no se pueden leer/);
  localStorage.setItem(STORAGE_KEYS.tasks,'[]'); localStorage.setItem = () => {throw Error('quota');};
  assert.throws(()=>storeTask(input),/No se pudo guardar/); assert.deepEqual(getTasks(),[]);
});
