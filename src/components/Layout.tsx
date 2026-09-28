import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { MobileMenu } from './MobileMenu';
import { Navbar } from './Navbar';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar open={menuOpen} onToggle={() => setMenuOpen((open) => !open)} />
      <MobileMenu open={menuOpen} onClose={closeMenu} />
      <div className="flex flex-1 flex-col" {...(menuOpen ? { inert: true } : {})}>
        <main id="main" tabIndex={-1} key={location.pathname} className="page-enter flex-1 outline-none">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
