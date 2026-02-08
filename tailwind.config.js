/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        luxury: {
          charcoal: '#2c2c2c',
          'charcoal-light': '#3a3a3a',
          'charcoal-dark': '#1a1a1a',
          ivory: '#faf9f7',
          'ivory-soft': '#f5f4f2',
          'ivory-warm': '#f8f6f3',
          gold: '#c9a96e',
          'gold-light': '#d4b578',
          'gold-muted': '#b8956a',
          espresso: '#3c2415',
          'espresso-light': '#4a2d1a',
          'espresso-dark': '#2a1a0f',
          neutral: '#8b8680',
          'neutral-light': '#a39a94',
          'neutral-dark': '#6b635e',
          stone: '#e8e6e3',
          'stone-light': '#f0efec',
          'stone-dark': '#d9d6d2',
        },
        brand: {
          50: '#faf9f7',
          100: '#f5f4f2',
          200: '#e8e6e3',
          300: '#c9a96e',
          400: '#b8956a',
          500: '#a39a94',
          600: '#8b8680',
          700: '#6b635e',
          800: '#3a3a3a',
          900: '#2c2c2c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        editorial: ['Georgia', 'Times New Roman', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.7', letterSpacing: '0.005em' }],
        'lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'xl': ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.5', letterSpacing: '-0.015em' }],
        '3xl': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.025em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.035em' }],
      },
      boxShadow: {
        'luxury': '0 4px 20px rgba(44, 44, 44, 0.08)',
        'luxury-lg': '0 8px 30px rgba(44, 44, 44, 0.12)',
        'luxury-xl': '0 12px 40px rgba(44, 44, 44, 0.15)',
        'gold': '0 4px 20px rgba(201, 169, 110, 0.15)',
        'soft': '0 2px 15px rgba(44, 44, 44, 0.04)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'luxury': '0.75rem',
        'luxury-lg': '1rem',
        'luxury-xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}