import plugin_gridsome_plugin_tailwindcss_6 from "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"
import plugin_gridsome_plugin_netlify_cms_7 from "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/node_modules/gridsome-plugin-netlify-cms/gridsome.client.js"
import plugin_project_8 from "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_6,
    options: {"shouldImport":true,"shouldTimeTravel":true,"importUrlConfig":{"modernBrowser":true},"presetEnvConfig":{"stage":0,"autoprefixer":false,"features":{"focus-visible-pseudo-class":false,"focus-within-pseudo-class":false}}}
  },
  {
    run: plugin_gridsome_plugin_netlify_cms_7,
    options: {"htmlTitle":"Content Editor","configPath":"src/admin/config.yml","modulePath":"/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/node_modules/gridsome-plugin-netlify-cms/lib/cms.js","htmlPath":"/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/node_modules/gridsome-plugin-netlify-cms/templates/index.html","publicPath":"/admin","injectScript":true,"enableIdentityWidget":true,"debug":false}
  },
  {
    run: plugin_project_8,
    options: {}
  }
]
