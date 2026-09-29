import { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { MobileMenu } from './MobileMenu';
import { Navbar, useMenuFocus } from './Navbar';
import { PageTransition } from './PageTransition';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useMenuFocus(menuOpen, toggleRef);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar open={menuOpen} onToggle={() => setMenuOpen((open) => !open)} toggleRef={toggleRef} />
      <MobileMenu open={menuOpen} onClose={closeMenu} />
      <div className="flex flex-1 flex-col" {...(menuOpen ? { inert: true } : {})}>
        <main id="main" tabIndex={-1} className="flex flex-1 flex-col outline-none">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
      </div>
    </div>
  );
}
