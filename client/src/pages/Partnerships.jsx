/**
 * Partnerships — Route: /partnerships
 * Dedicated partnerships page showcasing LAVAAL and future partners.
 */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { company } from '../data/company';
import lavaalLogo from '../assets/lavaal-logo.jpg';

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

const partnershipBenefitKeys = [
  'Access to premium aluminium accessory product lines',
  'Enhanced sourcing capability for specialised hardware',
  'Trusted supply chain for volume and project requirements',
  'Joint commitment to quality and operational reliability',
];

const statsKeys = [
  { labelKey: 'Active Partners', valueKey: '1+' },
  { labelKey: 'Product Areas Covered', valueKey: 'Multiple' },
  { labelKey: 'Years of Collaboration', valueKey: '10+' },
  { labelKey: 'Markets Served Together', valueKey: 'Global' },
];

const lavaalPointKeys = [
  'Trusted aluminium accessory solutions',
  'Extended product portfolio for complex requirements',
  'Consistent quality and reliable supply',
  'Collaborative project support',
];

const Partnerships = () => {
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
            {t('Strategic Alliances')}
          </motion.p>
          <motion.h1
            className="text-headline text-white mb-5"
            style={{ maxWidth: '22ch' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            {t('Partnerships built on trust and expertise.')}
          </motion.h1>
          <motion.p
            className="text-body-lg"
            style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '52ch' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('SABIX International cultivates strategic partnerships with industry-leading brands to expand our sourcing capabilities and deliver superior value to every project we serve.')}
          </motion.p>
        </div>
      </section>

      {/* ── LAVAAL Partner Card ── */}
      <section className="section-border-top" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container section-padding">
          <FadeIn className="mb-14">
            <SectionHeading
              eyebrow={t('Featured Partner')}
              title={t('Our trusted industry partners.')}
            />
          </FadeIn>

          {/* LAVAAL Card */}
          <FadeIn delay={0.05}>
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden"
              style={{ border: '1px solid var(--color-border)' }}
            >
              {/* Left — dark brand panel */}
              <div
                className="lg:col-span-5 flex flex-col justify-between p-10 lg:p-14 min-h-[360px]"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                {/* Logo area */}
                <div>
                  <div
                    className="inline-flex items-center justify-center px-6 py-4 mb-8"
                    style={{ border: '1px solid rgba(255,255,255,0.12)', backgroundColor: 'rgba(255,255,255,0.04)' }}
                  >
                    <img
                      src={lavaalLogo}
                      alt="LAVAAL International"
                      style={{ height: '56px', width: 'auto', objectFit: 'contain' }}
                    />
                  </div>
                  <p
                    className="text-eyebrow mb-2"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    {t('Aluminium Accessories Partner')}
                  </p>
                  <p
                    className="font-light"
                    style={{
                      color: 'rgba(255,255,255,0.85)',
                      fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {t('LAVAAL International')}
                  </p>
                  <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {t(company.partnership.tagline)}
                  </p>
                </div>

                <div className="mt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                  <span
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                    {t('Active Partnership')}
                  </span>
                </div>
              </div>

              {/* Right — content */}
              <div
                className="lg:col-span-7 p-10 lg:p-14 flex flex-col justify-between"
                style={{ backgroundColor: 'var(--color-background)' }}
              >
                <div>
                  <p className="text-eyebrow mb-6" style={{ color: 'var(--color-muted)' }}>
                    {t('About the Partnership')}
                  </p>
                  <p className="text-body mb-6" style={{ color: 'var(--color-muted)', maxWidth: '52ch', lineHeight: 1.75 }}>
                    {t('SABIX International is partnered with LAVAAL International, strengthening its ability to provide trusted aluminium accessory solutions to projects and businesses.')}
                  </p>
                  <p className="text-body mb-10" style={{ color: 'var(--color-muted)', maxWidth: '52ch', lineHeight: 1.75 }}>
                    {t('Through this strategic alliance, SABIX is able to offer a broader range of aluminium accessory solutions — ensuring that projects receive the most suitable products, backed by trusted quality and supply reliability.')}
                  </p>

                  <div className="flex flex-col gap-3 mb-10">
                    {lavaalPointKeys.map((key, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <ArrowRight
                          size={12}
                          strokeWidth={2}
                          style={{ color: 'var(--color-secondary)', flexShrink: 0 }}
                        />
                        <span className="text-sm" style={{ color: 'var(--color-muted)' }}>{t(key)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    to="/aluminium-glass-accessories"
                    variant="primary"
                    arrow
                    size="md"
                    id="partnerships-lavaal-explore-cta"
                  >
                    {t('Explore Aluminium Products')}
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Future partners placeholder */}
          <FadeIn delay={0.1} className="mt-4">
            <div
              className="p-10 flex flex-col items-center justify-center text-center min-h-[160px]"
              style={{
                border: '1px dashed var(--color-border)',
                backgroundColor: 'var(--color-surface)',
              }}
            >
              <p className="text-eyebrow mb-2" style={{ color: 'var(--color-muted)' }}>{t('More Partners')}</p>
              <p className="text-sm" style={{ color: 'var(--color-muted)', maxWidth: '38ch' }}>
                {t('SABIX continues to build strategic alliances across industrial supply sectors. More partnerships will be announced here as they are established.')}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Partnership Philosophy ── */}
      <section className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <FadeIn className="lg:col-span-5">
              <SectionHeading
                eyebrow={t('Our Approach')}
                title={t('Stronger together. Better for your project.')}
                description={t('Every partnership SABIX establishes is chosen to directly benefit our clients — extending our product reach, deepening our technical expertise, and reinforcing our ability to supply the right product for every requirement.')}
              />
              <div className="mt-10 flex flex-col gap-3">
                {partnershipBenefitKeys.map((key, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      strokeWidth={1.5}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: 'var(--color-secondary)' }}
                    />
                    <span className="text-sm text-[var(--color-muted)]">{t(key)}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <div
                className="p-10 lg:p-14"
                style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <p className="text-eyebrow mb-8" style={{ color: 'var(--color-muted)' }}>
                  {t('Partnerships at a glance')}
                </p>
                <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
                  {statsKeys.map((stat, i) => (
                    <div
                      key={i}
                      className="p-6 flex flex-col gap-1"
                      style={{ backgroundColor: 'var(--color-background)' }}
                    >
                      <p
                        className="font-light"
                        style={{
                          fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                          letterSpacing: '-0.03em',
                          color: 'var(--color-text)',
                          lineHeight: 1,
                        }}
                      >
                        {t(stat.valueKey)}
                      </p>
                      <p className="text-eyebrow" style={{ color: 'var(--color-muted)' }}>
                        {t(stat.labelKey)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        id="partnerships-page-cta"
        eyebrow={t('Work with us')}
        headline={t('Interested in partnering with SABIX?')}
        subheadline={t("Let's talk.")}
        body={t("If you represent an industrial supply brand and are interested in exploring a strategic partnership with SABIX International, we'd like to hear from you.")}
        primaryLabel={t('Contact Our Team')}
        primaryTo="/contact"
        secondaryLabel={t('View Our Products')}
        secondaryTo="/"
      />
    </>
  );
};

export default Partnerships;
