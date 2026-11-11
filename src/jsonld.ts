import { ADDRESS, COORDS, ENQUIRY_EMAIL, FACEBOOK_URL, INSTAGRAM_URL, MAPS_URL, PHONES, SITE_NAME, SITE_URL } from './site';

/** Reusable schema.org fragments so every page describes the business the same way. */
export const organization = {
  '@type': 'EducationalOrganization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: 'Finite Link Consult Ltd.',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/og-preview/home-og.jpg`,
  email: ENQUIRY_EMAIL,
  telephone: PHONES[0],
  description: 'ICEF-accredited education agency in Accra, Ghana recruiting students from Ghana and across Africa for universities abroad.',
  areaServed: ['GH', 'Africa'],
  sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
  geo: { '@type': 'GeoCoordinates', latitude: COORDS.lat, longitude: COORDS.lng },
  hasMap: MAPS_URL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS.split(',').slice(0, 2).join(',').trim(),
    addressLocality: 'Kaneshie, Accra',
    addressCountry: 'GH',
  },
  contactPoint: PHONES.map((telephone) => ({ '@type': 'ContactPoint', telephone, contactType: 'customer service', areaServed: 'GH', availableLanguage: 'English' })),
};

export const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
};

export const graph = (...nodes: object[]) => ({ '@context': 'https://schema.org', '@graph': nodes });

export const breadcrumbs = (items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${SITE_URL}${it.path === '/' ? '' : it.path}` })),
});
