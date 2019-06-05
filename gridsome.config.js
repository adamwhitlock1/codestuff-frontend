const purgecss = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss')

const postcssPlugins = [tailwind('./tailwind.js')]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'Codestuff',
  siteDescription: 'Software Development, Design, and Photography',
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_posts/blog/*.md',
        typeName: 'BlogPost',
        route: '/:slug'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-141511572-1'
      }
    }
  ]
}
