/**
 * About — Route: /about
 * Content driven from src/data/pages.js → about
 */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import ImageReveal from '../components/ImageReveal';
import { about } from '../data/pages';
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

const About = () => (
  <>
    {/* ── Hero ── */}
    <section
      className="relative flex items-end"
      style={{ backgroundColor: 'var(--color-primary)', minHeight: '55vh', paddingTop: '7rem' }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/assets/images/international-supply.jpg"
          alt=""
          loading="eager"
          className="w-full h-full object-cover"
          style={{ opacity: 0.22, objectPosition: 'center 40%' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(36,36,36,1) 0%, rgba(36,36,36,0.55) 60%, rgba(36,36,36,0.1) 100%)' }}
        />
      </div>
      <div className="container relative z-10 pb-16">
        <motion.p
          className="text-eyebrow mb-5"
          style={{ color: 'var(--color-secondary)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {about.hero.eyebrow}
        </motion.p>
        <motion.h1
          className="text-headline text-white mb-5"
          style={{ maxWidth: '22ch' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          {about.hero.headline}
        </motion.h1>
        <motion.p
          className="text-body-lg"
          style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '58ch' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {about.hero.body}
        </motion.p>
      </div>
    </section>

    {/* ── Story ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <FadeIn className="lg:col-span-4">
            <SectionHeading
              eyebrow={about.story.eyebrow}
              title={about.story.headline}
            />
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <div className="flex flex-col gap-6">
              {about.story.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-[var(--color-text)] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ── Approach ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container section-padding">
        <FadeIn className="mb-14">
          <SectionHeading
            eyebrow={about.approach.eyebrow}
            title={about.approach.headline}
            maxWidth="40ch"
          />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {about.approach.items.map((item, i) => (
            <FadeIn key={item.number} delay={i * 0.05}>
              <div
                className="p-10 flex flex-col gap-4"
                style={{ backgroundColor: 'var(--color-background)', minHeight: 220 }}
              >
                <span className="text-index text-[var(--color-secondary)]">{item.number}</span>
                <h3 className="text-subheading font-semibold text-base">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── Locations ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="container section-padding">
        <FadeIn className="mb-14">
          <SectionHeading
            eyebrow="Presence"
            title="International. Based in Riyadh."
            description="Headquartered in Saudi Arabia with offices in the United States and India — enabling SABIX to source across global networks and serve customers across international markets."
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
          {[company.headquarters, ...company.branches].map((loc, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="p-10 flex flex-col gap-2" style={{ backgroundColor: i === 0 ? 'rgba(232,117,36,0.1)' : 'transparent' }}>
                <span className="text-eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {loc.label}
                </span>
                <h3
                  className="font-light"
                  style={{ color: '#ffffff', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.02em' }}
                >
                  {loc.city || loc.country}
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {loc.country}
                  {loc.label === 'Headquarters' ? ' — HQ' : ' — Branch'}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── Partnership ── */}
    <section className="section-border-top" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <SectionHeading
              eyebrow={about.partnership.eyebrow}
              title={about.partnership.headline}
              description={about.partnership.body}
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div
              className="flex items-center justify-center p-12 border border-[var(--color-border)]"
              style={{ backgroundColor: 'var(--color-surface)', minHeight: 200 }}
            >
              <div className="text-center">
                <div className="inline-block px-8 py-4 border-2 border-[var(--color-border)] mb-3">
                  <span
                    className="text-xl font-bold tracking-[0.2em] uppercase"
                    style={{ color: 'var(--color-muted)' }}
                  >
                    LAVAAL
                  </span>
                </div>
                <p className="text-meta">LAVAAL International</p>
                <p className="text-[10px] text-[var(--color-muted)] mt-1">
                  [Replace with official logo — update company.js]
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <CTASection
      id="about-cta"
      eyebrow="Work with SABIX"
      headline="Have a supply requirement?"
      body="Contact our team. We will work with you to understand your requirement and provide the appropriate supply solution."
      primaryLabel="Request a Quote"
      primaryTo="/contact"
      secondaryLabel="Explore products"
      secondaryTo="/products"
    />
  </>
);

export default About;
