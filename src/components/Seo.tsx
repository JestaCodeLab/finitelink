import { Head } from 'vite-react-ssg';
import { SITE_NAME, SITE_URL } from '../site';

/** 1200×640 JPEG (≈230 KB — small enough for WhatsApp previews). Source art: /og-preview/home-og.png */
export const DEFAULT_OG_IMAGE = '/og-preview/home-og.jpg';
const DEFAULT_OG_ALT = 'Finite Link Consult — Your future, linked to the world’s best universities.';

interface Props {
  /** Page title. The brand is appended automatically when it fits (≤ 65 chars). */
  title: string;
  /** Aim for 120–160 characters. */
  description: string;
  /** Path beginning with "/", e.g. "/destinations/canada". */
  path: string;
  /** Social/preview image path. Defaults to the home preview. */
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  /** ISO date, for articles. */
  publishedTime?: string;
  /** Keep the page out of search results (e.g. 404). */
  noindex?: boolean;
  /** schema.org objects serialised as JSON-LD. */
  jsonLd?: object[];
}

export function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  type = 'website',
  publishedTime,
  noindex = false,
  jsonLd = [],
}: Props) {
  const withBrand = `${title} | ${SITE_NAME}`;
  const fullTitle = title.includes(SITE_NAME) || withBrand.length > 65 ? title : withBrand;
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const img = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const alt = imageAlt ?? (image === DEFAULT_OG_IMAGE ? DEFAULT_OG_ALT : title);
  const isDefaultImage = image === DEFAULT_OG_IMAGE;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:image:alt" content={alt} />
      {isDefaultImage && <meta property="og:image:width" content="1200" />}
      {isDefaultImage && <meta property="og:image:height" content="640" />}
      {type === 'article' && publishedTime && <meta property="article:published_time" content={publishedTime} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      <meta name="twitter:image:alt" content={alt} />

      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Head>
  );
}
