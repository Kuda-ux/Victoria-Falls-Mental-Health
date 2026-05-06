import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B4332',
        'primary-dark': '#0D1F16',
        secondary: '#D4AF37',
        accent: '#C0784A',
        mist: '#E8F4F1',
        ink: '#2D2D2D'
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        accent: ['var(--font-playfair)', 'serif']
      },
      backgroundImage: {
        'mist-gradient': 'linear-gradient(180deg, rgba(232,244,241,0) 0%, rgba(232,244,241,1) 100%)',
        'forest-gradient': 'linear-gradient(135deg, #0D1F16 0%, #1B4332 100%)'
      },
      boxShadow: {
        luxe: '0 30px 80px -30px rgba(13,31,22,0.45)',
        glow: '0 0 0 1px rgba(212,175,55,0.35), 0 20px 50px -20px rgba(212,175,55,0.35)'
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        mist: { '0%,100%': { opacity: '0.4' }, '50%': { opacity: '0.8' } }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        mist: 'mist 8s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
export default config;
