// Auditorías para prospectos (/auditorias/<slug>/). No se indexan ni van al sitemap:
// el enlace se comparte directo con el negocio. Todo dato aquí debe poder comprobarse
// abriendo su sitio; si algo no se midió, no se escribe.
// Quien la lee es el dueño, no un programador: cada hallazgo dice qué le cuesta en
// clientes o ventas, sin siglas ni unidades técnicas (KB, px, WebP...).
export const audits = [
	{
		slug: 'argym-clothes',
		negocio: 'AR Gym Clothes',
		sitio: 'argymclothes.com',
		url: 'https://argymclothes.com/',
		fecha: '3 de noviembre de 2026',
		titulo: 'Su tienda ya funciona. Ahora hay que hacer que se note.',
		intro:
			'Entré a argymclothes.com como lo haría alguien que viene de Instagram con ganas de comprarse una playera de $1,500. La tienda está bien hecha; lo que hace que algunos se vayan sin comprar son detalles que se notan en los primeros segundos.',
		metodo:
			'Revisé su página desde fuera, como cualquier cliente: sin acceso a su panel, sus ventas ni sus estadísticas. La probé en una laptop y en un celular. Las calificaciones son de Lighthouse, la herramienta con la que Google mide las páginas; cambian un poco cada vez que se mide.',
		cifras: [
			{ valor: '0', texto: 'botones de compra se ven al abrir la página en una laptop. Hay que bajar para encontrarlos.' },
			{ valor: '3', texto: 'nombres distintos para sus redes sociales dentro de la misma página.' },
			{ valor: '6', texto: 'reseñas en Google. Todas de 5 estrellas, pero quien compara tiendas ve muy pocas.' },
		],
		// Medición con Lighthouse 12 (perfil celular): mediana de 3 corridas del 3 nov 2026.
		// El API público de PageSpeed no tenía cuota ese día; el reporte en vivo es el enlace.
		google: {
			reporte: 'https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fargymclothes.com%2F&form_factor=mobile',
			puntajes: [
				{ nombre: 'Velocidad', valor: 68, texto: 'Qué tan rápido abre en un celular.' },
				{ nombre: 'Accesibilidad', valor: 80, texto: 'Que cualquiera pueda leerla y usarla.' },
				{ nombre: 'Buenas prácticas', valor: 79, texto: 'Seguridad y errores técnicos.' },
				{ nombre: 'SEO', valor: 100, texto: 'Qué tan bien la entiende Google.' },
			],
			comparativas: [
				{
					titulo: 'Segundos hasta que aparece la foto principal en un celular',
					unidad: 's',
					barras: [
						{ etiqueta: 'Hoy', valor: 6, nota: 'unos 6 segundos' },
						{ etiqueta: 'Lo que Google considera bueno', valor: 2.5, nota: '2.5 segundos o menos', meta: true },
					],
					lectura: 'Más del doble de lo recomendado. Cada segundo de espera es gente que se va antes de ver una prenda.',
				},
				{
					titulo: 'Lo que pesa una sola foto de producto (Pumpcover grafiti)',
					unidad: 'KB',
					barras: [
						{ etiqueta: 'Hoy', valor: 546, nota: '546 KB' },
						{ etiqueta: 'La misma foto, ajustada', valor: 38, nota: '38 KB, se ve igual', meta: true },
					],
					lectura: '14 veces más pesada de lo necesario. Por eso tarda en abrir con datos del celular.',
				},
			],
		},
		bien: [
			{ titulo: 'Tienda propia completa', texto: 'Carrito, cuentas de cliente, favoritos, filtros y WhatsApp siempre a la mano. Muchas tiendas de su tamaño solo venden por Instagram.' },
			{ titulo: 'Google ya entiende sus productos', texto: 'Cada producto le dice a Google su nombre, precio y marca. Eso ayuda a que aparezcan cuando alguien los busca. Google le da 100 de 100 en este punto.' },
			{ titulo: 'Una promesa que pocos tienen', texto: '“Revisa al recibir, antes de pagar.” Para ropa de marca comprada en línea, es su mejor argumento de venta.' },
			{ titulo: 'Clientes contentos', texto: '5 estrellas en Google Maps y tienda física en Portales: la confianza ya existe fuera de la página.' },
		],
		hallazgos: [
			{
				prioridad: 'Alta',
				titulo: 'Al entrar no se ve qué venden ni dónde comprar',
				ve: 'En una laptop, lo primero que aparece es solo una foto. El mensaje “Entrena con Estilo” y el botón “Comprar Ahora” están más abajo: hay que bajar para encontrarlos.',
				importa: 'Quien llega desde un anuncio o un link decide en segundos si se queda. Si no ve qué venden y dónde hacer clic, regresa a Instagram, y ese clic ya se pagó.',
				arreglo: 'Una portada con el mensaje, el botón de compra y la promesa de “revisa antes de pagar” visibles desde el primer momento. Abajo hay una propuesta.',
			},
			{
				prioridad: 'Alta',
				titulo: 'La página tarda en abrir en el celular',
				ve: 'Las fotos se subieron mucho más pesadas de lo que necesitan. En un celular, la foto principal tarda unos 6 segundos en aparecer. El logo, que se ve del tamaño de una uña, es una imagen enorme.',
				importa: 'La mayoría de sus clientes entra desde el celular, muchas veces con datos. Cada segundo de espera es gente que se va antes de ver una sola prenda. Además, Google muestra más abajo las páginas lentas.',
				arreglo: 'Ajustar cada foto al tamaño en que se muestra. Se ven igual, pero pesan hasta 14 veces menos.',
			},
			{
				prioridad: 'Alta',
				titulo: 'Sus redes aparecen con tres nombres distintos',
				ve: 'En “Visítanos” dice “Instagram: No disponible”. Al final de la página hay un enlace a @lifting.club.closet, y el TikTok es @ar_gym.clothes.',
				importa: 'Antes de pagar $1,500 por una prenda, la gente busca a la tienda en redes para ver si es de confianza. Si encuentra nombres distintos o un “No disponible”, duda y no compra.',
				arreglo: 'Un solo nombre, o al menos todas las cuentas enlazadas y con el mismo logo. Y quitar el “No disponible”.',
			},
			{
				prioridad: 'Media',
				titulo: 'Detalles que la hacen ver menos cuidada',
				ve: 'El texto “Para El” casi no se lee sobre su foto oscura. La sección “Para Ella” muestra la foto de un hombre. Faltan acentos en “Coleccion”, “Categoria”, “Envio” y “Para El”.',
				importa: 'Son detalles chicos, pero venden ropa premium: el cliente juzga la tienda por cómo se ve, y estos errores le restan confianza.',
				arreglo: 'Textos que se lean bien sobre las fotos, la foto correcta en cada sección y una revisión de ortografía.',
			},
			{
				prioridad: 'Media',
				titulo: 'Hoy no saben cuánta gente entra a su tienda',
				ve: 'No encontré ninguna herramienta que cuente visitas, como Google Analytics.',
				importa: 'Si pagan un anuncio o lanzan una promoción, no hay forma de saber si trajo gente, qué productos ven más ni cuántos terminan escribiendo por WhatsApp.',
				arreglo: 'Un contador de visitas sencillo y un reporte al mes que se lee en dos minutos: cuánta gente entró, de dónde y qué vio.',
			},
			{
				prioridad: 'Media',
				titulo: 'Pocas reseñas para lo bien que los califican',
				ve: '6 reseñas en Google Maps, todas de 5 estrellas.',
				importa: 'Quien busca “ropa de gym en Benito Juárez” compara tiendas por cuántas reseñas tienen, no solo por las estrellas. Con 6, otra tienda con 80 se ve más confiable.',
				arreglo: 'Una tarjeta con código QR dentro de cada paquete y un mensaje de WhatsApp después de la entrega pidiendo la reseña.',
			},
			{
				prioridad: 'Baja',
				titulo: 'Sus clientes descargan cosas que solo usa usted',
				ve: 'Las páginas que ve el cliente cargan también herramientas de su panel de administración, como gráficas y menús internos.',
				importa: 'El cliente nunca las usa, pero hacen que la página tarde un poco más.',
				arreglo: 'Que esas herramientas solo carguen cuando usted entra a su panel.',
			},
			{
				prioridad: 'Baja',
				titulo: 'Los enlaces de sus productos no dicen qué son',
				ve: 'Un producto vive en una dirección como /products/5a115773-8721-4264-9741-b902fd00b927.',
				importa: 'Cuando alguien comparte una prenda por WhatsApp, el enlace no dice qué es. Uno como /playeras/pumpcover-grafiti da más confianza al abrirlo y ayuda a aparecer en Google.',
				arreglo: 'Enlaces con el nombre del producto, sin que los que ya existen dejen de funcionar.',
			},
		],
		plan: [
			{ paso: 'Semana 1', titulo: 'Arreglos rápidos', texto: 'Página más rápida, redes con un solo nombre, textos que se leen, ortografía y un contador de visitas.' },
			{ paso: 'Semana 2', titulo: 'Portada nueva', texto: 'Que al entrar se vea qué venden, el botón de compra y la promesa de “revisa antes de pagar”, en laptop y celular.' },
			{ paso: 'Mes 1', titulo: 'Más reseñas y saber qué funciona', texto: 'Su ficha de Google Maps completa, una forma fácil de pedir reseñas y su primer reporte de visitas.' },
		],
		heroMock: 'argym',
		antes: { escritorio: '/auditorias/argym-clothes/antes-escritorio.webp', movil: '/auditorias/argym-clothes/antes-movil.webp' },
		antesAlt: 'Así se ve hoy en una laptop: al entrar solo aparece una foto. El mensaje y el botón de compra quedan más abajo.',
	},
];

export const getAudit = (slug) => audits.find((a) => a.slug === slug);
