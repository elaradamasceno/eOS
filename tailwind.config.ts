import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,json,mjs}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      backgroundImage: {
        'login-os': "url('/images/background-six.jpg')",
        'desktop-light': "url('/images/home-light.jpg')",
      },
      backgroundColor: {
        'theme-light': 'bg-gray-100/50',
        'theme-primary-dark': 'bg-gray-600/40',
        'theme-secondary-dark': 'bg-gray-800/50',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        slide: 'slide 2s infinite ease-in-out',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
