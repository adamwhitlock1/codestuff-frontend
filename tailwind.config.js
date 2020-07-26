module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    fontFamily: {
      sans: [
        'Nunito Sans',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      title: [
        'Rift',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    },
    extend: {
      colors: {
        adobe: '#323232',

        'cyan-100': '#bdecfc',
        'cyan-200': '#85deff',
        'cyan-300': '#2CC7FF',
        'cyan-400': '#00BBFF',
        'cyan-500': '#00afec',
        'cyan-600': '#0098D1',
        'cyan-700': '#0076A3',
        'cyan-800': '#004D6D',

        'magenta-800': '#600032',
        'magenta-700': '#8C0052',
        'magenta-600': '#c40075',
        'magenta-500': '#ea148c',
        'magenta-400': '#ff0097',
        'magenta-300': '#ff46b4',
        'magenta-200': '#ff85cd',

        'yellow-800': '#453411',
        'yellow-700': '#684f1d',
        'yellow-600': '#f2d024',
        'yellow-500': '#fff02a',
        'yellow-400': '#fff382',
        'yellow-300': '#fff9c2',
        'yellow-200': '#fcfbeb'
      }
    }
  },
  variants: {},
  plugins: []
}
