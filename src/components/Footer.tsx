import { Link } from 'react-router-dom';
import { destinations } from '../data';
import { ADDRESS, ENQUIRY_EMAIL, FACEBOOK_URL, INSTAGRAM_URL, PHONES, tel } from '../site';
import { Icon } from './Icon';

const featured = ['canada', 'united-kingdom', 'dubai', 'ukraine'];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/images/logo.png" alt="" width={52} height={52} />
            <span>Finite Link Consult</span>
          </div>
          <p>An ICEF-accredited education agency recruiting quality students from Ghana and across Africa for universities abroad.</p>
          <div className="footer__social">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Finite Link Consult on Facebook">
              <Icon name="facebook" size={20} />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Finite Link Consult on Instagram">
              <Icon name="instagram" size={20} />
            </a>
          </div>
        </div>
        <div className="footer__col">
          <span className="footer__title">Company</span>
          <Link to="/about">About us</Link>
          <Link to="/#services">Services</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer__col">
          <span className="footer__title">Destinations</span>
          {destinations
            .filter((d) => featured.includes(d.slug))
            .map((d) => (
              <Link key={d.slug} to={`/destinations/${d.slug}`}>
                {d.name}
              </Link>
            ))}
          <Link to="/destinations">All destinations</Link>
        </div>
        <div className="footer__col footer__col--wide">
          <span className="footer__title">Visit or call</span>
          <span>{ADDRESS}</span>
          {[PHONES[0], PHONES[2], PHONES[3]].map((p) => (
            <a key={p} href={tel(p)}>
              {p}
            </a>
          ))}
          <a href={`mailto:${ENQUIRY_EMAIL}`}>{ENQUIRY_EMAIL}</a>
        </div>
      </div>
      <div className="footer__legal">
        <div className="container footer__legal-inner">
          <span>© 2026 Finite Link Consult Limited. All rights reserved.</span>
          <span>Follows the British Council Guide to Good Practice for Education Agents</span>
        </div>
      </div>
    </footer>
  );
}
