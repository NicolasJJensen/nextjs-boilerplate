// import themes from './lib/themes'

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // base: 'var(--theme-base)',
        // primary: 'var(--theme-primary)',
        // secondary: 'var(--theme-secondary)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
