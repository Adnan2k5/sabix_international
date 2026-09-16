/**
 * Button — SABIX Design System
 * Variants: primary | secondary | ghost | outline
 * Can render as <button> or <Link> or <a>
 */
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Button = ({
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  children,
  arrow = false,
  external = false,
  className = '',
  disabled = false,
  type = 'button',
  id,
}) => {
  /* ── Styles ── */
  const base =
    'inline-flex items-center gap-2 font-sans font-500 tracking-[0.01em] transition-all ' +
    'select-none focus-visible:outline-2 focus-visible:outline-offset-2 ' +
    'disabled:opacity-40 disabled:cursor-not-allowed';

  const sizes = {
    sm: 'text-[0.75rem] px-4 py-2.5 leading-none',
    md: 'text-[0.8125rem] px-5 py-3 leading-none',
    lg: 'text-[0.875rem] px-7 py-4 leading-none',
  };

  const variants = {
    primary:
      'bg-[var(--color-primary)] text-white border border-[var(--color-primary)] ' +
      'hover:bg-[var(--color-primary-hover)] hover:-translate-y-px active:translate-y-0 ' +
      'focus-visible:outline-[var(--color-primary)]',
    secondary:
      'bg-[var(--color-secondary)] text-white border border-[var(--color-secondary)] ' +
      'hover:bg-[var(--color-secondary-hover)] hover:-translate-y-px active:translate-y-0 ' +
      'focus-visible:outline-[var(--color-secondary)]',
    ghost:
      'bg-transparent text-[var(--color-primary)] border border-[var(--color-primary)] ' +
      'hover:bg-[var(--color-primary)] hover:text-white hover:-translate-y-px active:translate-y-0 ' +
      'focus-visible:outline-[var(--color-primary)]',
    outline:
      'bg-transparent text-[var(--color-text)] border border-[var(--color-border)] ' +
      'hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:-translate-y-px ' +
      'focus-visible:outline-[var(--color-primary)]',
    'ghost-light':
      'bg-transparent text-white border border-white/50 ' +
      'hover:bg-white hover:text-[var(--color-primary)] hover:-translate-y-px active:translate-y-0 ' +
      'focus-visible:outline-white',
  };

  const classes = `${base} ${sizes[size] || sizes.md} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          size={14}
          strokeWidth={1.75}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  /* ── Render as Link (internal route) ── */
  if (to) {
    return (
      <Link to={to} className={`group ${classes}`} id={id}>
        {content}
      </Link>
    );
  }

  /* ── Render as anchor (external or hash) ── */
  if (href) {
    return (
      <a
        href={href}
        className={`group ${classes}`}
        id={id}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  /* ── Render as button ── */
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${classes}`}
      id={id}
    >
      {content}
    </button>
  );
};

export default Button;
