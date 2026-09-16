/**
 * CTASection — SABIX Design System
 * Reusable full-width conversion section.
 * Used at the bottom of every page.
 */
import Button from './Button';

const CTASection = ({
  eyebrow = null,
  headline,
  subheadline = null,
  body,
  primaryLabel,
  primaryTo,
  primaryHref,
  secondaryLabel,
  secondaryTo,
  secondaryHref,
  dark = true,
  id,
}) => {
  return (
    <section
      id={id}
      className="section-border-top"
      style={{
        backgroundColor: dark ? 'var(--color-primary)' : 'var(--color-background)',
        color: dark ? '#ffffff' : 'var(--color-text)',
      }}
    >
      <div className="container section-padding">
        <div className="max-w-3xl">
          {eyebrow && (
            <p
              className="text-eyebrow mb-6"
              style={{ color: dark ? 'rgba(255,255,255,0.45)' : 'var(--color-muted)' }}
            >
              {eyebrow}
            </p>
          )}

          <h2
            className="text-headline mb-4"
            style={{ color: dark ? '#ffffff' : 'var(--color-text)' }}
          >
            {headline}
          </h2>

          {subheadline && (
            <p
              className="text-display mb-4"
              style={{
                color: dark ? 'var(--color-secondary)' : 'var(--color-secondary)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                fontWeight: 300,
              }}
            >
              {subheadline}
            </p>
          )}

          {body && (
            <p
              className="text-body-lg mt-4 mb-10"
              style={{ color: dark ? 'rgba(255,255,255,0.6)' : 'var(--color-muted)', maxWidth: '52ch' }}
            >
              {body}
            </p>
          )}

          <div className="flex flex-wrap gap-4 mt-8">
            {primaryLabel && (
              <Button
                variant={dark ? 'secondary' : 'primary'}
                to={primaryTo}
                href={primaryHref}
                arrow
                size="lg"
                id={id ? `${id}-primary-cta` : undefined}
              >
                {primaryLabel}
              </Button>
            )}
            {secondaryLabel && (
              <Button
                variant={dark ? 'ghost-light' : 'ghost'}
                to={secondaryTo}
                href={secondaryHref}
                size="lg"
                id={id ? `${id}-secondary-cta` : undefined}
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
