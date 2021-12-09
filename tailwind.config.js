module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'raleway': ['"Raleway-SemiBold"'],
      'openSans': ['"OpenSans-Regular"']
    },
    extend: {},
    colors: {
      indigo: {
        DEFAULT: '#1D0D5C'
      },
      mediumPurple: {
        DEFAULT: '#916cbf'
      },
      cornFlowerBlue: {
        DEFAULT: '#649CD9'
      },
      monsoonGreen: {
        DEFAULT: 'rgba(110, 231, 183, var(--tw-bg-opacity))'
      },
      monsoonWhite: {
        DEFAULT: '#FFFFFF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
