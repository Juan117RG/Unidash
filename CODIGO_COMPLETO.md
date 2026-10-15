## index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="UniDash - Dashboard personal universitario">
  <title>UniDash</title>
  <link rel="stylesheet" href="./css/utilities.css">
  <script src="./vendor/chart.umd.js"></script>
  <link rel="stylesheet" href="./css/theme.css">
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body class="bg-slate-950 text-slate-100">
  <div class="app-shell">
    <aside id="sidebar" class="sidebar">
      <div class="sidebar-brand">
        <div class="brand-mark">U</div>
        <div>
          <p class="brand-title">UniDash</p>
          <p class="brand-subtitle">Tareas · guardado local</p>
        </div>
      </div>

      <nav class="sidebar-nav" aria-label="Navegación principal">
        <button class="nav-item active" data-view="dashboard">Dashboard</button>
        <button class="nav-item" data-view="tasks">Tareas</button>
        <button class="nav-item" data-view="finance">Finanzas</button>
        <button class="nav-item" data-view="analytics">Estadísticas</button>
        <button class="nav-item" data-view="currency">Divisas</button>
        <button class="nav-item" data-view="news">Noticias</button>
      </nav>

      <div class="sidebar-footer">
        <p class="text-xs text-slate-500">HTML · Tailwind · JavaScript · Diseño evolutivo</p>
      </div>
    </aside>

    <main class="main-content">
      <header class="topbar">
        <button id="mobile-menu-button" class="icon-button lg:hidden" aria-label="Abrir menú">☰</button>
        <div>
          <p id="page-eyebrow" class="eyebrow">Resumen personal</p>
          <h1 id="page-title" class="page-title">Dashboard</h1>
        </div>
        <div class="topbar-location">
          <span id="location-status">Ubicación no detectada</span>
          <button id="detect-location-button" class="secondary-button">Detectar ubicación</button>
        </div>
      </header>

      <section id="view-dashboard" class="view-section active">
        <div class="hero-panel">
          <div>
            <p class="eyebrow">Tu centro de control</p>
            <h2 class="hero-title">Organiza tu día, controla tus finanzas y consulta datos del mundo real.</h2>
            <p class="hero-copy">Tus tareas se guardan en este navegador. Finanzas, clima, divisas y noticias muestran datos de ejemplo.</p>
          </div>
          <div class="weather-mini-card">
            <span id="weather-icon" class="weather-icon">☁️</span>
            <div>
              <p id="weather-temperature" class="weather-temperature">--°C</p>
              <p id="weather-description" class="text-sm text-slate-400">Clima pendiente</p>
            </div>
          </div>
        </div>

        <div class="metric-grid">
          <article class="metric-card">
            <p class="metric-label">Balance</p>
            <p id="metric-balance" class="metric-value">$0.00</p>
            <p class="metric-helper">Ingresos menos egresos</p>
          </article>
          <article class="metric-card">
            <p class="metric-label">Ingresos</p>
            <p id="metric-income" class="metric-value">$0.00</p>
            <p class="metric-helper">Acumulados</p>
          </article>
          <article class="metric-card">
            <p class="metric-label">Egresos</p>
            <p id="metric-expense" class="metric-value">$0.00</p>
            <p class="metric-helper">Acumulados</p>
          </article>
          <article class="metric-card">
            <p class="metric-label">Tareas pendientes</p>
            <p id="metric-pending" class="metric-value">0</p>
            <p class="metric-helper"><span id="metric-overdue">0</span> vencidas</p>
          </article>
        </div>

        <div class="dashboard-grid">
          <article class="panel">
            <div class="panel-heading">
              <div>
                <p class="eyebrow">Finanzas</p>
                <h3 class="panel-title">Ingresos vs egresos</h3>
              </div>
              <button class="link-button" data-go-view="analytics">Ver estadísticas</button>
            </div>
            <div class="chart-wrapper compact-chart">
              <canvas id="dashboard-finance-chart"></canvas>
            </div>
          </article>

          <article class="panel">
            <div class="panel-heading">
              <div>
                <p class="eyebrow">Productividad</p>
                <h3 class="panel-title">Tareas pendientes</h3>
              </div>
              <button class="link-button" data-go-view="tasks">Ver todas</button>
            </div>
            <div id="dashboard-task-list" class="stack-list"></div>
          </article>
        </div>

        <div class="dashboard-grid">
          <article class="panel">
            <div class="panel-heading">
              <div>
                <p class="eyebrow">Divisas</p>
                <h3 class="panel-title">Tipo de cambio desde <span id="base-currency-label">MXN</span></h3>
              </div>
              <button class="link-button" data-go-view="currency">Abrir módulo</button>
            </div>
            <div id="dashboard-rates" class="rate-grid"></div>
          </article>

          <article class="panel">
            <div class="panel-heading">
              <div>
                <p class="eyebrow">Actualidad</p>
                <h3 class="panel-title">Noticias recientes</h3>
              </div>
              <button class="link-button" data-go-view="news">Ver noticias</button>
            </div>
            <div id="dashboard-news" class="stack-list"></div>
          </article>
        </div>
      </section>

      <section id="view-tasks" class="view-section">
        <div class="two-column-layout">
          <article class="panel">
            <div class="panel-heading">
              <div>
                <p class="eyebrow">Organización</p>
                <h2 id="task-form-heading" class="panel-title">Nueva tarea</h2>
              </div>
            </div>
            <form id="task-form" class="form-grid">
              <input type="hidden" id="task-id">
              <label class="form-field full-span">
                <span>Título</span>
                <input id="task-title" type="text" maxlength="80" required name="title" placeholder="Ej. Entregar proyecto final">
              </label>
              <label class="form-field full-span">
                <span>Descripción</span>
                <textarea id="task-description" rows="3" maxlength="240" placeholder="Agrega detalles importantes"></textarea>
              </label>
              <label class="form-field">
                <span>Categoría</span>
                <select id="task-category">
                  <option>Universidad</option>
                  <option>Personal</option>
                  <option>Trabajo</option>
                  <option>Proyecto</option>
                  <option>Otro</option>
                </select>
              </label>
              <label class="form-field">
                <span>Prioridad</span>
                <select id="task-priority">
                  <option value="low">Baja</option>
                  <option value="medium" selected>Media</option>
                  <option value="high">Alta</option>
                </select>
              </label>
              <label class="form-field full-span">
                <span>Fecha límite</span>
                <input id="task-due-date" type="date" required>
              </label>
              <div class="form-actions full-span">
                <button id="task-submit-button" class="primary-button" type="submit">Guardar tarea</button>
                <button id="task-cancel-button" class="secondary-button hidden" type="button">Cancelar edición</button>
              </div>
            </form>
          </article>

          <article class="panel">
            <div class="panel-heading wrap-heading">
              <div>
                <p class="eyebrow">Seguimiento</p>
                <h2 class="panel-title">Mis tareas</h2>
              </div>
              <select id="task-filter" class="compact-select" aria-label="Filtrar tareas">
                <option value="all">Todas</option>
                <option value="pending">Pendientes</option>
                <option value="completed">Completadas</option>
                <option value="overdue">Vencidas</option>
              </select>
            </div>
            <div id="task-list" class="stack-list"></div>
          </article>
        </div>
      </section>

      <section id="view-finance" class="view-section">
        <div class="two-column-layout">
          <article class="panel">
            <div class="panel-heading">
              <div>
                <p class="eyebrow">Registro</p>
                <h2 class="panel-title">Nuevo movimiento</h2>
              </div>
            </div>
            <form id="transaction-form" class="form-grid">
              <label class="form-field full-span">
                <span>Concepto</span>
                <input id="transaction-description" type="text" maxlength="80" required placeholder="Ej. Beca, comida, transporte">
              </label>
              <label class="form-field">
                <span>Tipo</span>
                <select id="transaction-type">
                  <option value="income">Ingreso</option>
                  <option value="expense">Egreso</option>
                </select>
              </label>
              <label class="form-field">
                <span>Cantidad</span>
                <input id="transaction-amount" type="number" min="0.01" step="0.01" required placeholder="0.00">
              </label>
              <label class="form-field">
                <span>Categoría</span>
                <select id="transaction-category">
                  <option>Beca</option>
                  <option>Trabajo</option>
                  <option>Comida</option>
                  <option>Transporte</option>
                  <option>Universidad</option>
                  <option>Entretenimiento</option>
                  <option>Servicios</option>
                  <option>Suscripciones</option>
                  <option>Viajes</option>
                  <option>Otros</option>
                </select>
              </label>
              <label class="form-field">
                <span>Fecha</span>
                <input id="transaction-date" type="date" required>
              </label>
              <div class="form-actions full-span">
                <button class="primary-button" type="submit">Guardar movimiento</button>
              </div>
            </form>
          </article>

          <article class="panel">
            <div class="panel-heading">
              <div>
                <p class="eyebrow">Historial</p>
                <h2 class="panel-title">Movimientos</h2>
              </div>
            </div>
            <div id="transaction-list" class="stack-list"></div>
          </article>
        </div>
      </section>

      <section id="view-analytics" class="view-section">
        <div class="metric-grid">
          <article class="metric-card">
            <p class="metric-label">Tareas creadas</p>
            <p id="analytics-total-tasks" class="metric-value">0</p>
            <p class="metric-helper">Total acumulado</p>
          </article>
          <article class="metric-card">
            <p class="metric-label">Completadas</p>
            <p id="analytics-completed" class="metric-value">0</p>
            <p class="metric-helper">Productividad</p>
          </article>
          <article class="metric-card">
            <p class="metric-label">Categoría con más gasto</p>
            <p id="analytics-top-category" class="metric-value small-value">Sin datos</p>
            <p class="metric-helper">Egresos</p>
          </article>
          <article class="metric-card">
            <p class="metric-label">Tasa de ahorro</p>
            <p id="analytics-saving-rate" class="metric-value">0%</p>
            <p class="metric-helper">Balance / ingresos</p>
          </article>
        </div>

        <div class="dashboard-grid">
          <article class="panel">
            <div class="panel-heading">
              <div>
                <p class="eyebrow">Mensual</p>
                <h2 class="panel-title">Ingresos vs egresos</h2>
              </div>
            </div>
            <div class="chart-wrapper">
              <canvas id="monthly-finance-chart"></canvas>
            </div>
          </article>
          <article class="panel">
            <div class="panel-heading">
              <div>
                <p class="eyebrow">Distribución</p>
                <h2 class="panel-title">Gastos por categoría</h2>
              </div>
            </div>
            <div class="chart-wrapper">
              <canvas id="expense-category-chart"></canvas>
            </div>
          </article>
        </div>

        <article class="panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">Productividad</p>
              <h2 class="panel-title">Estado de tareas</h2>
            </div>
          </div>
          <div class="chart-wrapper wide-chart">
            <canvas id="task-status-chart"></canvas>
          </div>
        </article>
      </section>

      <section id="view-currency" class="view-section">
        <div class="dashboard-grid">
          <article class="panel">
            <div class="panel-heading">
              <div>
                <p class="eyebrow">Conversor</p>
                <h2 class="panel-title">Conversión de divisas</h2>
              </div>
            </div>
            <form id="currency-form" class="form-grid">
              <label class="form-field full-span">
                <span>Cantidad</span>
                <input id="currency-amount" type="number" min="0" step="0.01" value="1000" required>
              </label>
              <label class="form-field">
                <span>Desde</span>
                <select id="currency-from"></select>
              </label>
              <label class="form-field">
                <span>Hacia</span>
                <select id="currency-to"></select>
              </label>
              <div class="form-actions full-span">
                <button class="primary-button" type="submit">Convertir</button>
              </div>
            </form>
            <div id="currency-result" class="conversion-result">Ingresa una cantidad y realiza una conversión.</div>
          </article>

          <article class="panel">
            <div class="panel-heading wrap-heading">
              <div>
                <p class="eyebrow">Histórico</p>
                <h2 class="panel-title">Últimos 30 días</h2>
              </div>
              <select id="currency-history-quote" class="compact-select"></select>
            </div>
            <div class="chart-wrapper">
              <canvas id="currency-history-chart"></canvas>
            </div>
          </article>
        </div>

        <article class="panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">Mercado</p>
              <h2 class="panel-title">Tipos de cambio actuales</h2>
            </div>
          </div>
          <div id="currency-rate-list" class="rate-grid large-rate-grid"></div>
        </article>
      </section>

      <section id="view-news" class="view-section">
        <article class="panel">
          <div class="panel-heading wrap-heading">
            <div>
              <p class="eyebrow">Información</p>
              <h2 class="panel-title">Noticias recientes</h2>
              <p id="news-context" class="text-sm text-slate-400">Configura GNews para consultar noticias.</p>
            </div>
            <select id="news-category" class="compact-select">
              <option value="general">General</option>
              <option value="technology">Tecnología</option>
              <option value="business">Negocios</option>
              <option value="science">Ciencia</option>
              <option value="sports">Deportes</option>
              <option value="entertainment">Entretenimiento</option>
              <option value="health">Salud</option>
            </select>
          </div>
          <div id="news-list" class="news-grid"></div>
        </article>
      </section>
    </main>
  </div>

  <div id="toast" class="toast" role="status" aria-live="polite"></div>

  <script type="module" src="./js/app.js"></script>
