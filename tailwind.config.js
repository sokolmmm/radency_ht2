/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        15: '60px',
        30: '120px',
      },
      fontFamily: {
        body: ['Roboto'],
      },
      gridTemplateColumns: {
        table: 'repeat(5, 1fr) 80px',
        note: '1fr 40px',
        element: '100px 1fr',
        summary: '120px 1fr',
        window: 'minmax(280px, 660px)',
      },
      gridTemplateRows: {
        form: 'repeat(3, 80px) 40px',
      },
    },
  },
  plugins: [],
};
