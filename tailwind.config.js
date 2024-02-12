/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.jsx', './src/**/*.css'],
  theme: {
    extend: {
      letterSpacing: {
        'wider': '0.15em',
        'widest': '0.20em',
      },
      spacing: {
        '10': '10px',
        '30': '30px',
        '90': '90px',
        '100': '100px',
      },
      width: {
        '30': '30%',
        '40': '40%',
        '50': '50%',
        '60': '60%',
        '70': '70%',
        '80': '80%',
        '90': '90%',
        '100': '100%',
      },
      screens: {
        'xs': '150px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
      },
      fontFamily: {
        'roboto-mono': ['Roboto Mono', 'monospace'],
      },
      fontStyle: [],
      backgroundImage: theme => ({
        'home-header': "url('/home-header-container-img.png')",
      }),
      backgroundSize: {
        '100': '100% 100%',
      }
    },
  },
  plugins: [],
}