import colors from 'tailwindcss/colors'

module.exports = {
  theme: {
    extend: {
      maxWidth: {
        'limit': '64rem',
      },
      fontFamily: {
        'japanese': ['Noto JP'],
      },
    },
    fontFamily: {
      'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      'serif': ['Source Serif']
    }
  }
}