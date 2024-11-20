import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        white: '#F3F3F3',
        blue : "#2D73F3",
        orange : "#F29B2E",
        yellow : "#F2B42E", 
        black : "#282C33",
        gray : "#3E4248",
      },
      keyframes: {
        zoomBg: {
          '0%': { 'background-size': '140%' },
          '10%': { 'background-size': '140%' },
          '45%': { 'background-size': '100%' },
          '50%': { 'background-size': '100%' },
          '55%': { 'background-size': '100%' },
          '90%': { 'background-size': '140%' },
          '100%': { 'background-size': '140%' },
        },
      },
      animation: {
        zoomBg: 'zoomBg 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
