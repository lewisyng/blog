module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '728px',
      lg: '1080px',
      xl: '1540px',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
}
