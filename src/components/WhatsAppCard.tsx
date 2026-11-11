import { PHONES, WHATSAPP, tel, whatsappLink } from '../site';
import { WhatsAppIcon } from './Icon';

interface Props {
  title: string;
  text: string;
  /** Pre-filled first message in the WhatsApp chat. */
  message: string;
  /** Optional: also offer a phone number under the button. */
  showCall?: boolean;
}

/**
 * Replaces every enquiry form on the site: one tap opens a WhatsApp chat with the advisor.
 * `data-hide-wa` hides the floating WhatsApp button while this card is on screen.
 */
export function WhatsAppCard({ title, text, message, showCall = false }: Props) {
  return (
    <div className="wa-card" data-hide-wa>
      <span className="icon-chip wa-card__chip">
        <WhatsAppIcon size={28} />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
      <a
        className="btn btn--whatsapp btn--block"
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} Chat on WhatsApp, ${WHATSAPP}`}
      >
        <WhatsAppIcon size={20} /> Chat on WhatsApp
      </a>
      {showCall && (
        <p className="wa-card__call">
          Prefer to call? <a href={tel(PHONES[0])}>{PHONES[0]}</a>
        </p>
      )}
    </div>
  );
}
