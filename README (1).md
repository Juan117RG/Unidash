# UniDash — clase del 12 de octubre de 2026

Dashboard universitario con HTML, CSS y JavaScript. Esta entrega incorpora el módulo funcional de tareas de la clase y mantiene el diseño del proyecto anterior.

## Ejecutar en Visual Studio Code

1. Extrae todo el ZIP.
2. Abre en VS Code la carpeta **UniDash**, donde se encuentran `index.html`, `server.mjs` y `package.json`.
3. Con Node.js 20 o superior instalado, ejecuta:

```bash
npm start
```

4. Abre **http://localhost:5500**.

No necesitas instalar paquetes: el servidor usa Node y los estilos y Chart.js ya están incluidos. En Windows también puedes abrir **INICIAR.bat**. Si PowerShell bloquea `npm.ps1`, ejecuta `npm.cmd start`. Deja la terminal abierta mientras usas la página; Ctrl+C detiene el servidor.

También funciona con Live Server en VS Code. Evita abrir `index.html` con doble clic porque el proyecto usa módulos JavaScript. Si el puerto 5500 está ocupado, cierra el servidor anterior antes de volver a iniciarlo.

## Guardar una tarea

1. Entra a **Tareas**.
2. Completa el título, descripción, categoría, prioridad y fecha límite.
3. Pulsa **Guardar tarea**.
4. Comprueba que aparezca en **Mis tareas** y que se muestre el aviso de guardado.
5. Recarga la página, vuelve a **Tareas** y verifica que continúa ahí.

Las tareas se guardan como JSON en el almacenamiento local del navegador, con la clave **`unidash360.tasks`**. No requiere una base de datos ni una cuenta. El guardado se conserva al cerrar y volver a abrir el navegador, mientras no borres los datos del sitio. No es sincronización en la nube.

Usa siempre el mismo navegador y la misma dirección: `localhost:5500`, `127.0.0.1:5500`, un puerto diferente y una página publicada tienen almacenamientos distintos. Si cambias de dirección, no estás viendo los datos de la anterior.

## Funciones de esta clase

- Crear una tarea con identificador y fecha de creación.
- Editarla sin duplicarla y cancelar una edición.
- Marcarla completada y volverla a abrir.
- Eliminarla después de confirmar.
- Filtrar todas, pendientes, completadas y vencidas.
- Ordenar por fecha límite.
- Reflejar pendientes y vencidas en Dashboard.
- Conservar tareas al recargar y sincronizar cambios entre pestañas del mismo sitio.
- Informar si el navegador no permite guardar, sin mostrar un éxito falso.

Se cargan cuatro tareas de ejemplo solamente la primera vez. Los datos existentes con la clave de esta versión se conservan. Borrar tareas no hace que vuelvan a aparecer.

**Finanzas, estadísticas financieras, clima, divisas y noticias conservan la demostración visual de la etapa anterior.** Sus datos son de ejemplo; no consultan APIs ni representan datos actuales. El formulario financiero y los controles externos muestran un aviso de demostración. El guardado implementado para esta tarea corresponde al módulo **Tareas**.

## Archivos

```text
UniDash/
  index.html
  package.json
  server.mjs
  INICIAR.bat
  README.md
  GUIA_VIDEO.md
  CODIGO_COMPLETO.md
  PRUEBAS.txt
  PRUEBAS_NAVEGADOR.txt
  css/
    theme.css
    styles.css
    utilities.css
    input.css
  js/
    app.js
    data/mock.data.js
    services/storage.service.js
    modules/
      tasks.module.js
      tasks.model.js
      dashboard.module.js
      finance.module.js
      charts.module.js
      external.module.js
  vendor/
    chart.umd.js
    Chartjs-LICENSE.md
    Tailwind-LICENSE.txt
    README.md
  scripts/check.mjs
  tests/tasks.test.js
```

`css/utilities.css` contiene los estilos de Tailwind ya generados. Puedes ajustar el diseño en `css/styles.css` sin compilar. `css/input.css` documenta la entrada de Tailwind; solamente necesitas herramientas adicionales de Tailwind si decides regenerar ese CSS.

## Pruebas

Desde UniDash:

```bash
npm run check
npm test
```

La revisión de sintaxis y las **9 pruebas** pasaron. Incluyen creación, edición, completar/reabrir, eliminación, filtros, validación, inserción inicial, datos anteriores y errores de almacenamiento. También se comprobó en Chromium el guardado real, la recarga, las acciones de la interfaz, los indicadores del Dashboard y la vista móvil. Los resultados están en `PRUEBAS.txt` y `PRUEBAS_NAVEGADOR.txt`.

Consulta `GUIA_VIDEO.md` para mostrar el guardado en tu propia computadora. El archivo `CODIGO_COMPLETO.md` reúne el código por archivo.
