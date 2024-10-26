import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';
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
      animation: {
        slide: 'slide 2s infinite ease-in-out',
      },
      backgroundImage: {
        'login-os': "url('/images/abstract-background-two.jpg')",
        'desktop-light': "url('/images/home-light.jpg')",
      },
      backgroundColor: {
        'theme-light': 'bg-gray-100/50',
        'theme-primary-dark': 'bg-gray-600/40',
        'theme-secondary-dark': 'bg-gray-800/50',
      },
      colors: {
        primary: 'rgba(59, 130, 246, 0.8)',
        primaryDarkBg: 'rgba(31, 41, 55, 0.9)',
        primaryLightBg: 'rgba(243, 244, 246, 0.9)',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [
    nextui(),
    function (api: PluginAPI) {
      api.addBase({
        a: { cursor: 'pointer' },
      });
    },
  ],
};

export default config;
