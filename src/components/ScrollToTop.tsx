import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ block: 'start' });
        return;
      }
    }

    window.scrollTo(0, 0);

    if (first.current) {
      first.current = false;
      return;
    }

    document.getElementById('main')?.focus({ preventScroll: true });
  }, [pathname, hash]);

  return null;
}
