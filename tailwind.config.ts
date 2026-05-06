import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F766E',
        'primary-dark': '#082F2C',
        secondary: '#F59E0B',
        accent: '#FB7185',
        coral: '#FB923C',
        sky: '#0EA5E9',
        violet: '#8B5CF6',
        mint: '#A7F3D0',
        mist: '#ECFEFF',
        ink: '#1F2933'
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-playfair)', 'serif']
      },
      backgroundImage: {
        'mist-gradient': 'linear-gradient(180deg, rgba(236,254,255,0) 0%, rgba(236,254,255,1) 100%)',
        'forest-gradient': 'linear-gradient(135deg, #082F2C 0%, #0F766E 60%, #14B8A6 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #F59E0B 0%, #FB7185 50%, #8B5CF6 100%)',
        'aurora-gradient': 'linear-gradient(135deg, #0EA5E9 0%, #8B5CF6 50%, #FB7185 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #F59E0B 100%)'
      },
      boxShadow: {
        luxe: '0 30px 80px -30px rgba(8,47,44,0.45)',
        glow: '0 0 0 1px rgba(245,158,11,0.4), 0 20px 50px -20px rgba(245,158,11,0.45)',
        coral: '0 20px 60px -20px rgba(251,113,133,0.45)',
        sky: '0 20px 60px -20px rgba(14,165,233,0.45)'
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
