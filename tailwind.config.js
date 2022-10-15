module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': {
            opacity: '0',
          },
          '30%': {
            opacity: '0.3',
          },
          '50%': {
            opacity: '0.5',
          },
          '70%': {
            opacity: '0.7',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'appear-todo': 'appear 0.21s forwards',
      },
      boxShadow: {
        default: ['rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px'],
      },
      dropShadow: {
        default: ['rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px'],
      },
      colors: {
        primary: {
          default: '#9f79ff',
          background: '#dfe6fd',
          color: '#98a1bb',
        },
      },

      spacing: {
        s8: '0.8rem',
        s12: '1.2rem',
        s16: '1.6rem',
        s24: '2.4rem',
        s32: '3.2rem',
        s40: '4rem',
        s48: '4.8rem',
        s56: '5.6rem',
      },
    },
  },
  plugins: [],
}