</body>
</html>
```

## package.json

```json
{
  "name": "unidash-clase-12oct2026",
  "version": "0.2.0",
  "private": true,
  "type": "module",
  "scripts": {
    "start": "node server.mjs",
    "dev": "node server.mjs",
    "test": "node --test tests/*.test.js",
    "check": "node scripts/check.mjs"
  },
  "engines": { "node": ">=20" }
}
```

## server.mjs

```js
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 5500);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
};

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'index.html';
    const target = path.resolve(root, relative);
    if (target !== root && !target.startsWith(root + path.sep)) {
      res.writeHead(403).end('Acceso denegado');
      return;
    }
    if (!(await stat(target)).isFile()) {
      res.writeHead(404).end('Archivo no encontrado');
      return;
    }
    const data = await readFile(target);
    res.writeHead(200, { 'Content-Type': mime[path.extname(target)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404).end('Archivo no encontrado');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`UniDash: http://localhost:${port}`);
  console.log('Pulsa Ctrl+C para detener el servidor.');
});
server.on('error', (error) => {
  console.error(`No se pudo iniciar el servidor: ${error.message}`);
  console.error('Si el puerto está ocupado, cierra el otro servidor o cambia PORT.');
  process.exitCode = 1;
});
```

## INICIAR.bat

```bat
@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Necesitas Node.js o abrir index.html con Live Server en Visual Studio Code.
  pause
  exit /b 1
)
start "UniDash - servidor" cmd /k "node server.mjs"
timeout /t 2 /nobreak >nul
start "" "http://localhost:5500"
```

## css/input.css

```css
@import "tailwindcss";
@source "../index.html";
@source "../js";
```

## css/styles.css

```css
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top right, rgba(34, 211, 238, 0.08), transparent 28rem),
    var(--bg);
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  min-height: 100vh;
}

