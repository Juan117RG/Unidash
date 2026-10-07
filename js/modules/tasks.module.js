import { mockTasks } from '../data/mock.data.js';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function badge(task) {
  const statusClass = task.status === 'completed' ? 'completed' : task.priority;
  return `<span class="badge badge-${escapeHtml(statusClass)}">${escapeHtml(task.priority)}</span>`;
}

export function renderTasksVisual() {
  const list = document.querySelector('#task-list');
  const upcoming = document.querySelector('#dashboard-task-list');

  list.innerHTML = mockTasks.map((task) => `
    <article class="list-item">
      <div class="list-item-main">
        <p class="list-item-title">${escapeHtml(task.title)}</p>
        <p class="list-item-meta">- ${escapeHtml(task.category)}</p>
        <p class="text-sm text-slate-400">${escapeHtml(task.description)}</p>
      </div>
      ${badge(task)}
    </article>
  `).join('');

  upcoming.innerHTML = mockTasks
    .filter((task) => task.status !== 'completed')
    .slice(0, 4)
    .map((task) => `
      <article class="list-item">
        <div class="list-item-main">
          <p class="list-item-title">${escapeHtml(task.title)}</p>
          <p class="list-item-meta">- ${escapeHtml(task.category)} - ${escapeHtml(task.dueDate)}</p>
          <p class="text-sm text-slate-400">${escapeHtml(task.description)}</p>
        </div>
        ${badge(task)}
      </article>
    `).join('');
}

export function initTasksVisualDemo() {
  renderTasksVisual();
  // Evita recargar la página al probar el formulario de esta etapa visual.
  document.querySelector('#task-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Esta etapa muestra el formulario. El guardado de tareas se implementa en la siguiente sesión.');
  });
}
