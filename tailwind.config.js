const colors = require('tailwindcss/colors');
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  purge: ['./src/**/*{html,js}'],
  theme: {
    colors: {
      ...colors,
    },
  },
};
