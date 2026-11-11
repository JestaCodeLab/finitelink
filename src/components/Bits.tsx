import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((it, i) => (
        <span key={it.label} style={{ display: 'contents' }}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {it.to ? <Link to={it.to}>{it.label}</Link> : <span aria-current="page">{it.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({ crumbs, title, lead }: { crumbs: { label: string; to?: string }[]; title: string; lead: string }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <Breadcrumb items={crumbs} />
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </section>
  );
}

export function CtaBand({ title, text, children }: { title: string; text: string; children: ReactNode }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <div className="cta__copy">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta__actions">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function DestinationCard({ slug, name, line, image, alt }: { slug: string; name: string; line: string; image: string; alt: string }) {
  return (
    <Link className="dest" to={`/destinations/${slug}`}>
      <img src={image} alt={alt} loading="lazy" />
      <div className="dest__text">
        <span className="dest__name">{name}</span>
        <span className="dest__line">{line}</span>
      </div>
      <span className="dest__arrow">
        <Icon name="arrowUpRight" strokeWidth={2.5} />
      </span>
    </Link>
  );
}
