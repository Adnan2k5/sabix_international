/**
 * Home — SABIX International
 * Homepage sections: Hero, Punchline, Domains, Values, Supply Visual,
 * Customer Types, International Presence, CTA.
 */
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MapPin, Award, Globe, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
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
const Hero = () => {
  const { t } = useTranslation();
  return (
  <section
    id="hero"
    aria-label="Hero"
    className="relative min-h-screen flex items-end"
    style={{ backgroundColor: 'var(--color-primary)' }}
  >
    {/* KAFD Background image */}
    <div className="absolute inset-0 overflow-hidden">
      <img
        src="/assets/images/hero-kafd.jpg"
        alt=""
        loading="eager"
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center center', opacity: 0.55, transform: 'scaleX(-1)' }}
      />
      {/* Overlay: strong at bottom so hero text stays sharp */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(7,7,39,0.97) 0%, rgba(7,7,39,0.75) 35%, rgba(7,7,39,0.35) 65%, rgba(7,7,39,0.10) 100%)',
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
          {t("International Industrial Supply")}
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="text-display text-white mb-6"
          style={{ maxWidth: '18ch' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {t("Everything your project needs.")}{' '}
          <span style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>
            {t("From one source.")}
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
          {t("SABIX International supplies aluminium, glass hardware, tools, spare parts and project-specific requirements to contractors, factories, government projects and businesses across international markets.")}
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
            {t("Explore Products")}
          </Button>
          <Button
            href="#quote"
            variant="ghost-light"
            size="lg"
            id="hero-quote-cta"
          >
            {t("Request a Quote")}
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
            {t("Riyadh · Saudi Arabia \u00a0/\u00a0 United States \u00a0/\u00a0 India")}
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
      <span className="text-meta rotate-90 origin-center" style={{ color: 'rgba(255,255,255,0.25)' }}>{t("Scroll")}</span>
    </motion.div>
  </section>
  );
};

/* ── Punchline / 30 Years Section ── */
const PunchlineSection = () => {
  const { t } = useTranslation();
  const stats = [
    { icon: Award,      value: '30+',   label: t('Years of Excellence')  },
    { icon: Globe,      value: null,    label: t('Global Market Reach')  },
    { icon: TrendingUp, value: '1000+', label: t('Projects Supplied')   },
  ];

  return (
    <section
      className="section-border-top"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — punchline text */}
          <FadeIn>
            <p className="text-eyebrow-accent mb-6">{t("Who We Are")}</p>
            <h2 className="text-title mb-6" style={{ maxWidth: '20ch' }}>
              {t("Trusted. Proven.")}{' '}
              <span style={{ color: 'var(--color-secondary)' }}>{t("Decades of Delivery.")}</span>
            </h2>
            <div className="flex flex-col gap-4" style={{ maxWidth: '52ch' }}>
              <p className="text-body" style={{ color: 'var(--color-muted)', lineHeight: 1.75 }}>
                {t("For over three decades, SABIX International has been the single-source partner that projects and businesses rely on — delivering industrial supply solutions across aluminium, glass hardware, tools, and spare parts with precision and consistency.")}
              </p>
              <p className="text-body" style={{ color: 'var(--color-muted)', lineHeight: 1.75 }}>
                {t("Where others complicate procurement with multiple vendors, SABIX simplifies it — one trusted supplier, one coordinated requirement, zero compromise on quality.")}
              </p>
              <p className="text-body" style={{ color: 'var(--color-muted)', lineHeight: 1.75 }}>
                {t("Built on relationships, powered by reach, and driven by a relentless commitment to getting the right product to the right project — on time, every time.")}
              </p>
            </div>
          </FadeIn>

          {/* Right — stats */}
          <FadeIn delay={0.1}>
            <div
              className="grid grid-cols-1 gap-px"
              style={{ backgroundColor: 'var(--color-border)' }}
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-8 p-8"
                    style={{ backgroundColor: i === 0 ? 'var(--color-primary)' : 'var(--color-background)' }}
                  >
                  <Icon
                      size={28}
                      strokeWidth={1.25}
                      style={{ color: 'var(--color-secondary)', flexShrink: 0 }}
                    />
                    <div>
                      {stat.value ? (
                        <p
                          className="font-light"
                          style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            letterSpacing: '-0.03em',
                            lineHeight: 1,
                            color: i === 0 ? '#ffffff' : 'var(--color-text)',
                          }}
                        >
                          {stat.value}
                        </p>
                      ) : (
                        <p
                          className="font-light"
                          style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.2,
                            color: i === 0 ? '#ffffff' : 'var(--color-text)',
                          }}
                        >
                          {t("Internationally")}<br />{t("Connected")}
                        </p>
                      )}
                      <p
                        className="text-eyebrow mt-1"
                        style={{ color: i === 0 ? 'rgba(255,255,255,0.45)' : 'var(--color-muted)' }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

/* ── Areas of Expertise (formerly Three Core Domains) ── */
const DomainsSection = () => {
  const { t } = useTranslation();
  return (
  <section id="products" className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
    <div className="container section-padding">
      <FadeIn>
        <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
          <SectionHeading
            eyebrow={t("Product Domains")}
            title={t("Areas of Expertise.")}
            description={t("SABIX covers aluminium and glass accessories, tools and hardware, and spare parts — sourced and supplied as one coordinated requirement.")}
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
};

const DomainPanel = ({ category, reversed }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });
  const { t } = useTranslation();

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
        <h2 className="text-title mb-4">{t(category.title)}</h2>

        <p className="text-body text-[var(--color-muted)] mb-8" style={{ maxWidth: '42ch' }}>
          {t(category.description)}
        </p>

        {/* Product family tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {category.families.slice(0, 4).map((f) => (
            <span
              key={f.id}
              className="text-[11px] font-medium tracking-[0.06em] px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-muted)]"
            >
              {t(f.name)}
            </span>
          ))}
          {category.families.length > 4 && (
            <span className="text-[11px] font-medium tracking-[0.06em] px-3 py-1.5 text-[var(--color-muted)]">
              +{category.families.length - 4} {t("more")}
            </span>
          )}
        </div>

        <Link
          to={category.slug}
          className="inline-flex items-center gap-2 group text-[0.8rem] font-semibold tracking-[0.06em] uppercase text-[var(--color-text)] hover:text-[var(--color-secondary)] transition-colors"
          aria-label={`${t("Explore category")} ${t(category.title)}`}
        >
          <span>{t("Explore category")}</span>
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
const ValuesSection = () => {
  const { t } = useTranslation();
  return (
  <section id="solutions" className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
    <div className="container section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left — heading */}
        <FadeIn className="lg:col-span-4">
          <SectionHeading
            eyebrow={t("Why SABIX")}
            title={<>{t("One supplier.")}<br />{t("Multiple requirements.")}<br />{t("Less complexity.")}</>}
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
                  <h3 className="text-subheading mb-3">{t(value.title)}</h3>
                  <p className="text-body text-[var(--color-muted)] leading-relaxed text-sm">
                    {t(value.description)}
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
};

