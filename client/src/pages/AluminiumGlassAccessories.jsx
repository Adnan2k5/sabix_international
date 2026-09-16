/**
 * Aluminium & Glass Accessories — Route: /aluminium-glass-accessories
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

const category = getCategoryBySlug('aluminium-glass-accessories');

const AluminiumGlassAccessories = () => (
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
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(36,36,36,0.98) 0%, rgba(36,36,36,0.5) 60%, rgba(36,36,36,0.15) 100%)' }} />
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
          {category.title}
        </motion.h1>
        <motion.p
          className="text-body-lg mb-8"
          style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '56ch' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {category.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <Button href="#quote" variant="secondary" arrow size="md" id="aluminium-hero-cta">
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
            title="What we supply."
            description="The following product families are illustrative of the types of aluminium and glass hardware SABIX sources and supplies. Contact us with your specific requirement."
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {category.families.map((family, i) => (
            <FadeIn key={family.id} delay={i * 0.04}>
              <div className="p-8 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-surface)', minHeight: 180 }}>
                <span className="text-index text-[var(--color-secondary)]">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-subheading text-base font-semibold">{family.name}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{family.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── Applications ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-eyebrow-accent mb-5">Applications</p>
            <h2 className="text-title text-white mb-6">
              From commercial façades to residential installations.
            </h2>
            <p className="text-body mb-8" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '48ch' }}>
              Aluminium and glass accessories are required across commercial towers, retail
              fit-outs, residential buildings, industrial facilities and government projects.
              SABIX sources hardware that matches your application and specification.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Commercial Buildings', 'Residential Projects', 'Government Facilities', 'Retail Fit-outs', 'Industrial Premises'].map((app) => (
                <span key={app} className="text-[11px] font-medium px-3 py-1.5 text-white/55" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                  {app}
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
              eyebrow="Sourcing Support"
              title="Not finding what you need?"
              description="SABIX handles project-specific sourcing. If a standard catalogue does not cover your requirement, contact us with your specification and our team will work to source the appropriate product."
            />
            <div className="mt-10">
              <Button href="#quote" variant="primary" arrow size="md" id="aluminium-sourcing-cta">
                Describe your requirement
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6">
            {[
              { label: 'Share your spec', desc: 'Send us your product specification, drawing, or sample reference.' },
              { label: 'We source it', desc: 'Our team identifies and sources from trusted suppliers across international markets.' },
              { label: 'You receive it', desc: 'We coordinate delivery to your project or facility.' },
            ].map((step, i) => (
              <div key={i} className="flex gap-5 items-start py-5 border-b border-[var(--color-border)]">
                <span className="text-index text-[var(--color-secondary)] flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-subheading text-base font-semibold mb-1">{step.label}</h3>
                  <p className="text-sm text-[var(--color-muted)]">{step.desc}</p>
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
      eyebrow="Aluminium & Glass Accessories"
      headline="Have a specific requirement?"
      subheadline="Let's source it."
      body="Tell us what your project needs. Standard hardware, project-specific items, or volume requirements — our team will work to supply the appropriate solution."
      primaryLabel="Request a Quote"
      primaryHref="#quote"
      secondaryLabel="View all categories"
      secondaryTo="/"
    />
  </>
);

export default AluminiumGlassAccessories;
