import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CtaBand, DestinationCard } from '../components/Bits';
import { Icon, type IconName } from '../components/Icon';
import { Seo } from '../components/Seo';
import { WhatsAppCard } from '../components/WhatsAppCard';
import { destinations, faqs, partners } from '../data';
import { graph, organization, website } from '../jsonld';
import { PHONES } from '../site';

const services: { icon: IconName; chip: string; title: string; text: string }[] = [
  { icon: 'globe', chip: 'bg-navy', title: 'Study abroad admissions', text: 'We shortlist universities that fit your grades, goals and budget, then prepare and submit your applications.' },
  { icon: 'person', chip: 'bg-red', title: 'Career counselling', text: 'Every journey starts with a conversation about where you want your career to go — and which course gets you there.' },
  { icon: 'passport', chip: 'bg-navy', title: 'Student visa support', text: 'We check your documents, prepare you for interviews and guide your visa application step by step.' },
  { icon: 'plane', chip: 'bg-amber', title: 'Vacation tours', text: 'Planning a trip rather than a degree? We help with travel arrangements and visitor visas too.' },
];

const steps = [
  ['01', 'Counselling', 'We talk through your results, interests, budget and career goals.'],
  ['02', 'Choose & apply', 'Pick a country, course and university, then we prepare your application.'],
  ['03', 'Offer letter', 'We follow up with the university until your acceptance letter arrives.'],
  ['04', 'Visa & departure', 'Visa application, travel and pre-departure briefing — then you fly.'],
];

