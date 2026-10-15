import { mockTasks, mockTransactions } from '../data/mock.data.js';

export const STORAGE_KEYS = Object.freeze({
  tasks: 'unidash360.tasks',
  transactions: 'unidash360.transactions',
  preferences: 'unidash360.preferences',
  tasksSeeded: 'unidash360.seed.tasks',
  transactionsSeeded: 'unidash360.seed.transactions',
});

function read(key, fallback) {
  const raw = localStorage.getItem(key);
  if (raw === null) return structuredClone(fallback);
  try {
    return JSON.parse(raw);
  } catch {
    throw new Error('Hay datos guardados que no se pueden leer. No se han sobrescrito.');
  }
}
function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    throw new Error('No se pudo guardar. Permite el almacenamiento del navegador y revisa el espacio disponible.');
  }
}
function readArray(key) {
  const data = read(key, []);
  if (!Array.isArray(data)) throw new Error('El formato de los datos guardados no es válido.');
  return data;
}
export function getTasks() { return readArray(STORAGE_KEYS.tasks); }
export function saveTasks(tasks) { write(STORAGE_KEYS.tasks, tasks); }
export function getTransactions() { return readArray(STORAGE_KEYS.transactions); }
export function saveTransactions(items) { write(STORAGE_KEYS.transactions, items); }
export function getPreferences() {
  return read(STORAGE_KEYS.preferences, { baseCurrency: 'MXN', newsCategory: 'general', location: null });
}
export function savePreferences(preferences) { write(STORAGE_KEYS.preferences, preferences); }
export function localDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
export function seedDemoData() {
  const addDays = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return localDate(date);
  };
  // Si hay registros de una versión anterior, se conservan incluso sin bandera.
  if (localStorage.getItem(STORAGE_KEYS.tasks) === null && !localStorage.getItem(STORAGE_KEYS.tasksSeeded)) {
    saveTasks(mockTasks.map((task, i) => ({
      ...task, id: crypto.randomUUID(), dueDate: addDays([2, 4, -1, -2][i] ?? 1), createdAt: new Date().toISOString(),
    })));
  }
  localStorage.setItem(STORAGE_KEYS.tasksSeeded, 'true');
  if (localStorage.getItem(STORAGE_KEYS.transactions) === null && !localStorage.getItem(STORAGE_KEYS.transactionsSeeded)) {
    saveTransactions(mockTransactions.map((item) => ({ ...item, date: localDate(), id: crypto.randomUUID() })));
  }
  localStorage.setItem(STORAGE_KEYS.transactionsSeeded, 'true');
}
