/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gasSpread: {
          '0%': { opacity: 0.6, transform: 'scale(0.5)' },
          '50%': { opacity: 0.3, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(1.5)' },
        },
      },
      animation: {
        gasSpread: 'gasSpread 1.5s ease-out',
      },
    },
  },
  plugins: [],
};
