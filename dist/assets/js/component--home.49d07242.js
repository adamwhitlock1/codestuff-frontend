(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{194:function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return s});var n=a(0),r=n.a.observable({});function i(e,t){return n.a.set(r,e,t)}function o(e){return r[e]}function s(e,t){var a=t.matched[0],n=a?a.components.default:{};if(e.stringified&&n.__file)return console.error("An error occurred while executing "+"page-query for ".concat(n.__file,"\n\n")+"Error: ".concat(e.stringified));console.error(e.message)}},195:function(e,t,a){"use strict";var n=a(0),r=a(194),i=a(73),o=n.a.config.optionMergeStrategies;t.a=function(e){var t=e.options,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t.__pageQuery)t.__pageQuery=n;else{t.__pageQuery=n,t.computed=o.computed({$page:function(){return Object(r.b)(this.$route.path)}},t.computed);var s=function(e){t[e]=o[e]([l(t)],t[e])},l=function(){return function(e,n,o){a.e(16).then(a.bind(null,199)).then(function(a){a.default(e,t.__pageQuery).then(function(t){404===t.code?o({name:i.b,params:{0:e.path}}):o()}).catch(function(t){t.code===i.a||404===t.code?(console.error(t),o({name:i.b,params:{0:e.path}})):Object(r.a)(t,e)})})}};s("beforeRouteEnter"),s("beforeRouteUpdate")}}},196:function(e,t,a){"use strict";var n=a(11),r=a(115)(1);n(n.P+n.F*!a(116)([].map,!0),"Array",{map:function(e){return r(this,e,arguments[1])}})},197:function(e,t,a){"use strict";var n={props:{post:{type:Object,required:!0}}},r=a(7),i=Object(r.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"h2 text-4xl",domProps:{innerHTML:this._s(this.post.title)}}),t("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.excerpt)}}),t("g-link",{attrs:{to:this.post.path}},[this._v("\n    Keep Reading...\n  ")])],1)},[],!1,null,null,null);t.a=i.exports},198:function(e,t,a){"use strict";var n=a(70),r=(a(72),a(19)),i=(a(196),a(117),{functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},prevLabel:{type:String,default:"‹"},nextLabel:{type:String,default:"›"},lastLabel:{type:String,default:"»"},linkClass:{type:String,default:""},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(e,t){var a=t.props,i=t.data,o=a.info,s=a.showLinks,l=a.showNavigation,u=a.ariaLabel,c=function(e){var t=e.currentPage,a=void 0===t?1:t,n=e.totalPages,r=void 0===n?1:n,i=Math.ceil(5),o=a-i,s=a+i;r<=10?(o=0,s=r):a<=i?(o=0,s=10):a+i>=r&&(o=r-10,s=r);for(var l=[],u=o+1;u<=s;u++)l.push(u);return{current:a,total:r,start:o,end:s,pages:l}}(o),p=c.current,f=c.total,g=c.pages,d=c.start,v=c.end,b=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r;t===p&&(i=a.ariaCurrentLabel);var o={page:t};return a.activeLinkClass&&(o.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(o.exactActiveClass=a.exactActiveLinkClass),e(n.a,{class:a.linkClass,props:o,attrs:{"aria-label":i.replace("%n",t),"aria-current":p===t}},[r])},h=s?g.map(function(e){return b(e,e,a.ariaLinkLabel)}):[];if(l){var L=a.firstLabel,m=a.prevLabel,y=a.nextLabel,_=a.lastLabel,P=a.ariaFirstLabel,k=a.ariaPrevLabel,w=a.ariaNextLabel,x=a.ariaLastLabel;p>1&&h.unshift(b(p-1,m,k)),d>0&&h.unshift(b(1,L,P)),p<f&&h.push(b(p+1,y,w)),v<f&&h.push(b(f,_,x))}return h.length<2?null:e("nav",Object(r.a)({},i,{attrs:{role:"navigation","aria-label":u}}),h)}});a(71),a(21);a.d(t,"a",function(){return i})},235:function(e,t,a){"use strict";a.r(t);var n=a(198),r=a(197),i={components:{Pager:n.a,Post:r.a},metaInfo:{title:"Welcome to codestuff.io"},created:function(){var e,t,a;console.log("created"),e=document,t=e.createElement("script"),a=e.scripts[0],t.src="https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js",a.parentNode.insertBefore(t,a),WebFont.load({google:{families:["Nunito Sans"]},typekit:{id:"wwk3eyy"}})}},o=a(7),s=a(195),l=function(e){Object(s.a)(e,void 0)},u=Object(o.a)(i,function(){var e=this.$createElement,t=this._self._c||e;return t("Layout",[t("h1",[this._v("Welcome to codestuff.io")]),t("ul",{staticClass:"post-list"},this._l(this.$page.allWordPressPost.edges,function(e){var a=e.node;return t("li",{key:a.id},[t("Post",{attrs:{post:a}})],1)}),0),t("Pager",{attrs:{info:this.$page.allWordPressPost.pageInfo}})],1)},[],!1,null,null,null);"function"==typeof l&&l(u);t.default=u.exports}}]);