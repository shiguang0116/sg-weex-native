// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=48)}({0:function(e,t,n){var r,i,o=[];o.push(n(5)),r=n(2);var s=n(7);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="D:\\shig\\weex\\weex-create\\src\\common\\header.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-45159068",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=r},1:function(e,t,n){var r,i,o=[];o.push(n(4)),r=n(3);var s=n(6);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="D:\\shig\\weex\\weex-create\\src\\common\\nav.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-7397d150",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=r},19:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=r(i),s=n(1),a=r(s),c=weex.requireModule("modal");t.default={components:{AppHeader:o.default,AppNav:a.default},data:function(){return{res1:"",testData1:[{title:"上海"},{title:"杭州",checked:!0},{title:"北京"},{title:"广州"},{title:"深圳"},{title:"南京"},{title:"合肥"},{title:"武汉"},{title:"长沙"},{title:"最多展示两行内容"},{title:"超过两行文本将被截断展示"},{title:"西安"},{title:"郑州"},{title:"福州"}],customStyles:{lineSpacing:"12px",width:"80px",height:"30px",icon:"",color:"#333",checkedColor:"#fff",disabledColor:"#eee",borderColor:"#ddd",checkedBorderColor:"#ffb200",backgroundColor:"#fff",checkedBackgroundColor:"#ffb200"}}},methods:{onSelect:function(e,t){var n=t.selectIndex,r=t.checked,i=t.checkedList;Vue.set(this,e,"本次选择的index："+n+"\n是否选中："+(r?"是":"否")+"\n选中列表："+i.map(function(e){return e.title}).join(","))},onOverLimit:function(e){c.toast({message:"最多选择"+e+"个",duration:.8})}}}},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},props:{title:{type:String,default:"首页"},show:{type:Boolean,default:!0},rightText:{type:String,default:""},rightButton:{type:String,default:""}},methods:{back:function(){window.history.back()}}}},21:function(e,t){e.exports={main:{marginTop:100,marginBottom:100}}},27:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrapper"]},[n("app-header",{attrs:{title:"消息",show:!1}}),e._m(0),n("app-nav",{attrs:{title:"消息"}})],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["main"]},[n("text",[e._v("select")])])}]},e.exports.render._withStripped=!0},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=weex.requireModule("navigator");weex.requireModule("modal");t.default={data:function(){return{list:[{url:"/web/index.html?page=/page/home.js",title:"首页",icon:"1"},{url:"/web/index.html?page=/page/news.js",title:"消息",icon:"2"},{url:"/web/index.html?page=/page/find.js",title:"发现",icon:"3"},{url:"/web/index.html?page=/page/center.js",title:"我的",icon:"4"}]}},props:{title:{default:"首页"}},methods:{jump:function(e,t){r.push({url:e,animated:"false"},function(){})}}}},4:function(e,t){e.exports={nav:{flexDirection:"row",justifyContent:"space-around",alignItems:"center",position:"fixed",bottom:0,zIndex:1e3,width:750,height:100,backgroundColor:"#FFFFFF",borderTopColor:"#dddddd",borderTopStyle:"solid",borderTopWidth:1},button:{flexDirection:"column",alignItems:"center"},title:{fontSize:35},icon:{fontSize:35},active:{color:"#ff8000"}}},48:function(e,t,n){var r,i,o=[];o.push(n(21)),r=n(19);var s=n(27);i=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i=r=r.default),"function"==typeof i&&(i=i.options),i.__file="D:\\shig\\weex\\weex-create\\src\\page\\news.vue",i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-026c826c",i.style=i.style||{},o.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,o),e.exports=r,e.exports.el="true",new Vue(e.exports)},5:function(e,t){e.exports={top:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",position:"fixed",top:0,width:750,height:80,backgroundColor:"#abcdef"},"middle-title":{fontSize:40},left:{width:80},"left-button":{width:21,height:36,marginLeft:40},right:{width:80}}},6:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["nav"]},e._l(e.list,function(t){return n("div",{staticClass:["list"]},[n("div",{staticClass:["button"],on:{click:function(n){e.jump(t.url)}}},[n("text",{class:["icon",t.title==e.title?"active":""]},[e._v(e._s(t.icon))]),n("text",{class:["title",t.title==e.title?"active":""]},[e._v(e._s(t.title))])])])}))},staticRenderFns:[]},e.exports.render._withStripped=!0},7:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["top"]},[n("div",{staticClass:["left"],on:{click:e.back}},[e.show?n("image",{staticClass:["left-button"],attrs:{src:"https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png"}}):e._e()]),n("text",{staticClass:["middle-title"]},[e._v(e._s(e.title))]),n("div",{staticClass:["right"]},[e.rightText?n("text",{staticClass:["rightText"]},[e._v(e._s(e.rightText))]):e._e(),e.rightButton?n("image",{staticClass:["right-button"],attrs:{src:e.rightButton}}):e._e()])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});