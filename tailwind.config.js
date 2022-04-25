module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mini: '375px',
      },
    },
    colors: {
      gray: {
        100: '#e1e1e1',
        300: '#B2B2B2',
        600: '#545454',
      },
    },
    borderColor: (theme) => ({
      DEFAULT: theme('colors.gray.100', 'currentColor'),
    }),
  },
  plugins: [],
};
