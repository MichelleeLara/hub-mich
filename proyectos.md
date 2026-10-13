# Portfolio Master Data: Top 5 Proyectos

---

## 1. App de Inteligencia Logística
**Empresa:** Bego
**Rol:** Frontend Developer
**Stack:** Angular, Mapbox, RxJS
**Impacto:** Aceleré el rendimiento del mapa logístico un 65% y rediseñé la carga asíncrona para rastrear transportes sin fricción visual.

### La Autopsia del Proyecto

**Problema:**
* Las peticiones de datos bloqueaban completamente la pantalla con loaders invasivos, frustrando la experiencia del usuario.
* El renderizado de rutas con el proveedor de mapas anterior asfixiaba el rendimiento del navegador al intentar rastrear múltiples pedimentos nacionales simultáneamente.

**Solución:**
* Lideré una auditoría técnica basada en datos y ejecuté la migración estratégica hacia Mapbox para aligerar la carga de renderizado.
* Refactoricé el manejo de promesas concurrentes para permitir peticiones en segundo plano sin interrumpir la navegación.
* Colaboré con el equipo de diseño para recomponer la UI de las tarjetas de información y crear estados de carga fluidos.

**Resultados:**
* **+65%** de mejora comprobada en la velocidad de carga y el rendimiento general de la aplicación.
* Erradicación total de los bloqueos de interfaz durante las actualizaciones de estado.
* Mapbox se convirtió en el **nuevo estándar tecnológico** adoptado por la empresa para sus futuros proyectos.

---

## 2. Plataforma de Tracking Aduanal en Tiempo Real
**Empresa:** Bego
**Rol:** Frontend Developer
**Stack:** Angular, WebSockets, GeoJSON, Role-Based UI
**Impacto:** Sincronicé múltiples canales de WebSockets para un sistema de monitoreo en tiempo real, procesando datos espaciales complejos con una interfaz impecable.

### La Autopsia del Proyecto

**Problema:**
* El negocio requería una herramienta de monitoreo en vivo para rastrear transportes dirigidos a múltiples aduanas simultáneamente.
* Existía una gran complejidad para traducir los requerimientos del negocio (jerarquías y permisos de visualización) a una experiencia de usuario fluida y sin fricciones.
* Riesgo técnico de sobrecargar el navegador al intentar gestionar, parsear y renderizar múltiples flujos de datos geográficos en tiempo real de forma concurrente.

**Solución:**
* Orquesté la integración de WebSockets para manejar la sincronización dinámica de múltiples canales activos, permitiendo al usuario suscribirse a diferentes aduanas al vuelo.
* **Estandaricé el manejo de la información espacial utilizando GeoJSON**, lo que permitió procesar y pintar las coordenadas de los transportes en el mapa de forma ultra eficiente y escalable.
* Construí una arquitectura de UI basada en roles (RBAC), donde la interfaz se adaptaba de forma segura para mostrar múltiples aduanas a supervisores, o restringir la vista a una sola aduana para roles operativos.

**Resultados:**
* **Cero latencia visual:** Los usuarios pudieron monitorear rutas y coordenadas precisas en tiempo real sin necesidad de recargar la página.
* Alineación perfecta entre las reglas de acceso del negocio y la experiencia de usuario, garantizando la seguridad de la información.
* Entrega de una UI/UX de nivel premium que logró domesticar la complejidad de los datos masivos en vivo.

---

## 3. Sistema Global de Monitoreo (White-Label)
**Empresa:** Bego
**Rol:** Frontend Lead
**Stack:** Feature-Sliced Design (FSD), White-Label Architecture, Design Tokens
**Impacto:** Lideré un equipo de 6 ingenieros para construir una plataforma de monitoreo escalable y multimarca, estableciendo FSD como el nuevo estándar corporativo.

### La Autopsia del Proyecto

**Problema:**
* Se requería una plataforma robusta para rastrear el transporte nacional e internacional, pero con una restricción comercial compleja: la app debía replicarse para múltiples empresas cliente.
* Cada despliegue requería una "personalidad" (branding) diferente y acceso a distintos módulos, lo que amenazaba con crear un infierno de mantenimiento si no se diseñaba bien desde el inicio.
* Coordinar a 6 desarrolladores frontend sin convenciones estrictas suponía un riesgo altísimo de fricción, código espagueti y retrasos en la entrega.

**Solución:**
* Asumí el rol de Frontend Lead e introduje la arquitectura **Feature-Sliced Design (FSD)** para desacoplar la lógica de negocio, logrando un sistema altamente reactivo y predecible.
* Diseñé una arquitectura UI estandarizada (White-Label) que permitía desplegar la aplicación para distintos clientes simplemente inyectando variables de color y configuraciones de módulos, sin tocar el código base.
* Redacté documentación práctica y ejecuté sesiones de mentoría para el equipo, eliminando bloqueos técnicos y asegurando un flujo de trabajo sincronizado con Backend y Diseño para un entregable de nivel premium.

**Resultados:**
* Lanzamientos ágiles y sin fricción para los distintos clientes corporativos gracias a la escalabilidad del sistema White-Label.
* La eficiencia del desarrollo fue tal que mi propuesta arquitectónica (FSD) fue **adoptada como la nueva convención a nivel corporativo**.
* El éxito en la entrega del producto y la gestión del equipo me abrió la puerta para liderar una nueva división estratégica en la compañía: **Firmware y producción de hardware**.

