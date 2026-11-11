/**
 * Production origin — used for canonical URLs, Open Graph, structured data, the sitemap and robots.txt.
 * Must match the PRIMARY domain in Vercel → Settings → Domains (the other host should redirect to it).
 */
export const SITE_URL = 'https://www.finitelinkconsult.com';
export const SITE_NAME = 'Finite Link Consult';
export const ENQUIRY_EMAIL = 'info@finitelinkconsult.com';
export const ADDRESS = '746/7 Edwardo Modhlana Rd, Awodome Estate, Kaneshie – Accra';
export const PHONES = ['+233 30 703 5055', '+233 30 223 1981', '+233 24 448 2288', '+233 50 559 5008'];
export const tel = (p: string) => `tel:${p.replace(/\s/g, '')}`;

export const WHATSAPP = '+233 24 448 2288';
export const whatsappLink = (text = 'Hello Finite Link Consult, I’d like to know more about studying abroad.') =>
  `https://wa.me/${WHATSAPP.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;
export const INSTAGRAM_URL = 'https://www.instagram.com/finitelinkconsult';
export const FACEBOOK_URL = 'https://facebook.com/finitelinkgh';

/** The office's exact location (from the Google Maps listing "Finite Link Consult Ltd"). */
export const COORDS = { lat: 5.569972, lng: -0.236118 };
/** Opens the Google Maps business listing. */
export const MAPS_URL = 'https://www.google.com/maps?cid=12796745872799533543';
/** Opens Google Maps directions to the office. */
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${COORDS.lat},${COORDS.lng}`;
/** Google Maps embed (iframe src) for the Contact page. */
export const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9800136335707!2d-0.23611762442570575!3d5.569972233507662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf999b06479e11%3A0xb1972c923d2989e7!2sFinite%20Link%20Consult%20Ltd!5e0!3m2!1sen!2sgh!4v1794430031686!5m2!1sen!2sgh';
