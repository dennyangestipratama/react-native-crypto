/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  t: [],
  theme: {
    extend: {
      colors: {
        'custom-green-00': '#1ccb22',
        'custom-red-00': '#ff5a5a',
        'custom-black-00': '#171717',
        'custom-black-01': '#0b0b0a',
        'custom-grey-00': '#979797',
        'custom-grey-01': '#f2f2f2',
        'custom-grey-02': '#929396',
        'custom-blue-00': '#0a68f4',
        'custom-blue-01': '#edf4fe',
      },
    },
  },
  plugins: [],
};
