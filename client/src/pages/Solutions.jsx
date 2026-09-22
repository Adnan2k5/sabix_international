/**
 * Solutions — Route: /solutions
 * Content driven from src/data/pages.js → solutions
 */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { solutions } from '../data/pages';

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

const Solutions = () => {
  const { t } = useTranslation();

  return (
  <>
    {/* ── Hero ── */}
    <section
      style={{ backgroundColor: 'var(--color-primary)', paddingTop: '9rem', paddingBottom: '5rem' }}
    >
      <div className="container">
        <motion.p className="text-eyebrow mb-5" style={{ color: 'var(--color-secondary)' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {t(solutions.hero.eyebrow)}
        </motion.p>
        <motion.h1 className="text-headline text-white mb-5" style={{ maxWidth: '22ch' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
          {t(solutions.hero.headline)}
        </motion.h1>
        <motion.p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '56ch' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          {t(solutions.hero.body)}
        </motion.p>
      </div>
    </section>

    {/* ── Solution Types ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container section-padding">
        <FadeIn className="mb-16">
          <SectionHeading
            eyebrow={t('Supply Solutions')}
            title={t('What we solve.')}
            description={t('SABIX provides supply solutions across three primary customer contexts — project supply, operational supply, and government and large-scale procurement.')}
          />
        </FadeIn>

        <div className="flex flex-col gap-0 divide-y divide-[var(--color-border)]">
          {solutions.solutionTypes.map((sol, i) => (
            <FadeIn key={sol.number} delay={i * 0.06}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 py-12 lg:py-0">
                {/* Number + label — left */}
                <div className="lg:col-span-3 lg:py-12 flex flex-col gap-2 mb-6 lg:mb-0">
                  <span className="text-index text-[var(--color-secondary)]">{sol.number}</span>
                  <h2 className="text-title" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 600 }}>
                    {t(sol.title)}
                  </h2>
                  <p className="text-eyebrow text-[var(--color-muted)] mt-2" style={{ letterSpacing: '0.06em' }}>
                    {t(sol.target)}
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden lg:block lg:col-span-1 self-stretch border-l border-[var(--color-border)] mx-8" />

                {/* Content — right */}
                <div className="lg:col-span-8 lg:py-12 flex flex-col gap-5">
                  <h3 className="text-subheading font-semibold" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                    {t(sol.headline)}
                  </h3>
                  <p className="text-body text-[var(--color-muted)] leading-relaxed" style={{ maxWidth: '58ch' }}>
                    {t(sol.body)}
                  </p>
                  <ul className="flex flex-col gap-2 mt-2">
                    {sol.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span
                          className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                          style={{ backgroundColor: 'var(--color-secondary)' }}
                          aria-hidden="true"
                        />
                        <span className="text-sm text-[var(--color-text)]">{t(h)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── Process ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container section-padding">
        <FadeIn className="mb-14">
          <SectionHeading
            eyebrow={t(solutions.process.eyebrow)}
            title={t(solutions.process.headline)}
            description={t('A straightforward process designed around your requirement — from initial enquiry to delivery.')}
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {solutions.process.steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.07}>
              <div className="p-10 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-background)', minHeight: 220 }}>
                <span className="text-index text-[var(--color-secondary)]">{step.number}</span>
                <h3 className="text-subheading font-semibold text-base">{t(step.title)}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{t(step.body)}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15} className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 group text-[0.8rem] font-semibold tracking-[0.06em] uppercase text-[var(--color-text)] hover:text-[var(--color-secondary)] transition-colors"
          >
            <span>{t('Submit a requirement')}</span>
            <ArrowRight size={13} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>

    {/* ── Products CTA bridge ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <SectionHeading
              eyebrow={t('Product Range')}
              title={t('Three product domains. One supply partner.')}
              description={t('SABIX covers aluminium and glass accessories, tools and hardware, and spare parts — all sourced and supplied through one coordinated supply relationship.')}
            />
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-col gap-4">
            {[
              { label: 'Aluminium & Glass Accessories', href: '/aluminium-glass-accessories' },
              { label: 'Tools & Hardware',              href: '/tools-hardware' },
              { label: 'Spare Parts',                   href: '/spare-parts' },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center justify-between px-6 py-5 border border-[var(--color-border)] group hover:border-[var(--color-primary)] transition-colors"
              >
                <span className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-secondary)] transition-colors">
                  {t(item.label)}
                </span>
                <ArrowRight
                  size={14}
                  strokeWidth={1.75}
                  className="text-[var(--color-muted)] group-hover:text-[var(--color-secondary)] group-hover:translate-x-1 transition-all"
                />
              </Link>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <CTASection
      id="solutions-page-cta"
      eyebrow={t('Work with SABIX')}
      headline={t(solutions.cta.headline)}
      body={t(solutions.cta.body)}
      primaryLabel={t('Request a Quote')}
      primaryTo="/contact"
      secondaryLabel={t('Products')}
      secondaryTo="/products"
    />
  </>
  );
};

export default Solutions;
