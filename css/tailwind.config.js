module.exports = {
  theme: {
    fontFamily: {
      display: ['Khand', 'Impact', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },

      colors: {
        'blue': '#1C447F',
        'indigo': '#5E688D',
        'purple': '#5E688D',
        'pink': '#F08D19',
        'red': '#Ef5353',
        'orange': '#E4782E',
        'light-orange': '#F08D19',
        'dark-orange': '#E4782E',
        'yellow': '#FAD644',
        'green': '#5B8AA0',
        'teal': '#5B8AA0',
        'cyan': '#B2D3DE',
        'white': '#FFF',
        'off-white': '#FAFAFA',
        'gray': '#575757',
        'gray-dark': '#2F2F2F',

      },
    },
      plugins: [
        require('@tailwindcss/typography'),
      ],

}



const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.btn': {
          backgroundColor: '#1c437f',
          borderColor: '#1c437f',
          borderRadius: '5px',
          borderStyle: 'solid',
          borderWidth: '4px',
          color: 'white',
          cursor: 'pointer',
          display: 'inline-block',
          fontFamily: 'Khand, Impact, sans-serif',
          fontFamily: '1rem',
          font : '700',
          lineHeight: '1em',
          padding: '1rem 1.5rem',
          textAlign: 'center',
          textDecoration: 'none',
          textTransform: 'uppercase',
          transitionDuration: '200ms',
          transitionProperty: 'all',
          transitionTimingFunction: 'ease',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
      })
    })
  ]
}