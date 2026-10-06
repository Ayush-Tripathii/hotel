/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0B0A',
        charcoal: '#151513',
        'warm-black': '#1D1B18',
        ivory: '#F4F0E8',
        'soft-beige': '#D8D0C2',
        champagne: {
          DEFAULT: '#C8A96B',
          light: '#DEC594',
          dark: '#A58444',
        },
        'muted-gold': '#9E8350',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest_luxury: '0.25em',
        ultra: '0.35em',
      },
      animation: {
        'ken-burns': 'kenburns 25s ease-out infinite alternate',
        'fade-in': 'fadeIn 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1.03) translate(0, 0)' },
          '100%': { transform: 'scale(1.12) translate(-1%, -1%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
