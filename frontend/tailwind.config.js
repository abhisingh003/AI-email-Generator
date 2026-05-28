/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 80px rgba(126, 58, 255, 0.18)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(96, 165, 250, 0.18), transparent 40%), radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.18), transparent 30%)',
      },
    },
  },
  plugins: [],
};
