# Agentes gráficos del proyecto

Perfiles guardados a petición de Michelle el 12 de octubre de 2026. Conservan los roles del equipo que construyó y pulió la biblioteca; no son sesiones vivas ni guardan su historial. Los archivos TOML permiten volver a invocar esas especialidades en tareas futuras del repo.

Todos heredan el modelo seleccionado y su esfuerzo de razonamiento. Los dos auditores son de solo lectura. Delegar solo cuando la tarea lo autorice; para cambios pequeños basta un agente.

| Perfil | Uso |
| --- | --- |
| unify_service_graphics | Homogeneizar un conjunto de gráficos |
| material_audit | Revisar vidrio, bordes y contraste sin editar |
| code_hover_review | Corregir interacción y recortes de la ventana de código |
| library_panels | Mini interfaces, dashboards y flujos |
| library_objects | Objetos y formas editables |
| library_onboarding | Autenticación, perfiles y pasos |
| review_graphics | Comparar con referencias sin editar |
| refine_graphics | Pulir geometría y movimiento existentes |

Fuente de estilo: `design-system/graphics/README.md`. Catálogo: `src/data/graphicLibrary.ts`. Vista interna: `/biblioteca-graficos`.

Ejemplo de encargo: «Usa unify_service_graphics para unificar estos recursos y material_audit para revisar claro y oscuro». Cada encargo debe indicar archivos o recursos concretos, alcance y cómo validar. No hace falta ejecutar los ocho perfiles juntos.
