import { initTasksVisualDemo } from './modules/tasks.module.js';

const viewTitles = {
  dashboard: ['Resumen visual', 'Dashboard'],
  tasks: ['Componente visual', 'Tareas'],
  finance: ['Componente visual', 'Finanzas'],
  analytics: ['Visualización', 'Estadísticas'],
  currency: ['Componente visual', 'Divisas'],
  news: ['Componente visual', 'Noticias'],
};

function showView(name) {
  const target = document.querySelector(`#view-${name}`);
  if (!target) return;
  document.querySelectorAll('.view-section').forEach((section) => {
    section.classList.remove('active');
  });
  target.classList.add('active');
  document.querySelectorAll('.nav-item').forEach((button) => {
    button.classList.toggle('active', button.dataset.view === name);
  });
  const [eyebrow, title] = viewTitles[name] || viewTitles.dashboard;
  document.querySelector('#page-eyebrow').textContent = eyebrow;
  document.querySelector('#page-title').textContent = title;
  document.querySelector('#sidebar').classList.remove('open');
}

function initNavigation() {
  document.querySelectorAll('[data-view]').forEach((button) => {
    button.addEventListener('click', () => showView(button.dataset.view));
  });
  document.querySelectorAll('[data-go-view]').forEach((button) => {
    button.addEventListener('click', () => showView(button.dataset.goView));
  });
  document.querySelector('#mobile-menu-button').addEventListener('click', () => {
    document.querySelector('#sidebar').classList.toggle('open');
  });
}

function bootstrap() {
  initNavigation();
  initTasksVisualDemo();
  document.querySelector('#toast').textContent = 'Sesión 1 - Mock UI';
  // Finanzas, gráficas y APIs aún no se inicializan en esta clase.
}

bootstrap();
