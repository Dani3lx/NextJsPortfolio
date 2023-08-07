import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    margin: {
      '13': '4rem', // Add custom margin-top value: 24px
    },
    height: {
      '13': '4rem'
    },
    borderWidth: {
      DEFAULT: '0.001px'
    },
    colors: {
      'light-gray': 'rgba(220, 220, 220, 0.2)',
      'gray': '#a0a0a0',
      'primary-blue': '#21FFF2',
      'primary-purple': '#F152FF',
      'primary-orange': '#FFB155',
    },
    textShadow: {
      sm: '0px 0px 25px rgba(255, 255, 255, 1)',
      white: '0px 0px 60px rgba(255, 255, 255, 0.6)',
      blue: '0px 0px 60px rgba(33, 255, 242, 0.6);',
      purple: '0px 0px 60px rgba(230, 73, 255, 0.6);',
      orange: '0px 0px 60px rgba(255, 231, 12, 0.6);',
    },
    dropShadow: {
      blue: '0 0 100px rgba(33, 255, 242, 1)',
      purple: '0 0 100px rgba(230, 73, 255, 1);',
      orange: '0 0 100px rgba(255, 231, 12, 1);',
      white: '0 0 100px rgba(255, 255, 255, 1);',
    }
  },
}
export const plugins = [
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  }),
]