.sidebar {
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 30;
  display: flex;
  width: 260px;
  flex-direction: column;
  border-right: 1px solid var(--border);
  background: rgba(2, 6, 23, 0.96);
  padding: 24px 18px;
  backdrop-filter: blur(18px);
  transition: transform 0.25s ease;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 8px 24px;
}

.brand-mark {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--accent), #818cf8);
  color: #020617;
  font-weight: 900;
}

.brand-title {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 800;
}

.brand-subtitle {
  margin: 2px 0 0;
  color: var(--muted);
  font-size: 0.75rem;
}

.sidebar-nav {
  display: grid;
  gap: 8px;
}

.nav-item {
  width: 100%;
  border: 1px solid transparent;
  border-radius: 12px;
  background: transparent;
  color: #cbd5e1;
  padding: 11px 13px;
  text-align: left;
  transition: 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  border-color: rgba(34, 211, 238, 0.22);
  background: rgba(34, 211, 238, 0.09);
  color: #ecfeff;
}

.sidebar-footer {
  margin-top: auto;
  padding: 16px 8px 0;
}

.main-content {
  margin-left: 260px;
  min-width: 0;
  padding: 0 28px 40px;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  min-height: 88px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  border-bottom: 1px solid rgba(34, 48, 74, 0.7);
  background: rgba(2, 6, 23, 0.9);
  backdrop-filter: blur(16px);
}

