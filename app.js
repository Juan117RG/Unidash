import { initTasksModule, notify } from './modules/tasks.module.js';
import { seedDemoData } from './services/storage.service.js';
import { renderDashboardVisual } from './modules/dashboard.module.js';
import { initFinanceVisualDemo } from './modules/finance.module.js';
import { renderVisualCharts } from './modules/charts.module.js';
import { initExternalVisualDemo } from './modules/external.module.js';

const viewTitles = {
  dashboard: ['Resumen visual', 'Dashboard'],
  tasks: ['Organización personal', 'Tareas'],
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

function refreshDashboard() {
  renderDashboardVisual();
}
function bootstrap() {
  initNavigation();
  try {
    seedDemoData();
    initTasksModule(refreshDashboard);
    refreshDashboard();
    initFinanceVisualDemo();
    renderVisualCharts();
    initExternalVisualDemo();
  } catch (error) {
    notify(error.message, true);
    document.querySelector('#task-list').textContent = 'No se pudo iniciar el almacenamiento. ' + error.message;
    document.querySelector('#task-submit-button').disabled = true;
  }
}
bootstrap();
