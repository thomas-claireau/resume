module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      gray: {
        100: '#EFEFEF',
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
