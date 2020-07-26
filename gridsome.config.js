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
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_posts/**/*.md',
        typeName: 'Post',
        remark: {}
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss'
    },
    {
      use: `gridsome-plugin-netlify-cms`
    }
  ]
}
