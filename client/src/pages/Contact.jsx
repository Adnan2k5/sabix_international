/**
 * Contact — Route: /contact
 * Content driven from src/data/pages.js → contact
 */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import QuoteForm from '../components/QuoteForm';
import { contact } from '../data/pages';
import { company } from '../data/company';

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px 0px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const LocationCard = ({ loc, isHQ, t }) => (
  <div
    className="p-8 flex flex-col gap-1.5"
    style={{
      backgroundColor: isHQ ? 'var(--color-primary)' : 'var(--color-surface)',
      border: `1px solid ${isHQ ? 'transparent' : 'var(--color-border)'}`,
    }}
  >
    <span
      className="text-eyebrow mb-4 block"
      style={{ color: isHQ ? 'rgba(255,255,255,0.35)' : 'var(--color-muted)' }}
    >
      {t(loc.label)}
    </span>
    <h3
      className="font-light mb-0.5"
      style={{
        color: isHQ ? '#ffffff' : 'var(--color-text)',
        fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
        letterSpacing: '-0.02em',
      }}
    >
      {t(loc.city) || t(loc.country)}
    </h3>
    <p className="text-sm mb-4" style={{ color: isHQ ? 'rgba(255,255,255,0.45)' : 'var(--color-muted)' }}>
      {t(loc.country)}
    </p>

    <div className="flex flex-col gap-2 mt-2">
      {loc.address && (
        <div className="flex items-start gap-2">
          <MapPin size={13} strokeWidth={1.5} className="flex-shrink-0 mt-0.5" style={{ color: isHQ ? 'var(--color-secondary)' : 'var(--color-muted)' }} />
          <span className="text-xs" style={{ color: isHQ ? 'rgba(255,255,255,0.5)' : 'var(--color-muted)' }}>{loc.address}</span>
        </div>
      )}
      {loc.phone && (
        <a href={`tel:${loc.phone}`} className="flex items-center gap-2 group">
          <Phone size={13} strokeWidth={1.5} style={{ color: isHQ ? 'var(--color-secondary)' : 'var(--color-muted)' }} />
          <span className="text-xs group-hover:underline" style={{ color: isHQ ? 'rgba(255,255,255,0.6)' : 'var(--color-muted)' }}>{loc.phone}</span>
        </a>
      )}
      {loc.email && (
        <a href={`mailto:${loc.email}`} className="flex items-center gap-2 group">
          <Mail size={13} strokeWidth={1.5} style={{ color: isHQ ? 'var(--color-secondary)' : 'var(--color-muted)' }} />
          <span className="text-xs group-hover:underline" style={{ color: isHQ ? 'rgba(255,255,255,0.6)' : 'var(--color-muted)' }}>{loc.email}</span>
        </a>
      )}

      {/* Placeholder message when contact details not yet set */}
      {!loc.address && !loc.phone && !loc.email && (
        <p className="text-xs italic" style={{ color: isHQ ? 'rgba(255,255,255,0.25)' : 'var(--color-muted)' }}>
          {t("Contact details to be provided — update")} <code className="text-[10px]">company.js</code>
        </p>
      )}
    </div>
  </div>
);

const Contact = () => {
  const { t } = useTranslation();
  return (
  <>
    {/* ── Hero ── */}
    <section
      style={{ backgroundColor: 'var(--color-primary)', paddingTop: '9rem', paddingBottom: '5rem' }}
    >
      <div className="container">
        <motion.p
          className="text-eyebrow mb-5"
          style={{ color: 'var(--color-secondary)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t(contact.hero.eyebrow)}
        </motion.p>
        <motion.h1
          className="text-headline text-white mb-5"
          style={{ maxWidth: '22ch' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          {t(contact.hero.headline)}
        </motion.h1>
        <motion.p
          className="text-body-lg"
          style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '52ch' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t(contact.hero.body)}
        </motion.p>
      </div>
    </section>

    {/* ── Sales Team Contact Info ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container section-padding">
        <FadeIn className="mb-12">
          <SectionHeading eyebrow={t("Sales Team")} title={t("Contact our sales team.")} />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          {/* Email card */}
          <FadeIn delay={0.05}>
            <a
              href={`mailto:${company.sales.email}`}
              className="flex items-start gap-5 p-8 group transition-all duration-200"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <Mail size={16} strokeWidth={1.5} style={{ color: 'var(--color-secondary)' }} />
              </div>
              <div>
                <p className="text-eyebrow mb-1" style={{ color: 'var(--color-muted)' }}>{t("Email")}</p>
                <p
                  className="text-sm font-medium group-hover:underline"
                  style={{ color: 'var(--color-text)' }}
                >
                  {company.sales.email}
                </p>
              </div>
            </a>
          </FadeIn>

          {/* Phone card */}
          <FadeIn delay={0.1}>
            <a
              href={`tel:${company.sales.phone}`}
              className="flex items-start gap-5 p-8 group transition-all duration-200"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <Phone size={16} strokeWidth={1.5} style={{ color: 'var(--color-secondary)' }} />
              </div>
              <div>
                <p className="text-eyebrow mb-1" style={{ color: 'var(--color-muted)' }}>{t("Phone")}</p>
                <p
                  className="text-sm font-medium group-hover:underline"
                  style={{ color: 'var(--color-text)' }}
                >
                  {company.sales.phone}
                </p>
              </div>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ── Offices ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container section-padding">
        <FadeIn className="mb-12">
          <SectionHeading eyebrow={t("Our Offices")} title={t("Reach us globally.")} />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <LocationCard loc={company.headquarters} isHQ t={t} />
          {company.branches.map((b, i) => (
            <LocationCard key={i} loc={b} isHQ={false} t={t} />
          ))}
        </div>
      </div>
    </section>

    {/* ── Quote Form with Logo Watermark ── */}
    <section id="quote" className="section-border-top" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <FadeIn className="lg:col-span-4">
            {/* Logo */}
            <div className="mb-8">
              <img
                src="/assets/images/logo.jpeg"
                alt="SABIX International"
                className="h-12 w-auto object-contain"
                style={{ filter: 'none' }}
              />
            </div>
            <SectionHeading
              eyebrow={t(contact.form.eyebrow)}
              title={t(contact.form.headline)}
              description={t(contact.form.body)}
            />
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7 lg:col-start-6">
            {/* Form wrapper with logo watermark background */}
            <div className="relative">
              {/* Watermark */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
                aria-hidden="true"
              >
                <img
                  src="/assets/images/logo.jpeg"
                  alt=""
                  className="w-72 h-72 object-contain select-none"
                  style={{ opacity: 0.04, filter: 'grayscale(100%)' }}
                />
              </div>
              {/* Actual form */}
              <div className="relative z-10">
                <QuoteForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  </>
  );
};

export default Contact;
