import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        bg:              'var(--color-bg)',
        surface:         'var(--color-surface)',
        'surface-hover': 'var(--color-surface-hover)',
        border:          'var(--color-border)',
        primary:         'var(--color-text-primary)',
        secondary:       'var(--color-text-secondary)',
        muted:           'var(--color-text-muted)',
        accent:          'var(--color-accent)',
        'accent-subtle': 'var(--color-accent-subtle)',
        'accent-text':   'var(--color-accent-text)',
        cta:             'var(--color-cta)',
        tag:             'var(--color-tag)',
        'tag-text':      'var(--color-tag-text)',
        dot:             'var(--color-dot)',
      },
    },
  },
  plugins: [],
}

export default config
