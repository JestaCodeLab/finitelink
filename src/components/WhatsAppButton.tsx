import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { WHATSAPP, whatsappLink } from '../site';
import { WhatsAppIcon } from './Icon';

/**
 * Floating "chat on WhatsApp" button, shown on every page.
 * It hides itself while any element marked `data-hide-wa` (e.g. an on-page WhatsApp card)
 * is in view, so there are never two WhatsApp buttons on screen at once.
 */
export function WhatsAppButton() {
  const { pathname } = useLocation();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = [...document.querySelectorAll('[data-hide-wa]')];
    setHidden(false);
    if (!targets.length || !('IntersectionObserver' in window)) return;

    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target));
      setHidden(visible.size > 0);
    });
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <a
      className={`wa-float${hidden ? ' is-hidden' : ''}`}
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp, ${WHATSAPP}`}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      <WhatsAppIcon size={30} />
      <span className="wa-float__label">Chat with us</span>
    </a>
  );
}
