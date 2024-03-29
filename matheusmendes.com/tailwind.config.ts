import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-kalam)'],
      },
      keyframes: {
        wiggle: {
          '0%': {
            transform: 'scaleY(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scaleY(1)',
            opacity: '100',
          },
        },
        title: {
          '0%': {
            'line-height': '0%',
            'letter-spacing': '0.25em',
            opacity: '0',
          },
          '25%': {
            'line-height': '0%',
            opacity: '0%',
          },
          '80%': {
            opacity: '100%',
          },

          '100%': {
            'line-height': '100%',
            opacity: '100%',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0%',
          },
          '75%': {
            opacity: '0%',
          },
          '100%': {
            opacity: '100%',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 2s ease 0s 1 normal forwards',
        title: 'title 3s ease-out forwards',
        'fade-in': 'fade-in 6s ease-in-out forwards',
      },
      boxShadow: {
        '3xl': '0 8px 16px 0px rgba(0, 0, 0, 0.3)',
      },
      screens: {
        xl: '1440px',
      },
    },
  },
  plugins: [],
}
export default config
