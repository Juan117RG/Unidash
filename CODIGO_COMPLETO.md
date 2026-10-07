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

## index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="UniDash - Dashboard personal universitario">
  <title>UniDash</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.5.0/dist/chart.umd.min.js"></script>
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
          <p class="brand-subtitle">Datos mock</p>
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
            <p class="hero-copy">Toda la información importante en un solo dashboard.</p>
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
                <h2 class="panel-title">Nueva tarea</h2>
              </div>
            </div>
            <form id="task-form" class="form-grid">
              <input type="hidden" id="task-id">
              <label class="form-field full-span">
                <span>Título</span>
                <input id="task-title" type="text" maxlength="80" required placeholder="Ej. Entregar proyecto final">
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
              <select id="task-filter" class="compact-select">
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

## js/app.js

```javascript
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
```

## js/data/mock.data.js

```javascript
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

```javascript
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

```javascript
import { mockTasks, mockTransactions } from "../data/mock.data.js"

function money(value) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(value)
}

export function renderDashboardVisual() {
  const income = mockTransactions.filter((x) => x.type === "income").reduce((a,b) => a+b.amount, 0)
  const expense = mockTransactions.filter((x) => x.type === "expense").reduce((a,b) => a+b.amount, 0)
  const pending = mockTasks.filter((x) => x.status !== "completed").length
  document.querySelector("#metric-balance").textContent = money(income - expense)
  document.querySelector("#metric-income").textContent = money(income)
  document.querySelector("#metric-expense").textContent = money(expense)
  document.querySelector("#metric-pending").textContent = pending
  document.querySelector("#metric-overdue").textContent = "1"
  document.querySelector("#analytics-total-tasks").textContent = mockTasks.length
  document.querySelector("#analytics-completed").textContent = mockTasks.filter((x) => x.status === "completed").length
  document.querySelector("#analytics-saving-rate").textContent = `${Math.round(((income-expense)/income)*100)}%`
  document.querySelector("#analytics-top-category").textContent = "Comida"
}
```

## js/modules/external.module.js

```javascript
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

```javascript
import { mockTransactions } from "../data/mock.data.js"

function money(value) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(value)
}

export function renderFinanceVisual() {
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
    alert("Sesión 1: el formulario ya está diseñado. La persistencia se implementa en la Sesión 2.")
  })
}
```

## js/modules/tasks.module.js

```javascript
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
```

## package.json

```json
{
  "name": "unidash-clase",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "start": "node server.mjs"
  }
}
```

## server.mjs

```javascript
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
