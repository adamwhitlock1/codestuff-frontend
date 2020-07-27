// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Codestuff',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link'
    }
  },
  templates: {
    Post: [
      {
        path: '/archive/:path',
        component: './src/templates/BlogPost.vue'
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_posts/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            ['gridsome-plugin-remark-codesandbox'],
            [
              '@noxify/gridsome-plugin-remark-embed',
              {
                enabledProviders: ['Youtube', 'Twitter', 'Gist', 'Codepen'],
                Codepen: {
                  iframe: false,
                  tabs: ['result'],
                  preview: false,
                  theme: 'dark',
                  height: 800
                }
              }
            ]
          ]
        }
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss'
    },
    {
      use: `gridsome-plugin-netlify-cms`
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-141511572-1'
      }
    }
  ]
}
