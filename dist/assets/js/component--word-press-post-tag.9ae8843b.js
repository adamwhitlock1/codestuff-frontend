(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{194:function(t,e,a){"use strict";a.d(e,"c",function(){return i}),a.d(e,"b",function(){return o}),a.d(e,"a",function(){return s});var n=a(0),r=n.a.observable({});function i(t,e){return n.a.set(r,t,e)}function o(t){return r[t]}function s(t,e){var a=e.matched[0],n=a?a.components.default:{};if(t.stringified&&n.__file)return console.error("An error occurred while executing "+"page-query for ".concat(n.__file,"\n\n")+"Error: ".concat(t.stringified));console.error(t.message)}},195:function(t,e,a){"use strict";var n=a(0),r=a(194),i=a(73),o=n.a.config.optionMergeStrategies;e.a=function(t){var e=t.options,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e.__pageQuery)e.__pageQuery=n;else{e.__pageQuery=n,e.computed=o.computed({$page:function(){return Object(r.b)(this.$route.path)}},e.computed);var s=function(t){e[t]=o[t]([l(e)],e[t])},l=function(){return function(t,n,o){a.e(16).then(a.bind(null,199)).then(function(a){a.default(t,e.__pageQuery).then(function(e){404===e.code?o({name:i.b,params:{0:t.path}}):o()}).catch(function(e){e.code===i.a||404===e.code?(console.error(e),o({name:i.b,params:{0:t.path}})):Object(r.a)(e,t)})})}};s("beforeRouteEnter"),s("beforeRouteUpdate")}}},196:function(t,e,a){"use strict";var n=a(11),r=a(115)(1);n(n.P+n.F*!a(116)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},197:function(t,e,a){"use strict";var n={props:{post:{type:Object,required:!0}}},r=a(7),i=Object(r.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"h2 text-4xl",domProps:{innerHTML:this._s(this.post.title)}}),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.excerpt)}}),e("g-link",{attrs:{to:this.post.path}},[this._v("\n    Keep Reading...\n  ")])],1)},[],!1,null,null,null);e.a=i.exports},198:function(t,e,a){"use strict";var n=a(70),r=(a(72),a(19)),i=(a(196),a(117),{functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},prevLabel:{type:String,default:"‹"},nextLabel:{type:String,default:"›"},lastLabel:{type:String,default:"»"},linkClass:{type:String,default:""},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var a=e.props,i=e.data,o=a.info,s=a.showLinks,l=a.showNavigation,u=a.ariaLabel,c=function(t){var e=t.currentPage,a=void 0===e?1:e,n=t.totalPages,r=void 0===n?1:n,i=Math.ceil(5),o=a-i,s=a+i;r<=10?(o=0,s=r):a<=i?(o=0,s=10):a+i>=r&&(o=r-10,s=r);for(var l=[],u=o+1;u<=s;u++)l.push(u);return{current:a,total:r,start:o,end:s,pages:l}}(o),p=c.current,f=c.total,g=c.pages,d=c.start,v=c.end,h=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r;e===p&&(i=a.ariaCurrentLabel);var o={page:e};return a.activeLinkClass&&(o.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(o.exactActiveClass=a.exactActiveLinkClass),t(n.a,{class:a.linkClass,props:o,attrs:{"aria-label":i.replace("%n",e),"aria-current":p===e}},[r])},b=s?g.map(function(t){return h(t,t,a.ariaLinkLabel)}):[];if(l){var L=a.firstLabel,m=a.prevLabel,y=a.nextLabel,P=a.lastLabel,_=a.ariaFirstLabel,w=a.ariaPrevLabel,k=a.ariaNextLabel,x=a.ariaLastLabel;p>1&&b.unshift(h(p-1,m,w)),d>0&&b.unshift(h(1,L,_)),p<f&&b.push(h(p+1,y,k)),v<f&&b.push(h(f,P,x))}return b.length<2?null:t("nav",Object(r.a)({},i,{attrs:{role:"navigation","aria-label":u}}),b)}});a(71),a(21);a.d(e,"a",function(){return i})},236:function(t,e,a){"use strict";a.r(e);var n=a(198),r=a(197),i={components:{Pager:n.a,Post:r.a},metaInfo:function(){return{title:this.$page.wordPressPostTag.title}}},o=a(7),s=a(195),l=function(t){Object(s.a)(t,void 0)},u=Object(o.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("h1",[this._v("Tag: "+this._s(this.$page.wordPressPostTag.title)+" ")]),e("ul",{staticClass:"post-list"},this._l(this.$page.wordPressPostTag.belongsTo.edges,function(t){var a=t.node;return e("li",{key:a.id},[e("Post",{attrs:{post:a}})],1)}),0),e("Pager",{attrs:{info:this.$page.wordPressPostTag.belongsTo.pageInfo}})],1)},[],!1,null,null,null);"function"==typeof l&&l(u);e.default=u.exports}}]);