import type { RouteRecord } from 'vite-react-ssg';
import { Layout } from './components/Layout';
import { destinations } from './data';
import { posts } from './posts';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Destination } from './pages/Destination';
import { Destinations } from './pages/Destinations';
import { Home } from './pages/Home';
import { Insights } from './pages/Insights';
import { NotFound } from './pages/NotFound';
import { Post } from './pages/Post';

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'destinations', Component: Destinations },
      {
        // One statically pre-rendered page per destination.
        path: 'destinations/:slug',
        Component: Destination,
        getStaticPaths: () => destinations.map((d) => `destinations/${d.slug}`),
      },
      { path: 'insights', Component: Insights },
      {
        // One statically pre-rendered page per article.
        path: 'insights/:slug',
        Component: Post,
        getStaticPaths: () => posts.map((p) => `insights/${p.slug}`),
      },
      { path: 'contact', Component: Contact },
      { path: '404', Component: NotFound },
      { path: '*', Component: NotFound },
    ],
  },
];
