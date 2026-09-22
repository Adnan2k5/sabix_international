/**
 * Products — Route: /products
 * Overview of all three SABIX product domains.
 * Content driven from src/data/pages.js → products
 */
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import ImageReveal from '../components/ImageReveal';
import { products } from '../data/pages';
import { categories } from '../data/categories';

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

const Products = () => {
  const { t } = useTranslation();
  return (
  <>
    {/* ── Hero ── */}
    <section
      className="relative flex items-end"
      style={{ backgroundColor: 'var(--color-primary)', minHeight: '55vh', paddingTop: '7rem' }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/assets/images/aluminium-accessories.jpg"
          alt=""
          loading="eager"
          className="w-full h-full object-cover"
          style={{ opacity: 0.25, objectPosition: 'center' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(36,36,36,1) 0%, rgba(36,36,36,0.6) 60%, rgba(36,36,36,0.1) 100%)' }}
        />
      </div>
      <div className="container relative z-10 pb-16">
        <motion.p className="text-eyebrow mb-5" style={{ color: 'var(--color-secondary)' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {t(products.hero.eyebrow)}
        </motion.p>
        <motion.h1 className="text-headline text-white mb-5" style={{ maxWidth: '24ch' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
          {t(products.hero.headline)}
        </motion.h1>
        <motion.p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '56ch' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          {t(products.hero.body)}
        </motion.p>
      </div>
    </section>

    {/* ── Intro ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container section-padding">
        <FadeIn className="mb-16 max-w-3xl">
          <SectionHeading
            eyebrow={t(products.intro.eyebrow)}
            title={t(products.intro.headline)}
            description={t(products.intro.body)}
          />
        </FadeIn>

        {/* Category Cards */}
        <div className="flex flex-col divide-y divide-[var(--color-border)]">
          {categories.map((cat, i) => (
            <FadeIn key={cat.id} delay={i * 0.06}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? '' : ''}`}>
                {/* Image — alternates side on desktop */}
                <div className={i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                  <ImageReveal
                    src={`/assets/images/${cat.id === 'aluminium-glass-accessories' ? 'aluminium-accessories' : cat.id}.jpg`}
                    alt={cat.imageAlt}
                    aspectRatio="16/9"
                    containerClassName="w-full"
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col justify-center p-10 lg:p-14 ${i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                  style={{ backgroundColor: 'var(--color-surface)' }}
                >
                  <span className="text-index text-[var(--color-secondary)] mb-5 block">{cat.number} / 03</span>
                  <h2 className="text-title mb-3" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>{t(cat.title)}</h2>
                  <p className="text-body text-[var(--color-muted)] mb-6 text-sm leading-relaxed" style={{ maxWidth: '44ch' }}>{t(cat.description)}</p>

                  {/* Families */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {cat.families.slice(0, 3).map((f) => (
                      <span key={f.id} className="text-[11px] font-medium px-2.5 py-1 border border-[var(--color-border)] text-[var(--color-muted)]">
                        {t(f.name)}
                      </span>
                    ))}
                    {cat.families.length > 3 && (
                      <span className="text-[11px] font-medium px-2.5 py-1 text-[var(--color-muted)]">+{cat.families.length - 3} {t("more")}</span>
                    )}
                  </div>

                  <Link
                    to={cat.slug}
                    className="inline-flex items-center gap-2 group text-[0.8rem] font-semibold tracking-[0.06em] uppercase text-[var(--color-text)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    <span>{t("Explore")} {t(cat.title)}</span>
                    <ArrowRight size={13} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── Features / Why SABIX ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="container section-padding">
        <FadeIn className="mb-14">
          <SectionHeading
            eyebrow={t("Why SABIX")}
            title={t("A different approach to industrial supply.")}
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
          {products.features.map((f, i) => (
            <FadeIn key={f.icon} delay={i * 0.06}>
              <div className="p-10 flex flex-col gap-4" style={{ backgroundColor: 'transparent' }}>
                <span className="text-index" style={{ color: 'var(--color-secondary)' }}>{f.icon}</span>
                <h3 className="text-subheading text-base font-semibold text-white">{t(f.title)}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{t(f.description)}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <CTASection
      id="products-page-cta"
      eyebrow={t("Product enquiries")}
      headline={t(products.cta.headline)}
      body={t(products.cta.body)}
      primaryLabel={t("Request a Quote")}
      primaryTo="/contact"
      secondaryLabel={t("About SABIX")}
      secondaryTo="/about"
    />
  </>
  );
};

export default Products;
