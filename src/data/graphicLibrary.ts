export type GraphicRenderer = 'ambient' | 'bento' | 'panel' | 'onboarding' | 'object' | 'reference' | 'difference';
export interface GraphicEntry { id:string; title:string; category:string; renderer:GraphicRenderer; variant:string; profile?:0|1|2; reference:string; }
export const graphicCategories=[{id:'all',label:'Todos'},{id:'base',label:'Estilo base'},{id:'interfaces',label:'Interfaces'},{id:'datos',label:'Datos y análisis'},{id:'flujos',label:'Flujos e IA'},{id:'objetos',label:'Objetos y conexiones'}];
export const graphicLibrary:GraphicEntry[]=[
 {id:'criterio-contexto',title:'Criterio de producto · contexto y objetivo',category:'interfaces',renderer:'difference',variant:'context',reference:'panel-producto-perspectiva.png'},
 {id:'diseno-construccion',title:'Diseño e ingeniería · interfaz y código',category:'interfaces',renderer:'difference',variant:'build',reference:'panel-producto-perspectiva.png'},
 {id:'panel-perspectiva',title:'Panel de producto en perspectiva · base',category:'base',renderer:'panel',variant:'perspective',reference:'panel-producto-perspectiva.png'},
 {id:'consultoria-integrada',title:'Consultor IA · paneles integrados',category:'base',renderer:'panel',variant:'consulting',reference:'panel-producto-perspectiva.png'},
 {id:'automatizaciones-flujo',title:'Automatizaciones · flujo conectado',category:'base',renderer:'panel',variant:'workflow',reference:'colaboracion-tareas.png'},
 {id:'formas',title:'Formas con luz suave',category:'base',renderer:'bento',variant:'mark',reference:'graficos-capas-morado.png'},
 {id:'radar',title:'Radar de conexiones',category:'base',renderer:'bento',variant:'radar',reference:'graficos-capas-morado.png'},
 {id:'codigo',title:'Ventana de código',category:'base',renderer:'bento',variant:'code',reference:'graficos-capas-morado.png'},
 {id:'consultor-capas',title:'Paneles de Consultor IA · versión inicial',category:'interfaces',renderer:'ambient',variant:'ambient',profile:0,reference:'graficos-capas-morado.png'},
 {id:'web-capas',title:'Ventanas de Desarrollo web · versión inicial',category:'interfaces',renderer:'ambient',variant:'ambient',profile:1,reference:'graficos-capas-morado.png'},
 {id:'huella-marcos',title:'Huella y marcos concéntricos · guardado',category:'objetos',renderer:'ambient',variant:'ambient',profile:2,reference:'graficos-capas-morado.png'},
 {id:'barras-ventas',title:'Barras de resultados',category:'datos',renderer:'panel',variant:'sales',reference:'grafico-barras-ventas.png'},
 {id:'analisis-documentos',title:'Análisis de documentos',category:'datos',renderer:'panel',variant:'analysis',reference:'analisis-documentos.png'},
 {id:'escalado-agentes',title:'Escalado de agentes',category:'flujos',renderer:'panel',variant:'agents',reference:'panel-escalado-agentes.png'},
 {id:'colaboracion-tareas',title:'Colaboración entre tareas',category:'flujos',renderer:'panel',variant:'collaboration',reference:'colaboracion-tareas.png'},
 {id:'autenticacion',title:'Autenticación con escaneo',category:'interfaces',renderer:'onboarding',variant:'authentication',reference:'autenticacion-escaneo.png'},
 {id:'perfil-online',title:'Perfil y estado',category:'interfaces',renderer:'onboarding',variant:'profile',reference:'perfil-online.png'},
 {id:'inteligencia',title:'Inteligencia sobre datos',category:'flujos',renderer:'onboarding',variant:'intelligence',reference:'asistente-inteligente.png'},
 {id:'capas-esfera',title:'Capas y esfera',category:'objetos',renderer:'object',variant:'stack',reference:'objetos-datos-ia.png'},
 {id:'capsula-datos',title:'Cápsula de datos',category:'objetos',renderer:'object',variant:'capsule',reference:'objetos-datos-ia.png'},
 {id:'globo-datos',title:'Globo de datos',category:'objetos',renderer:'object',variant:'globe',reference:'objetos-datos-ia.png'},
 {id:'caja-herramientas',title:'Caja de herramientas',category:'objetos',renderer:'object',variant:'toolbox',reference:'objetos-datos-ia.png'},
 {id:'orbitas-integraciones',title:'Órbitas de integración',category:'objetos',renderer:'reference',variant:'integrations',reference:'graficos-orbitas-colaboracion-seguridad.png'},
 {id:'ecosistema',title:'Ecosistema de herramientas',category:'objetos',renderer:'reference',variant:'tiles',reference:'graficos-orbitas-colaboracion-seguridad.png'},
 {id:'curva-resultados',title:'Curva de resultados',category:'datos',renderer:'reference',variant:'analytics',reference:'graficos-bento-resultados.png'},
 {id:'documento-analisis',title:'Documento y lupa',category:'datos',renderer:'reference',variant:'document',reference:'graficos-ia-documentos.png'},
 {id:'mensaje-inteligente',title:'Mensaje inteligente',category:'flujos',renderer:'reference',variant:'mail',reference:'graficos-ia-documentos.png'},
 {id:'pieza-integracion',title:'Pieza de integración',category:'objetos',renderer:'reference',variant:'puzzle',reference:'graficos-ia-documentos.png'},
 {id:'metrica-capas',title:'Métrica en capas',category:'datos',renderer:'reference',variant:'stat',reference:'graficos-bento-resultados.png'},
 {id:'mapa-conexiones',title:'Mapa de conexiones',category:'objetos',renderer:'reference',variant:'map',reference:'mapa-conexiones-particulas.png'},
];
export const graphicReferences=[
 ['Capas y gráficos · base aprobada','graficos-capas-morado.png'],['Panel de producto','panel-producto-perspectiva.png'],['Barras de ventas','grafico-barras-ventas.png'],['Análisis de documentos','analisis-documentos.png'],['Escalado de agentes','panel-escalado-agentes.png'],['Autenticación','autenticacion-escaneo.png'],['Perfil online','perfil-online.png'],['Inteligencia','asistente-inteligente.png'],['Objetos y datos','objetos-datos-ia.png'],['Colaboración','colaboracion-tareas.png'],['IA y documentos','graficos-ia-documentos.png'],['Resultados','graficos-bento-resultados.png'],['Mini productos','recursos-mini-producto.png'],['Órbitas, colaboración y seguridad','graficos-orbitas-colaboracion-seguridad.png'],['Viral · diferenciadores','viral-diferenciadores.png'],['Mapa de partículas','mapa-conexiones-particulas.png'],['Globo de partículas','globo-particulas.png'],['Globo de conexiones','globo-interactivo-conexiones.png'],['CTA con listón','footer-cta-liston.png'],['Texto con iluminación','texto-iluminacion-scroll.png'],
];
