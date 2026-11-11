import { Link } from 'react-router-dom';
import { Icon, type IconName } from '../components/Icon';
import { Seo } from '../components/Seo';
import { destinations } from '../data';

const links: { to: string; icon: IconName; title: string; text: string }[] = [
  { to: '/', icon: 'home', title: 'Home', text: 'Start again from the beginning.' },
  { to: '/destinations', icon: 'globe', title: 'Destinations', text: 'Nine countries, dozens of universities.' },
  { to: '/insights', icon: 'cap', title: 'Insights', text: 'Study abroad advice and guides.' },
  { to: '/contact', icon: 'phone', title: 'Contact us', text: 'Talk to an advisor — we’re here to help.' },
];

export function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="This page could not be found." path="/404" noindex />

      <section className="nf">
        <div className="container nf__inner">
          <p className="nf__code" role="img" aria-label="Error 404">
            <span aria-hidden="true">4</span>
            <img className="nf__logo" src="/images/logo.png" alt="" width={200} height={200} aria-hidden="true" />
            <span aria-hidden="true">4</span>
          </p>
          <span className="nf__eyebrow">Error 404</span>
          <h1 className="nf__title">We couldn’t find that page.</h1>
          <p className="nf__lead">It may have moved, or the link might be mistyped. Let’s get you back on the right path.</p>
          <div className="btn-row nf__actions">
            <Link className="btn btn--red" to="/">
              Back to home <Icon name="arrowRight" size={18} strokeWidth={2.5} />
            </Link>
            <Link className="btn btn--ghost" to="/destinations">
              Explore destinations
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container stack stack-32">
          <div className="stack stack-12">
            <span className="eyebrow">Try one of these</span>
            <h2 className="h2 h2--sm">Where would you like to go?</h2>
          </div>
          <div className="grid-auto grid-auto--sm">
            {links.map((l) => (
              <Link className="nf-card" to={l.to} key={l.to}>
                <span className="icon-chip bg-navy icon-chip--sm">
                  <Icon name={l.icon} size={22} />
                </span>
                <span className="nf-card__title">{l.title}</span>
                <span className="nf-card__text">{l.text}</span>
              </Link>
            ))}
          </div>
          <div className="stack stack-12">
            <span className="eyebrow eyebrow--muted">Popular destinations</span>
            <div className="chips nf-chips">
              {destinations.map((d) => (
                <Link className="chip" to={`/destinations/${d.slug}`} key={d.slug}>
                  {d.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
