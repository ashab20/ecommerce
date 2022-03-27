const {join, dirname} = require('path');
// Following this guide
// https://blog.nrwl.io/setup-next-js-to-use-tailwind-with-nx-849b7e21d8d0

module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};