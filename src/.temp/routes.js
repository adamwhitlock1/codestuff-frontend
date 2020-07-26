const c1 = () => import(/* webpackChunkName: "page--src--pages--success-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff/src/pages/Success.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--photography-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff/src/pages/Photography.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--designer-panel-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff/src/pages/DesignerPanel.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--design-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff/src/pages/Design.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--cliplo-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff/src/pages/Cliplo.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff/src/pages/Contact.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--betapic-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff/src/pages/Betapic.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff/src/pages/About.vue")
const c9 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff/node_modules/gridsome/app/pages/404.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff/src/pages/Index.vue")

export default [
  {
    path: "/success/",
    component: c1
  },
  {
    path: "/photography/",
    component: c2
  },
  {
    path: "/designer-panel/",
    component: c3
  },
  {
    path: "/design/",
    component: c4
  },
  {
    path: "/cliplo/",
    component: c5
  },
  {
    path: "/contact/",
    component: c6
  },
  {
    path: "/betapic/",
    component: c7
  },
  {
    path: "/about/",
    component: c8
  },
  {
    name: "404",
    path: "/404/",
    component: c9
  },
  {
    name: "home",
    path: "/",
    component: c10
  },
  {
    name: "*",
    path: "*",
    component: c9
  }
]
