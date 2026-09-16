/**
 * Tools & Hardware — Route: /tools-hardware
 */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import ImageReveal from '../components/ImageReveal';
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

const category = getCategoryBySlug('tools-hardware');

const ToolsHardware = () => (
  <>
    {/* ── Hero ── */}
    <section
      className="relative flex items-end"
      style={{ backgroundColor: 'var(--color-primary)', minHeight: '70vh', paddingTop: '7rem' }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/assets/images/tools-hardware.jpg"
          alt=""
          loading="eager"
          className="w-full h-full object-cover"
          style={{ opacity: 0.25, objectPosition: 'center' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(36,36,36,0.98) 0%, rgba(36,36,36,0.5) 60%, rgba(36,36,36,0.15) 100%)' }} />
      </div>

      <div className="container relative z-10 pb-16">
        <motion.p className="text-eyebrow mb-5" style={{ color: 'var(--color-secondary)' }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {category.number} — {category.accentLabel}
        </motion.p>
        <motion.h1 className="text-headline text-white mb-6" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
          {category.title}
        </motion.h1>
        <motion.p className="text-body-lg mb-8" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '56ch' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          {category.description}
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          <Button href="#quote" variant="secondary" arrow size="md" id="tools-hero-cta">
            Request a Quote
          </Button>
        </motion.div>
      </div>
    </section>

    {/* ── Product Families ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container section-padding">
        <FadeIn className="mb-14">
          <SectionHeading
            eyebrow="Product Families"
            title="Tools and hardware for industrial requirements."
            description="From hand tools to factory hardware, SABIX supplies the tools and components your operations and projects require."
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {category.families.map((family, i) => (
            <FadeIn key={family.id} delay={i * 0.05}>
              <div className="p-10 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-surface)', minHeight: 200 }}>
                <span className="text-index text-[var(--color-secondary)]">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-subheading text-base font-semibold">{family.name}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{family.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── Industrial Focus ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn delay={0.1}>
            <ImageReveal
              src="/assets/images/international-supply.jpg"
              alt="Industrial supply warehouse"
              aspectRatio="4/3"
              containerClassName="w-full"
            />
          </FadeIn>
          <FadeIn>
            <p className="text-eyebrow text-[var(--color-muted)] mb-5">Industrial Focus</p>
            <h2 className="text-title mb-6">
              Supporting operations and installations.
            </h2>
            <p className="text-body text-[var(--color-muted)] mb-8" style={{ maxWidth: '48ch' }}>
              Tools and hardware are required across installation sites, factory floors and
              project worksites. SABIX provides supply solutions for operational and project
              requirements — sourced to match your specification.
            </p>
            <Button href="#quote" variant="ghost" arrow size="md" id="tools-industrial-cta">
              Describe your requirement
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <CTASection
      id="tools-page-cta"
      eyebrow="Tools & Hardware"
      headline="Have a specific requirement?"
      body="Tell us the tools or hardware your project or operation requires. Our team will work to source and supply the appropriate solution."
      primaryLabel="Request a Quote"
      primaryHref="#quote"
      secondaryLabel="Back to all categories"
      secondaryTo="/"
    />
  </>
);

export default ToolsHardware;
