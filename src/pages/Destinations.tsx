import { CtaBand, DestinationCard, PageHero } from '../components/Bits';
import { Seo } from '../components/Seo';
import { destinations } from '../data';
import { breadcrumbs, graph } from '../jsonld';
import { SITE_URL } from '../site';
import { Link } from 'react-router-dom';

export function Destinations() {
  return (
    <>
      <Seo
        title="Study Abroad Destinations"
        description="Study in Canada, the UK, Ireland, Dubai, South Korea, China, Malaysia, Ukraine or Russia. See partner universities, requirements and how to apply."
        path="/destinations"
        jsonLd={[
          graph(breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }]), {
            '@type': 'CollectionPage',
            name: 'Study abroad destinations',
            url: `${SITE_URL}/destinations`,
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: destinations.map((d, i) => ({ '@type': 'ListItem', position: i + 1, name: `Study in ${d.name}`, url: `${SITE_URL}/destinations/${d.slug}` })),
            },
          }),
        ]}
      />
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Destinations' }]}
        title="Where do you want to study?"
        lead="Nine countries, dozens of partner universities. Choose a destination to see universities, requirements and how to apply."
      />
      <section className="section section--surface">
        <div className="container dest-grid">
          {destinations.map((d) => (
            <DestinationCard key={d.slug} {...d} />
          ))}
        </div>
      </section>
      <CtaBand title="Not sure where to go?" text="Tell us your results and goals and an advisor will recommend the best-fit country and course.">
        <Link className="btn btn--white" to="/contact">
          Book a consultation
        </Link>
      </CtaBand>
    </>
  );
}
