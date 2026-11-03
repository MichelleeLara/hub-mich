// Auditorías para prospectos (/auditorias/<slug>/). No se indexan ni van al sitemap:
// el enlace se comparte directo con el negocio. Todo dato aquí debe poder comprobarse
// abriendo su sitio; si algo no se midió, no se escribe.
export const audits = [
	{
		slug: 'argym-clothes',
		negocio: 'AR Gym Clothes',
		sitio: 'argymclothes.com',
		url: 'https://argymclothes.com/',
		fecha: '3 de noviembre de 2026',
		titulo: 'Su tienda ya funciona. Ahora hay que hacer que se note.',
		intro:
			'Revisé argymclothes.com como lo haría alguien que llega desde Instagram con ganas de comprarse una playera de $1,500. La base es buena; lo que frena está en los detalles que se ven en los primeros segundos.',
		metodo:
			'Revisión hecha desde fuera, sin acceso a su panel, ventas ni estadísticas. Medido en una laptop (1024 × 768) y un celular (375 px).',
		cifras: [
			{ valor: '2.7 MB', texto: 'descarga la portada al abrirla, casi todo en fotos' },
			{ valor: '546 KB', texto: 'pesa una sola foto de producto (Pumpcover grafiti)' },
			{ valor: '857 px', texto: 'hacia abajo empieza el titular: en una laptop no se ve al entrar' },
			{ valor: '6', texto: 'reseñas en Google. Todas de 5 estrellas, pero son pocas' },
		],
		bien: [
			{ titulo: 'Tienda propia completa', texto: 'Carrito, cuentas, favoritos, filtros por categoría y WhatsApp siempre a la mano.' },
			{ titulo: 'Google entiende sus productos', texto: 'Cada producto trae nombre, precio y marca en un formato que Google lee, y hay un mapa del sitio con unas 590 páginas.' },
			{ titulo: 'Una promesa que pocos tienen', texto: '“Revisa al recibir, antes de pagar.” Para ropa de marca comprada en línea, es su mejor argumento.' },
			{ titulo: 'Clientes contentos', texto: '5.0 en Google Maps y tienda física en Portales: la confianza ya existe fuera de la web.' },
		],
		hallazgos: [
			{
				prioridad: 'Alta',
				titulo: 'Al entrar no se ve qué venden ni dónde comprar',
				ve: 'En una laptop, la primera pantalla es solo una foto. “Entrena con Estilo” empieza a 857 px y “Comprar Ahora” a 937 px: hay que bajar para encontrarlos.',
				importa: 'Quien llega desde un anuncio o un link decide en segundos. Si no ve un mensaje y un botón, se regresa a Instagram.',
				arreglo: 'Una portada con el mensaje, el botón y la promesa de “revisa antes de pagar” visibles sin bajar. Abajo dejo una propuesta.',
			},
			{
				prioridad: 'Alta',
				titulo: 'Las fotos pesan de más',
				ve: 'La foto del Pumpcover grafiti pesa 546 KB en JPEG. El logo es un PNG de 3080 × 3080 px (244 KB) que se muestra a unos 40 px. La portada completa descarga 2.7 MB.',
				importa: 'En datos móviles se nota: la página tarda más en aparecer, y Google toma en cuenta la velocidad para posicionar.',
				arreglo: 'Convertir a WebP al tamaño en que se muestran. La misma foto del Pumpcover, a 900 px de ancho, queda en 38 KB.',
			},
			{
				prioridad: 'Alta',
				titulo: 'Sus redes aparecen con tres nombres distintos',
				ve: 'En “Visítanos” dice “Instagram: No disponible”; el pie de página enlaza a @lifting.club.closet, y el TikTok es @ar_gym.clothes.',
				importa: 'Antes de pagar $1,500 por una prenda de marca, la gente busca a la tienda en redes. Si los nombres no coinciden, duda.',
				arreglo: 'Un solo nombre o, al menos, todos los perfiles enlazados y con el mismo logo. Corregir el “No disponible”.',
			},
			{
				prioridad: 'Media',
				titulo: 'Detalles que se ven descuidados',
				ve: '“Para El” está en gris oscuro sobre una foto casi negra y casi no se lee. La tarjeta “Para Ella” usa la foto de un hombre. Faltan acentos en “Coleccion”, “Categoria”, “Envio” y “Para El”.',
				importa: 'Son detalles chicos, pero en una tienda de ropa premium hacen que se vea menos cuidada de lo que es.',
				arreglo: 'Texto claro sobre fotos oscuras y una revisión de ortografía en toda la interfaz.',
			},
			{
				prioridad: 'Media',
				titulo: 'No hay forma de saber qué funciona',
				ve: 'En el código de la portada no encontré Google Analytics, Meta Pixel ni otra herramienta de medición.',
				importa: 'Sin medir, no se sabe de dónde llegan las visitas, qué productos llevan a WhatsApp ni si una promoción sirvió.',
				arreglo: 'Medición básica y sin cookies invasivas: visitas, clics a WhatsApp y productos más vistos, con un reporte sencillo.',
			},
			{
				prioridad: 'Media',
				titulo: 'Pocas reseñas para lo bien que los califican',
				ve: '6 reseñas en Google Maps, todas de 5 estrellas.',
				importa: 'Quien busca “ropa de gym en Benito Juárez” compara tiendas por número de reseñas, no solo por calificación.',
				arreglo: 'Una tarjeta con QR en la caja y un mensaje de WhatsApp después de cada entrega pidiendo la reseña.',
			},
			{
				prioridad: 'Baja',
				titulo: 'Código de administración en las páginas públicas',
				ve: 'Las páginas que ve el cliente cargan Chart.js, SortableJS y el menú del panel de administración.',
				importa: 'Es peso que el cliente descarga y nunca usa.',
				arreglo: 'Cargar esas librerías solo dentro del panel.',
			},
			{
				prioridad: 'Baja',
				titulo: 'Direcciones de producto difíciles de compartir',
				ve: 'Un producto vive en /products/5a115773-8721-4264-9741-b902fd00b927.',
				importa: 'Una dirección como /playeras/pumpcover-grafiti se lee mejor en WhatsApp y le da a Google una pista más.',
				arreglo: 'Direcciones con el nombre del producto, redirigiendo las actuales para no perder nada.',
			},
		],
		plan: [
			{ paso: 'Semana 1', titulo: 'Arreglos rápidos', texto: 'Fotos ligeras, redes unificadas, textos legibles, acentos y medición básica.' },
			{ paso: 'Semana 2', titulo: 'Portada nueva', texto: 'El mensaje, el botón y la promesa de “revisa antes de pagar” visibles al entrar, en laptop y celular.' },
			{ paso: 'Mes 1', titulo: 'Google y reseñas', texto: 'Ficha de Google Maps completa, sistema para pedir reseñas y primer reporte de visitas.' },
		],
		heroMock: 'argym',
		antes: { escritorio: '/auditorias/argym-clothes/antes-escritorio.webp', movil: '/auditorias/argym-clothes/antes-movil.webp' },
		antesAlt: 'Hoy, en una laptop, la primera pantalla es solo una foto: el titular y el botón quedan abajo.',
	},
];

export const getAudit = (slug) => audits.find((a) => a.slug === slug);