---

## 4. AnamSeals: Firmware para Candados Inteligentes IoT
**Empresa:** Bego AI
**Rol:** Ingeniera de firmware
**Stack:** C embebido, STM32WBA62CI (TrustZone), FreeRTOS, CMake, Módem LTE Quectel, GNSS, ECDSA-P256
**Impacto:** Lideré la consolidación y depuración del firmware para un candado IoT, escalando el proyecto desde pruebas de concepto (POC) hasta la preparación para producción en masa de ~1 millón de candados al mes.

### La Autopsia del Proyecto

**Problema:**
* El hardware presentaba fallas en las placas Rev02 destinadas a pruebas de manufactura, incluyendo contaminación del bus I2C2 compartido entre pantallas OLED y módulos NFC, además de polaridades invertidas en los FETs.
* Existían problemas de sincronización de datos: los tokens JWT se truncaban durante el enrolamiento debido a lecturas prematuras del módem, lo que causaba fallos criptográficos y ciclos de reinicio.
* La pérdida del identificador secuencial de los lotes de datos (`batch_seq`) en cada reinicio provocaba que el backend mezclara historiales de rastreo.
* Era necesario comunicar el estado de salud del dispositivo en una pantalla OLED usando solo 6 caracteres, ya que los operadores en campo debían transcribirlos por radio.

**Solución:**
* Implementé una arquitectura de dos imágenes (Secure / Non-Secure) usando TrustZone, donde la identidad criptográfica y la firma ECDSA-P256 ocurren en el dominio seguro sin que la llave privada salga de él.
* Llevé a cabo un depurado profundo de firmware y hardware para corregir problemas de semáforos, DMA y pines, detectando y mitigando riesgos de corrupción de memoria antes de liberar builds a la manufacturera.
* Diseñé un sistema de codificación de 30 bits (Crockford Base32) que comprime 10 dimensiones de hardware en 6 caracteres OLED, entregando al equipo web el contrato de integración completo y su implementación de referencia en TypeScript.
* Corregí el truncamiento de JWT reconstruyendo los buffers de recepción HTTP e hice persistente el contador de telemetría en la memoria no volátil para garantizar trazabilidad.

**Resultados:**
* El firmware superó campañas de campo exhaustivas y fue estabilizado para avanzar exitosamente por las fases pre-EVT y EVT hacia la producción masiva.
* Se logró persistencia segura ante cortes de energía (power-fail safe), permitiendo operar sin cobertura al almacenar hasta 448 lotes de datos GPS en la memoria flash.
* Se consolidó una coordinación técnica impecable entre los equipos de backend, web, manufactura en Flex y hardware en China.

---

## 5. Luz.ia: Plataforma de Agentes IA para Bienestar
**Empresa:** Row Quintero Studio[cite: 1, 2]
**Rol:** Frontend UI Engineer
**Stack:** Next.js, Tailwind CSS, shadcn/ui, Supabase, Claude Haiku 4.5[cite: 2]
**Status:** En Desarrollo (Fase de Pre-validación)[cite: 1, 2]
**Impacto:** Diseñando desde cero la arquitectura UI/UX y el design system para un ecosistema de agentes de IA, priorizando una estética editorial y una experiencia de usuario sin fricción.

### La Autopsia del Proyecto

**Problema:**
* Los profesionales del bienestar en México (psicólogos, terapeutas) pierden pacientes e ingresos debido a la incapacidad de responder mensajes fuera de horario o gestionar altos volúmenes de consultas[cite: 2].
* La solución requería la orquestación de múltiples agentes de IA (para prospección, agendamiento y seguimiento)[cite: 2], pero el verdadero reto técnico y de diseño era presentar esta complejidad a usuarios no técnicos mediante una interfaz limpia y accesible.
* Se descartó el uso de CRMs de terceros (como Kommo o GHL) para evitar depender de plataformas externas, lo que exigió la creación de un dashboard propio para mantener el control total sobre la UX y el branding[cite: 2].

**Solución:**
* Lidero el desarrollo del Frontend de la plataforma utilizando Next.js, Tailwind CSS y shadcn/ui, definiendo un *design system* premium y "Pixel-Perfect" desde el día uno[cite: 2].
* Construí la interfaz para el sistema de auditoría automatizada, el cual conecta un formulario (Tally) con Claude Haiku 4.5 para generar y entregar reportes de diagnóstico HTML personalizados en menos de 2 minutos[cite: 2].
* Diseñé una arquitectura UI escalable donde el panel interno de operaciones y el dashboard del cliente comparten el 60-70% del código y los componentes, optimizando drásticamente los tiempos de desarrollo[cite: 2].

**Resultados (En progreso):**
* El proyecto se encuentra actualmente en la fase de pre-validación, con una hoja de ruta agresiva para lanzar el MVP funcional en un plazo de 5 semanas[cite: 2].
* Maquetación exitosa de un flujo de *onboarding wizard* que permite a los terapeutas conectar la API de WhatsApp Cloud, configurar Cal.com y activar sus agentes de IA de forma intuitiva[cite: 2].
* Establecimiento de un estándar de diseño que posiciona a la plataforma no solo como una herramienta de automatización, sino como un producto B2B de alto nivel[cite: 2].