.page-title,
.panel-title,
.hero-title {
  margin: 0;
}

.page-title {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 800;
}

.eyebrow {
  margin: 0 0 4px;
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.topbar-location {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  color: var(--muted);
  font-size: 0.85rem;
}

.view-section {
  display: none;
  padding-top: 28px;
}

.view-section.active {
  display: block;
}

.hero-panel,
.panel,
.metric-card {
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.82);
}

.hero-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-radius: 24px;
  padding: clamp(24px, 4vw, 42px);
}

.hero-title {
  max-width: 800px;
  font-size: clamp(1.7rem, 4vw, 3.2rem);
  font-weight: 900;
  line-height: 1.05;
}

.hero-copy {
  margin: 14px 0 0;
  max-width: 620px;
  color: var(--muted);
}

.weather-mini-card {
  display: flex;
  min-width: 210px;
  align-items: center;
  gap: 16px;
  border: 1px solid rgba(34, 211, 238, 0.22);
  border-radius: 18px;
  background: rgba(34, 211, 238, 0.07);
  padding: 18px;
}

.weather-icon {
  font-size: 2.4rem;
}

.weather-temperature {
  margin: 0;
  font-size: 1.7rem;
  font-weight: 900;
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.metric-card {
  min-width: 0;
  border-radius: 18px;
  padding: 20px;
}

.metric-label,
.metric-helper {
  margin: 0;
  color: var(--muted);
}

.metric-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
}

.metric-value {
  margin: 10px 0 4px;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 900;
}

.metric-helper {
  font-size: 0.78rem;
}

.small-value {
  font-size: 1.15rem;
}

.dashboard-grid,
.two-column-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.panel {
  min-width: 0;
  border-radius: 20px;
  padding: 20px;
}

.panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}

.wrap-heading {
  flex-wrap: wrap;
}

.panel-title {
  font-size: 1.08rem;
  font-weight: 800;
}

.primary-button,
.secondary-button,
.link-button,
.icon-button,
.compact-select {
  border-radius: 10px;
}

.primary-button,
.secondary-button,
.icon-button {
  min-height: 42px;
  border: 1px solid transparent;
  padding: 9px 14px;
}

.primary-button {
  background: var(--accent);
  color: #042f2e;
  font-weight: 800;
}

.primary-button:hover {
  background: #67e8f9;
}

.secondary-button,
.icon-button {
  border-color: var(--border);
  background: var(--surface-soft);
  color: #e2e8f0;
}

.link-button {
  border: 0;
  background: transparent;
  color: var(--accent);
  padding: 6px;
  font-size: 0.82rem;
  font-weight: 700;
}

.stack-list {
  display: grid;
  gap: 10px;
}

.list-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: rgba(2, 6, 23, 0.48);
  padding: 14px;
}

.list-item-main {
  min-width: 0;
}

.list-item-title {
  margin: 0;
  overflow-wrap: anywhere;
  font-weight: 800;
}

.list-item-meta {
  margin: 5px 0 0;
  color: var(--muted);
  font-size: 0.78rem;
}

.list-item-description {
  margin: 8px 0 0;
  color: #cbd5e1;
  font-size: 0.86rem;
}

.list-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.mini-button {
  border: 1px solid var(--border);
  border-radius: 9px;
  background: #0b1220;
  color: #cbd5e1;
  padding: 6px 9px;
  font-size: 0.75rem;
}

.mini-button:hover {
  border-color: var(--accent-strong);
  color: white;
}

.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 3px 8px;
  font-size: 0.7rem;
  font-weight: 800;
}

.badge-low {
  background: rgba(52, 211, 153, 0.12);
  color: #6ee7b7;
}

.badge-medium {
  background: rgba(251, 191, 36, 0.12);
  color: #fde68a;
}

.badge-high,
.badge-overdue {
  background: rgba(251, 113, 133, 0.12);
  color: #fda4af;
}

.badge-completed {
  background: rgba(34, 211, 238, 0.12);
  color: #67e8f9;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.form-field {
  display: grid;
  gap: 7px;
  min-width: 0;
  color: #cbd5e1;
  font-size: 0.82rem;
  font-weight: 700;
}

.form-field input,
.form-field select,
.form-field textarea,
.compact-select {
  width: 100%;
  min-height: 44px;
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;
  background: #07101f;
  color: var(--text);
  padding: 10px 12px;
}

.form-field textarea {
  resize: vertical;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus,
.compact-select:focus {
  border-color: var(--accent-strong);
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.09);
}

.full-span {
  grid-column: 1 / -1;
}

.form-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.compact-select {
  width: auto;
  min-width: 150px;
  padding: 8px 10px;
  font-size: 0.82rem;
}

.chart-wrapper {
  position: relative;
  min-height: 320px;
}

.compact-chart {
  min-height: 240px;
}

.wide-chart {
  min-height: 300px;
}

