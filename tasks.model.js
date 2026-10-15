import { getTasks, saveTasks, localDate } from '../services/storage.service.js';
export const priorityLabels = { low: 'Baja', medium: 'Media', high: 'Alta' };
export const categories = ['Universidad', 'Personal', 'Trabajo', 'Proyecto', 'Otro'];
export function isTaskOverdue(task, today = localDate()) {
  return task.status !== 'completed' && task.dueDate < today;
}
export function filteredTasks(filter = 'all') {
  return getTasks().filter((task) => {
    if (filter === 'completed') return task.status === 'completed';
    if (filter === 'pending') return task.status !== 'completed';
    if (filter === 'overdue') return isTaskOverdue(task);
    return true;
  }).sort((a, b) => a.dueDate.localeCompare(b.dueDate));
}
export function storeTask(input) {
  const title = String(input.title ?? '').trim();
  const description = String(input.description ?? '').trim();
  const dueDate = String(input.dueDate ?? '');
  const parsed = new Date(`${dueDate}T12:00:00`);
  if (!title || title.length > 80) throw new Error('Escribe un título de 1 a 80 caracteres.');
  if (description.length > 240) throw new Error('La descripción admite hasta 240 caracteres.');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dueDate) || !Number.isFinite(parsed.getTime()) || localDate(parsed) !== dueDate) throw new Error('Selecciona una fecha válida.');
  if (!categories.includes(input.category) || !Object.hasOwn(priorityLabels, input.priority)) throw new Error('Revisa la categoría y prioridad.');
  const tasks = getTasks();
  let task;
  if (input.id) {
    task = tasks.find((item) => item.id === input.id);
    if (!task) throw new Error('La tarea ya no existe. Cancela la edición.');
    Object.assign(task, { title, description, category: input.category, priority: input.priority, dueDate, updatedAt: new Date().toISOString() });
  } else {
    task = { id: crypto.randomUUID(), title, description, category: input.category, priority: input.priority, dueDate, status: 'pending', createdAt: new Date().toISOString() };
    tasks.push(task);
  }
  saveTasks(tasks);
  return task;
}
export function toggleTask(id) {
  const tasks = getTasks();
  const task = tasks.find((item) => item.id === id);
  if (!task) throw new Error('La tarea ya no existe.');
  task.status = task.status === 'completed' ? 'pending' : 'completed';
  task.updatedAt = new Date().toISOString();
  saveTasks(tasks);
}
export function deleteTask(id) {
  const tasks = getTasks();
  if (!tasks.some((task) => task.id === id)) throw new Error('La tarea ya no existe.');
  saveTasks(tasks.filter((task) => task.id !== id));
}
