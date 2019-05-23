import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { head }) {
    // Add an external Javascript before the closing </body> tag
    head.script.push({
      src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      body: true
    })
  Vue.component('Layout', DefaultLayout)
}