/* ── Supply Breadth ── */
const SupplySection = () => {
  const { t } = useTranslation();
  const supplyItems = [
    t('Aluminium Profiles'), t('Glass Hardware'), t('Handles & Hinges'),
    t('Glass Fittings'), t('Factory Hardware'), t('Installation Tools'),
    t('Spare Parts'), t('Project Components'),
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
            <p className="text-eyebrow-accent mb-6">{t("Supply Range")}</p>
            <h2 className="text-title text-white mb-4">
              {t("More than one requirement.")}<br />
              <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>{t("From one source.")}</span>
            </h2>
            <p className="text-body mb-10" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '46ch' }}>
              {t("SABIX supplies across multiple categories — so your project doesn't have to coordinate with multiple vendors for different requirements.")}
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
              {t("View product categories")}
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

/* ── Customer Types ── */
const CustomerSection = () => {
  const { t } = useTranslation();
  return (
  <section className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
    <div className="container section-padding">
      <FadeIn>
        <SectionHeading
          eyebrow={t("Who we serve")}
          title={t("Built around the way projects actually work.")}
          description={t("SABIX works with procurement teams, contractors, factories and government projects — where coordinating multiple suppliers adds unnecessary complexity.")}
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
                  <h3 className="text-subheading text-sm font-semibold mb-1">{t(ct.title)}</h3>
                  <p className="text-body text-sm text-[var(--color-muted)]">{t(ct.description)}</p>
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
              <p className="text-eyebrow text-[var(--color-muted)] mb-6">{t("Without SABIX")}</p>
              <div className="flex flex-col gap-4">
                {procurementProblem.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-[var(--color-muted)] mt-0.5 text-xs">↓</span>
                    <span className="text-sm text-[var(--color-muted)]">{t(item)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution column */}
            <div className="p-8" style={{ backgroundColor: 'var(--color-primary)' }}>
              <p className="text-eyebrow mb-6" style={{ color: 'var(--color-secondary)' }}>{t("With SABIX")}</p>
              <div className="flex flex-col gap-4">
                {procurementSolution.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 text-xs" style={{ color: 'var(--color-secondary)' }}>↓</span>
                    <span className="text-sm text-white/75">{t(item)}</span>
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
};

/* ── International Presence ── */
const PresenceSection = () => {
  const { t } = useTranslation();
  const hq = company.headquarters;
  const branches = company.branches;
  const allLocations = [hq, ...branches];

  return (
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container section-padding">
        <FadeIn className="mb-16">
          <SectionHeading
            eyebrow={t("International Presence")}
            title={t("Headquartered in Riyadh. Present internationally.")}
            description={t("With offices in Saudi Arabia, the United States and India, SABIX maintains the reach to source and supply across international markets.")}
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
                    {t(loc.label)}
                  </span>
                  <h3
                    className="text-title mb-1"
                    style={{
                      color: i === 0 ? '#ffffff' : 'var(--color-text)',
                      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                      fontWeight: 300,
                    }}
                  >
                    {t(loc.city) || t(loc.country)}
                  </h3>
                  <p
                    className="text-body text-sm"
                    style={{ color: i === 0 ? 'rgba(255,255,255,0.45)' : 'var(--color-muted)' }}
                  >
                    {t(loc.country)}
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
                      : t(loc.country)}
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

/* ── Quote Section ── */
const QuoteSection = () => {
  const { t } = useTranslation();
  return (
  <section id="quote" className="section-border-top" style={{ backgroundColor: 'var(--color-surface)' }}>
    <div className="container section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <FadeIn className="lg:col-span-4">
          <SectionHeading
            eyebrow={t("Get in touch")}
            title={t("Tell us what your project needs.")}
            description={t("Our team will work with you to identify and supply the appropriate solution — from standard hardware to project-specific requirements.")}
          />
        </FadeIn>
        <FadeIn delay={0.1} className="lg:col-span-7 lg:col-start-6">
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
  );
};

/* ── Main Page ── */
const Home = () => {
  const { t } = useTranslation();
  return (
  <>
    <Hero />
    <PunchlineSection />
    <DomainsSection />
    <ValuesSection />
    <SupplySection />
    <CustomerSection />
    <PresenceSection />
    <QuoteSection />
    <CTASection
      id="home-final-cta"
      eyebrow={t("Ready to source")}
      headline={t("Have a requirement?")}
      subheadline={t("Let's source it.")}
      body={t("Tell us what your project needs. Our team will work with you to identify and supply the appropriate solution.")}
      primaryLabel={t("Request a Quote")}
      primaryHref="#quote"
      secondaryLabel={t("Contact SABIX")}
      secondaryTo="/contact"
    />
  </>
  );
};

export default Home;
