/**
 * Spare Parts — Route: /spare-parts
 */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import ImageReveal from '../components/ImageReveal';
import QuoteForm from '../components/QuoteForm';
import { getCategoryBySlug } from '../data/categories';

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

const category = getCategoryBySlug('spare-parts');

const operationalItemKeys = [
  'Aluminium system replacement parts',
  'Glass hardware spare components',
  'Factory and industrial spare parts',
  'Project-specific sourcing',
];

const SpareParts = () => {
  const { t } = useTranslation();

  return (
  <>
    {/* ── Hero ── */}
    <section
      className="relative flex items-end"
      style={{ backgroundColor: 'var(--color-primary)', minHeight: '70vh', paddingTop: '7rem' }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/assets/images/spare-parts.jpg"
          alt=""
          loading="eager"
          className="w-full h-full object-cover"
          style={{ opacity: 0.28, objectPosition: 'center' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(36,36,36,0.98) 0%, rgba(36,36,36,0.5) 60%, rgba(36,36,36,0.15) 100%)' }} />
      </div>

      <div className="container relative z-10 pb-16">
        <motion.p className="text-eyebrow mb-5" style={{ color: 'var(--color-secondary)' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {category.number} — {category.accentLabel}
        </motion.p>
        <motion.h1 className="text-headline text-white mb-6" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
          {t(category.title)}
        </motion.h1>
        <motion.p className="text-body-lg mb-8" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '56ch' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          {t(category.description)}
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          <Button href="#enquire" variant="secondary" arrow size="md" id="spareparts-hero-cta">
            {t('Tell us the part you need')}
          </Button>
        </motion.div>
      </div>
    </section>

    {/* ── Why Spare Parts Matter ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <SectionHeading
              eyebrow={t('Operational Continuity')}
              title={t('The right part. When your operation needs it.')}
              description={t('A missing spare part can halt operations, delay projects, and generate significant costs. SABIX sources replacement components and spare parts to help keep your operations running.')}
              className="mb-10"
            />
            <div className="flex flex-col gap-4">
              {operationalItemKeys.map((key, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-[var(--color-border)]">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: 'var(--color-secondary)' }} />
                  <span className="text-sm font-medium">{t(key)}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ImageReveal
              src="/assets/images/spare-parts.jpg"
              alt="Precision mechanical spare parts"
              aspectRatio="4/3"
              containerClassName="w-full"
            />
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ── Product Families ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container section-padding">
        <FadeIn className="mb-14">
          <SectionHeading
            eyebrow={t('Supply Categories')}
            title={t('Where we can source.')}
          />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {category.families.filter(f => f.id !== 'and-more').map((family, i) => (
            <FadeIn key={family.id} delay={i * 0.05}>
              <div className="p-10 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-background)', minHeight: 180 }}>
                <span className="text-index text-[var(--color-secondary)]">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-subheading text-base font-semibold">{t(family.name)}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{t(family.description)}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* And More */}
        <FadeIn delay={0.15} className="mt-px">
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-10"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <div>
              <p className="text-eyebrow mb-2" style={{ color: 'var(--color-secondary)' }}>{t('And More')}</p>
              <h3
                className="font-light text-white"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', letterSpacing: '-0.02em' }}
              >
                {t('Our sourcing reach extends beyond standard categories.')}
              </h3>
              <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '52ch' }}>
                {t('Tell us the part you need — reference, specification, or a sample description. Our team will work to source it from trusted suppliers across international markets.')}
              </p>
            </div>
            <a
              href="#enquire"
              className="flex-shrink-0 inline-flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.08em] uppercase transition-colors"
              style={{ color: 'var(--color-secondary)' }}
            >
              <span>{t('Tell us what you need')}</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* ── Inline Quote / Enquiry ── */}
    <section id="enquire" className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <FadeIn className="lg:col-span-4">
            <p className="text-eyebrow-accent mb-4">{t('Sourcing enquiry')}</p>
            <h2 className="text-title mb-5">
              {t('Tell us the part you need.')}
            </h2>
            <p className="text-body text-[var(--color-muted)] mb-8" style={{ maxWidth: '38ch' }}>
              {t('Describe the spare part or replacement component your operation or project requires. Include the reference, specification, or a sample description — our team will work to source it.')}
            </p>
            <p className="text-meta">
              {t('SABIX handles sourcing for both standard and project-specific replacement requirements.')}
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <QuoteForm />
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <CTASection
      id="spareparts-page-cta"
      eyebrow={t('Spare Parts')}
      headline={t('Need a part sourced?')}
      body={t('Share the reference or description. Our team will work to source and supply the replacement component your operation requires.')}
      primaryLabel={t('Submit Requirement')}
      primaryHref="#enquire"
      secondaryLabel={t('Back to all categories')}
      secondaryTo="/"
    />
  </>
  );
};

export default SpareParts;
