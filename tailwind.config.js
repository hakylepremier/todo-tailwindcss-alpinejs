/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'primary': '#2c3333',
        'secondary': '#395b64',
        'tertiary': '#a5c9ca',
        'light': '#e7f6f2',
      },
      fontFamily: {
        'plex-serif': ['"IBM Plex Serif"', 'serif'],
      },
      gridTemplateColumns: {
        'auto350': 'repeat(auto-fit, minmax(350px, 1fr))'
      }
    },
  },
  plugins: [],
}

