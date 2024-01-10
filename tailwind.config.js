/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    spacing: Array.from({ length: 1200 }).reduce((map, _, index) => {
      map[index] = `${index}px`;
      return map;
    }, {}),
    extend: {
      fontSize: (theme) => ({
        ...theme('spacing')
      })
    }
  },
  plugins: []
};
