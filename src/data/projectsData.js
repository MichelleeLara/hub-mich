// Master data de casos de estudio. Fuente: proyectos.md
// Cada proyecto alimenta la Página de Detalle (estructura Problema · Solución · Resultado).

export const projects = [
	{
		slug: 'inteligencia-logistica',
		title: 'Inteligencia Logística',
		meta: 'Frontend · Bego — 2025',
		thumbnail: '/inteligenciaDashboard-pad.webp',
		intro: {
			left: 'Un mapa logístico nacional que colapsaba bajo el peso de sus propios datos: loaders invasivos y renderizados que asfixiaban al navegador.',
			right: 'Reconstruí la carga asíncrona y migré el motor de mapas para rastrear transportes sin una sola fricción visual.',
		},
		brief: {
			intro: [
				'El producto no tenía un problema de mapas. Tenía un problema de <strong>percepción de velocidad</strong>: cada carga bloqueaba la pantalla con loaders invasivos.',
				'El motor anterior <strong>asfixiaba al navegador</strong> al rastrear múltiples pedimentos nacionales a la vez. La operación se sentía lenta aunque los datos llegaran.',
				'Lideré una auditoría técnica y <strong>migré el motor a Mapbox</strong>, refactorizando la carga asíncrona para rastrear transportes sin una sola fricción visual.',
			],
			rol: ['Frontend Developer'],
			estado: ['Shipped', '2024–25'],
			tipo: ['Logística', 'Mapas en vivo'],
		},
		stack: [
			{ label: 'Angular', initials: 'Ng' },
			{ label: 'Mapbox', initials: 'Mb' },
			{ label: 'RxJS', initials: 'Rx' },
			{ label: 'TypeScript', initials: 'Ts' },
		],
		problema: [
			'Las peticiones de datos bloqueaban completamente la pantalla con loaders invasivos, frustrando la experiencia del usuario.',
			'El renderizado de rutas con el proveedor anterior asfixiaba el rendimiento del navegador al rastrear múltiples pedimentos nacionales a la vez.',
		],
		solucion: [
			'Lideré una auditoría técnica basada en datos y ejecuté la migración estratégica hacia Mapbox para aligerar la carga de renderizado.',
			'Refactoricé el manejo de promesas concurrentes para permitir peticiones en segundo plano sin interrumpir la navegación.',
			'Colaboré con diseño para recomponer las tarjetas de información y crear estados de carga fluidos.',
		],
		resultado: [
			{ value: '+65%', label: 'Velocidad de carga y rendimiento general comprobado.' },
			{ value: '0', label: 'Bloqueos de interfaz durante las actualizaciones de estado.' },
			{ value: 'Estándar', label: 'Mapbox adoptado como el nuevo estándar de la empresa.' },
		],
		impact: {
			featured: {
				metric: '+65%',
				label: 'Rendimiento del Mapa',
				desc: 'Migración a Mapbox que aligeró el renderizado de rutas y aceleró la carga asíncrona de toda la aplicación.',
			},
			items: [
				{ metric: '0 bloqueos', label: 'UI Sin Fricción', desc: 'Peticiones concurrentes en segundo plano que erradicaron los loaders invasivos durante la navegación.' },
				{ metric: 'Estándar', label: 'Adopción Corporativa', desc: 'Mapbox se volvió la tecnología de mapas por defecto para los futuros proyectos de la empresa.' },
			],
		},
	},
	{
		slug: 'tracking-aduanal',
		title: 'Tracking Aduanal',
		meta: 'Frontend · Bego — 2025',
		thumbnail: '/trackingAduanal-pad.webp',
		intro: {
			left: 'Monitoreo en vivo de transportes hacia múltiples aduanas, con jerarquías de permisos y flujos de datos espaciales concurrentes.',
			right: 'Sincronicé varios canales de WebSockets y estandaricé la data geográfica para pintar coordenadas en tiempo real, sin fricción.',
		},
		brief: {
			intro: [
				'El negocio necesitaba <strong>monitoreo en vivo</strong> de transportes hacia múltiples aduanas, con jerarquías de permisos que no podían filtrarse a la UI equivocada.',
				'El riesgo era doble: <strong>sobrecargar el navegador</strong> con flujos geográficos concurrentes y traducir reglas de acceso complejas a una experiencia sin fricción.',
				'Sincronicé varios canales de <strong>WebSockets</strong>, estandaricé la data espacial con GeoJSON y construí una <strong>UI basada en roles (RBAC)</strong> que se adapta según el usuario.',
			],
			rol: ['Frontend Developer'],
			estado: ['Shipped', '2024–25'],
			tipo: ['Real-time', 'Monitoreo', 'RBAC'],
		},
		stack: [
			{ label: 'Angular', initials: 'Ng' },
			{ label: 'WebSockets', initials: 'Ws' },
			{ label: 'GeoJSON', initials: 'Geo' },
			{ label: 'RBAC', initials: 'RB' },
		],
		problema: [
			'El negocio requería una herramienta de monitoreo en vivo para rastrear transportes hacia múltiples aduanas simultáneamente.',
			'Traducir jerarquías y permisos de visualización a una experiencia fluida suponía una gran complejidad de producto.',
			'Riesgo de sobrecargar el navegador al parsear y renderizar múltiples flujos geográficos en tiempo real.',
		],
		solucion: [
			'Orquesté la integración de WebSockets para sincronizar dinámicamente múltiples canales activos y suscribirse a aduanas al vuelo.',
			'Estandaricé la información espacial con GeoJSON, procesando y pintando coordenadas de forma ultra eficiente y escalable.',
			'Construí una arquitectura de UI basada en roles (RBAC) que adapta la vista de forma segura según supervisores u operativos.',
		],
		resultado: [
			{ value: '0 ms', label: 'Latencia visual: monitoreo en tiempo real sin recargar.' },
			{ value: '100%', label: 'Alineación entre reglas de acceso del negocio y la UX.' },
			{ value: 'Premium', label: 'UI/UX que domesticó la complejidad de los datos en vivo.' },
		],
		impact: {
			featured: {
				metric: '0 ms',
				label: 'Latencia Visual',
				desc: 'Monitoreo en tiempo real de coordenadas y rutas sin recargar la página, sobre múltiples canales concurrentes.',
			},
			items: [
				{ metric: 'GeoJSON', label: 'Data Espacial Estándar', desc: 'Formato unificado que permitió parsear y pintar transportes de forma ultra eficiente y escalable.' },
				{ metric: 'RBAC', label: 'UI Basada en Roles', desc: 'La interfaz se adapta de forma segura según supervisores u operativos, alineada a las reglas del negocio.' },
			],
		},
	},
	{
		slug: 'monitoreo-white-label',
		title: 'Monitoreo White-Label',
		meta: 'Frontend Lead · Bego — 2025',
		thumbnail: '/whiteLabelBrand.webp',
		intro: {
			left: 'Una sola plataforma de monitoreo que debía replicarse para múltiples empresas cliente, cada una con su branding y sus módulos.',
			right: 'Lideré a 6 ingenieros e introduje Feature-Sliced Design como convención corporativa para escalar sin caos.',
		},
		brief: {
			intro: [
				'Una sola plataforma que debía <strong>replicarse para múltiples empresas cliente</strong>, cada una con su branding y sus módulos. Sin arquitectura, era un infierno de mantenimiento.',
				'Coordinar a <strong>6 ingenieros</strong> sin convenciones estrictas amenazaba con código espagueti y retrasos en cada entrega.',
				'<em>"Si no está en el sistema, no lo construimos."</em>',
				'Como Frontend Lead introduje <strong>Feature-Sliced Design</strong> y una arquitectura White-Label que despliega por cliente inyectando color y módulos, <strong>sin tocar el código base</strong>.',
			],
			rol: ['Frontend Lead'],
			estado: ['Shipped', '2024–25'],
			tipo: ['White-Label', 'Multi-tenant', 'Design System'],
		},
		stack: [
			{ label: 'Feature-Sliced Design', initials: 'FSD' },
			{ label: 'White-Label', initials: 'WL' },
			{ label: 'Design Tokens', initials: 'DT' },
			{ label: 'Angular', initials: 'Ng' },
		],
		problema: [
			'Se requería una plataforma robusta para transporte nacional e internacional, replicable para múltiples empresas cliente.',
			'Cada despliegue necesitaba branding y módulos distintos, amenazando con un infierno de mantenimiento.',
			'Coordinar a 6 desarrolladores sin convenciones estrictas implicaba alto riesgo de código espagueti y retrasos.',
		],
		solucion: [
			'Asumí el rol de Frontend Lead e introduje Feature-Sliced Design para desacoplar la lógica y lograr un sistema predecible.',
			'Diseñé una arquitectura White-Label que despliega para cada cliente inyectando color y módulos, sin tocar el código base.',
			'Redacté documentación práctica y mentoré al equipo, sincronizando frontend, backend y diseño hacia un entregable premium.',
		],
		resultado: [
			{ value: '6', label: 'Ingenieros liderados con un flujo de trabajo sincronizado.' },
			{ value: 'FSD', label: 'Arquitectura adoptada como convención a nivel corporativo.' },
			{ value: 'Firmware', label: 'El éxito abrió la puerta al proyecto de candados IoT.' },
		],
		impact: {
			featured: {
				metric: '6 ingenieros',
				label: 'Equipo Liderado',
				desc: 'Coordinación de un equipo frontend bajo convenciones estrictas, eliminando fricción y código espagueti.',
			},
			items: [
				{ metric: 'FSD', label: 'Convención Corporativa', desc: 'Feature-Sliced Design adoptado como el nuevo estándar de arquitectura a nivel de toda la compañía.' },
				{ metric: 'White-Label', label: 'Despliegue Multimarca', desc: 'Nuevos clientes desplegados inyectando color y módulos, sin tocar el código base.' },
			],
		},
	},
	{
		slug: 'anamseals-firmware',
		title: 'AnamSeals',
		meta: 'Firmware · Bego — 2025–26',
		thumbnail: '/anamsealsHand.webp',
		intro: {
			left: 'Un candado IoT que debía saltar de prueba de concepto a producción en masa: ~1 millón de unidades al mes, con fallos de hardware y criptografía.',
			right: 'Consolidé y depuré el firmware sobre STM32 con TrustZone, blindando la identidad criptográfica y la trazabilidad ante cortes de energía.',
		},
		brief: {
			intro: [
				'Un candado IoT tenía que saltar de prueba de concepto a <strong>producción masiva</strong>: ~1 millón de unidades al mes, con fallos de hardware y criptografía en el camino.',
				'Las placas fallaban por contaminación del bus I2C, los <strong>tokens JWT se truncaban</strong> en el enrolamiento y cada reinicio mezclaba historiales de rastreo.',
				'Consolidé el firmware sobre <strong>STM32 con TrustZone</strong>: la firma ECDSA ocurre en el dominio seguro, con trazabilidad a prueba de cortes de energía.',
			],
			rol: ['Firmware Engineer'],
			estado: ['Pre-EVT → EVT', '2025–26'],
			tipo: ['IoT', 'Firmware', 'Hardware'],
		},
		stack: [
			{ label: 'C embebido', initials: 'C' },
			{ label: 'STM32 · TrustZone', initials: 'ST' },
			{ label: 'FreeRTOS', initials: 'RT' },
			{ label: 'Quectel LTE · GNSS', initials: 'LTE' },
			{ label: 'ECDSA-P256', initials: 'EC' },
		],
		problema: [
			'Las placas Rev02 fallaban: contaminación del bus I2C2 compartido entre OLED y NFC, y polaridades invertidas en los FETs.',
			'Los tokens JWT se truncaban durante el enrolamiento por lecturas prematuras del módem, causando fallos criptográficos y reinicios.',
			'La pérdida del batch_seq en cada reinicio provocaba que el backend mezclara historiales de rastreo.',
			'Había que comunicar la salud del dispositivo en una OLED usando solo 6 caracteres transcribibles por radio.',
		],
		solucion: [
			'Implementé una arquitectura de dos imágenes Secure / Non-Secure con TrustZone: la firma ECDSA-P256 ocurre en el dominio seguro sin exponer la llave privada.',
			'Ejecuté un depurado profundo de firmware y hardware —semáforos, DMA y pines— mitigando corrupción de memoria antes de liberar builds.',
			'Diseñé una codificación de 30 bits (Crockford Base32) que comprime 10 dimensiones de hardware en 6 caracteres OLED, con contrato de integración en TypeScript.',
			'Corregí el truncamiento de JWT reconstruyendo los buffers HTTP e hice persistente el contador de telemetría en memoria no volátil.',
		],
		resultado: [
			{ value: '~1M', label: 'Candados/mes: firmware estabilizado hacia producción masiva (pre-EVT → EVT).' },
			{ value: '448', label: 'Lotes GPS almacenados en flash para operar sin cobertura (power-fail safe).' },
			{ value: '4 equipos', label: 'Coordinación entre backend, web, manufactura en Flex y hardware en China.' },
		],
		impact: {
			featured: {
				metric: '$1M USD',
				label: 'Ahorro Anual Proyectado (Hardware & Energía)',
				desc: 'La combinación de un rediseño de hardware (riel maestro) y la optimización extrema del procesador evitó la compra de chips multi-núcleo y desplomó el consumo de baterías, generando un ahorro millonario a escala de producción masiva.',
			},
			items: [
				{
					icon: 'cpu',
					metric: 'FreeRTOS + DMA',
					label: 'Concurrencia en Single-Core',
					desc: 'Orquesté el firmware para simular multitasking real, gestionando periféricos asíncronos mediante Acceso Directo a Memoria (DMA). Logramos sincronizar todos los módulos (LTE, GNSS, NFC, OLED) sin asfixiar el único núcleo del STM32.',
				},
				{
					icon: 'server',
					metric: 'Control Desacoplado',
					label: 'Autonomía Inteligente',
					desc: 'Trasladé la carga operativa a nuestros servidores para un control remoto ultra ligero (vía tramas binarias OTA), dotando al candado de lógica de contingencia para ejecutar acciones autónomas críticas ante la pérdida de señal.',
				},
			],
		},
	},
	{
		slug: 'luzia-agentes-ia',
		title: 'Luz.ia',
		meta: 'Proyecto propio · Luz.ia — 2026',
		thumbnail: '/luziaOmmia-pad.webp',
		intro: {
			left: 'Un ecosistema de agentes de IA para el bienestar, cuya complejidad debía presentarse a terapeutas no técnicos con una interfaz impecable.',
			right: 'Diseño desde cero la arquitectura UI/UX y el design system, priorizando una estética editorial y una experiencia sin fricción.',
		},
		brief: {
			intro: [
				'Un ecosistema de <strong>agentes de IA</strong> para el bienestar, cuya complejidad debía presentarse a terapeutas no técnicos con una interfaz impecable.',
				'Se descartaron los CRMs de terceros para no depender de plataformas externas: eso exigía un <strong>dashboard propio</strong> con control total de UX y branding.',
				'Diseño desde cero el <strong>design system</strong> con Next.js y shadcn/ui; el panel interno y el del cliente comparten <strong>60–70% del código</strong>.',
			],
			rol: ['Product Engineer · Proyecto propio'],
			estado: ['MVP · Pre-validación', '2026'],
			tipo: ['B2B SaaS', 'Agentes IA', 'Design System'],
		},
		stack: [
			{ label: 'Next.js', initials: 'Nx' },
			{ label: 'Tailwind CSS', initials: 'Tw' },
			{ label: 'shadcn/ui', initials: 'Sh' },
			{ label: 'Supabase', initials: 'Sb' },
			{ label: 'Claude Haiku 4.5', initials: 'AI' },
		],
		problema: [
			'Los profesionales del bienestar pierden pacientes por no poder responder fuera de horario ni gestionar altos volúmenes de consultas.',
			'La solución orquesta múltiples agentes de IA; el reto era presentar esa complejidad con una interfaz limpia y accesible.',
			'Se descartaron CRMs de terceros para no depender de plataformas externas, exigiendo un dashboard propio con control total de UX y branding.',
		],
		solucion: [
			'Lidero el frontend con Next.js, Tailwind y shadcn/ui, definiendo un design system premium y pixel-perfect desde el día uno.',
			'Construí la interfaz de auditoría automatizada que conecta un formulario con Claude Haiku 4.5 y entrega reportes HTML en menos de 2 minutos.',
			'Diseñé una arquitectura UI donde el panel de operaciones y el dashboard del cliente comparten 60–70% del código y componentes.',
		],
		resultado: [
			{ value: '5 semanas', label: 'Hoja de ruta agresiva para lanzar el MVP funcional (en pre-validación).' },
			{ value: '60–70%', label: 'Código y componentes compartidos entre panel interno y cliente.' },
			{ value: 'B2B', label: 'Estándar de diseño que posiciona el producto como high-end, no solo automatización.' },
		],
		impact: {
			featured: {
				metric: '< 2 min',
				label: 'Reporte Automatizado',
				desc: 'Interfaz que conecta un formulario con Claude Haiku 4.5 para entregar diagnósticos HTML personalizados casi al instante.',
			},
			items: [
				{ metric: '60–70%', label: 'Código Compartido', desc: 'Panel interno y dashboard del cliente reutilizan la mayor parte de componentes, optimizando el desarrollo.' },
				{ metric: '5 semanas', label: 'Ruta al MVP', desc: 'Hoja de ruta agresiva hacia el MVP funcional, hoy en fase de pre-validación.' },
			],
		},
	},
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
