module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {},
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