.rate-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.large-rate-grid {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.rate-card {
  border: 1px solid var(--border);
  border-radius: 14px;
  background: rgba(2, 6, 23, 0.48);
  padding: 14px;
}

.rate-code {
  margin: 0;
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 800;
}

.rate-value {
  margin: 7px 0 0;
  font-size: 1.15rem;
  font-weight: 900;
}

.conversion-result {
  margin-top: 18px;
  border: 1px solid rgba(34, 211, 238, 0.22);
  border-radius: 14px;
  background: rgba(34, 211, 238, 0.07);
  padding: 16px;
  color: #cffafe;
  font-weight: 800;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.news-card {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: rgba(2, 6, 23, 0.5);
}

.news-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  background: #111827;
}

.news-card-body {
  padding: 14px;
}

.news-card h3 {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.35;
}

.news-card p {
  color: var(--muted);
  font-size: 0.82rem;
}

.news-card a {
  color: var(--accent);
  font-size: 0.82rem;
  font-weight: 800;
  text-decoration: none;
}

.empty-state {
  border: 1px dashed var(--border);
  border-radius: 14px;
  color: var(--muted);
  padding: 18px;
  text-align: center;
}

.toast {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 60;
  transform: translateY(20px);
  opacity: 0;
  pointer-events: none;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #0f172a;
  padding: 12px 16px;
  color: white;
  transition: 0.2s ease;
}

.toast.show {
  transform: translateY(0);
  opacity: 1;
}

.hidden {
  display: none !important;
}

@media (max-width: 1180px) {
  .metric-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .large-rate-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .news-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 1023px) {
  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .main-content {
    margin-left: 0;
    padding-inline: 18px;
  }

  .topbar {
    justify-content: flex-start;
  }

  .topbar-location {
    margin-left: auto;
  }
}

@media (max-width: 760px) {
  .hero-panel,
  .topbar {
    align-items: flex-start;
  }

  .hero-panel,
  .dashboard-grid,
  .two-column-layout {
    grid-template-columns: 1fr;
  }

  .hero-panel,
  .topbar,
  .topbar-location {
    flex-direction: column;
  }

  .weather-mini-card {
    width: 100%;
  }

  .topbar {
    padding-block: 14px;
  }

  .topbar-location {
    width: 100%;
    align-items: flex-start;
    margin-left: 0;
  }

  .form-grid,
  .metric-grid,
  .rate-grid,
  .large-rate-grid,
  .news-grid {
    grid-template-columns: 1fr;
  }

  .list-item {
    flex-direction: column;
  }

  .list-actions {
    justify-content: flex-start;
  }
}

/* Utilidades locales para conservar el diseño aunque el CDN no esté disponible. */
.text-xs { font-size: .75rem; }
.text-sm { font-size: .875rem; }
.text-slate-400 { color: #94a3b8; }
.text-slate-500 { color: #64748b; }
.text-cyan-400 { color: #22d3ee; }
.text-emerald-400 { color: #34d399; }
.text-rose-400 { color: #fb7185; }
@media (min-width: 1024px) { .lg\:hidden { display: none; } }

/* Acciones y estado del módulo de tareas. */
.task-heading { display:flex; gap:.5rem; align-items:center; flex-wrap:wrap; }
.task-description { color:#cbd5e1; font-size:.875rem; margin-top:.5rem; white-space:pre-wrap; overflow-wrap:anywhere; }
.list-item-actions { display:flex; flex-wrap:wrap; gap:.35rem; align-self:flex-start; }
.small-button { border:1px solid var(--border); padding:.4rem .55rem; border-radius:.4rem; background:#111c31; color:var(--text); cursor:pointer; font-size:.75rem; }
.small-button:hover { border-color:var(--accent); }
.small-button.danger:hover { border-color:var(--danger); color:var(--danger); }
.task-completed .list-item-title { text-decoration:line-through; color:var(--muted); }
.toast-error { border-color:var(--danger); }
.list-item-title { overflow-wrap:anywhere; }
@media(max-width:700px) { #task-list .list-item { flex-direction:column; align-items:stretch; } .list-item-actions { margin-top:.5rem; } }
```

## css/theme.css

```css
:root {
  color-scheme: dark;
  --bg: #020617;
  --surface: #0f172a;
  --surface-soft: #111c31;
  --border: #22304a;
  --text: #f8fafc;
  --muted: #94a3b8;
  --accent: #22d3ee;
  --accent-strong: #0891b2;
  --success: #34d399;
  --danger: #fb7185;
  --warning: #fbbf24;
}
```

## css/utilities.css

```css
/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-amber-100:oklch(96.2% .059 95.617);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-300:oklch(84.5% .143 164.978);--color-emerald-400:oklch(76.5% .177 163.223);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-cyan-400:oklch(78.9% .154 211.53);--color-indigo-50:oklch(96.2% .018 272.314);--color-indigo-100:oklch(93% .034 272.788);--color-indigo-200:oklch(87% .065 274.039);--color-indigo-600:oklch(51.1% .262 276.966);--color-rose-300:oklch(81% .117 11.638);--color-rose-400:oklch(71.2% .194 13.428);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-300:oklch(86.9% .022 252.894);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-slate-900:oklch(20.8% .042 265.755);--color-slate-950:oklch(12.9% .042 264.695);--color-white:#fff;--spacing:.25rem;--container-md:28rem;--container-xl:36rem;--container-2xl:42rem;--container-5xl:64rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height:calc(2.25 / 1.875);--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-semibold:600;--font-weight-bold:700;--font-weight-black:900;--tracking-tight:-.025em;--tracking-widest:.1em;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.absolute{position:absolute}.relative{position:relative}.static{position:static}.mx-auto{margin-inline:auto}.my-4{margin-block:calc(var(--spacing) * 4)}.my-6{margin-block:calc(var(--spacing) * 6)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-5{margin-top:calc(var(--spacing) * 5)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-flex{display:inline-flex}.list-item{display:list-item}.min-h-screen{min-height:100vh}.w-full{width:100%}.max-w-2xl{max-width:var(--container-2xl)}.max-w-5xl{max-width:var(--container-5xl)}.max-w-7xl{max-width:var(--container-7xl)}.max-w-md{max-width:var(--container-md)}.max-w-xl{max-width:var(--container-xl)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-wrap{flex-wrap:wrap}.place-items-center{place-items:center}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-6{gap:calc(var(--spacing) * 6)}:where(.space-y-10>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 10) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 10) * calc(1 - var(--tw-space-y-reverse)))}.overflow-auto{overflow:auto}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-3xl{border-radius:var(--radius-3xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-indigo-200{border-color:var(--color-indigo-200)}.border-red-200{border-color:var(--color-red-200)}.border-slate-200{border-color:var(--color-slate-200)}.border-slate-300{border-color:var(--color-slate-300)}.border-slate-700{border-color:var(--color-slate-700)}.bg-amber-100{background-color:var(--color-amber-100)}.bg-amber-500{background-color:var(--color-amber-500)}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-600{background-color:var(--color-emerald-600)}.bg-indigo-50{background-color:var(--color-indigo-50)}.bg-indigo-600{background-color:var(--color-indigo-600)}.bg-red-50{background-color:var(--color-red-50)}.bg-red-100{background-color:var(--color-red-100)}.bg-red-600{background-color:var(--color-red-600)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-slate-900{background-color:var(--color-slate-900)}.bg-slate-950{background-color:var(--color-slate-950)}.bg-white{background-color:var(--color-white)}.p-4{padding:calc(var(--spacing) * 4)}.p-5{padding:calc(var(--spacing) * 5)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-10{padding:calc(var(--spacing) * 10)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-6{padding-inline:calc(var(--spacing) * 6)}.py-1{padding-block:var(--spacing)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-10{padding-block:calc(var(--spacing) * 10)}.py-16{padding-block:calc(var(--spacing) * 16)}.text-left{text-align:left}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-black{--tw-font-weight:var(--font-weight-black);font-weight:var(--font-weight-black)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.text-amber-100{color:var(--color-amber-100)}.text-amber-700{color:var(--color-amber-700)}.text-cyan-400{color:var(--color-cyan-400)}.text-emerald-100{color:var(--color-emerald-100)}.text-emerald-300{color:var(--color-emerald-300)}.text-emerald-400{color:var(--color-emerald-400)}.text-emerald-700{color:var(--color-emerald-700)}.text-indigo-100{color:var(--color-indigo-100)}.text-indigo-600{color:var(--color-indigo-600)}.text-red-100{color:var(--color-red-100)}.text-red-600{color:var(--color-red-600)}.text-red-700{color:var(--color-red-700)}.text-rose-300{color:var(--color-rose-300)}.text-rose-400{color:var(--color-rose-400)}.text-slate-100{color:var(--color-slate-100)}.text-slate-300{color:var(--color-slate-300)}.text-slate-400{color:var(--color-slate-400)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-slate-900{color:var(--color-slate-900)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}@media (hover:hover){.hover\:-translate-y-0\.5:hover{--tw-translate-y:calc(var(--spacing) * -.5);translate:var(--tw-translate-x) var(--tw-translate-y)}.hover\:shadow-md:hover{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}}.disabled\:opacity-60:disabled{opacity:.6}@media (min-width:40rem){.sm\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:48rem){.md\:grid-cols-\[220px_1fr\]{grid-template-columns:220px 1fr}}@media (min-width:64rem){.lg\:hidden{display:none}.lg\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:80rem){.xl\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}
```

## js/app.js

```js
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
```

## js/data/mock.data.js

```js
// Los datos son simulados. Los ejemplos parcialmente visibles se completaron
// para mantener un archivo ejecutable; no representan servicios en tiempo real.
export const mockTasks = [
  {
    "id": "task-1",
    "title": "Entregar proyecto de programación",
    "description": "Revisar README y subir el repositorio.",
    "category": "Universidad",
    "priority": "high",
    "status": "pending",
    "dueDate": "2026-10-02"
  },
  {
    "id": "task-2",
    "title": "Estudiar para examen de redes",
    "description": "Repasar direccionamiento y servicios.",
    "category": "Universidad",
    "priority": "medium",
    "status": "pending",
    "dueDate": "2026-10-05"
  },
  {
    "id": "task-3",
    "title": "Preparar presentación",
    "description": "Terminar diapositivas para exposición.",
    "category": "Proyecto",
    "priority": "high",
    "status": "pending",
    "dueDate": "2026-10-08"
  },
  {
    "id": "task-4",
    "title": "Organizar apuntes",
    "description": "Clasificar los apuntes de la semana.",
    "category": "Personal",
    "priority": "low",
    "status": "completed",
    "dueDate": "2026-10-01"
  }
];

export const mockTransactions = [
  { id: 'tx-1', description: 'Beca', type: 'income', amount: 5000, category: 'Beca', date: '2026-10-01' },
  { id: 'tx-2', description: 'Proyecto freelance', type: 'income', amount: 3000, category: 'Trabajo', date: '2026-10-02' },
  { id: 'tx-3', description: 'Comida', type: 'expense', amount: 450, category: 'Comida', date: '2026-10-02' },
  { id: 'tx-4', description: 'Transporte', type: 'expense', amount: 300, category: 'Transporte', date: '2026-10-03' },
  { id: 'tx-5', description: 'Suscripciones', type: 'expense', amount: 199, category: 'Suscripciones', date: '2026-10-03' },
  { id: 'tx-6', description: 'Material universidad', type: 'expense', amount: 600, category: 'Universidad', date: '2026-10-04' },
];

export const mockRates = [
  { quote: 'USD', rate: 0.0580 },
  { quote: 'EUR', rate: 0.0540 },
  { quote: 'GBP', rate: 0.0465 },
  { quote: 'JPY', rate: 8.9700 },
  { quote: 'CAD', rate: 0.0780 },
];

export const mockLocation = { city: 'Guanajuato', region: 'Guanajuato', latitude: 21.02, longitude: -101.25 };
export const mockWeather = { icon: '☀️', temperature: 24, apparentTemperature: 25, description: 'Despejado' };
export const mockNews = [
  { title: 'Universidades fortalecen sus proyectos de innovación', description: 'Ejemplo de noticia para el diseño del panel.', source: { name: 'Noticias demo' } },
  { title: 'La inteligencia artificial transforma el aprendizaje', description: 'Contenido simulado para la interfaz.', source: { name: 'Tecnología demo' } },
  { title: 'Empresas buscan talento joven', description: 'Ejemplo de información universitaria.', source: { name: 'Empleo demo' } },
];
export const mockFinanceSeries = {
  labels: ['Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep'],
  income: [8200, 9600, 8800, 10400, 10000, 11000],
  expense: [5100, 5900, 5400, 6100, 6200, 6500],
};
export const mockCurrencyHistory = {
  labels: ['01', '05', '10', '15', '20', '25', '30'],
  values: [0.0568, 0.0571, 0.0567, 0.0574, 0.0578, 0.0581, 0.0580],
};
```

## js/modules/charts.module.js

```js
import { mockFinanceSeries, mockTransactions } from "../data/mock.data.js"
let dashboardChart, financeChart, expenseChart
const chartText = "#cbd5e1"
const grid = "rgba(148, 163, 184, 0.08)"

function baseOptions() { return { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: chartText } } }, scales: { x: { ticks:{color:chartText}, grid:{display:false} }, y:{ticks:{color:chartText},grid:{color:grid}} } } }

function createOrReplace(current, canvas, config) { if (current) current.destroy(); return new Chart(canvas, config) }

export function renderVisualCharts() {
  const barData = { labels: mockFinanceSeries.labels, datasets: [ { label:"Ingresos", data:mockFinanceSeries.income, backgroundColor:"rgba(34,211,238,.72)" }, { label:"Egresos", data:mockFinanceSeries.expense, backgroundColor:"rgba(244,63,94,.72)" } ] }
  dashboardChart = createOrReplace(dashboardChart, document.querySelector("#dashboard-finance-chart"), { type:"bar", data:barData, options:baseOptions() })
  financeChart = createOrReplace(financeChart, document.querySelector("#monthly-finance-chart"), { type:"line", data:{ labels:mockFinanceSeries.labels, datasets:[ {label:"Ingresos",data:mockFinanceSeries.income,borderColor:"#22d3ee",tension:.3}, {label:"Egresos",data:mockFinanceSeries.expense,borderColor:"#fb7185",tension:.3} ] }, options:baseOptions() })
  const expenses = mockTransactions.filter((x)=>x.type === "expense")
  const grouped = expenses.reduce((acc,x)=>{acc[x.category]=(acc[x.category]||0)+x.amount;return acc},{})
  expenseChart = createOrReplace(expenseChart, document.querySelector("#expense-category-chart"), { type:"doughnut", data:{labels:Object.keys(grouped),datasets:[{data:Object.values(grouped)}]}, options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:chartText}}}} })
}
```

## js/modules/dashboard.module.js

```js
import { getTasks, getTransactions } from "../services/storage.service.js"
import { isTaskOverdue } from "./tasks.model.js"

function money(value) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(value)
}

export function renderDashboardVisual() {
  const mockTasks = getTasks(), mockTransactions = getTransactions()
  const income = mockTransactions.filter((x) => x.type === "income").reduce((a,b) => a+b.amount, 0)
  const expense = mockTransactions.filter((x) => x.type === "expense").reduce((a,b) => a+b.amount, 0)
  const pending = mockTasks.filter((x) => x.status !== "completed").length
  document.querySelector("#metric-balance").textContent = money(income - expense)
  document.querySelector("#metric-income").textContent = money(income)
  document.querySelector("#metric-expense").textContent = money(expense)
  document.querySelector("#metric-pending").textContent = pending
  document.querySelector("#metric-overdue").textContent = mockTasks.filter((task) => isTaskOverdue(task)).length
  document.querySelector("#analytics-total-tasks").textContent = mockTasks.length
  document.querySelector("#analytics-completed").textContent = mockTasks.filter((x) => x.status === "completed").length
  document.querySelector("#analytics-saving-rate").textContent = `${Math.round((income ? (income-expense)/income : 0)*100)}%`
  document.querySelector("#analytics-top-category").textContent = Object.entries(mockTransactions.filter((item) => item.type === "expense").reduce((acc, item) => { acc[item.category] = (acc[item.category] || 0) + item.amount; return acc }, {})).sort((a, b) => b[1] - a[1])[0]?.[0] || "Sin datos"
}
```

## js/modules/external.module.js

```js
import { mockLocation, mockWeather, mockRates, mockNews, mockCurrencyHistory } from "../data/mock.data.js"
let currencyChart
function escapeHtml(v){return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}

export function renderExternalVisuals() {
  document.querySelector("#location-status").textContent = `${mockLocation.city}, ${mockLocation.region} · DEMO`
  document.querySelector("#weather-icon").textContent = mockWeather.icon
  document.querySelector("#weather-temperature").textContent = `${mockWeather.temperature}°C`
  document.querySelector("#weather-description").textContent = `${mockWeather.description} · Sensación ${mockWeather.apparentTemperature}°`
  document.querySelector("#base-currency-label").textContent = "MXN"
  const ratesHtml = mockRates.map((x)=>`<article class="rate-card"><p class="rate-code">MXN → ${x.quote}</p><p class="rate-value">${x.rate}</p></article>`).join("")
  document.querySelector("#dashboard-rates").innerHTML = ratesHtml
  document.querySelector("#currency-rate-list").innerHTML = ratesHtml
  const newsHtml = mockNews.map((x)=>`<article class="news-card"><div class="news-card-body"><p class="eyebrow">${x.source.name} · DEMO</p><h3>${escapeHtml(x.title)}</h3><p>${escapeHtml(x.description)}</p><span class="text-cyan-400">Contenido simulado</span></div></article>`).join("")
  document.querySelector("#news-list").innerHTML = newsHtml
  document.querySelector("#news-context").textContent = "Noticias simuladas para visualizar el componente antes de conectar una API."
  document.querySelector("#dashboard-news").innerHTML = mockNews.slice(0,3).map((x)=>`<article class="list-item"><div class="list-item-main"><p class="list-item-title">${escapeHtml(x.title)}</p><p class="list-item-meta">${x.source.name} · DEMO</p></div></article>`).join("")
  const selects=["#currency-from","#currency-to","#currency-history-quote"].map((s)=>document.querySelector(s)); const currencies=["MXN","USD","EUR","GBP","JPY","CAD"]; selects.forEach((el)=>el.innerHTML=currencies.map(c=>`<option>${c}</option>`).join("")); document.querySelector("#currency-from").value="MXN"; document.querySelector("#currency-to").value="USD"; document.querySelector("#currency-history-quote").value="USD"
  if(currencyChart)currencyChart.destroy(); currencyChart=new Chart(document.querySelector("#currency-history-chart"),{type:"line",data:{labels:mockCurrencyHistory.labels,datasets:[{label:"MXN/USD · DEMO",data:mockCurrencyHistory.values,borderColor:"#22d3ee",backgroundColor:"rgba(34,211,238,.12)",fill:true,tension:.3}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:"#cbd5e1"}}},scales:{x:{ticks:{color:"#94a3b8"},grid:{display:false}},y:{ticks:{color:"#94a3b8"},grid:{color:"rgba(148,163,184,.08)"}}}}})
}

