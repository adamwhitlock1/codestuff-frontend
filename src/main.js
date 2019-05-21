import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  head.style.push({
    type: 'text/css',
    cssText: `
    @-webkit-keyframes fadeInUp {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }

    .heading-1 {
      -webkit-animation-name: fadeInUp;
      animation-name: fadeInUp;
      animation-duration: 1s;
      animation-delay: .3s;
    }

    .heading-2 {
      -webkit-animation-name: fadeInUp;
      animation-name: fadeInUp;
      animation-duration: 1s;
      animation-delay: .6s;
    }
    `
  })
}
