/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      serif: ['"Source Serif Pro"', 'ui-serif', 'Georgia'],
      mono: ['Source Code Pro', 'ui-monospace', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['Inter'],
    },
    fontSize: {
      base: [
        '1rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '0.0125rem',
          fontWeight: '400',
        },
      ],
    },
    extend: {
      spacing: {
        12.5: '3.25rem',
      },
      maxWidth: {
        'main-content': 'var(--main-content-width)',
      },
      gridTemplateColumns: {
        'page-tablet': '15rem var(--main-content-width)',
        'page-desktop': '15rem var(--main-content-width) 15rem',
      },
      colors: {
        'color-default': 'var(--color-default)',
        'color-secondary': 'var(--color-secondary)',
        'color-tertiary': 'var(--color-tertiary)',
        'color-divider': 'var(--color-divider)',
      },
      fontSize: {
        title: [
          '2.25rem',
          {
            lineHeight: '3rem',
            letterSpacing: '0.025rem',
            fontWeight: '700',
          },
        ],
        'headline-largest': [
          '1.75rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '0.025rem',
            fontWeight: '700',
          },
        ],
        'headline-large': [
          '1.5rem',
          {
            lineHeight: '2rem',
            letterSpacing: '0.025rem',
            fontWeight: '700',
          },
        ],
        'headline-medium': [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: '0.025rem',
            fontWeight: '600',
          },
        ],
        'headline-small': [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0.05rem',
            fontWeight: '500',
          },
        ],
        'headline-smallest': [
          '0.8125rem',
          {
            lineHeight: '1.25rem',
            letterSpacing: '0.05rem',
            fontWeight: '500',
          },
        ],
        subtitle: [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: '0.0125rem',
            fontWeight: '400',
          },
        ],
        small: [
          '0.8125rem',
          {
            lineHeight: '1.25rem',
            letterSpacing: '0.0125rem',
            fontWeight: '400',
          },
        ],
        'title-mobile': [
          '2rem',
          {
            lineHeight: '2.5rem',
            letterSpacing: '0.025rem',
            fontWeight: '700',
          },
        ],
        'headline-largest-mobile': [
          '1.5rem',
          {
            lineHeight: '2rem',
            letterSpacing: '0.025rem',
            fontWeight: '700',
          },
        ],
        'headline-large-mobile': [
          '1.25rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0.025rem',
            fontWeight: '700',
          },
        ],
      },
    },
  },
  plugins: [],
};
