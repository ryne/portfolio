module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    minHeight: (theme) => ({
      0: '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
