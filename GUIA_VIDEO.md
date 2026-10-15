# Demostración de cómo se guarda una tarea

## Preparación

Abre la carpeta UniDash en VS Code y ejecuta:

```bash
npm start
```

Abre http://localhost:5500 y selecciona **Tareas**. Inicia la captura de pantalla con la herramienta que utilices para grabar tu video.

## Recorrido para un video de 1 a 2 minutos

1. Presenta la página: «Este es UniDash y voy a mostrar cómo se guarda una tarea».
2. Llena el formulario con datos identificables, por ejemplo:
   - Título: **Entregar práctica de Aplicaciones de Internet**.
   - Descripción: **Preparar y subir el video de funcionamiento**.
   - Categoría: **Universidad**.
   - Prioridad: **Alta**.
   - Fecha límite: selecciona una fecha próxima.
3. Pulsa **Guardar tarea**. Muestra el aviso y busca la nueva tarea en **Mis tareas**. La lista se ordena por fecha, por lo que puede aparecer más abajo.
4. Explica: «La tarea ya aparece en la lista. Ahora voy a recargar la página para comprobar que quedó almacenada».
5. Recarga con Ctrl+R y vuelve a **Tareas**. Muestra la misma tarea.
6. Explica: «La tarea se mantiene después de recargar porque se guardó en localStorage, dentro del navegador».

## Mostrar la evidencia técnica del guardado

Si quieres enseñar dónde se guardan los datos, abre las herramientas de desarrollador con F12. En Chrome, Edge u Opera busca **Application / Aplicación → Local Storage / Almacenamiento local → http://localhost:5500**. Selecciona **`unidash360.tasks`** y muestra el objeto de tu tarea.

También puedes escribir en la consola:

```js
JSON.parse(localStorage.getItem('unidash360.tasks'))
```

Encontrarás el título, descripción, categoría, prioridad, fecha límite, estado, identificador y fecha de creación.

Explicación breve del código:

- `tasks.module.js` escucha el envío del formulario y actualiza la pantalla.
- `tasks.model.js` valida los datos y crea o actualiza la tarea.
- `storage.service.js` convierte el arreglo a JSON y lo escribe con `localStorage.setItem`.
- Al recargar, `localStorage.getItem` recupera el contenido y `JSON.parse` lo convierte otra vez en un arreglo.

Si te sobra tiempo, muestra **Editar**, **Completar**, el filtro **Completadas**, **Reabrir** y **Eliminar**. Para demostrar solamente el guardado son suficientes los pasos de crear, mostrar y recargar.

Usa la misma dirección durante todo el video. No borres el almacenamiento ni cambies de navegador antes de comprobar la persistencia.
