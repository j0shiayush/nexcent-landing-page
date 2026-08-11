import type { Config } from 'tailwindcss';

const config: Config = {
  // THIS IS THE CRITICAL PART: It tells Tailwind where to look for your classes
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4CAF4F',
          secondary: '#263238',
          info: '#2196F3',
        },
        neutral: {
          silver: '#F5F7FA',
          grey: '#717171',
          darkGrey: '#4D4D4D',
          black: '#263238',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;