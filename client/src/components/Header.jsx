/**
 * Header — SABIX International
 * Sticky navigation with scroll-aware compaction.
 *
 * When NOT scrolled (over hero): white wordmark + white nav links
 * When scrolled: normal dark theme with border + backdrop blur
 *
 * Nav item `type`:
 *   'route' → NavLink with active-state orange highlight
 *   'hash'  → plain <a href> (hash-scroll, no active highlight)
 */
import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Globe, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { mainNav, productDomains } from '../data/navigation';
import { company } from '../data/company';
import Button from './Button';

/* ── Language options ── */
const LANGUAGES = [
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'ar', label: 'Arabic',  nativeLabel: 'العربية', flag: '🇸🇦', dir: 'rtl' },
];

const LanguageSwitcher = ({ scrolled, mobile }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  /* Close on outside click */
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    /* dir is set on <html> — update immediately */
    document.documentElement.dir = LANGUAGES.find((l) => l.code === code)?.dir ?? 'ltr';
    document.documentElement.lang = code;
    setOpen(false);
  };

  /* Ensure <html> dir is correct on first render */
  useEffect(() => {
    document.documentElement.dir = currentLang.dir;
    document.documentElement.lang = currentLang.code;
  }, [currentLang]);

  /* Colour tokens that work in both desktop/mobile context */
  const triggerColor = mobile
    ? { color: 'rgba(255,255,255,0.75)' }
    : scrolled
      ? { color: 'var(--color-muted)' }
      : { color: 'rgba(255,255,255,0.65)' };

  const triggerHoverClass = mobile
    ? 'hover:text-white'
    : scrolled
      ? 'hover:text-[var(--color-text)]'
      : 'hover:text-white';

  return (
    <div ref={ref} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.1em] uppercase transition-colors select-none ${triggerHoverClass}`}
        style={triggerColor}
        aria-label="Select language"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe size={13} strokeWidth={1.75} />
        <span>{currentLang.flag}</span>
        <span>{currentLang.code.toUpperCase()}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label="Language selector"
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute top-full mt-2 right-0 z-50 min-w-[9rem] overflow-hidden shadow-xl"
            style={{
              backgroundColor: 'var(--color-primary)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {LANGUAGES.map((lang) => {
              const isActive = lang.code === currentLang.code;
              return (
                <li key={lang.code}>
                  <button
                    role="option"
                    aria-selected={isActive}
                    onClick={() => handleSelect(lang.code)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left text-[0.75rem] font-medium tracking-wide transition-colors"
                    style={{
                      color: isActive ? 'var(--color-secondary)' : 'rgba(255,255,255,0.7)',
                      backgroundColor: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.nativeLabel}</span>
                    </span>
                    {isActive && <Check size={12} strokeWidth={2.5} style={{ color: 'var(--color-secondary)' }} />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const Header = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  /* Close mobile menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll(); // Run once on mount in case page loads scrolled
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Prevent body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── Nav text colors ── */
  const routeLinkClass = ({ isActive }) => {
    if (scrolled) {
      return `text-[0.75rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-200 ${
        isActive
          ? 'text-[var(--color-secondary)]'
          : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
      }`;
    }
    return `text-[0.75rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-200 ${
      isActive
        ? 'text-[var(--color-secondary)]'
        : 'text-white/70 hover:text-white'
    }`;
  };

  const hashLinkClass = scrolled
    ? 'text-[0.75rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-200 text-[var(--color-muted)] hover:text-[var(--color-text)]'
    : 'text-[0.75rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-200 text-white/70 hover:text-white';


  /* ── Hamburger icon color ── */
  const burgerColor = scrolled ? 'var(--color-primary)' : '#ffffff';

  return (
    <>
      {/* ── Main Header ── */}
      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(245,245,242,0.97)' : 'transparent',
          backdropFilter:   scrolled ? 'blur(12px)'             : 'none',
          borderBottom:     scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        }}
      >
        <div className="container relative flex items-center justify-between h-16 md:h-[4.5rem]">
          {/* Wordmark */}
          <Link
            to="/"
            aria-label="SABIX International — home"
            className="flex flex-col leading-none select-none"
          >
            <span
              className="text-[1.1rem] font-bold tracking-[0.12em] uppercase transition-colors duration-300"
              style={{ color: scrolled ? 'var(--color-primary)' : '#ffffff' }}
            >
              {t(company.shortName)}
            </span>
            <span
              className="text-[0.55rem] font-medium tracking-[0.18em] uppercase mt-0.5 transition-colors duration-300"
              style={{ color: scrolled ? 'var(--color-muted)' : 'rgba(255,255,255,0.45)' }}
            >
              {t('International')}
            </span>
          </Link>

          {/* Desktop Navigation — absolutely centered */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {mainNav.map((item) =>
              item.type === 'route' ? (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={routeLinkClass}
                  end={item.href === '/'}
                >
                  {t(item.label)}
                </NavLink>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={hashLinkClass}
                >
                  {t(item.label)}
                </a>
              )
            )}
          </nav>

          {/* Desktop CTA + Mobile trigger */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block mr-2 border-r border-gray-400/30 pr-4">
               <LanguageSwitcher scrolled={scrolled} mobile={false} />
            </div>
            <Button
              to="/contact"
              variant="secondary"
              size="sm"
              arrow
              id="header-quote-cta"
              className="hidden md:inline-flex"
            >
              {t("Request a Quote")}
            </Button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden flex items-center gap-2 transition-colors"
              style={{ color: burgerColor }}
            >
              <span
                className="text-[0.6rem] font-semibold tracking-[0.15em] uppercase"
                style={{ color: scrolled ? 'var(--color-muted)' : 'rgba(255,255,255,0.55)' }}
              >
                {t("Menu")}
              </span>
              {menuOpen
                ? <X size={20} strokeWidth={1.5} />
                : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Full-Screen Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            {/* Menu header row — always dark overlay so always white */}
            <div className="container flex items-center justify-between h-16 md:h-[4.5rem] flex-shrink-0">
              <Link
                to="/"
                aria-label="SABIX International — home"
                className="flex flex-col leading-none select-none"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-[1.1rem] font-bold tracking-[0.12em] uppercase text-white">
                  {t(company.shortName)}
                </span>
                <span className="text-[0.55rem] font-medium tracking-[0.18em] uppercase mt-0.5 text-white/45">
                  {t('International')}
                </span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Menu content */}
            <nav
              aria-label="Mobile navigation"
              className="container flex-1 flex flex-col justify-center gap-0 overflow-y-auto py-8"
            >
              {/* Main links */}
              {mainNav.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.type === 'route' ? (
                    <NavLink
                      to={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block py-4 border-b border-white/10 text-2xl font-light tracking-tight transition-colors ${
                          isActive
                            ? 'text-[var(--color-secondary)]'
                            : 'text-white hover:text-[var(--color-secondary)]'
                        }`
                      }
                    >
                      {t(item.label)}
                    </NavLink>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-4 border-b border-white/10 text-2xl font-light tracking-tight text-white hover:text-[var(--color-secondary)] transition-colors"
                    >
                      {t(item.label)}
                    </a>
                  )}
                </motion.div>
              ))}

              {/* Product domains */}
              <div className="mt-10 mb-4">
                <p className="text-eyebrow text-white/30 mb-5">{t('Products')}</p>
                {productDomains.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <NavLink
                      to={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between py-3 border-b border-white/10 group"
                    >
                      <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                        <span className="text-index text-white/30 mr-3">{item.number}</span>
                        {t(item.label)}
                      </span>
                      <ArrowRight
                        size={14}
                        strokeWidth={1.5}
                        className="text-white/30 group-hover:text-[var(--color-secondary)] transition-colors"
                      />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Language Switcher Mobile */}
              <motion.div
                className="mt-8 mb-4 border-t border-white/10 pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
              >
                <LanguageSwitcher scrolled={scrolled} mobile={true} />
              </motion.div>

              {/* CTA */}
              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Button
                  to="/contact"
                  variant="secondary"
                  size="lg"
                  arrow
                  id="mobile-menu-quote-cta"
                  className="w-full justify-center sm:w-auto sm:justify-start"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("Request a Quote")}
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
