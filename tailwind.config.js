/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightblue: '#86d3f4',
      },
      spacing: {
        '35px': 'calc(30% - 40px)',
      },
      backgroundImage: {
        happy: "url('src/assets/happy-baby-background.png')",
        happyDogy: "url('src/assets/happy-dogy-background.png')",
        activeChecked: "url('src/assets/active-checked.svg')",
      },
      fontFamily: {
        roboto: ['Roboto'],
        robotoMono: ['Roboto Mono'],
      },
    },
  },
  plugins: [],
}
