import plugin_gridsome_plugin_tailwindcss_5 from "/Users/adamwhitlock/Documents/GitHub/codestuff/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"
import plugin_project_6 from "/Users/adamwhitlock/Documents/GitHub/codestuff/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_5,
    options: {"shouldImport":true,"shouldTimeTravel":true,"importUrlConfig":{"modernBrowser":true},"presetEnvConfig":{"stage":0,"autoprefixer":false,"features":{"focus-visible-pseudo-class":false,"focus-within-pseudo-class":false}}}
  },
  {
    run: plugin_project_6,
    options: {}
  }
]
