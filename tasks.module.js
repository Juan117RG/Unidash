import { getTasks, localDate, STORAGE_KEYS } from '../services/storage.service.js';
import { filteredTasks, isTaskOverdue, priorityLabels, storeTask, toggleTask, deleteTask } from './tasks.model.js';
let onChange = () => {};
let toastTimer;
export function notify(message, error = false) {
  const toast = document.querySelector('#toast');
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('show');
  toast.classList.toggle('toast-error', error);
  toastTimer = setTimeout(() => toast.classList.remove('show'), error ? 7000 : 4000);
}
function escapeHtml(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}
function formatDate(value) {
  return new Intl.DateTimeFormat('es-MX', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(`${value}T12:00:00`));
}
function statusBadge(task) {
  if (task.status === 'completed') return '<span class="badge badge-completed">Completada</span>';
  if (isTaskOverdue(task)) return '<span class="badge badge-overdue">Vencida</span>';
  return `<span class="badge badge-${task.priority}">${priorityLabels[task.priority]}</span>`;
}
function renderTaskList(filter = 'all') {
  const tasks = filteredTasks(filter);
  document.querySelector('#task-list').innerHTML = tasks.length ? tasks.map((task) => `
    <article class="list-item ${task.status === 'completed' ? 'task-completed' : ''}">
      <div class="list-item-main">
        <div class="task-heading"><p class="list-item-title">${escapeHtml(task.title)}</p>${statusBadge(task)}</div>
        <p class="list-item-meta">${escapeHtml(task.category)} · Vence ${formatDate(task.dueDate)}</p>
        ${task.description ? `<p class="task-description">${escapeHtml(task.description)}</p>` : ''}
      </div>
      <div class="list-item-actions">
        <button type="button" class="small-button" data-action="toggle" data-id="${escapeHtml(task.id)}">${task.status === 'completed' ? 'Reabrir' : 'Completar'}</button>
        <button type="button" class="small-button" data-action="edit" data-id="${escapeHtml(task.id)}">Editar</button>
        <button type="button" class="small-button danger" data-action="delete" data-id="${escapeHtml(task.id)}">Eliminar</button>
      </div>
    </article>`).join('') : '<div class="empty-state">No hay tareas para el filtro seleccionado.</div>';
}
function renderUpcomingTasks() {
  const tasks = filteredTasks('pending').slice(0, 4);
  document.querySelector('#dashboard-task-list').innerHTML = tasks.length ? tasks.map((task) => `
    <article class="list-item"><div class="list-item-main">
      <p class="list-item-title">${escapeHtml(task.title)}</p>
      <p class="list-item-meta">${escapeHtml(task.category)} · ${formatDate(task.dueDate)}</p>
    </div>${statusBadge(task)}</article>`).join('') : '<p class="empty-state">No tienes tareas pendientes.</p>';
}
function resetForm() {
  document.querySelector('#task-form').reset();
  document.querySelector('#task-id').value = '';
  document.querySelector('#task-due-date').value = localDate();
  document.querySelector('#task-submit-button').textContent = 'Guardar tarea';
  document.querySelector('#task-form-heading').textContent = 'Nueva tarea';
  document.querySelector('#task-cancel-button').classList.add('hidden');
}
function startEdit(id) {
  const task = getTasks().find((item) => item.id === id);
  if (!task) throw new Error('La tarea ya no existe.');
  for (const [field, value] of Object.entries({ id: task.id, title: task.title, description: task.description, category: task.category, priority: task.priority, 'due-date': task.dueDate })) document.querySelector(`#task-${field}`).value = value;
  document.querySelector('#task-submit-button').textContent = 'Actualizar tarea';
  document.querySelector('#task-form-heading').textContent = 'Editar tarea';
  document.querySelector('#task-cancel-button').classList.remove('hidden');
  document.querySelector('#task-title').focus();
}
function saveTask(event) {
  event.preventDefault();
  try {
    const id = document.querySelector('#task-id').value;
    storeTask({ id, title: document.querySelector('#task-title').value, description: document.querySelector('#task-description').value, category: document.querySelector('#task-category').value, priority: document.querySelector('#task-priority').value, dueDate: document.querySelector('#task-due-date').value });
    document.querySelector('#task-filter').value = 'all';
    resetForm();
    refreshTasks();
    onChange();
    notify(id ? 'Tarea actualizada y guardada.' : 'Tarea guardada en este navegador.');
  } catch (error) { notify(error.message, true); }
}
function handleTaskAction(event) {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const {action, id} = button.dataset;
  try {
    if (action === 'edit') return startEdit(id);
    if (action === 'toggle') toggleTask(id);
    if (action === 'delete') {
      if (!window.confirm('¿Eliminar esta tarea? Esta acción no se puede deshacer.')) return;
      deleteTask(id);
    }
    if (document.querySelector('#task-id').value === id && action === 'delete') resetForm();
    refreshTasks();
    onChange();
    notify(action === 'delete' ? 'Tarea eliminada.' : 'Estado guardado.');
  } catch (error) { notify(error.message, true); }
}
export function refreshTasks() {
  renderTaskList(document.querySelector('#task-filter').value || 'all');
  renderUpcomingTasks();
}
export function initTasksModule(callback = () => {}) {
  onChange = callback;
  document.querySelector('#task-form').addEventListener('submit', saveTask);
  document.querySelector('#task-list').addEventListener('click', handleTaskAction);
  document.querySelector('#task-filter').addEventListener('change', refreshTasks);
  document.querySelector('#task-cancel-button').addEventListener('click', resetForm);
  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEYS.tasks || event.key === null) {
      try { refreshTasks(); onChange(); } catch (error) { notify(error.message, true); }
    }
  });
  resetForm();
  refreshTasks();
}
