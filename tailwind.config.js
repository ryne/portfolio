module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    imageRendering: ['responsive'],
    extend: {},
  },
  plugins: [require('tailwindcss-image-rendering')()],
};
