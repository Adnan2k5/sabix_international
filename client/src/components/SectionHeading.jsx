/**
 * SectionHeading — SABIX Design System
 * Consistent section titles with optional eyebrow and description.
 */

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  accentEyebrow = false,
  maxWidth,
  className = '',
}) => {
  const alignClass =
    align === 'center'
      ? 'text-center items-center mx-auto'
      : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`} style={maxWidth ? { maxWidth } : {}}>
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span
            className={accentEyebrow ? 'text-eyebrow-accent' : 'text-eyebrow'}
          >
            {eyebrow}
          </span>
        </div>
      )}

      {title && (
        <h2 className="text-title text-[var(--color-text)]">{title}</h2>
      )}

      {description && (
        <p className="text-body text-[var(--color-muted)] leading-relaxed" style={{ maxWidth: '48ch' }}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
