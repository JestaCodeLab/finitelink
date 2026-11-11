import { Link } from 'react-router-dom';
import { CtaBand, PageHero } from '../components/Bits';
import { Icon } from '../components/Icon';
import { Seo } from '../components/Seo';
import { breadcrumbs, graph } from '../jsonld';
import { formatDate, posts, type Post } from '../posts';
import { SITE_URL } from '../site';

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card">
      <Link className="post-card__link" to={`/insights/${post.slug}`}>
        <img className="post-card__img" src={post.cover.src} alt={post.cover.alt} width={1500} height={1000} loading="lazy" />
        <span className="post-card__body">
          <span className="post-card__cat">{post.category}</span>
          <h2 className="post-card__title">{post.title}</h2>
          <p className="post-card__excerpt">{post.excerpt}</p>
          <span className="post-card__meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readMinutes} min read
          </span>
          <span className="post-card__more">
            Read article <Icon name="arrowRight" size={16} strokeWidth={2.5} />
          </span>
        </span>
      </Link>
    </article>
  );
}

export function Insights() {
  return (
    <>
      <Seo
        title="Insights: Study Abroad Advice for Ghanaian Students"
        description="Study abroad advice from Finite Link Consult in Accra: career counseling, safe and affordable destinations, scholarships, courses and student life."
        path="/insights"
        jsonLd={[
          graph(breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }]), {
            '@type': 'Blog',
            name: 'Finite Link Consult Insights',
            url: `${SITE_URL}/insights`,
            blogPost: posts.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE_URL}/insights/${p.slug}`, datePublished: p.date })),
          }),
        ]}
      />
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Insights' }]}
        title="Insights for students going abroad."
        lead="Straightforward advice on choosing a course and destination, funding your studies and preparing for life abroad."
      />
      <section className="section section--surface">
        <div className="container post-grid">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
      <CtaBand title="Have a question the guides don’t answer?" text="Book a consultation and an advisor will talk you through your destination, course and visa.">
        <Link className="btn btn--white" to="/contact">
          Book a consultation
        </Link>
      </CtaBand>
    </>
  );
}
