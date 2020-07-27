const c1 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/templates/BlogPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--success-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/Success.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--photography-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/Photography.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--designer-panel-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/DesignerPanel.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--design-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/Design.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--blog-archive-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/BlogArchive.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--cliplo-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/Cliplo.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/Contact.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--betapic-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/Betapic.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/About.vue")
const c11 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/node_modules/gridsome/app/pages/404.vue")
const c12 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/Index.vue")

export default [
  {
    path: "/archive/:path/",
    component: c1
  },
  {
    path: "/success/",
    component: c2
  },
  {
    path: "/photography/",
    component: c3
  },
  {
    path: "/designer-panel/",
    component: c4
  },
  {
    path: "/design/",
    component: c5
  },
  {
    path: "/blog-archive/",
    component: c6
  },
  {
    path: "/cliplo/",
    component: c7
  },
  {
    path: "/contact/",
    component: c8
  },
  {
    path: "/betapic/",
    component: c9
  },
  {
    path: "/about/",
    component: c10
  },
  {
    name: "404",
    path: "/404/",
    component: c11
  },
  {
    name: "home",
    path: "/",
    component: c12
  },
  {
    name: "*",
    path: "*",
    component: c11
  }
]
