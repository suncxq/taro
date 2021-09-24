(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[18519],{22122:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return a}})},19756:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:function(){return a}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(n),m=r,g=l["".concat(s,".").concat(m)]||l[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=l;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},4126:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={title:"Taro.getUpdateManager()",sidebar_label:"getUpdateManager"},p={unversionedId:"apis/base/update/getUpdateManager",id:"version-3.x/apis/base/update/getUpdateManager",isDocsHomePage:!1,title:"Taro.getUpdateManager()",description:"Obtains the globally unique version update manager, which is used to manage Mini Program updates. For more information about the Mini Program update mechanism, see the Operating Mechanism documentation.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/base/update/getUpdateManager.md",sourceDirName:"apis/base/update",slug:"/apis/base/update/getUpdateManager",permalink:"/taro/en/docs/apis/base/update/getUpdateManager",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/base/update/getUpdateManager.md",version:"3.x",sidebar_label:"getUpdateManager",frontMatter:{title:"Taro.getUpdateManager()",sidebar_label:"getUpdateManager"},sidebar:"version-3.x/API",previous:{title:"Taro.getSystemInfoSync()",permalink:"/taro/en/docs/apis/base/system/getSystemInfoSync"},next:{title:"UpdateManager",permalink:"/taro/en/docs/apis/base/update/UpdateManager"}},s=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Sample Code",id:"sample-code",children:[]},{value:"API Support",id:"api-support",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Obtains the ",(0,o.kt)("strong",{parentName:"p"},"globally unique")," version update manager, which is used to manage Mini Program updates. For more information about the Mini Program update mechanism, see the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/runtime/operating-mechanism.html"},"Operating Mechanism")," documentation."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/update/wx.getUpdateManager.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"() => UpdateManager\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const updateManager = Taro.getUpdateManager()\n  updateManager.onCheckForUpdate(function (res) {\n  console.log(res.hasUpdate)\n})\nupdateManager.onUpdateReady(function () {\n  Taro.showModal({\n    title: 'Update Tips',\n    content: 'The new version is ready, is the app restarted?',\n    success: function (res) {\n      if (res.confirm) {\n        // The new version has been downloaded, call applyUpdate to apply the new version and restart.\n        updateManager.applyUpdate()\n      }\n    }\n  })\n})\nupdateManager.onUpdateFailed(function () {\n  // Download of the new version has failed\n})\n")),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.getUpdateManager"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);