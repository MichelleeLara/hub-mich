// Lee tokens de color del design system desde CSS para usarlos en <canvas>.
// Se cachean y solo se vuelven a leer cuando cambia el tema (class) o el acento
// (data-accent) en <html>: evita getComputedStyle en cada frame.
const cache = new Map<string, string>();
let observing = false;

export function tokenColor(name: string): string {
  if (!observing && typeof MutationObserver !== 'undefined') {
    observing = true;
    new MutationObserver(() => cache.clear()).observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-accent'] });
  }
  let value = cache.get(name);
  if (value === undefined) {
    value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    cache.set(name, value);
  }
  return value;
}
