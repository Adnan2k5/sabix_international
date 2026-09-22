/**
 * Aluminium & Glass Accessories — Route: /aluminium-glass-accessories
 */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import ImageReveal from '../components/ImageReveal';
import { getCategoryBySlug } from '../data/categories';
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

const category = getCategoryBySlug('aluminium-glass-accessories');

const applicationTagKeys = [
  'Commercial Buildings',
  'Residential Projects',
  'Government Facilities',
  'Retail Fit-outs',
  'Industrial Premises',
];

const lavaalTagKeys = [
  'Aluminium System Hardware',
  'Architectural Accessories',
  'Project-Grade Fittings',
  'Volume Supply',
];

const sourcingStepKeys = [
  { labelKey: 'Share your spec', descKey: 'Send us your product specification, drawing, or sample reference.' },
  { labelKey: 'We source it',    descKey: 'Our team identifies and sources from trusted suppliers across international markets.' },
  { labelKey: 'You receive it',  descKey: 'We coordinate delivery to your project or facility.' },
];

const AluminiumGlassAccessories = () => {
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
          src="/assets/images/aluminium-accessories.jpg"
          alt=""
          loading="eager"
          className="w-full h-full object-cover"
          style={{ opacity: 0.3, objectPosition: 'center' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,7,39,0.98) 0%, rgba(7,7,39,0.5) 60%, rgba(7,7,39,0.15) 100%)' }} />
      </div>

      <div className="container relative z-10 pb-16">
        <motion.p
          className="text-eyebrow mb-5"
          style={{ color: 'var(--color-secondary)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {category.number} — {category.accentLabel}
        </motion.p>
        <motion.h1
          className="text-headline text-white mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          {t(category.title)}
        </motion.h1>
        <motion.p
          className="text-body-lg mb-8"
          style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '56ch' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t(category.description)}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <Button href="#quote" variant="secondary" arrow size="md" id="aluminium-hero-cta">
            {t('Request a Quote')}
          </Button>
        </motion.div>
      </div>
    </section>

    {/* ── Product Families ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container section-padding">
        <FadeIn className="mb-14">
          <SectionHeading
            eyebrow={t('Product Families')}
            title={t('What we supply.')}
            description={t('The following product families are illustrative of the types of aluminium and glass hardware SABIX sources and supplies. Contact us with your specific requirement.')}
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {category.families.map((family, i) => (
            <FadeIn key={family.id} delay={i * 0.04}>
              <div className="p-8 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-surface)', minHeight: 180 }}>
                <span className="text-index text-[var(--color-secondary)]">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-subheading text-base font-semibold">{t(family.name)}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{t(family.description)}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── LAVAAL Partner Section ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container section-padding">
        <FadeIn className="mb-14">
          <SectionHeading
            eyebrow={t('Aluminium Partner')}
            title={t('Strengthened by a trusted brand.')}
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden" style={{ border: '1px solid var(--color-border)' }}>
          {/* Left — partner brand panel */}
          <FadeIn className="lg:col-span-4">
            <div
              className="h-full flex flex-col justify-between p-10 lg:p-12 min-h-[280px]"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <div>
                {/* LAVAAL Logo — replace img src when asset is available */}
                <div
                  className="inline-flex items-center justify-center px-7 py-4 mb-8"
                  style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <span
                    className="font-bold uppercase tracking-[0.2em] text-white"
                    style={{ fontSize: '1.3rem', letterSpacing: '0.2em' }}
                  >
                    LAVAAL
                  </span>
                </div>
                <p className="text-eyebrow mb-1" style={{ color: 'var(--color-secondary)' }}>
                  {t('Official Partner')}
                </p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {t('Trusted Aluminium Accessory Solutions')}
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem' }}>
                <span
                  className="flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase"
                  style={{ color: 'var(--color-secondary)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-secondary)' }} />
                  {t('Active Partnership')}
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Right — partner description */}
          <FadeIn delay={0.1} className="lg:col-span-8">
            <div className="p-10 lg:p-12 flex flex-col justify-between h-full" style={{ backgroundColor: 'var(--color-background)' }}>
              <div>
                <p className="text-eyebrow mb-5" style={{ color: 'var(--color-muted)' }}>
                  {t('About LAVAAL International')}
                </p>
                <p className="text-body mb-5" style={{ color: 'var(--color-muted)', maxWidth: '56ch', lineHeight: 1.75 }}>
                  {t('SABIX International is partnered with LAVAAL International, strengthening its ability to provide trusted aluminium accessory solutions to projects and businesses.')}
                </p>
                <p className="text-body mb-8" style={{ color: 'var(--color-muted)', maxWidth: '56ch', lineHeight: 1.75 }}>
                  {t("Through this partnership, SABIX International extends its aluminium accessory portfolio to include LAVAAL's trusted product range — delivering greater choice, higher quality, and more reliable supply for every project requirement.")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {lavaalTagKeys.map((key) => (
                    <span
                      key={key}
                      className="text-[11px] font-medium tracking-[0.06em] px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-muted)]"
                    >
                      {t(key)}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex gap-4 flex-wrap">
                <Button to="/partnerships" variant="primary" size="md" arrow id="aluminium-lavaal-partnerships-cta">
                  {t('View All Partnerships')}
                </Button>
                <Button href="#quote" variant="ghost" size="md" id="aluminium-lavaal-quote-cta">
                  {t('Request a Quote')}
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ── Applications ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-eyebrow-accent mb-5">{t('Applications')}</p>
            <h2 className="text-title text-white mb-6">
              {t('From commercial façades to residential installations.')}
            </h2>
            <p className="text-body mb-8" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '48ch' }}>
              {t('Aluminium and glass accessories are required across commercial towers, retail fit-outs, residential buildings, industrial facilities and government projects. SABIX sources hardware that matches your application and specification.')}
            </p>
            <div className="flex flex-wrap gap-2">
              {applicationTagKeys.map((key) => (
                <span key={key} className="text-[11px] font-medium px-3 py-1.5 text-white/55" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                  {t(key)}
                </span>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ImageReveal
              src="/assets/images/glass-hardware.jpg"
              alt="Architectural glass hardware installation"
              aspectRatio="4/3"
              containerClassName="w-full"
            />
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ── Sourcing Support ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <FadeIn className="lg:col-span-5">
            <SectionHeading
              eyebrow={t('Sourcing Support')}
              title={t('Not finding what you need?')}
              description={t('SABIX handles project-specific sourcing. If a standard catalogue does not cover your requirement, contact us with your specification and our team will work to source the appropriate product.')}
            />
            <div className="mt-10">
              <Button href="#quote" variant="primary" arrow size="md" id="aluminium-sourcing-cta">
                {t('Describe your requirement')}
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6">
            {sourcingStepKeys.map((step, i) => (
              <div key={i} className="flex gap-5 items-start py-5 border-b border-[var(--color-border)]">
                <span className="text-index text-[var(--color-secondary)] flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-subheading text-base font-semibold mb-1">{t(step.labelKey)}</h3>
                  <p className="text-sm text-[var(--color-muted)]">{t(step.descKey)}</p>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <CTASection
      id="aluminium-page-cta"
      eyebrow={t('Aluminium & Glass Accessories')}
      headline={t('Have a specific requirement?')}
      subheadline={t("Let's source it.")}
      body={t('Tell us what your project needs. Standard hardware, project-specific items, or volume requirements — our team will work to supply the appropriate solution.')}
      primaryLabel={t('Request a Quote')}
      primaryHref="#quote"
      secondaryLabel={t('View all categories')}
      secondaryTo="/"
    />
  </>
  );
};

export default AluminiumGlassAccessories;
