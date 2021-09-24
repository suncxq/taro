(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[30309],{22122:function(e,r,t){"use strict";function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(r,{Z:function(){return a}})},19756:function(e,r,t){"use strict";function a(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}t.d(r,{Z:function(){return a}})},3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),l=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},c=function(e){var r=l(e.components);return a.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),d=n,y=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return t?a.createElement(y,u(u({ref:r},c),{},{components:t})):a.createElement(y,u({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,u=new Array(o);u[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var l=2;l<o;l++)u[l]=t[l];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},53584:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var a=t(22122),n=t(19756),o=(t(67294),t(3905)),u={title:"Taro.arrayBufferToBase64(buffer)",sidebar_label:"arrayBufferToBase64"},i={unversionedId:"apis/base/arrayBufferToBase64",id:"apis/base/arrayBufferToBase64",isDocsHomePage:!1,title:"Taro.arrayBufferToBase64(buffer)",description:"Converts an ArrayBuffer object to a Base64 string.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/base/arrayBufferToBase64.md",sourceDirName:"apis/base",slug:"/apis/base/arrayBufferToBase64",permalink:"/taro/en/docs/next/apis/base/arrayBufferToBase64",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/base/arrayBufferToBase64.md",version:"current",sidebar_label:"arrayBufferToBase64",frontMatter:{title:"Taro.arrayBufferToBase64(buffer)",sidebar_label:"arrayBufferToBase64"},sidebar:"API",previous:{title:"Taro.base64ToArrayBuffer(base64)",permalink:"/taro/en/docs/next/apis/base/base64ToArrayBuffer"},next:{title:"Taro.getSystemInfo(res)",permalink:"/taro/en/docs/next/apis/base/system/getSystemInfo"}},s=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Sample Code",id:"sample-code",children:[]},{value:"API Support",id:"api-support",children:[]}],l={toc:s};function c(e){var r=e.components,t=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Converts an ArrayBuffer object to a Base64 string."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/wx.arrayBufferToBase64.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(buffer: ArrayBuffer) => string\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Parameter"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"buffer"),(0,o.kt)("td",null,(0,o.kt)("code",null,"ArrayBuffer")),(0,o.kt)("td",null,"The ArrayBuffer to be converted to a Base64 string")))),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const arrayBuffer = new Uint8Array([11, 22, 33])\nconst base64 = Taro.arrayBufferToBase64(arrayBuffer)\n")),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.arrayBufferToBase64"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}c.isMDXComponent=!0}}]);