/**
 * ScrollToTop — SABIX
 * Handles two behaviours on every route change:
 *
 * 1. If the URL has a hash (e.g. /#partnership):
 *    → Wait for the page to render, then smoothly scroll to that element.
 *    → Falls back to window.scrollTo(0, 0) if the element isn't found.
 *
 * 2. If no hash:
 *    → Instantly scroll the window to (0, 0).
 *
 * Place this component once, inside <BrowserRouter>, before <AnimatedRoutes>.
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Give the page transition time to render the target element
      const id = hash.replace('#', '');
      const attempt = (tries = 0) => {
        const el = document.getElementById(id);
        if (el) {
          // Offset for the fixed header height (~72px)
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        } else if (tries < 8) {
          // Retry up to 8 times (400ms total) in case element hasn't mounted yet
          setTimeout(() => attempt(tries + 1), 50);
        } else {
          // Element not found — fall back to top
          window.scrollTo(0, 0);
        }
      };
      attempt();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
