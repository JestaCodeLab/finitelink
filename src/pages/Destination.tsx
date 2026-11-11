import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumb } from '../components/Bits';
import { Icon, WhatsAppIcon } from '../components/Icon';
import { Seo } from '../components/Seo';
import { applySteps, destinations, requiredDocuments, type Destination as Dest } from '../data';
import { breadcrumbs, graph } from '../jsonld';
import { PHONES, SITE_URL, WHATSAPP, tel, whatsappLink } from '../site';
import { NotFound } from './NotFound';

export function Destination() {
  const { slug } = useParams();
  const dest = destinations.find((d) => d.slug === slug);
  return dest ? <DestinationPage dest={dest} /> : <NotFound />;
}

function DestinationPage({ dest }: { dest: Dest }) {
  const path = `/destinations/${dest.slug}`;
  const sections = [
    dest.why && { id: 'why', label: `Why ${dest.name}` },
    { id: 'universities', label: 'Universities' },
    { id: 'documents', label: 'Required documents' },
    dest.costs && { id: 'costs', label: 'Living costs' },
    { id: 'apply', label: 'How to apply' },
  ].filter(Boolean) as { id: string; label: string }[];

  return (
    <>
      <Seo
        title={`Study in ${dest.name} from Ghana`}
        description={`${dest.line}. Partner universities, required documents and how to apply from Ghana with Finite Link Consult.`}
        path={path}
        jsonLd={[
          graph(breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }, { name: dest.name, path }]), {
            '@type': 'WebPage',
            name: `Study in ${dest.name}`,
            url: `${SITE_URL}${path}`,
            about: { '@type': 'Country', name: dest.name.replace(/ \(UAE\)/, '') },
            isPartOf: { '@id': `${SITE_URL}/#website` },
          }),
        ]}
      />

      <section className="dest-hero">
        <img src={dest.image} alt="" />
        <div className="container dest-hero__inner">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Destinations', to: '/destinations' }, { label: dest.name }]} />
          <h1>Study in {dest.name}</h1>
          <p>{dest.line}.</p>
          <div className="facts">
            {dest.facts.map((f) => (
              <span className="fact" key={f}>
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      <SectionTabs sections={sections} />

      <div className="container dest-body">
        <div className="dest-main">
          {dest.why && (
            <div id="why" className="stack stack-20">
              <span className="eyebrow">Why {dest.name}</span>
              <h2 className="h2 h2--md">{dest.why.heading}</h2>
              <p className="lead">{dest.why.body}</p>
              <div className="grid-auto grid-auto--sm">
                {dest.why.reasons.map((r) => (
                  <div className="reason" key={r.title}>
                    <Icon name={r.icon} size={28} stroke="#c8261c" />
                    <strong>{r.title}</strong>
                    <span>{r.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div id="universities" className="stack stack-20">
            <span className="eyebrow">Partner universities</span>
            <h2 className="h2 h2--md">Where our students study in {dest.name}</h2>
            {dest.universities.length ? (
              <div className="stack stack-16">
                {dest.universities.map((u) => (
                  <div className="uni" key={u.name}>
                    <span className="uni__abbr">{u.abbr}</span>
                    <div className="uni__body">
                      <div className="uni__title">
                        <strong>{u.name}</strong>
                        <span>{u.place}</span>
                      </div>
                      {u.text && <p>{u.text}</p>}
                    </div>
                    <Link className="uni__apply" to="/contact">
                      Apply <Icon name="arrowRight" size={16} strokeWidth={2.5} />
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="lead">
                Our {dest.name} partner list is growing. <Link to="/contact">Ask an advisor</Link> which universities match your course.
              </p>
            )}
          </div>

          <div id="documents" className="stack stack-20">
            <span className="eyebrow">Required documents</span>
            <h2 className="h2 h2--md">What you’ll need to apply</h2>
            <p className="lead">Requirements vary slightly by university — we’ll give you the exact checklist for your course.</p>
            <ul className="grid-auto grid-auto--docs">
              {requiredDocuments.map((d) => (
                <li className="doc" key={d}>
                  <span className="tick">
                    <Icon name="check" size={16} strokeWidth={3} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {dest.costs && (
            <div id="costs" className="stack stack-20">
              <span className="eyebrow">Living costs</span>
              <h2 className="h2 h2--md">How much does it cost to live in {dest.name}?</h2>
              <p className="lead">{dest.costs.body}</p>
              {dest.costs.figures && (
                <div className="grid-auto grid-auto--sm">
                  {dest.costs.figures.map((c, i) => (
                    <div className={`cost${i === 0 ? ' cost--dark' : ''}`} key={c.label}>
                      <small>{c.label}</small>
                      <strong>{c.value}</strong>
                      <span>{c.note}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div id="apply" className="stack stack-20">
            <span className="eyebrow">How to apply</span>
            <h2 className="h2 h2--md">Your path to a {dest.name} campus</h2>
            <ol className="timeline">
              {applySteps.map((s, i) => (
                <li key={s.title}>
                  <div className="rail">
                    <span className="num">{i + 1}</span>
                    {i < applySteps.length - 1 && <span className="line" />}
                  </div>
                  <div className="body">
                    <strong>{s.title}</strong>
                    <span>{s.text}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <aside className="dest-side">
          <WhatsAppCard country={dest.name} />
          <div className="side-box side-call">
            <span className="icon-chip icon-chip--sm tint-red">
              <Icon name="phone" />
            </span>
            <div>
              <small>Prefer to talk now?</small>
              <a href={tel(PHONES[0])}>{PHONES[0]}</a>
            </div>
          </div>
          <div className="side-box side-list">
            <strong>Other destinations</strong>
            {destinations
              .filter((d) => d.slug !== dest.slug)
              .map((d) => (
                <Link key={d.slug} to={`/destinations/${d.slug}`}>
                  {d.name}
                  <Icon name="chevronRight" size={16} stroke="#C8261C" strokeWidth={2.5} />
                </Link>
              ))}
          </div>
        </aside>
      </div>
    </>
  );
}

/** Sticky "on this page" tabs that highlight the section currently in view. */
function SectionTabs({ sections }: { sections: { id: string; label: string }[] }) {
  const ids = sections.map((s) => s.id);
  const key = ids.join();
  const [active, setActive] = useState(ids[0]);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) current = id;
      }
      setActive(bottom ? ids[ids.length - 1] : current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  // On phones the tab row scrolls sideways — keep the active tab in view.
  useEffect(() => {
    const nav = navRef.current;
    const tab = nav?.querySelector<HTMLElement>('[aria-current="true"]');
    if (nav && tab && nav.scrollWidth > nav.clientWidth) {
      nav.scrollTo({ left: tab.offsetLeft - (nav.clientWidth - tab.clientWidth) / 2, behavior: 'smooth' });
    }
  }, [active]);

  return (
    <div className="subnav">
      <nav className="container subnav__inner" aria-label="On this page" ref={navRef}>
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'is-active' : undefined} aria-current={active === s.id ? 'true' : undefined}>
            {s.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

function WhatsAppCard({ country }: { country: string }) {
  return (
    <div className="wa-card" data-hide-wa>
      <span className="icon-chip wa-card__chip">
        <WhatsAppIcon size={28} />
      </span>
      <h3>Interested in {country}?</h3>
      <p>Message an advisor on WhatsApp and we’ll help you with universities, requirements and your application.</p>
      <a
        className="btn btn--whatsapp btn--block"
        href={whatsappLink(`Hello Finite Link Consult, I’m interested in studying in ${country}. Can you help me?`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with an advisor about studying in ${country} on WhatsApp, ${WHATSAPP}`}
      >
        <WhatsAppIcon size={20} /> Chat on WhatsApp
      </a>
    </div>
  );
}
