export default [
  {
    name: "success",
    path: "/success",
    component: () => import(/* webpackChunkName: "component--success" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/Success.vue"),
    meta: { isStatic: true }
  },
  {
    name: "photography",
    path: "/photography",
    component: () => import(/* webpackChunkName: "component--photography" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/Photography.vue"),
    meta: { isStatic: true }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/Index.vue"),
    meta: { isStatic: true }
  },
  {
    name: "designerPanel",
    path: "/designer-panel",
    component: () => import(/* webpackChunkName: "component--designer-panel" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/DesignerPanel.vue"),
    meta: { isStatic: true }
  },
  {
    name: "design",
    path: "/design",
    component: () => import(/* webpackChunkName: "component--design" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/Design.vue"),
    meta: { isStatic: true }
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import(/* webpackChunkName: "component--contact" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/Contact.vue"),
    meta: { isStatic: true }
  },
  {
    name: "cliplo",
    path: "/cliplo",
    component: () => import(/* webpackChunkName: "component--cliplo" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/Cliplo.vue"),
    meta: { isStatic: true }
  },
  {
    name: "betapic",
    path: "/betapic",
    component: () => import(/* webpackChunkName: "component--betapic" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/Betapic.vue"),
    meta: { isStatic: true }
  },
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName: "component--about" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/src/pages/About.vue"),
    meta: { isStatic: true }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "component--404" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/node_modules/gridsome/app/pages/404.vue"),
    meta: { isStatic: true, isIndex: false }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "component--404" */ "/Users/adamwhitlock/Documents/GitHub/codestuff-frontend/node_modules/gridsome/app/pages/404.vue"),
    meta: { isStatic: true, isIndex: false }
  }
]

