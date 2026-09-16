/**
 * Home — SABIX International
 * Homepage with 8 sections: Hero, Domains, Values, Supply Visual,
 * Customer Types, International Presence, LAVAAL Partnership, CTA.
 */
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import ImageReveal from '../components/ImageReveal';
import QuoteForm from '../components/QuoteForm';
import { categories } from '../data/categories';
import { values } from '../data/values';
import { customerTypes, procurementProblem, procurementSolution } from '../data/customerTypes';
import { company } from '../data/company';

/* ── Simple scroll-triggered fade-in ── */
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

/* ── Hero ── */
const Hero = () => (
  <section
    id="hero"
    aria-label="Hero"
    className="relative min-h-screen flex items-end"
    style={{ backgroundColor: 'var(--color-primary)' }}
  >
    {/* Background image — lighter architectural glass building */}
    <div className="absolute inset-0 overflow-hidden">
      <img
        src="/assets/images/hero-industrial.jpg"
        alt=""
        loading="eager"
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center 20%', opacity: 0.55 }}
      />
      {/* Overlay: minimal at top (nav stays readable over lighter image),
          strong at bottom so hero text stays sharp */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(28,28,28,0.97) 0%, rgba(28,28,28,0.75) 35%, rgba(28,28,28,0.35) 65%, rgba(28,28,28,0.15) 100%)',
        }}
      />
    </div>

    {/* Content */}
    <div className="container relative z-10 pb-20 pt-40">
      <div className="max-w-3xl">
        {/* Eyebrow */}
        <motion.p
          className="text-eyebrow mb-8"
          style={{ color: 'var(--color-secondary)' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          International Industrial Supply
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="text-display text-white mb-6"
          style={{ maxWidth: '18ch' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Everything your project needs.{' '}
          <span style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>
            From one source.
          </span>
        </motion.h1>

        {/* Body */}
        <motion.p
          className="text-body-lg mb-10"
          style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '55ch' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          SABIX International supplies aluminium, glass hardware, tools, spare parts and
          project-specific requirements to contractors, factories, government projects and
          businesses across international markets.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button
            href="#products"
            variant="secondary"
            size="lg"
            arrow
            id="hero-explore-cta"
          >
            Explore Products
          </Button>
          <Button
            href="#quote"
            variant="ghost-light"
            size="lg"
            id="hero-quote-cta"
          >
            Request a Quote
          </Button>
        </motion.div>

        {/* Location metadata */}
        <motion.div
          className="flex items-center gap-2 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="text-meta" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Riyadh · Saudi Arabia &nbsp;/&nbsp; United States &nbsp;/&nbsp; India
          </span>
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      aria-hidden="true"
    >
      <div className="w-px h-12 bg-white/20" />
      <span className="text-meta rotate-90 origin-center" style={{ color: 'rgba(255,255,255,0.25)' }}>Scroll</span>
    </motion.div>
  </section>
);

/* ── Three Core Domains ── */
const DomainsSection = () => (
  <section id="products" className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
    <div className="container section-padding">
      <FadeIn>
        <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
          <SectionHeading
            eyebrow="Product Domains"
            title="Three areas of supply."
            description="SABIX covers aluminium and glass accessories, tools and hardware, and spare parts — sourced and supplied as one coordinated requirement."
          />
        </div>
      </FadeIn>

      {/* Domain panels */}
      <div className="flex flex-col divide-y divide-[var(--color-border)]">
        {categories.map((cat, i) => (
          <DomainPanel key={cat.id} category={cat} index={i} reversed={i === 1} />
        ))}
      </div>
    </div>
  </section>
);

const DomainPanel = ({ category, index, reversed }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${reversed ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Image */}
      <div className={`order-1 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <ImageReveal
          src={`/assets/images/${category.id === 'aluminium-glass-accessories' ? 'aluminium-accessories' : category.id}.jpg`}
          alt={category.imageAlt}
          aspectRatio="4/3"
          containerClassName="w-full"
        />
      </div>

      {/* Content */}
      <div
        className={`order-2 ${reversed ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center p-10 lg:p-16`}
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        <span className="text-index text-[var(--color-muted)] mb-6 block">{category.number} / 03</span>

        <h2 className="text-title mb-4">{category.title}</h2>

        <p className="text-body text-[var(--color-muted)] mb-8" style={{ maxWidth: '42ch' }}>
          {category.description}
        </p>

        {/* Product family tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {category.families.slice(0, 4).map((f) => (
            <span
              key={f.id}
              className="text-[11px] font-medium tracking-[0.06em] px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-muted)]"
            >
              {f.name}
            </span>
          ))}
          {category.families.length > 4 && (
            <span className="text-[11px] font-medium tracking-[0.06em] px-3 py-1.5 text-[var(--color-muted)]">
              +{category.families.length - 4} more
            </span>
          )}
        </div>

        <Link
          to={category.slug}
          className="inline-flex items-center gap-2 group text-[0.8rem] font-semibold tracking-[0.06em] uppercase text-[var(--color-text)] hover:text-[var(--color-secondary)] transition-colors"
          aria-label={`Explore ${category.title}`}
        >
          <span>Explore category</span>
          <ArrowRight
            size={14}
            strokeWidth={1.75}
            className="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </motion.div>
  );
};

/* ── Value Proposition ── */
const ValuesSection = () => (
  <section id="solutions" className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
    <div className="container section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left — heading */}
        <FadeIn className="lg:col-span-4">
          <SectionHeading
            eyebrow="Why SABIX"
            title={<>One supplier.<br />Multiple requirements.<br />Less complexity.</>}
          />
        </FadeIn>

        {/* Right — values */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y divide-[var(--color-border)] sm:divide-y-0">
            {values.map((value, i) => (
              <FadeIn key={value.id} delay={0.05 * i}>
                <div
                  className="py-8 pr-8 border-b border-[var(--color-border)] sm:border-r last:border-r-0 sm:last:border-r sm:[&:nth-child(2n)]:border-r-0"
                >
                  <span className="text-index text-[var(--color-secondary)] mb-4 block">{value.number}</span>
                  <h3 className="text-subheading mb-3">{value.title}</h3>
                  <p className="text-body text-[var(--color-muted)] leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── Supply Breadth ── */
const SupplySection = () => {
  const supplyItems = [
    'Aluminium Profiles', 'Glass Hardware', 'Handles & Hinges',
    'Glass Fittings', 'Factory Hardware', 'Installation Tools',
    'Spare Parts', 'Project Components',
  ];

  return (
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — image collage */}
          <FadeIn className="grid grid-cols-2 gap-3">
            <ImageReveal
              src="/assets/images/aluminium-accessories.jpg"
              alt="Aluminium hardware accessories"
              aspectRatio="1/1"
              containerClassName="w-full"
            />
            <ImageReveal
              src="/assets/images/glass-hardware.jpg"
              alt="Glass hardware fittings"
              aspectRatio="1/1"
              containerClassName="w-full mt-6"
            />
            <ImageReveal
              src="/assets/images/tools-hardware.jpg"
              alt="Industrial tools"
              aspectRatio="1/1"
              containerClassName="w-full -mt-6"
            />
            <ImageReveal
              src="/assets/images/spare-parts.jpg"
              alt="Mechanical spare parts"
              aspectRatio="1/1"
              containerClassName="w-full"
            />
          </FadeIn>

          {/* Right — text */}
          <FadeIn delay={0.1}>
            <p className="text-eyebrow-accent mb-6">Supply Range</p>
            <h2 className="text-title text-white mb-4">
              More than one requirement.<br />
              <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>From one source.</span>
            </h2>
            <p className="text-body mb-10" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '46ch' }}>
              SABIX supplies across multiple categories — so your project doesn't have to
              coordinate with multiple vendors for different requirements.
            </p>

            {/* Category list */}
            <div className="flex flex-wrap gap-2 mb-10">
              {supplyItems.map((item) => (
                <span
                  key={item}
                  className="text-[11px] font-medium tracking-[0.06em] px-3 py-1.5 text-white/60"
                  style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  {item}
                </span>
              ))}
            </div>

            <Button to="/aluminium-glass-accessories" variant="secondary" arrow size="md" id="supply-section-cta">
              View product categories
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

/* ── Customer Types ── */
const CustomerSection = () => (
  <section className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
    <div className="container section-padding">
      <FadeIn>
        <SectionHeading
          eyebrow="Who we serve"
          title="Built around the way projects actually work."
          description="SABIX works with procurement teams, contractors, factories and government projects — where coordinating multiple suppliers adds unnecessary complexity."
          className="mb-16 max-w-2xl"
        />
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Customer types list */}
        <FadeIn>
          <div className="flex flex-col divide-y divide-[var(--color-border)]">
            {customerTypes.map((ct) => (
              <div key={ct.id} className="py-5 flex items-start gap-5 group">
                <span
                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-subheading text-sm font-semibold mb-1">{ct.title}</h3>
                  <p className="text-body text-sm text-[var(--color-muted)]">{ct.description}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Procurement contrast */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {/* Problem column */}
            <div className="p-8" style={{ backgroundColor: 'var(--color-background)' }}>
              <p className="text-eyebrow text-[var(--color-muted)] mb-6">Without SABIX</p>
              <div className="flex flex-col gap-4">
                {procurementProblem.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-[var(--color-muted)] mt-0.5 text-xs">↓</span>
                    <span className="text-sm text-[var(--color-muted)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution column */}
            <div className="p-8" style={{ backgroundColor: 'var(--color-primary)' }}>
              <p className="text-eyebrow mb-6" style={{ color: 'var(--color-secondary)' }}>With SABIX</p>
              <div className="flex flex-col gap-4">
                {procurementSolution.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 text-xs" style={{ color: 'var(--color-secondary)' }}>↓</span>
                    <span className="text-sm text-white/75">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ── International Presence ── */
const PresenceSection = () => {
  const hq = company.headquarters;
  const branches = company.branches;
  const allLocations = [hq, ...branches];

  return (
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container section-padding">
        <FadeIn className="mb-16">
          <SectionHeading
            eyebrow="International Presence"
            title="Headquartered in Riyadh. Present internationally."
            description="With offices in Saudi Arabia, the United States and India, SABIX maintains the reach to source and supply across international markets."
          />
        </FadeIn>

        {/* Location grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {allLocations.map((loc, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div
                className="p-10 flex flex-col justify-between min-h-[280px]"
                style={{ backgroundColor: i === 0 ? 'var(--color-primary)' : 'var(--color-background)' }}
              >
                <div>
                  <span
                    className="text-eyebrow block mb-8"
                    style={{ color: i === 0 ? 'rgba(255,255,255,0.35)' : 'var(--color-muted)' }}
                  >
                    {loc.label}
                  </span>
                  <h3
                    className="text-title mb-1"
                    style={{
                      color: i === 0 ? '#ffffff' : 'var(--color-text)',
                      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                      fontWeight: 300,
                    }}
                  >
                    {loc.city || loc.country}
                  </h3>
                  <p
                    className="text-body text-sm"
                    style={{ color: i === 0 ? 'rgba(255,255,255,0.45)' : 'var(--color-muted)' }}
                  >
                    {loc.country}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <MapPin
                    size={12}
                    strokeWidth={1.5}
                    style={{ color: i === 0 ? 'var(--color-secondary)' : 'var(--color-muted)' }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-meta"
                    style={{ color: i === 0 ? 'rgba(255,255,255,0.25)' : 'var(--color-muted)' }}
                  >
                    {i === 0
                      ? `${hq.coordinates.lat.toFixed(4)}°N, ${hq.coordinates.lng.toFixed(4)}°E`
                      : loc.country}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── LAVAAL Partnership ── */
const PartnershipSection = () => {
  const { partnership } = company;

  return (
    <section id="partnership" className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <FadeIn className="lg:col-span-5">
            <p className="text-eyebrow text-[var(--color-muted)] mb-4">Partnership</p>
            <h2 className="text-title mb-6">
              Strengthened by trusted industry partnerships.
            </h2>
            <p className="text-body text-[var(--color-muted)] leading-relaxed" style={{ maxWidth: '46ch' }}>
              {partnership.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7 lg:col-start-7">
            <div
              className="flex flex-col items-center justify-center p-12 border border-[var(--color-border)]"
              style={{ backgroundColor: 'var(--color-surface)', minHeight: 240 }}
            >
              {partnership.logoPlaceholder ? (
                <div className="text-center">
                  {/* Logo placeholder — replace when official asset is provided */}
                  <div
                    className="inline-block px-8 py-4 border-2 border-[var(--color-border)] mb-4"
                    aria-label="LAVAAL International logo placeholder"
                  >
                    <span
                      className="text-[1.4rem] font-bold tracking-[0.18em] uppercase"
                      style={{ color: 'var(--color-muted)', letterSpacing: '0.2em' }}
                    >
                      LAVAAL
                    </span>
                  </div>
                  <p className="text-meta text-center mt-2">
                    [Replace with official LAVAAL logo — see{' '}
                    <code className="text-[10px]">src/data/company.js</code>]
                  </p>
                </div>
              ) : (
                <img
                  src={partnership.logoSrc}
                  alt={`${partnership.name} logo`}
                  className="max-h-20 w-auto object-contain"
                />
              )}

              <div
                className="mt-8 pt-8 w-full text-center"
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                <p className="text-subheading text-sm font-semibold">{partnership.name}</p>
                <p className="text-meta mt-1">{partnership.tagline}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

/* ── Quote Section ── */
const QuoteSection = () => (
  <section id="quote" className="section-border-top" style={{ backgroundColor: 'var(--color-surface)' }}>
    <div className="container section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <FadeIn className="lg:col-span-4">
          <SectionHeading
            eyebrow="Get in touch"
            title="Tell us what your project needs."
            description="Our team will work with you to identify and supply the appropriate solution — from standard hardware to project-specific requirements."
          />
        </FadeIn>
        <FadeIn delay={0.1} className="lg:col-span-7 lg:col-start-6">
          <QuoteForm />
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ── Main Page ── */
const Home = () => (
  <>
    <Hero />
    <DomainsSection />
    <ValuesSection />
    <SupplySection />
    <CustomerSection />
    <PresenceSection />
    <PartnershipSection />
    <QuoteSection />
    <CTASection
      id="home-final-cta"
      eyebrow="Ready to source"
      headline="Have a requirement?"
      subheadline="Let's source it."
      body="Tell us what your project needs. Our team will work with you to identify and supply the appropriate solution."
      primaryLabel="Request a Quote"
      primaryHref="#quote"
      secondaryLabel="Contact SABIX"
      secondaryTo="/contact"
    />
  </>
);

export default Home;
