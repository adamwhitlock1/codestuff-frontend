(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{197:function(t,e,a){"use strict";var s=a(12),i=a(116)(1);s(s.P+s.F*!a(117)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},208:function(t,e,a){t.exports=a.p+"assets/img/designer_panel.653c4084.jpg"},209:function(t,e,a){t.exports=a.p+"assets/img/designer_panel_1_utils.df69a720.jpg"},210:function(t,e,a){t.exports=a.p+"assets/img/designer_panel_2.e1c3e3dd.jpg"},211:function(t,e,a){t.exports=a.p+"assets/img/designer_panel_3_edits_all.0988edff.jpg"},236:function(t,e,a){"use strict";a.r(e);var s=a(20),i=a(108),l=a.n(i),n=(a(197),{data:function(){return{formData:{"form-name":"contact","bot-field":""}}},methods:{encode:function(t){return l()(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")},handleSubmit:function(t){var e=this;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:this.encode(Object(s.a)({},this.formData))}).then(function(){return e.$router.push("/success")}).catch(function(t){return alert(t)})}}}),o=a(8),r={components:{ContactForm:Object(o.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{staticClass:"m-10",attrs:{name:"contact",method:"POST",action:"/success/","data-netlify":"true","data-netlify-honeypot":"bot-field"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("p",{attrs:{hidden:""}},[a("label",[t._v("\n      Don’t fill this out: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData["bot-field"],expression:"formData['bot-field']"}],attrs:{name:"bot-field"},domProps:{value:t.formData["bot-field"]},on:{input:function(e){e.target.composing||t.$set(t.formData,"bot-field",e.target.value)}}})])]),a("input",{attrs:{type:"hidden",name:"form-name",value:"contact"}}),a("div",{staticClass:"flex flex-row"},[a("div",{staticClass:"w-1/2"},[a("label",{staticClass:"ml-6 w-1/3"},[t._v("Name ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"w-2/3 p-2 px-6 rounded-full border-0 text-cyan-dark shadow-md font-sans text-2xl mx-2",attrs:{type:"text",name:"name",required:""},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}})]),a("div",{staticClass:"w-1/2"},[a("label",{staticClass:"ml-6 w-1/3"},[t._v("Email ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"w-2/3 p-2 px-6 rounded-full border-0 text-cyan-dark shadow-md font-sans text-2xl mx-2",attrs:{type:"email",name:"email",required:""},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}})])]),a("div",{staticClass:"flex flex-row mx-6"},[a("div",{staticClass:"w-full mt-6"},[a("p",{staticClass:"w-full"},[t._v("Message ")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.message,expression:"formData.message"}],staticClass:"rounded-lg w-full font-sans text-2xl p-3 border-0 text-cyan-dark shadow-md",attrs:{required:"",rows:"8",name:"message"},domProps:{value:t.formData.message},on:{input:function(e){e.target.composing||t.$set(t.formData,"message",e.target.value)}}})])]),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-row mt-4 justify-end"},[e("button",{staticClass:"btn-default bg-cyan-darkest text-white mr-6",attrs:{type:"submit"}},[this._v("Send me a message :)")])])}],!1,null,null,null).exports}},d=Object(o.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("ClientOnly",[s("div",{staticClass:"flex items-center flex-row py-6 px-12"},[s("div",{staticClass:"text-white shadow-md text-center p-10 pr-16 bg-yellow rounded w-1/3"},[s("h4",{staticClass:"text-4xl text-black m-0 mb-3"},[t._v("The Designer Panel:")]),s("p",{staticClass:"font-extrabold mx-12 my-0 text-yellow-darkest rounded px-10 py-4 bg-yellow-lightest shadow"},[t._v("html, css, javascript, nodejs, adobe scripting libraries.")]),s("p",{staticClass:"text-black mb-4"},[t._v("A concept that was developed while working as a graphic designer. This Photoshop extension includes over 100 tools and workflow accelerators for the daily designer. The Designer Panel has a three tab structure including Utilities, Templates, and Edits.")]),s("div",{staticClass:"my-8"},[s("button",{directives:[{name:"scrolly",rawName:"v-scrolly",value:{id:"#utils"},expression:'{id: "#utils"}'}],staticClass:"rounded-full font-sans border-0 text-yellow-darkest text-lg no-underline bg-white shadow px-6 py-3"},[t._v("explore the utilities")])])]),s("div",{staticClass:"text-white text-center bg-adobe p-4 rounded shadow-deep ml-6-neg w-2/3 "},[s("img",{staticClass:"w-full",attrs:{src:a(208),alt:""}})])]),s("div",{staticClass:"flex flex-row items-center py-6 px-12",attrs:{id:"utils"}},[s("div",{staticClass:"text-white text-center bg-adobe w-1/6 mr-6-neg rounded shadow-deep p-10 m-3 z-50"},[s("img",{attrs:{src:a(209),alt:""}})]),s("div",{staticClass:"text-white bg-magenta w-5/6 py-1 pl-12 pr-6 rounded"},[s("h4",{staticClass:"text-4xl text-center mt-12 mb-0 mb-3 h4"},[t._v("The utilities tab.")]),s("p",{staticClass:"font-extrabold mx-10 my-0 text-magenta-darker text-center rounded px-10 py-4 bg-magenta-lightest shadow"},[t._v("This tab consist of common menu hunted items, quick shortcuts, and image optimization tools.")]),s("div",{staticClass:"flex-row flex"},[s("div",{staticClass:"px-8 w-1/3"},[s("ul",[s("li",[t._v("Quick Drop Shadows")]),s("li",[t._v("Clear Layer Syle")]),s("li",[t._v("Smart Filter Reset")]),s("li",[t._v("Rasterize Layer")]),s("li",[t._v("Image Trace\n              "),s("span",{staticClass:"text-xs leading-none"},[s("br"),t._v('Similar to Illustrator\'s image trace, this tool creates a "quick and dirty" vector outline of the selected raster layer.')])])])]),s("div",{staticClass:"px-8 w-1/3"},[s("ul",[s("li",[t._v("Flip and center align layers")]),s("li",[t._v("Delete empty layers")]),s("li",[t._v("Convert to background layer")]),s("li",[t._v("Show/hide all layers")]),s("li",[t._v("Hex color sniffer\n              "),s("span",{staticClass:"text-xs leading-none"},[s("br"),t._v("Copy the current foreground color to the clipboard quickly for use in CSS styles")])])])]),s("div",{staticClass:"px-8 w-1/3"},[s("ul",[s("li",[t._v("Convert to smart object")]),s("li",[t._v("PNG Optimiazation")]),s("li",[t._v("Various image export shortcuts")]),s("li",[t._v("Trim transparent pixels")]),s("li",[t._v("Task/Pomodoro timer")]),s("li",[t._v("Expand smart object\n              "),s("span",{staticClass:"text-xs leading-none"},[s("br"),t._v("Move all layers in a smart object into current document as grouped layers")])])])])]),s("div",{staticClass:"flex flex-row text-center"},[s("div",{staticClass:"w-full pb-12"},[s("button",{directives:[{name:"scrolly",rawName:"v-scrolly",value:{id:"#templates"},expression:'{id: "#templates"}'}],staticClass:"rounded-full font-sans border-0 text-magenta text-lg no-underline bg-white shadow px-6 py-3"},[t._v("all about templates")])])])])]),s("div",{staticClass:"flex flex-row items-center py-6 px-12",attrs:{id:"templates"}},[s("div",{staticClass:"text-white bg-cyan w-5/6 py-1 pr-12 pl-6 rounded"},[s("h4",{staticClass:"text-4xl text-center mt-12 mb-0 mb-3 h4"},[t._v("Templates")]),s("p",{staticClass:"font-extrabold mx-10 my-0 text-cyan-darker text-center rounded px-10 py-4 bg-cyan-lightest shadow"},[t._v("Easily load common templates including assets like buttons, social media layouts, and website grids.")]),s("div",{staticClass:"flex-row flex"},[s("div",{staticClass:"px-8 w-1/3"},[s("ul",[s("li",[t._v("Social media cover & profile")]),s("li",[t._v("Quick links to useful sites")]),s("li",[t._v("Retargeting banner ads\n              "),s("span",{staticClass:"text-xs leading-none"},[s("br"),t._v("All the popular ad sizes for running campaigns on google, facebook, and instagram.")])])])]),s("div",{staticClass:"px-8 w-1/3"},[s("ul",[s("li",[t._v("9 unique ecom starting points")]),s("li",[t._v("Basic site grid")]),s("li",[t._v("Auto dealership template")]),s("li",[t._v("Network drive based templates\n              "),s("span",{staticClass:"text-xs leading-none"},[s("br"),t._v("Company wide templates stored in a single location; all designers instantly have access to the most recent templates.")])])])]),s("div",{staticClass:"px-8 w-1/3"},[s("ul",[s("li",[t._v("Font awesome icons")]),s("li",[t._v("Icomoon icons")]),s("li",[t._v("3 button sets")]),s("li",[t._v("Trust badge assets")]),s("li",[t._v("A template preview windwo\n              "),s("span",{staticClass:"text-xs leading-none"},[s("br"),t._v("Open a seperate window to preview the templates before opening them.")])])])])]),s("div",{staticClass:"flex flex-row text-center"},[s("div",{staticClass:"w-full pb-12 mt-6"},[s("button",{directives:[{name:"scrolly",rawName:"v-scrolly",value:{id:"#edits"},expression:'{id: "#edits"}'}],staticClass:"rounded-full text-cyan font-sans no-underline text-lg bg-white shadow px-6 py-3"},[t._v("last but not least, the edits tab")])])])]),s("div",{staticClass:"text-white text-center bg-adobe w-1/6 ml-6-neg rounded shadow-deep p-10 m-3 z-50"},[s("img",{attrs:{src:a(210),alt:""}})])]),s("div",{staticClass:"flex flex-row items-center py-6 px-12",attrs:{id:"edits"}},[s("div",{staticClass:"text-white text-center bg-adobe w-2/3 mr-6-neg rounded shadow-deep p-10 m-3 z-50"},[s("img",{attrs:{src:a(211),alt:""}})]),s("div",{staticClass:"text-white bg-black w-1/3 py-1 pl-12 pr-6 rounded"},[s("h4",{staticClass:"text-4xl text-center mt-12 mb-0 mb-3 h4"},[t._v("Image Edits")]),s("p",{staticClass:"font-extrabold mx-10 my-0 text-grey-darker text-center rounded px-10 py-4 bg-grey-lightest shadow"},[t._v("The edits section is the largest tab, because it includes nested accordions with tools for background removal, camera raw effects, layer effects, and photo retouching.")]),s("div",{staticClass:"flex-row flex"},[s("div",{staticClass:"px-8 w-1/3"})]),s("div",{staticClass:"flex flex-row text-center"},[s("div",{staticClass:"w-full pb-12 mt-6"},[s("button",{directives:[{name:"scrolly",rawName:"v-scrolly",value:{id:"#contact"},expression:'{id: "#contact"}'}],staticClass:"rounded-full font-sans text-black text-lg no-underline bg-white shadow px-6 py-3"},[t._v("Want an extension like this? Hire me")])])])])]),s("div",{staticClass:"flex flex-row items-center py-6 px-12 mb-32 pb-32",attrs:{id:"contact"}},[s("div",{staticClass:"text-white bg-cyan w-full py-1 pl-12 pr-6 rounded shadow-deep"},[s("h4",{staticClass:"text-4xl text-center mt-12 mb-0 mb-3 h4"},[t._v("Contact Me")]),s("p",{staticClass:"font-extrabold mx-10 my-0 text-cyan-darker text-center rounded px-10 py-4 bg-cyan-lightest shadow"},[t._v("I am currently looking for opportunities involving Vue.js, Node, Vuex, GraphQl, and various other modern technology stacks. Send me a message, and if you would like to review my resume, it can be provided upon request only. "),s("br"),t._v("Thank you,"),s("br"),t._v("Adam Whitlock")]),s("contact-form")],1)])])],1)},[],!1,null,null,null);e.default=d.exports}}]);