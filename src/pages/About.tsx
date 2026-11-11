import { Link } from 'react-router-dom';
import { CtaBand, PageHero } from '../components/Bits';
import { Icon } from '../components/Icon';
import { Seo } from '../components/Seo';
import { partners } from '../data';
import { breadcrumbs, graph, organization } from '../jsonld';
import { ADDRESS, SITE_URL } from '../site';

const values = [
  ['Excellence', 'High standards on every application we touch.'],
  ['Dedication', 'We stay with you from counselling to campus.'],
  ['Integrity', 'Honest advice that puts students and sponsors first.'],
  ['Professionalism', 'Guided by the British Council’s code of practice.'],
];

export function About() {
  return (
    <>
      <Seo
        title="About Finite Link Consult, an ICEF-Accredited Agency"
        description="Meet Finite Link Consult: 10+ years placing students from Ghana and across Africa in universities abroad. ICEF-accredited, British Council code."
        path="/about"
        jsonLd={[
          graph(organization, breadcrumbs([{ name: 'Home', path: '/' }, { name: 'About us', path: '/about' }]), {
            '@type': 'AboutPage',
            '@id': `${SITE_URL}/about#page`,
            url: `${SITE_URL}/about`,
            name: 'About Finite Link Consult',
            about: { '@id': `${SITE_URL}/#organization` },
          }),
        ]}
      />
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About us' }]}
        title="We link ambitious African students to quality education worldwide."
        lead="For more than ten years, Finite Link Consult has helped students from Ghana and across Africa study at respected universities abroad."
      />

      <section className="section">
        <div className="container split">
          <div className="split__media">
            <img src="/images/team-ukraine.jpg" alt="Finite Link students together at their university in Ukraine" />
          </div>
          <div className="stack stack-20">
            <span className="eyebrow">Our story</span>
            <h2 className="h2 h2--md">Education is a fundamental right — and everyone deserves access to it.</h2>
            <p className="lead">
              Finite Link Consult Ltd. is an education agency with global recognition. Our main work is recruiting quality students from Ghana and other African countries to study abroad. Every day, we create opportunities for people with a genuine ambition and honest intention to further their education overseas.
            </p>
            <p className="lead">
              We work in the best interest of both our students and our partner universities and colleges. We are professional and reliable, and we follow the British Council’s Guide to Good Practice for Education Agents in our conduct and principles.
            </p>
            <div className="pill-row">
              <span className="pill">
                <Icon name="shieldPlain" size={16} stroke="#C8261C" strokeWidth={2.5} />
                ICEF-accredited
              </span>
              <span className="pill">
                <Icon name="check" size={16} stroke="#C8261C" strokeWidth={2.5} />
                British Council good practice
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container about-stats">
          <div className="stats-strip">
            {[
              ['10+', 'years of experience'],
              ['500+', 'admissions secured'],
              ['500+', 'satisfied clients'],
              ['ICEF', 'accredited agency'],
            ].map(([n, l]) => (
              <div key={l}>
                <strong>{n}</strong>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container stack stack-40">
          <div className="grid-auto grid-auto--lg">
            <div className="mv-card mv-card--dark">
              <span className="icon-chip bg-red">
                <Icon name="target" size={26} stroke="#fff" />
              </span>
              <h2>Our mission</h2>
              <p>
                To place education-minded Ghanaians and other Africans in quality colleges and universities abroad — and to set the standard for others in our industry. We strive for excellence, dedication and competent, professional support for students and institutions alike.
              </p>
            </div>
            <div className="mv-card mv-card--light">
              <span className="icon-chip bg-navy">
                <Icon name="eye" size={26} stroke="#fff" />
              </span>
              <h2>Our vision</h2>
              <p>
                To successfully place students of every background in top schools, always in the best interest of the students and their sponsors — while maintaining high standards of professionalism and quality in everything we do.
              </p>
            </div>
          </div>
          <div className="grid-auto grid-auto--sm">
            {values.map(([t, d]) => (
              <div className="value" key={t}>
                <strong>{t}</strong>
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack stack-32 center">
          <div className="stack stack-12 center">
            <span className="eyebrow">Partner institutions</span>
            <h2 className="h2 h2--sm">Universities we work with</h2>
          </div>
          <div className="partner-grid">
            {partners.map((p) => (
              <div className="partner-card partner-card--bordered" key={p.name}>
                <strong>{p.name}</strong>
                <span>{p.country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Come and meet us in Kaneshie." text={ADDRESS}>
        <Link className="btn btn--white" to="/contact">
          Book a consultation
        </Link>
      </CtaBand>
    </>
  );
}
