import DefaultLayout from '~/layouts/Default.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'

export default function (Vue) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(vueSmoothScroll)
}
