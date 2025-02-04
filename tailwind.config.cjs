/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'off-white': '#e5eef5',
        'nigh-black': '#022338',
        teal: '#28666e',
        green: '#D0E7BE',
        rose: '#d07c7c',
        red: '#E7A0A0',
        sand: '#F5EFD8',
        blue: '#BFF3FF',
        action: '#EB911C',
      },
    },
  },
  plugins: [],
}