export function Home() {
  return (
    <>
      <Seo
        title="Finite Link Consult | Study Abroad Agency in Accra, Ghana"
        description="ICEF-accredited study abroad agency in Accra, Ghana. Admissions, career counselling and student visa support for Canada, the UK, Ireland, Dubai and more."
        path="/"
        jsonLd={[
          graph(organization, website),
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          },
        ]}
      />
      <Hero />

      <section id="services">
        <div className="container services">
          <div className="section-head">
            <div className="stack stack-12 mw-lg">
              <span className="eyebrow">What we do</span>
              <h2 className="h2">Everything you need to study abroad, under one roof.</h2>
            </div>
            <p className="lead mw-sm">One advisor, one plan — from choosing your course to collecting your visa.</p>
          </div>
          <div className="grid-auto">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <span className={`icon-chip ${s.chip}`}>
                  <Icon name={s.icon} size={26} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container process">
          <div className="band">
            <div className="band__head">
              <h2>Four steps from Accra to your new campus.</h2>
              <Link className="band__link" to="/contact">
                Book your first session <Icon name="arrowRight" size={18} strokeWidth={2.5} />
              </Link>
            </div>
            <ol className="steps">
              {steps.map(([n, t, d]) => (
                <li className="step" key={n}>
                  <span className="n">{n}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="destinations" className="section section--surface">
        <div className="container stack stack-48">
          <div className="stack stack-12 center">
            <span className="eyebrow">Destinations</span>
            <h2 className="h2">Where do you want to study?</h2>
            <p className="lead mw-md">Nine countries, dozens of partner universities. Choose a destination to see universities, requirements and living costs.</p>
          </div>
          <div className="dest-grid">
            {destinations.map((d) => (
              <DestinationCard key={d.slug} {...d} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split__media">
            <img src="/images/team-ukraine.jpg" alt="Finite Link students together at their university in Ukraine" loading="lazy" />
            <div className="badge-card">
              <strong>10+ years</strong>
              <span>placing Ghanaian students abroad</span>
            </div>
          </div>
          <div className="stack stack-20">
            <span className="eyebrow">Who we are</span>
            <h2 className="h2">Education is a fundamental right. We make it reachable.</h2>
            <p className="lead">
              Finite Link Consult Ltd. represents overseas universities in Ghana and recruits quality students from Ghana and across Africa. We work in the best interest of both our students and our partner universities — and we follow the British Council’s Guide to Good Practice for Education Agents in everything we do.
            </p>
            <ul className="checks">
              {['ICEF-accredited education agency', 'Follows the British Council’s code of good practice', 'Office in Kaneshie, Accra — walk in and meet us'].map((t) => (
                <li key={t}>
                  <Icon name="check" stroke="#C8261C" strokeWidth={2.5} />
                  {t}
                </li>
              ))}
            </ul>
            <Link className="btn btn--navy btn--start" to="/about">
              About Finite Link <Icon name="arrowRight" size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--surface" id="accreditation" aria-labelledby="accreditation-title">
        <div className="container accred">
          <img
            className="accred__badge"
            src="/images/icef-badge.png"
            alt="ICEF Accredited — Trusted Agency, ICEF agency status number 1678"
            width={650}
            height={762}
            loading="lazy"
          />
          <div className="stack stack-20">
            <span className="eyebrow">Accreditation</span>
            <h2 className="h2" id="accreditation-title">An ICEF-accredited agency you can verify.</h2>
            <p className="lead">
              Finite Link Consult is an ICEF-accredited education agency, agency #1678. You don’t have to take our word for it — scan the QR code on our badge to check our status directly with ICEF.
            </p>
            <ul className="checks">
              {['ICEF-accredited education agency — #1678', 'Follows the British Council’s Guide to Good Practice for Education Agents', 'Honest advice that puts students and their sponsors first'].map((t) => (
                <li key={t}>
                  <Icon name="check" stroke="#C8261C" strokeWidth={2.5} />
                  {t}
                </li>
              ))}
            </ul>
            <Link className="btn btn--red btn--start" to="/contact">
              Talk to an accredited advisor <Icon name="arrowRight" size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="container partners__inner">
          <span className="eyebrow eyebrow--muted">Some of our partner institutions</span>
          <div className="chips">
            {partners.map((p) => (
              <span className="chip" key={p.name}>
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container faq-layout">
          <Faq />
          <WhatsAppCard
            title="Have a question? Ask us on WhatsApp."
            text="Tell us where you’d like to study and an advisor will reply with next steps — universities, requirements and your application."
            message="Hello Finite Link Consult, I have a question about studying abroad."
            showCall
          />
        </div>
      </section>

      <CtaBand title="Ready to take the first step?" text="Visit our office in Kaneshie, call us, or send an enquiry — we’ll help you plan your next move.">
        <Link className="btn btn--white" to="/contact">
          Book a consultation
        </Link>
        <a className="btn btn--ghost" href="tel:+233307035055">
          Call {PHONES[0]}
        </a>
      </CtaBand>
    </>
  );
}

const SLIDE_MS = 8000;

interface Slide {
  banner: string;
  alt: string;
  badge: string;
  title: string;
  isH1?: boolean;
  lead: string;
  primary: { label: string; to: string };
  secondary: { label: string; to: string };
  stats: [string, string][];
}

const slides: Slide[] = [
  {
    banner: '/images/banner-slider-1.png',
    alt: 'Smiling graduates in caps and gowns holding their diplomas',
    badge: 'ICEF-accredited · Accra, Ghana',
    title: 'Your future, linked to the world’s best universities.',
    isH1: true,
    lead: 'Foreign education isn’t an expense — it’s an investment that pays back for a lifetime. We guide students from Ghana and across Africa from the first counselling session to the day they land on campus.',
    primary: { label: 'Start your application', to: '/contact' },
    secondary: { label: 'Explore destinations', to: '/destinations' },
    stats: [
      ['10+', 'years of experience'],
      ['500+', 'admissions secured'],
      ['9', 'study destinations'],
    ],
  },
  {
    banner: '/images/banner-slider-2.png',
    alt: 'ICEF Accredited, Trusted Agency badge, agency number 1678, in front of a university building',
    badge: 'ICEF Accredited · Agency #1678',
    title: 'An accredited agency you can verify.',
    lead: 'Finite Link Consult is an ICEF-accredited education agency. Scan the QR code on our badge to check our status directly with ICEF — and start your application knowing you’re in trusted hands.',
    primary: { label: 'See our accreditation', to: '/#accreditation' },
    secondary: { label: 'Book a consultation', to: '/contact' },
    stats: [
      ['#1678', 'ICEF agency number'],
      ['10+', 'years of experience'],
      ['9', 'study destinations'],
    ],
  },
];

function Hero() {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  // Auto-advance. Visitors who prefer reduced motion keep the first slide.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), SLIDE_MS);
    return () => clearInterval(t);
  }, [count]);

  return (
    <section className="hero" role="region" aria-roledescription="carousel" aria-label="Highlights">
      <div className="hero__slides">
        {slides.map((sl, i) => {
          const Title = sl.isH1 ? 'h1' : 'h2';
          return (
            <div
              key={sl.banner}
              className={`hero__slide${index === i ? ' is-active' : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              inert={index !== i}
            >
              <div className="hero__banner">
                <img src={sl.banner} alt={sl.alt} width={1822} height={863} fetchPriority={i === 0 ? 'high' : undefined} loading={i === 0 ? undefined : 'lazy'} />
              </div>
              <div className="container hero__inner">
                <div className="hero__copy">
                  <span className="hero__badge">
                    <Icon name="shield" size={14} strokeWidth={2.5} /> {sl.badge}
                  </span>
                  <Title className="hero__title">{sl.title}</Title>
                  <p className="hero__lead">{sl.lead}</p>
                  <div className="hero__actions">
                    <Link className="btn btn--red" to={sl.primary.to}>
                      {sl.primary.label} <Icon name="arrowRight" size={18} strokeWidth={2.5} />
                    </Link>
                    <Link className="btn btn--ghost" to={sl.secondary.to}>
                      {sl.secondary.label}
                    </Link>
                  </div>
                  <div className="hero__stats">
                    {sl.stats.map(([n, l]) => (
                      <div className="stat" key={l}>
                        <strong>{n}</strong>
                        <span>{l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq">
      <div className="stack stack-12">
        <span className="eyebrow">FAQs</span>
        <h2 className="h2">Questions students ask us.</h2>
      </div>
      <div className="faq__list">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div className="faq-item" key={f.q}>
              <h3>
                <button className="faq-q" type="button" aria-expanded={isOpen} aria-controls={`faq-a-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                  <span>{f.q}</span>
                  <span className="sign" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
              </h3>
              <p className="faq-a" id={`faq-a-${i}`} hidden={!isOpen}>
                {f.a}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
