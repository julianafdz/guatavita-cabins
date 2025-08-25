import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Define your warm/cozy color palette here
        amber: {
          50: '#fffdf7',
          100: '#fff7eb',
          200: '#ffeec2',
          300: '#ffe299',
          400: '#ffc94d',
          500: '#ffaf00',
          600: '#e69f00',
          700: '#cc8f00',
          800: '#996b00',
          900: '#664800',
        },
        yellow: {
          100: '#fffef0',
          200: '#fffbd6',
          600: '#d49d00',
        },
        gray: {
          600: '#4a5568',
          700: '#2d3748',
          800: '#1a202c',
        },
      },
      fontFamily: {
        merriweather: ['var(--font-merriweather)', 'serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

// Added a comment to force Tailwind CSS to recompile on next dev server restart.

export default config;
