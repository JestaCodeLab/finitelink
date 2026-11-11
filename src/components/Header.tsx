import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { destinations } from '../data';
import { PHONES, tel } from '../site';
import { Icon } from './Icon';

const navClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'is-active' : undefined);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const ddRef = useRef<HTMLLIElement>(null);
  const { pathname } = useLocation();

  // Close menus after navigating.
  useEffect(() => {
    setMenuOpen(false);
    setDdOpen(false);
  }, [pathname]);

  // Escape closes the dropdown / menu; clicking elsewhere closes the dropdown.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDdOpen(false);
        setMenuOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDdOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="utility">
        <div className="container utility__inner">
          <div className="utility__group">
            <a href="mailto:info@finitelinkconsult.com">info@finitelinkconsult.com</a>
            <a href={tel(PHONES[0])}>{PHONES[0]}</a>
          </div>
          <span className="utility__badge hide-sm">ICEF-accredited agency</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container site-header__inner">
          <Link className="brand" to="/">
            <img src="/images/logo.png" alt="Finite Link Consult logo" width={56} height={56} />
            <span className="brand__text">
              <span className="brand__name">Finite Link</span>
              <span className="brand__sub">Consult Ltd.</span>
            </span>
          </Link>

          <nav id="site-nav" className={`nav${menuOpen ? ' is-open' : ''}`} aria-label="Main">
            <ul className="nav__list">
              <li>
                <NavLink to="/" end className={navClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navClass}>
                  About us
                </NavLink>
              </li>
              <li className={`nav-dd${ddOpen ? ' is-open' : ''}`} ref={ddRef}>
                <div className="nav-dd__row">
                  <NavLink to="/destinations" className={navClass}>
                    Destinations
                  </NavLink>
                  <button
                    type="button"
                    className="nav-dd__toggle"
                    aria-label="Show destinations"
                    aria-expanded={ddOpen}
                    aria-controls="destinations-menu"
                    onClick={() => setDdOpen((o) => !o)}
                  >
                    <Icon name="chevronDown" size={16} strokeWidth={2.5} />
                  </button>
                </div>
                <ul className="nav-dd__menu" id="destinations-menu">
                  {destinations.map((d) => (
                    <li key={d.slug}>
                      <NavLink to={`/destinations/${d.slug}`} className={navClass}>
                        {d.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <NavLink to="/insights" className={navClass}>
                  Insights
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <Link className="btn btn--red btn--sm nav__cta" to="/contact">
              Book a consultation
            </Link>
          </nav>

          <div className="site-header__actions">
            <Link className="btn btn--red btn--sm header-cta" to="/contact">
              Book a consultation
            </Link>
            <button
              className="menu-btn"
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="site-nav"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
