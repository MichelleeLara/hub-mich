import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion, useMotionValue, useSpring } from 'framer-motion';
import { DotField, QuoteZone, StepPanel } from './QuoteMotion';
import { hourlyRate, quoteServices } from '../data/quoteServices';
import './ServiceQuote.css';
function QuoteIcon({ name, ...props }) {
  const paths = { design: 'M4 4h16v16H4z M4 10h16M10 10v10', web: 'M3 4h18v16H3z M3 9h18M7 6.5h.01M10 6.5h.01', app: 'M7 2h10v20H7zM10 18h4', automation: 'M3 3h6v6H3zM15 15h6v6h-6zM9 6h6v9M6 9v9h9', review: 'M7 3h10l4 4v14H3V3h4m0 7h10M7 14h10M7 18h6', arrow: 'M5 12h14m-6-6 6 6-6 6', back: 'M19 12H5m6-6-6 6 6 6', check: 'm5 12 4 4L19 6', mail: 'M3 6h18v12H3z M3 6l9 7 9-7', download: 'M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5', copy: 'M9 9h12v12H9z M15 9V3H3v12h6', edit: 'm15 4 5 5M4 20l5-1L21 7l-5-5L4 14z', info: 'M12 11v6M12 7h.01' };
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d={paths[name] || paths.arrow} /></svg>;
}
const unitLabel = (service, count) => count === 1 ? ({ pantallas: 'pantalla', páginas: 'página', funciones: 'función', flujos: 'flujo' }[service.unit] || service.unit) : service.unit;
const money = value => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(value);
export default function ServiceQuote() {
  const [step, setStep] = useState(0);
  const editor = useRef(null);
  const editorShell = useRef(null);
  useEffect(() => {
    const panel = editor.current, shell = editorShell.current;
    if (!panel || !shell) return;
    const sync = () => {
      shell.dataset.scrollTop = String(panel.scrollTop > 4);
      shell.dataset.scrollBottom = String(panel.scrollHeight - panel.clientHeight - panel.scrollTop > 4);
    };
    const resize = new ResizeObserver(sync);
    const observe = () => { resize.disconnect(); resize.observe(panel); [...panel.children].forEach(child => resize.observe(child)); sync(); };
    const changes = new MutationObserver(observe);
    changes.observe(panel, { childList: true, subtree: true });
    panel.addEventListener('scroll', sync, { passive: true });
    observe();
    return () => { resize.disconnect(); changes.disconnect(); panel.removeEventListener('scroll', sync); };
  }, []);
  const paperStage = useRef(null);
  const paperContent = useRef(null);
  const [paperScale, setPaperScale] = useState(1);
  useEffect(() => {
    const stage = paperStage.current, content = paperContent.current;
    if (!stage || !content) return;
    const fit = () => setPaperScale(Math.min(1, stage.clientHeight / Math.max(1, content.offsetHeight)));
    const observer = new ResizeObserver(fit);
    observer.observe(stage); observer.observe(content);
    fit();
    return () => observer.disconnect();
  }, []);
  const reduced = useReducedMotion();
  const steps = ['Tu proyecto', 'Servicios y alcance', 'Contexto'];
  const goTo = next => { setStep(next); editor.current?.scrollTo({ top: 0, behavior: 'instant' }); if (window.matchMedia('(max-width: 760px)').matches) editor.current?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'start' }); };
  const [selected, setSelected] = useState({});
  const [name, setName] = useState('');
  const [project, setProject] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState('');
  const tiltX = useMotionValue(0), tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 130, damping: 22 });
  const rotateY = useSpring(tiltY, { stiffness: 130, damping: 22 });
  const resetTilt = () => { tiltX.set(0); tiltY.set(0); };
  useEffect(() => { if (reduced) resetTilt(); }, [reduced]);
  const followPointer = event => {
    if (reduced || event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    tiltX.set(-((event.clientY - bounds.top) / bounds.height - .5) * 3);
    tiltY.set(((event.clientX - bounds.left) / bounds.width - .5) * 4);
  };
  const rows = quoteServices.filter(s => selected[s.id]);
  const hours = rows.reduce((sum, s) => sum + selected[s.id] * s.hours, 0);
  const total = hours * hourlyRate;
  const projectComplete = Boolean(name.trim() && project.trim());
  const ready = projectComplete && rows.length > 0;
  const contextComplete = Boolean(notes.trim());
  const completed = [projectComplete, rows.length > 0, contextComplete];
  const partial = [Boolean(name.trim() || project.trim()), false, false];
  const stepLabels = ['Proyecto', 'Servicios', 'Contexto'];
  const stateFor = index => {
    if (completed[index]) return 'Completado';
    if (step === index || partial[index]) return 'En curso';
    return index === 2 ? 'Opcional' : 'Pendiente';
  };
  const summary = `Hola Mich, quiero platicar sobre este proyecto.\n\nNombre o empresa: ${name || 'Por definir'}\nProyecto: ${project || 'Por definir'}\n\n${rows.map(s => `${s.title}: ${selected[s.id]} ${unitLabel(s, selected[s.id])} · ${money(selected[s.id] * s.hours * hourlyRate)} MXN`).join('\n')}\n\nEstimación orientativa: ${money(total)} MXN\n${hours} horas de referencia a ${money(hourlyRate)} MXN/h.\nSujeta a revisión de alcance. Impuestos y servicios externos no incluidos.\n\nContexto: ${notes || 'Por definir'}`;
  const toggle = service => setSelected(prev => { const next = { ...prev }; if (next[service.id]) delete next[service.id]; else next[service.id] = service.initial; return next; });
  async function copy() { try { await navigator.clipboard.writeText(summary); setCopied('Resumen copiado.'); } catch { setCopied('No se pudo copiar. Puedes guardar el documento como PDF.'); } }
  return <div className="quote-workspace" data-quote-step={step}>
    <DotField width={800} height={1000} background />
    <div className="quote-editor-column">
      <nav className="quote-step-nav" aria-label="Pasos de la cotización">{steps.map((title, index) => <button key={title} type="button" data-complete={completed[index]} data-pending={!completed[index] && step !== index} onClick={() => goTo(index)} title={`${title} · ${stateFor(index)}`} aria-label={`${index === 3 ? title : `${index + 1}. ${title}`}: ${stateFor(index)}`} aria-current={step === index ? 'step' : undefined}><span className="quote-step-track" aria-hidden="true" /><span className="quote-step-meta"><strong>{stepLabels[index]}</strong><small>{completed[index] ? <QuoteIcon name="check" /> : stateFor(index)}</small></span>{step === index && <span className="quote-current-dot" aria-hidden="true" />}</button>)}</nav>
    <div ref={editorShell} className="quote-editor-shell">
    <form ref={editor} className="quote-editor" onSubmit={e => e.preventDefault()}>


      <AnimatePresence mode="wait" initial={false}><StepPanel key={step} step={step}>
      {step === 0 && <>
      <div className="quote-step"><span>PASO 01 / 03</span><h2>¿Qué tienes en mente?</h2><p>Un nombre para tu proyecto y para quien lo hace posible.</p></div>
      <label className="quote-field">Tu nombre o empresa<input maxLength={100} value={name} onChange={e => setName(e.target.value)} placeholder="Ej. Michelle o Estudio Norte" autoComplete="organization" /></label>
      <label className="quote-field">Nombre del proyecto<input maxLength={120} value={project} onChange={e => setProject(e.target.value)} placeholder="Ej. Sitio web para mi negocio" /></label>
      </>}
      {step === 1 && <>
      <div className="quote-step"><span>02 / SERVICIOS</span><h2>¿Qué vamos a construir?</h2><p>Combina servicios y ajusta el alcance de tu proyecto.</p></div>
      <fieldset><legend>02 / SERVICIOS Y ALCANCE</legend><p className="quote-help">Puedes combinar varios servicios.</p><div className="quote-options">{quoteServices.map(service => <div className={`quote-option ${selected[service.id] ? 'is-selected' : ''}`} key={service.id}>
        <label className="quote-choice"><input type="checkbox" checked={!!selected[service.id]} onChange={() => toggle(service)} /><span className="quote-choice-content"><span className="quote-service-icon"><QuoteIcon name={service.id} /></span><strong>{service.title}</strong><small>{service.description}</small><span className="quote-service-state">{selected[service.id] ? <><QuoteIcon name="check" /> Seleccionado</> : 'Seleccionar servicio'}</span></span></label>
        {!!selected[service.id] && <label className="quote-quantity">Número de {service.unit}<select value={selected[service.id]} onChange={e => setSelected(prev => ({ ...prev, [service.id]: Number(e.target.value) }))}>{Array.from({ length: service.max }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}</select></label>}
      </div>)}</div></fieldset>
      </>}
      {step === 2 && <>
      <div className="quote-step"><span>03 / CONTEXTO</span><h2>Cuéntame un poco más.</h2><p>Los detalles hacen la diferencia al definir una propuesta.</p></div>
      <label className="quote-field quote-context">¿Qué te gustaría resolver? <span className="quote-optional">Opcional</span><textarea maxLength={2000} rows={4} value={notes} onChange={e => setNotes(e.target.value)} placeholder="¿Qué quieres resolver? ¿Tienes una fecha o alguna referencia?" /></label>
      </>}
      {step === 2 && <div className="quote-finish">
        {!ready && <div className="quote-review-missing" aria-label="Datos pendientes">{!projectComplete && <button type="button" onClick={() => goTo(0)}><span className="quote-pending-dot" />{!name.trim() && !project.trim() ? 'Añade tu nombre y el proyecto' : !name.trim() ? 'Añade tu nombre o empresa' : 'Dale un nombre al proyecto'}<QuoteIcon name="arrow" /></button>}{!rows.length && <button type="button" onClick={() => goTo(1)}><span className="quote-pending-dot" />Elige al menos un servicio<QuoteIcon name="arrow" /></button>}</div>}
        {ready && <a className="quote-primary quote-send" href={`mailto:mich.ia@hotmail.com?subject=${encodeURIComponent(`Hablemos de ${project}`)}&body=${encodeURIComponent(summary)}`}><span className="quote-send-icon"><QuoteIcon name="mail" /></span><span>Conversar sobre mi proyecto<small>Abrir borrador de correo</small></span><QuoteIcon name="arrow" /></a>}
        <div className="quote-mobile-tools quote-export-buttons"><button type="button" disabled={!rows.length} onClick={() => window.print()}><QuoteIcon name="download" /><span><strong>Guardar cotización</strong><small>Imprimir o guardar PDF</small></span></button><button type="button" disabled={!rows.length} onClick={copy}><QuoteIcon name="copy" /><span><strong>Copiar resumen</strong><small>Para compartir por mensaje</small></span></button><p role="status">{copied}</p></div>
        <p className="quote-review-footnote">Estimación sujeta a revisión de alcance. Sin impuestos ni servicios externos. El correo se envía desde tu aplicación, cuando tú lo decidas.</p>
      </div>}
      <div className="quote-step-controls">{step > 0 && <button type="button" className="quote-back" onClick={() => goTo(step - 1)}><QuoteIcon name="back" /><span>Anterior</span></button>}{step < 2 && <button type="button" className="quote-next" onClick={() => goTo(step + 1)}><span>{step === 0 ? 'Elegir servicios' : 'Añadir contexto'}</span><QuoteIcon name="arrow" /></button>}</div>
      </StepPanel></AnimatePresence>
      <p className="quote-help">Tus datos se quedan en esta página. El botón de correo prepara un borrador en tu aplicación.</p>
    </form>
    </div>
    </div>
    <section className="quote-preview" aria-label="Vista previa de cotización">
      <div className="quote-preview-label"><span>VISTA PREVIA</span><span>Hecha a tu medida ↙</span></div>
      <div ref={paperStage} className="quote-paper-perspective"><div className="quote-paper-fit" style={{ transform: `scale(${paperScale})` }}><motion.div ref={paperContent} className="quote-paper-tilt" style={{ rotateX, rotateY, transformPerspective: 1200 }} onPointerMove={followPointer} onPointerLeave={resetTilt} onPointerCancel={resetTilt}><motion.article className="quote-paper" initial={{ opacity: 0, y: reduced ? 0 : 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: [.16, 1, .3, 1] }}>
        <header className="quote-paper-head"><a href="/" aria-label="Ir al portafolio de Mich" className="quote-brand">./mich</a><span className="quote-draft">Estimación</span></header>
        <div className="quote-parties"><div><span>DE</span><strong>Mich</strong><p>Product Engineer<br />mich.ia@hotmail.com</p></div><QuoteZone step={0} active={step === 0} title="Tu proyecto" onSelect={goTo}><span>PARA</span>{name || project ? <><strong>{name || 'Tu nombre o empresa'}</strong><p>{project || 'Tu próximo proyecto'}</p></> : <div className="quote-party-placeholder"><DotField width={40} height={40} circle /><DotField width={160} height={20} /><DotField width={130} height={16} /><DotField width={90} height={16} /></div>}</QuoteZone></div>
        <QuoteZone step={1} active={step === 1} title="Servicios y alcance" onSelect={goTo}>
        <div className="quote-line-head"><span>SERVICIO / ALCANCE</span><span>ESTIMADO</span></div>
        <motion.div layout className="quote-lines"><AnimatePresence initial={false}>{rows.length ? rows.map(s => <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, height: 0 }} transition={{ duration: reduced ? 0 : .3 }} className="quote-line" key={s.id}><div><strong>{s.title}</strong><small>{selected[s.id]} {unitLabel(s, selected[s.id])} · {selected[s.id] * s.hours} h de referencia</small></div><span>{money(selected[s.id] * s.hours * hourlyRate)}</span></motion.div>) : <motion.div key="empty" className="quote-empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><DotField width={150} height={16} /><span className="sr-only">Selecciona un servicio para comenzar.</span></motion.div>}</AnimatePresence></motion.div>
        <div className="quote-total" role="status" aria-live="polite" aria-atomic="true"><span>Inversión orientativa<strong>{money(total)} <small>MXN</small></strong></span><p>{hours} h estimadas<br />{money(hourlyRate)} MXN / hora</p></div>
        </QuoteZone>
        <QuoteZone step={2} active={step === 2} title="Contexto" onSelect={goTo}><div className="quote-notes"><span>SOBRE EL PROYECTO</span>{notes ? <p>{notes}</p> : <div className="quote-note-placeholder"><DotField width={220} height={16} /><DotField width={170} height={16} /></div>}</div></QuoteZone>
        <footer className="quote-terms"><span>EL SIGUIENTE PASO ES CONVERSAR.</span><p>Esta es una referencia inicial, no una propuesta final. El alcance, los tiempos y el precio se confirman al revisar tu proyecto. No incluye impuestos, dominio, alojamiento ni licencias.</p><div><strong>De la idea a algo que funciona.</strong><span>itsmich.com.mx</span></div></footer>
      </motion.article></motion.div></div></div>
      <div className="quote-actions" aria-label="Herramientas de la cotización"><div className="quote-export-heading"><span>Tu cotización, a la mano</span><small>GUARDAR / COMPARTIR</small></div><div className="quote-export-buttons"><button type="button" disabled={!rows.length} onClick={() => window.print()}><span className="quote-tool-icon"><QuoteIcon name="download" /></span><span><strong>Guardar cotización</strong><small>Imprimir o guardar PDF</small></span><QuoteIcon name="arrow" /></button><button type="button" disabled={!rows.length} onClick={copy}><span className="quote-tool-icon"><QuoteIcon name={copied === 'Resumen copiado.' ? 'check' : 'copy'} /></span><span><strong>{copied === 'Resumen copiado.' ? 'Resumen copiado' : 'Copiar resumen'}</strong><small>Para compartir por mensaje</small></span></button></div><p role="status">{copied || (rows.length ? 'La propuesta final la definimos juntos.' : 'Selecciona un servicio para guardar o compartir.')}</p></div>
    </section>
  </div>;
}
