/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:    'var(--color-primary)',
        secondary:  'var(--color-secondary)',
        background: 'var(--color-background)',
        surface:    'var(--color-surface)',
        'text-base':'var(--color-text)',
        muted:      'var(--color-muted)',
        border:     'var(--color-border)',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1440px',
        content:   '1280px',
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
