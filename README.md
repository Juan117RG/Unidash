# UniDash — Clase del 5 de octubre de 2026

Proyecto reconstruido y organizado para ejecutar la etapa visual de la clase. Contiene HTML, CSS, módulos de JavaScript y datos de ejemplo.

## Abrir en Visual Studio Code

1. Extrae el ZIP.
2. En Visual Studio Code selecciona **Archivo → Abrir carpeta** y abre `UniDash`.
3. Si usas Live Server, abre `index.html` con **Open with Live Server**.
4. También puedes abrir la terminal de esta carpeta y ejecutar:

```bash
npm start
```

Abre `http://localhost:5500`. No hace falta ejecutar `npm install`: el servidor utiliza exclusivamente Node.js.

En Windows, con Node.js instalado, también puedes usar `INICIAR.bat`.

Abre la aplicación mediante un servidor local. Abrir el HTML con doble clic (`file://`) puede bloquear los módulos de JavaScript.

## Qué funciona en esta etapa

- Navegación entre Dashboard, Tareas, Finanzas, Estadísticas, Divisas y Noticias.
- Actualización del encabezado y del botón activo de navegación.
- Menú lateral adaptable para pantallas pequeñas.
- Lista de tareas con prioridad, categoría y descripción.
- Resumen de las tareas pendientes en el Dashboard.
- Formularios y estructura visual de las demás secciones.

La clase usa **datos simulados**. El formulario de tareas muestra un aviso al enviarlo: todavía no guarda, edita ni elimina tareas. El filtro se incluye como control visual y no se conecta a la lista en esta etapa. Finanzas, conversión de divisas, noticias, ubicación y gráficas todavía no se inicializan en `js/app.js`; algunas áreas se muestran vacías. No se utiliza LocalStorage ni se conectan APIs reales.

## Demostración para tu video

1. Muestra la carpeta del proyecto y sus archivos.
2. Inicia el servidor y abre el Dashboard.
3. Señala las tareas pendientes y sus etiquetas de prioridad.
4. Entra a Tareas y muestra el formulario y la lista completa.
5. Navega a las otras cinco vistas y muestra sus componentes visuales.
6. Reduce el ancho del navegador y prueba el botón del menú.
7. Explica que esta entrega corresponde a una interfaz con datos mock y que la persistencia y las APIs pertenecen a etapas posteriores.

## Archivos y carpetas

| Ruta | Contenido |
| --- | --- |
| `index.html` | Todas las vistas y formularios |
| `css/theme.css` | Colores y variables del tema |
| `css/styles.css` | Diseño, componentes y estilos responsive |
| `js/app.js` | Inicio, navegación y estado visual de las vistas |
| `js/data/mock.data.js` | Datos de ejemplo |
| `js/modules/tasks.module.js` | Lista de tareas y resumen del Dashboard |
| `js/modules/finance.module.js` | Módulo visual de referencia, sin inicializar |
| `js/modules/dashboard.module.js` | Métricas de referencia, sin inicializar |
| `js/modules/charts.module.js` | Gráficas de referencia, sin inicializar |
| `js/modules/external.module.js` | Datos externos simulados de referencia, sin inicializar |
| `server.mjs` | Servidor local sin dependencias |
| `package.json` | Comando `npm start` |
| `INICIAR.bat` | Inicio rápido en Windows |
| `CODIGO_COMPLETO.md` | Código reunido por archivo |

## Notas de reconstrucción

Se utilizó la clase junto con la guía del proyecto para reunir los archivos completos. Se corrigieron los contenedores de tareas, los selectores del encabezado y errores de escritura que impedían el funcionamiento. Algunos valores de datos mock que no se veían completos se completaron con ejemplos; no se presentan como una transcripción literal. Los módulos de finanzas, métricas, gráficas y datos externos son código visual de referencia de la guía y se incluyen para conservar la estructura completa; el inicio mantiene activos solamente los módulos trabajados en esta clase.

El servidor local y el iniciador de Windows se añadieron para facilitar la ejecución. Las utilidades CSS locales mantienen la interfaz principal cuando el CDN no está disponible. Tailwind y Chart.js figuran en el HTML tal como en la guía; los módulos de gráficas de referencia requieren que Chart.js esté disponible.
