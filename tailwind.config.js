/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet-mystic': '#7C4DFF',
        'golden-divine': '#FFD700',
        'white-crystal': '#FAFAFA',
        'indigo-deep': '#3F51B5',
        'emerald-healing': '#00C853',
        'pink-transcendent': '#FF4081',
        'turquoise-celestial': '#00BCD4',
      },
      backgroundImage: {
        'aurora': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'celestial': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'ethereal': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'divine': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        'mystic': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'cinzel': ['Cinzel', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}