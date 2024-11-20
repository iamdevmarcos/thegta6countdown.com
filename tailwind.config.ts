import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '10px 10px 0px 2px rgba(0, 0, 0, 0.30)',
        secondary: '5px 5px 0px 0px rgba(0, 0, 0, 0.30)',
      },
      fontFamily: {
        pricedown: ['Pricedown', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(to bottom, #FFBF76, #B11778)',
        'secondary-gradient': 'linear-gradient(to bottom, #ffbf76, #f49143)',
      },
    },
  },
  plugins: [],
} satisfies Config