export function initExternalVisualDemo(){
  renderExternalVisuals()
  document.querySelector("#detect-location-button")?.addEventListener("click",()=>alert("La geolocalización real se conectará en la Sesión 3."))
  document.querySelector("#currency-form")?.addEventListener("submit",(e)=>{e.preventDefault();document.querySelector("#currency-result").textContent="Sesión 1: conversión visual; API real en Sesión 3."})
}
```

## js/modules/finance.module.js

```js
import { getTransactions } from "../services/storage.service.js"

function money(value) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(value)
}

export function renderFinanceVisual() {
  const mockTransactions = getTransactions()
  const list = document.querySelector("#transaction-list")
  list.innerHTML = mockTransactions.map((item) => `
    <article class="list-item">
      <div class="list-item-main"><p class="list-item-title">${item.description}</p><p class="list-item-meta">${item.category} · ${item.date}</p></div>
      <strong class="${item.type === "income" ? "text-emerald-400" : "text-rose-400"}">${item.type === "income" ? "+" : "-"}${money(item.amount)}</strong>
    </article>`).join("")
}

export function initFinanceVisualDemo() {
  renderFinanceVisual()
  document.querySelector("#transaction-form")?.addEventListener("submit", (event) => {
    event.preventDefault()
    alert("Este módulo conserva la demostración visual de finanzas. El guardado implementado en esta clase corresponde a Tareas.")
  })
}
```

## js/modules/tasks.model.js

```js
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
```

## js/modules/tasks.module.js

```js
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
```

## js/services/storage.service.js

```js
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
```

## scripts/check.mjs

```js
import { readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
function files(dir) { return readdirSync(dir, { withFileTypes: true }).flatMap(item => item.isDirectory() ? files(`${dir}/${item.name}`) : [`${dir}/${item.name}`]); }
const targets = ['server.mjs', ...files('js'), ...files('scripts'), ...files('tests')].filter(file => /\.(js|mjs)$/.test(file));
for (const file of targets) {
  const result = spawnSync(process.execPath, ['--check', file], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
console.log(`Sintaxis correcta en ${targets.length} archivos JavaScript.`);
```

## tests/tasks.test.js

```js
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
```
