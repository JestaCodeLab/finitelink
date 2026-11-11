import { Breadcrumb } from '../components/Bits';
import { Icon, WhatsAppIcon } from '../components/Icon';
import { Seo } from '../components/Seo';
import { breadcrumbs, graph, organization } from '../jsonld';
import { ADDRESS, DIRECTIONS_URL, ENQUIRY_EMAIL, MAPS_URL, MAP_EMBED_SRC, PHONES, SITE_URL, WHATSAPP, tel, whatsappLink } from '../site';


export function Contact() {
  return (
    <>
      <Seo
        title="Contact Us — Kaneshie, Accra"
        description="Contact Finite Link Consult in Kaneshie, Accra. Ask about a course, a country or your student visa — call, email, WhatsApp or visit our office."
        path="/contact"
        jsonLd={[
          graph(organization, breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]), {
            '@type': 'ContactPage',
            name: 'Contact Finite Link Consult',
            url: `${SITE_URL}/contact`,
            about: { '@id': `${SITE_URL}/#organization` },
          }),
        ]}
      />
      <section className="page-hero contact-hero">
        <div className="container page-hero__inner">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
          <h1>How can we help you?</h1>
          <p>Ask about a course, a country or your visa. Call us, send an email, message us on WhatsApp, or visit our office in Kaneshie.</p>
        </div>
      </section>

      <section className="section--surface">
        <div className="container contact-cards">
          <article className="contact-card">
            <span className="icon-chip tint-red">
              <Icon name="phone" size={26} />
            </span>
            <h2>Call us</h2>
            <p className="contact-card__text">Speak to an advisor about your course, destination or visa.</p>
            <ul className="contact-card__list">
              {PHONES.map((p) => (
                <li key={p}>
                  <a href={tel(p)}>{p}</a>
                </li>
              ))}
            </ul>
            <div className="contact-card__actions">
              <a className="btn btn--red" href={tel(PHONES[0])}>
                Call now
              </a>
              <a className="btn btn--whatsapp" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label={`Chat on WhatsApp, ${WHATSAPP}`}>
                <WhatsAppIcon size={20} /> WhatsApp
              </a>
            </div>
          </article>

          <article className="contact-card">
            <span className="icon-chip tint-navy">
              <Icon name="mail" size={26} />
            </span>
            <h2>Email us</h2>
            <p className="contact-card__text">Send us your questions and your academic details — we’ll get back to you as soon as we can.</p>
            <ul className="contact-card__list">
              <li>
                <a href={`mailto:${ENQUIRY_EMAIL}`}>{ENQUIRY_EMAIL}</a>
              </li>
            </ul>
            <div className="contact-card__actions">
              <a className="btn btn--navy" href={`mailto:${ENQUIRY_EMAIL}`}>
                Send an email
              </a>
            </div>
          </article>

          <article className="contact-card">
            <span className="icon-chip tint-amber">
              <Icon name="pin" size={26} />
            </span>
            <h2>Visit our office</h2>
            <p className="contact-card__text">Walk in and meet the team. We’re in Kaneshie, Accra.</p>
            <address className="contact-card__list contact-card__address">{ADDRESS}</address>
            <div className="contact-card__actions">
              <a className="btn btn--navy" href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                Get directions
              </a>
            </div>
          </article>
        </div>

        <div className="container map-wrap">
          <div className="map">
            <iframe
              title="Google Map showing the Finite Link Consult office in Kaneshie, Accra"
              src={MAP_EMBED_SRC}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="map-link">
            <a className="band__link" target="_blank" rel="noopener noreferrer" href={MAPS_URL}>
              Open in Google Maps
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
