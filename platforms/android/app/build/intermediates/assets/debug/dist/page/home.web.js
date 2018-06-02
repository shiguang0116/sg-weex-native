// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=47)}({0:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},1:function(e,t){e.exports=function(e,t,n,r,i){var o,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,s=e.default);var l="function"==typeof s?s.options:s;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),r&&(l._scopeId=r);var c;if(i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=c):n&&(c=n),c){var d=l.functional,u=d?l.render:l.beforeCreate;d?l.render=function(e,t){return c.call(t),u(e,t)}:l.beforeCreate=u?[].concat(u,c):[c]}return{esModule:o,exports:s,options:l}}},10:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},e._l(e.list,function(t){return n("div",{staticClass:"list",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[n("div",{staticClass:"button",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),on:{click:function(n){e.jump(t.url)}}},[n("text",{class:["icon",t.title==e.title?"active":""],staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v(e._s(t.icon))]),e._v(" "),n("text",{class:["title",t.title==e.title?"active":""],staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v(e._s(t.title))])])])}))},staticRenderFns:[]},e.exports.render._withStripped=!0},11:function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("291d9e9f",r,!1)},12:function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("6618d0f7",r,!1)},13:function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],a=o[1],l=o[2],c=o[3],d={id:e+":"+i,css:a,media:l,sourceMap:c};r[s]?r[s].parts.push(d):n.push(r[s]={id:s,parts:[d]})}return n}},2:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));d[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(f)return v;r.parentNode.removeChild(r)}if(h){var o=A++;r=p||(p=i()),t=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function a(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(13),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,A=0,f=!1,v=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){f=n;var i=c(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=d[s.id];a.refs--,n.push(a)}t?(i=c(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete d[a.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},24:function(e,t,n){function r(e){i||n(79)}var i=!1,o=n(1)(n(34),n(69),r,"data-v-4c3be762",null);o.options.__file="D:\\shig\\weex\\weex-create\\src\\page\\home.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},props:{title:{type:String,default:"首页"},show:{type:Boolean,default:!0},rightText:{type:String,default:""},rightButton:{type:String,default:""}},methods:{back:function(){window.history.back()}}}},34:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),o=r(i),s=n(8),a=r(s),l=weex.requireModule("navigator"),c=weex.requireModule("modal");t.default={components:{AppHeader:o.default,AppNav:a.default},data:function(){return{isShow:!1,list:[{title:"选项1",value:1},{title:"选项2",value:2,checked:!0},{title:"选项3",value:3},{title:"选项4",value:4}],checkedList:[2]}},methods:{jump:function(){l.push({url:"/web/index.html?page=/dist/page/detail.js",animated:"true"},function(e){c.toast({message:"callback: "+e})})},wxcCheckBoxListChecked:function(e){this.checkedList=e.checkedList}}}},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=weex.requireModule("navigator");weex.requireModule("modal");t.default={data:function(){return{list:[{url:"/web/index.html?page=/page/home.js",title:"首页",icon:"1"},{url:"/web/index.html?page=/page/news.js",title:"消息",icon:"2"},{url:"/web/index.html?page=/page/find.js",title:"发现",icon:"3"},{url:"/web/index.html?page=/page/center.js",title:"我的",icon:"4"}]}},props:{title:{default:"首页"}},methods:{jump:function(e,t){r.push({url:e,animated:"false"},function(){})}}}},47:function(e,t,n){"use strict";var r=n(24);r.el="#root",new Vue(r)},5:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.top[data-v-4584a3be]{\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    width: 750px;\n    height: 80px;\n    background-color: #abcdef;\n}\n.middle-title[data-v-4584a3be]{\n    font-size: 40px;\n}\n.left[data-v-4584a3be]{\n    width: 80px;\n}\n.left-button[data-v-4584a3be] {\n    width: 21px;\n    height: 36px;\n    margin-left: 40px;\n}\n.right[data-v-4584a3be] {\n    width: 80px;\n}\n.right-button[data-v-4584a3be] {\n    /*width: 32px;\n    height: 32px;\n    margin-right: 16px;*/\n}\n","",{version:3,sources:["D:/shig/weex/weex-create/src/common/header.vue?44a00eb8"],names:[],mappings:";AAcA;IACA,oBAAA;IACA,+BAAA;IACA,oBAAA;IACA,gBAAA;IACA,OAAA;IACA,aAAA;IACA,aAAA;IACA,0BAAA;CACA;AACA;IACA,gBAAA;CACA;AACA;IACA,YAAA;CACA;AACA;IACA,YAAA;IACA,aAAA;IACA,kBAAA;CACA;AACA;IACA,YAAA;CACA;AACA;IACA;;yBAEA;CACA",file:"header.vue",sourcesContent:['<template>\r\n    <div class="top">\r\n        <div class="left" @click="back">\r\n            <image v-if="show" src="https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png" class="left-button"></image>\r\n        </div>\r\n        <text class="middle-title">{{title}}</text>\r\n        <div class="right">\r\n            <text class="rightText" v-if="rightText">{{rightText}}</text>\r\n            <image :src="rightButton" class="right-button" v-if="rightButton"></image>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<style scoped>\r\n    .top{\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        position: fixed;\r\n        top: 0;\r\n        width: 750px;\r\n        height: 80px;\r\n        background-color: #abcdef;\r\n    }  \r\n    .middle-title{\r\n        font-size: 40px;\r\n    }\r\n    .left{\r\n        width: 80px;\r\n    }\r\n    .left-button {\r\n        width: 21px;\r\n        height: 36px;\r\n        margin-left: 40px;\r\n    }\r\n    .right {\r\n        width: 80px;\r\n    }\r\n    .right-button {\r\n        /*width: 32px;\r\n        height: 32px;\r\n        margin-right: 16px;*/\r\n    }\r\n</style>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                \r\n            }\r\n        },\r\n        props: {\r\n            title:  { type: String, default: \'首页\'},\r\n            show:   { type: Boolean, default: true},\r\n            rightText: {\r\n                type: String,\r\n                default: \'\'\r\n            },\r\n            rightButton: {\r\n                type: String,\r\n                default: \'\'\r\n            }\r\n        },\r\n        methods: {\r\n            back: function(){\r\n                window.history.back();\r\n            }\r\n        }\r\n    }\r\n<\/script>'],sourceRoot:""}])},55:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.wrapper[data-v-4c3be762]{\n    /*margin-top: 100px;*/\n}\n.main[data-v-4c3be762] { \n    margin-top: 100px;\n}\n\n","",{version:3,sources:["D:/shig/weex/weex-create/src/page/home.vue?1a4a50d4"],names:[],mappings:";AAgBA;IACA,sBAAA;CACA;AACA;IACA,kBAAA;CACA",file:"home.vue",sourcesContent:['<template>\r\n<div class="wrapper">\r\n    <app-header title="首页" :show="false"></app-header>\r\n    <div class="main">\r\n        \x3c!-- <wxc-button type="jishi" text="查看详情"\r\n            @wxcButtonClicked="jump">\r\n        </wxc-button><wxc-button type="jishiBorder" style="margin-top: 10px" text="查看详情"\r\n            @wxcButtonClicked="jump">\r\n        </wxc-button> --\x3e\r\n        <text class="detail-btn" @click="jump">点击进入详情11</text>\r\n    </div>\r\n    <app-nav title="首页"></app-nav>\r\n</div>\r\n</template>\r\n\r\n<style scoped>\r\n    .wrapper{\r\n        /*margin-top: 100px;*/\r\n    }\r\n    .main { \r\n        margin-top: 100px;\r\n    }\r\n\r\n</style>\r\n\r\n<script>\r\n    import AppHeader from \'../common/header.vue\'\r\n    import AppNav from \'../common/nav.vue\'\r\n    // import {WxcButton} from \'weex-ui\';\r\n    // import WxcButton from \'../include/weex-ui/wxc-button\';\r\n\r\n    var navigator = weex.requireModule(\'navigator\')\r\n    var modal = weex.requireModule(\'modal\')\r\n\r\n    export default {\r\n        components:{\r\n            AppHeader,\r\n            AppNav,\r\n            // WxcButton\r\n        },\r\n        data() {\r\n            return {\r\n                isShow: false,\r\n                list: [\r\n                    { title: \'选项1\', value: 1 },\r\n                    { title: \'选项2\', value: 2, checked: true },\r\n                    { title: \'选项3\', value: 3 },\r\n                    { title: \'选项4\', value: 4 }\r\n                ],\r\n                checkedList: [2]\r\n            }\r\n        },\r\n        methods: {\r\n            jump () {\r\n                navigator.push({\r\n                  url: \'/web/index.html?page=/dist/page/detail.js\',\r\n                  animated: "true"\r\n                }, event => {\r\n                  modal.toast({ message: \'callback: \' + event })\r\n                })\r\n            },\r\n            wxcCheckBoxListChecked (e) {\r\n                this.checkedList = e.checkedList;\r\n          }\r\n        }\r\n    }\r\n<\/script>'],sourceRoot:""}])},6:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"\n.nav[data-v-dfab0782]{\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    position: fixed;\n    bottom: 0;\n    z-index: 1000;\n    width: 750px;\n    height: 100px;\n    background-color: white;\n    border-top-color: #ddd; \n    border-top-style: solid; \n    border-top-width: 1px;\n}\n.button[data-v-dfab0782]{\n    flex-direction: column;\n    align-items: center;\n}\n.title[data-v-dfab0782]{\n    font-size: 35px;\n}\n.icon[data-v-dfab0782]{\n    font-size: 35px;\n}\n.active[data-v-dfab0782]{\n    color: #ff8000;\n}\n","",{version:3,sources:["D:/shig/weex/weex-create/src/common/nav.vue?008563ce"],names:[],mappings:";AAYA;IACA,oBAAA;IACA,8BAAA;IACA,oBAAA;IACA,gBAAA;IACA,UAAA;IACA,cAAA;IACA,aAAA;IACA,cAAA;IACA,wBAAA;IACA,uBAAA;IACA,wBAAA;IACA,sBAAA;CACA;AACA;IACA,uBAAA;IACA,oBAAA;CACA;AACA;IACA,gBAAA;CACA;AACA;IACA,gBAAA;CACA;AACA;IACA,eAAA;CACA",file:"nav.vue",sourcesContent:["<template>\r\n    <div class=\"nav\">\r\n        <div class=\"list\" v-for=\"item in list\">\r\n            <div class=\"button\" @click=\"jump(item.url)\">\x3c!-- :href=\"item.url\" --\x3e\r\n                <text :class=\"['icon', item.title == title ? 'active' : '']\">{{item.icon}}</text>\r\n                <text :class=\"['title', item.title == title ? 'active' : '']\">{{item.title}}</text>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<style scoped>\r\n    .nav{\r\n        flex-direction: row;\r\n        justify-content: space-around;\r\n        align-items: center;\r\n        position: fixed;\r\n        bottom: 0;\r\n        z-index: 1000;\r\n        width: 750px;\r\n        height: 100px;\r\n        background-color: white;\r\n        border-top-color: #ddd; \r\n        border-top-style: solid; \r\n        border-top-width: 1px; \r\n    }\r\n    .button{\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    .title{\r\n        font-size: 35px;\r\n    }\r\n    .icon{\r\n        font-size: 35px;\r\n    }\r\n    .active{\r\n        color: #ff8000;\r\n    }\r\n</style>\r\n\r\n<script>\r\n    var navigator = weex.requireModule('navigator')\r\n    var modal = weex.requireModule('modal')\r\n\r\n    export default {\r\n        data(){\r\n            return {\r\n                list: [\r\n                    {url:'/web/index.html?page=/page/home.js',title:'首页',icon:'1'},\r\n                    {url:'/web/index.html?page=/page/news.js',title:'消息',icon:'2'},\r\n                    {url:'/web/index.html?page=/page/find.js',title:'发现',icon:'3'},\r\n                    {url:'/web/index.html?page=/page/center.js',title:'我的',icon:'4'}\r\n                ]\r\n            }\r\n        },\r\n        props: {\r\n            'title': {default: '首页'}\r\n        },\r\n        methods: {\r\n            jump (url,title) {\r\n                navigator.push({\r\n                    url: url,\r\n                    animated: \"false\"\r\n                },function(){\r\n                    // modal.toast({ message: 'callback: ' + title })\r\n                })\r\n            }\r\n        }\r\n    }\r\n<\/script>"],sourceRoot:""}])},69:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[n("app-header",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{title:"首页",show:!1}}),e._v(" "),n("div",{staticClass:"main",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[n("text",{staticClass:"detail-btn",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),on:{click:e.jump}},[e._v("点击进入详情11")])]),e._v(" "),n("app-nav",{staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{title:"首页"}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},7:function(e,t,n){function r(e){i||n(11)}var i=!1,o=n(1)(n(3),n(9),r,"data-v-4584a3be",null);o.options.__file="D:\\shig\\weex\\weex-create\\src\\common\\header.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] header.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},79:function(e,t,n){var r=n(55);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("6e17bd13",r,!1)},8:function(e,t,n){function r(e){i||n(12)}var i=!1,o=n(1)(n(4),n(10),r,"data-v-dfab0782",null);o.options.__file="D:\\shig\\weex\\weex-create\\src\\common\\nav.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] nav.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},9:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[n("div",{staticClass:"left",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),on:{click:e.back}},[e.show?n("image",{staticClass:"left-button",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{src:"https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png"}}):e._e()]),e._v(" "),n("text",{staticClass:"middle-title",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"right",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e.rightText?n("text",{staticClass:"rightText",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v(e._s(e.rightText))]):e._e(),e._v(" "),e.rightButton?n("image",{staticClass:"right-button",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{src:e.rightButton}}):e._e()])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});
//# sourceMappingURL=home.web.js.map