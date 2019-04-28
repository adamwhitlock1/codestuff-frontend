import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faTwitter)
library.add(faChevronDown)

export default function (Vue) {
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.directive('scrolly', {
    bind(el, binding, vnode){
      console.log("directive worked");

      const onclick = event => {
        event.stopPropagation()
        console.log(binding.value.id);
        document.querySelector(binding.value.id).scrollIntoView({
          behavior: 'smooth'
        })
      }

      el.addEventListener('click', onclick)
    }
  })
}