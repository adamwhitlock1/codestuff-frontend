import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  //  head.script.push({
  //   src: 'https://cdnjs.com/libraries/baguettebox.js',
  //   body: true
  //  })
}
