import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { destinations } from './src/data';
import { posts } from './src/posts';
import { SITE_URL } from './src/site';

const paths = ['/', '/about', '/destinations', ...destinations.map((d) => `/destinations/${d.slug}`), '/insights', ...posts.map((p) => `/insights/${p.slug}`), '/contact'];

export default defineConfig({
  plugins: [react()],
  // vite-react-ssg pre-renders every route to static HTML at build time.
  ssgOptions: {
    script: 'defer',
    formatting: 'none',
    onFinished() {
      const today = new Date().toISOString().slice(0, 10);
      const lastmod = (p: string) => posts.find((post) => `/insights/${post.slug}` === p)?.date ?? today;
      const urls = paths.map((p) => `  <url><loc>${SITE_URL}${p === '/' ? '' : p}</loc><lastmod>${lastmod(p)}</lastmod></url>`).join('\n');
      writeFileSync(
        resolve(__dirname, 'dist/sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );
    },
  },
});
