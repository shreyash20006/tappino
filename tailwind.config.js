/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#FDF2F2',
          100: '#FCE7E7',
          200: '#F7C3C3',
          300: '#EE9595',
          400: '#D64545',
          500: '#B91C1C',
          600: '#A40000',
          700: '#990000',
          800: '#8B0000', // Primary Tappino Maroon
          850: '#740000',
          900: '#5C0000', // Dark Maroon
          950: '#3D0000', // Deepest Maroon
        },
        tappinoBrown: {
          50: '#FAF5F0',
          100: '#F4EBE3',
          200: '#E5D3C2',
          300: '#CCA88E',
          400: '#A66A42', // Warm Coffee Light
          500: '#8B5A3C', // Warm Coffee Brown (Secondary Brand)
          600: '#72472E',
          700: '#5C3A21', // Dark Coffee Brown
          800: '#452A18',
          900: '#301D11',
        },
        cream: {
          50: '#FFFDF8', // Warm Ivory White
          100: '#FAF7F2', // Warm Cream (Primary Background)
          200: '#F5EFE7', // Ivory
          300: '#EFE6DA', // Soft Latte
          400: '#E2D5C3', // Sand Cream
          500: '#C9B69F',
        },
        espresso: {
          950: '#190D0C', // Deepest Dark
          900: '#241513', // Deep Espresso (Dark Text)
          850: '#2B1715', // Card Dark / Contrast
          800: '#361F1C',
          700: '#4D2E2A',
          600: '#6E433E',
          500: '#8C5B55',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        heading: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        script: ['"Caveat"', 'cursive', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(36, 21, 19, 0.05)',
        'warm-md': '0 8px 24px -6px rgba(36, 21, 19, 0.08), 0 2px 6px -1px rgba(139, 0, 0, 0.04)',
        'warm-lg': '0 16px 36px -8px rgba(36, 21, 19, 0.12), 0 4px 12px -2px rgba(139, 0, 0, 0.06)',
        'maroon-sm': '0 4px 14px -2px rgba(139, 0, 0, 0.25)',
        'maroon-md': '0 8px 24px -4px rgba(139, 0, 0, 0.35)',
        'maroon-lg': '0 16px 36px -6px rgba(139, 0, 0, 0.45)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
}
