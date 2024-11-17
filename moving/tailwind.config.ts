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
        blue : "#2D73F3",
        orange : "#F29B2E",
        yellow : "#F2B42E", 
        black : "#282C33",
        gray : "#3E4248",
      },
    },
  },
  plugins: [],
} satisfies Config;
