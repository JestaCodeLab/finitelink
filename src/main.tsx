import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './styles.css';

export const createRoot = ViteReactSSG({ routes });

/**
 * Page loader (markup lives in index.html). Shown on the first load of the site, then fades out
 * once the page has fully loaded — never for in-app navigation. A minimum display time avoids a
 * flash on fast connections, and a hard cap means a slow image can't keep it up forever.
 */
if (typeof window !== 'undefined') {
  const MIN_MS = 600;
  const MAX_MS = 5000;
  const started = performance.now();

  const hide = () => {
    const el = document.getElementById('page-loader');
    if (!el) return;
    el.classList.add('is-done');
    // Remove from the DOM once the fade finishes (timeout covers reduced-motion / missed events).
    window.setTimeout(() => el.remove(), 700);
  };
  const finish = () => window.setTimeout(hide, Math.max(0, MIN_MS - (performance.now() - started)));

  if (document.readyState === 'complete') finish();
  else window.addEventListener('load', finish, { once: true });
  window.setTimeout(hide, MAX_MS);
}
