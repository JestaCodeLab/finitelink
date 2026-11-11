import { Link, useParams } from 'react-router-dom';
import { Breadcrumb, CtaBand } from '../components/Bits';
import { Seo } from '../components/Seo';
import { PHONES, SITE_NAME, SITE_URL, tel } from '../site';
import { formatDate, getPost, posts, type Block, type ListItem } from '../posts';
import { PostCard } from './Insights';
import { NotFound } from './NotFound';

const Item = ({ item }: { item: ListItem }) =>
  typeof item === 'string' ? (
    <li>{item}</li>
  ) : (
    <li>
      <strong>{item.label}:</strong> {item.text}
    </li>
  );

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return <h2 key={i}>{b.text}</h2>;
          case 'p':
            return <p key={i}>{b.text}</p>;
          case 'ul':
            return (
              <ul key={i}>
                {b.items.map((it) => (
                  <Item key={typeof it === 'string' ? it : it.label} item={it} />
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i}>
                {b.items.map((it) => (
                  <Item key={typeof it === 'string' ? it : it.label} item={it} />
                ))}
              </ol>
            );
          case 'img':
            return (
              <figure key={i} className="article__figure">
                <img src={b.src} alt={b.alt} width={1500} height={1000} loading="lazy" />
              </figure>
            );
          case 'note':
            return (
              <aside key={i} className="article__note">
                {b.text}
              </aside>
            );
        }
      })}
    </>
  );
}

export function Post() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;

  const path = `/insights/${post.slug}`;
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={post.seoTitle}
        description={post.seoDescription}
        path={path}
        image={post.cover.src}
        imageAlt={post.cover.alt}
        type="article"
        publishedTime={post.date}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: `${SITE_URL}${path}`,
            author: { '@type': 'Organization', name: SITE_NAME },
            publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` } },
            image: `${SITE_URL}${post.cover.src}`,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/insights` },
              { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}${path}` },
            ],
          },
        ]}
      />

      <section className="page-hero">
        <div className="container page-hero__inner">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Insights', to: '/insights' }, { label: post.category }]} />
          <h1 className="post-title">{post.title}</h1>
          <p className="post-hero__meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readMinutes} min read · By the {SITE_NAME} team
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="article">
            <figure className="article__figure article__figure--cover">
              <img src={post.cover.src} alt={post.cover.alt} width={1500} height={1000} fetchPriority="high" />
            </figure>
            <p className="article__lead">{post.excerpt}</p>
            <Blocks blocks={post.body} />
          </article>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container stack stack-32">
          <h2 className="h2 h2--sm">More insights</h2>
          <div className="post-grid">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
          <Link className="band__link" style={{ color: 'var(--navy-700)' }} to="/insights">
            All insights
          </Link>
        </div>
      </section>

      <CtaBand title="Ready to start your application?" text="Talk to an advisor about your course, destination and visa.">
        <Link className="btn btn--white" to="/contact">
          Book a consultation
        </Link>
        <a className="btn btn--ghost" href={tel(PHONES[0])}>
          Call {PHONES[0]}
        </a>
      </CtaBand>
    </>
  );
}
