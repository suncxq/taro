(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[9060],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return k},kt:function(){return u}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=r.createContext({}),d=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},k=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,i=t.parentName,k=c(t,["components","mdxType","originalType","parentName"]),p=d(n),u=l,m=p["".concat(i,".").concat(u)]||p[u]||s[u]||a;return n?r.createElement(m,o(o({ref:e},k),{},{components:n})):r.createElement(m,o({ref:e},k))}));function u(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:l,o[1]=c;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(t,e,n){"use strict";var r=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,l=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:l},e)}},41395:function(t,e,n){"use strict";n.d(e,{Z:function(){return k}});var r=n(67294),l=n(80944),a=n(86010),o="tabItem_1uMI",c="tabItemActive_2DSg";var i=37,d=39;var k=function(t){var e=t.lazy,n=t.block,k=t.defaultValue,s=t.values,p=t.groupId,u=t.className,m=(0,l.Z)(),g=m.tabGroupChoices,N=m.setTabGroupChoices,v=(0,r.useState)(k),y=v[0],w=v[1],h=r.Children.toArray(t.children),f=[];if(null!=p){var b=g[p];null!=b&&b!==y&&s.some((function(t){return t.value===b}))&&w(b)}var x=function(t){var e=t.currentTarget,n=f.indexOf(e),r=s[n].value;w(r),null!=p&&(N(p,r),setTimeout((function(){var t,n,r,l,a,o,i,d;(t=e.getBoundingClientRect(),n=t.top,r=t.left,l=t.bottom,a=t.right,o=window,i=o.innerHeight,d=o.innerWidth,n>=0&&a<=d&&l<=i&&r>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(c),setTimeout((function(){return e.classList.remove(c)}),2e3))}),150))},S=function(t){var e,n;switch(t.keyCode){case d:var r=f.indexOf(t.target)+1;n=f[r]||f[0];break;case i:var l=f.indexOf(t.target)-1;n=f[l]||f[f.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},u)},s.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,a.Z)("tabs__item",o,{"tabs__item--active":y===e}),key:e,ref:function(t){return f.push(t)},onKeyDown:S,onFocus:x,onClick:x},n)}))),e?(0,r.cloneElement)(h.filter((function(t){return t.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==y})}))))}},79443:function(t,e,n){"use strict";var r=(0,n(67294).createContext)(void 0);e.Z=r},80944:function(t,e,n){"use strict";var r=n(67294),l=n(79443);e.Z=function(){var t=(0,r.useContext)(l.Z);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},32120:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return k},default:function(){return p}});var r=n(22122),l=n(19756),a=(n(67294),n(3905)),o=n(41395),c=n(58215),i={title:"ScrollView",sidebar_label:"ScrollView"},d={unversionedId:"components/viewContainer/scroll-view",id:"version-3.x/components/viewContainer/scroll-view",isDocsHomePage:!1,title:"ScrollView",description:"\u53ef\u6eda\u52a8\u89c6\u56fe\u533a\u57df\u3002\u4f7f\u7528\u7ad6\u5411\u6eda\u52a8\u65f6\uff0c\u9700\u8981\u7ed9scroll-view\u4e00\u4e2a\u56fa\u5b9a\u9ad8\u5ea6\uff0c\u901a\u8fc7 WXSS \u8bbe\u7f6e height\u3002\u7ec4\u4ef6\u5c5e\u6027\u7684\u957f\u5ea6\u5355\u4f4d\u9ed8\u8ba4\u4e3a px",source:"@site/versioned_docs/version-3.x/components/viewContainer/scroll-view.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/scroll-view",permalink:"/taro/docs/components/viewContainer/scroll-view",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/viewContainer/scroll-view.md",version:"3.x",sidebar_label:"ScrollView",frontMatter:{title:"ScrollView",sidebar_label:"ScrollView"},sidebar:"version-3.x/components",previous:{title:"View",permalink:"/taro/docs/components/viewContainer/view"},next:{title:"Swiper",permalink:"/taro/docs/components/viewContainer/swiper"}},k=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"ScrollViewProps",id:"scrollviewprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onScrollDetail",id:"onscrolldetail",children:[]}]}],s={toc:k};function p(t){var e=t.components,n=(0,l.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u53ef\u6eda\u52a8\u89c6\u56fe\u533a\u57df\u3002\u4f7f\u7528\u7ad6\u5411\u6eda\u52a8\u65f6\uff0c\u9700\u8981\u7ed9scroll-view\u4e00\u4e2a\u56fa\u5b9a\u9ad8\u5ea6\uff0c\u901a\u8fc7 WXSS \u8bbe\u7f6e height\u3002\u7ec4\u4ef6\u5c5e\u6027\u7684\u957f\u5ea6\u5355\u4f4d\u9ed8\u8ba4\u4e3a px"),(0,a.kt)("p",null,"Tips:\nH5 \u4e2d ScrollView \u7ec4\u4ef6\u662f\u901a\u8fc7\u4e00\u4e2a\u9ad8\u5ea6\uff08\u6216\u5bbd\u5ea6\uff09\u56fa\u5b9a\u7684\u5bb9\u5668\u5185\u90e8\u6eda\u52a8\u6765\u5b9e\u73b0\u7684\uff0c\u56e0\u6b64\u52a1\u5fc5\u6b63\u786e\u7684\u8bbe\u7f6e\u5bb9\u5668\u7684\u9ad8\u5ea6\u3002\u4f8b\u5982: \u5982\u679c ScrollView \u7684\u9ad8\u5ea6\u5c06 body \u6491\u5f00\uff0c\u5c31\u4f1a\u540c\u65f6\u5b58\u5728\u4e24\u4e2a\u6eda\u52a8\u6761\uff08body \u4e0b\u7684\u6eda\u52a8\u6761\uff0c\u4ee5\u53ca ScrollView \u7684\u6eda\u52a8\u6761\uff09\u3002\n\u5fae\u4fe1\u5c0f\u7a0b\u5e8f \u4e2d ScrollView \u7ec4\u4ef6\u5982\u679c\u8bbe\u7f6e scrollX \u6a2a\u5411\u6eda\u52a8\u65f6\uff0c\u5e76\u4e14\u5b50\u5143\u7d20\u4e3a\u591a\u4e2a\u65f6\uff08\u5355\u4e2a\u5b50\u5143\u7d20\u65f6\u8bbe\u7f6e\u56fa\u5b9a\u5bbd\u5ea6\u5219\u53ef\u4ee5\u6b63\u5e38\u6a2a\u5411\u6eda\u52a8\uff09\uff0c\u9700\u8981\u901a\u8fc7 WXSS \u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"white-space: nowrap")," \u6765\u4fdd\u8bc1\u5143\u7d20\u4e0d\u6362\u884c\uff0c\u5e76\u5bf9 ScrollView \u5185\u90e8\u5143\u7d20\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"display: inline-block")," \u6765\u4f7f\u5176\u80fd\u591f\u6a2a\u5411\u6eda\u52a8\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<ScrollViewProps>\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  onScrollToUpper() {}\n\n  // or \u4f7f\u7528\u7bad\u5934\u51fd\u6570\n  // onScrollToUpper = () => {}\n\n  onScroll(e){\n    console.log(e.detail)\n  }\n\n  render() {\n    const scrollStyle = {\n      height: '150px'\n    }\n    const scrollTop = 0\n    const Threshold = 20\n    const vStyleA = {\n      height: '150px',\n      'background-color': 'rgb(26, 173, 25)'\n    }\n    const vStyleB = {\n       height: '150px',\n      'background-color': 'rgb(39,130,215)'\n    }\n    const vStyleC = {\n      height: '150px',\n      'background-color': 'rgb(241,241,241)',\n      color: '#333'\n    }\n    return (\n      <ScrollView\n        className='scrollview'\n        scrollY\n        scrollWithAnimation\n        scrollTop={scrollTop}\n        style={scrollStyle}\n        lowerThreshold={Threshold}\n        upperThreshold={Threshold}\n        onScrollToUpper={this.onScrollToUpper.bind(this)} // \u4f7f\u7528\u7bad\u5934\u51fd\u6570\u7684\u65f6\u5019 \u53ef\u4ee5\u8fd9\u6837\u5199 `onScrollToUpper={this.onScrollToUpper}`\n        onScroll={this.onScroll}\n      >\n        <View style={vStyleA}>A</View>\n        <View style={vStyleB}>B</View>\n        <View style={vStyleC}>C</View>\n      </ScrollView>\n    )\n  }\n}\n"))),(0,a.kt)(c.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="container">\n    <view class="page-body">\n      <view class="page-section">\n        <view class="page-section-title">\n          <text>Vertical Scroll - \u7eb5\u5411\u6eda\u52a8</text>\n        </view>\n        <view class="page-section-spacing">\n          <scroll-view :scroll-y="true" style="height: 300rpx;" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll" :scroll-into-view="toView" :scroll-top="scrollTop">\n            <view id="demo1" class="scroll-view-item demo-text-1">1</view>\n            <view id="demo2"  class="scroll-view-item demo-text-2">2</view>\n            <view id="demo3" class="scroll-view-item demo-text-3">3</view>\n          </scroll-view>\n        </view>\n      </view>\n      <view class="page-section">\n        <view class="page-section-title">\n          <text>Horizontal Scroll - \u6a2a\u5411\u6eda\u52a8</text>\n        </view>\n        <view class="page-section-spacing">\n          <scroll-view class="scroll-view_H" :scroll-x="true" @scroll="scroll" style="width: 100%">\n            <view id="demo21" class="scroll-view-item_H demo-text-1">a</view>\n            <view id="demo22"  class="scroll-view-item_H demo-text-2">b</view>\n            <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>\n          </scroll-view>\n        </view>\n      </view>\n    </view>\n  </view>\n</template>\n\n<script>\nconst order = [\'demo1\', \'demo2\', \'demo3\']\nexport default {\n  name: \'Index\',\n  data() {\n    return {\n      scrollTop: 0,\n      toView: \'demo2\'\n    }\n  },\n\n  methods: {\n    upper(e) {\n      console.log(\'upper:\', e)\n    },\n\n    lower(e) {\n      console.log(\'lower:\', e)\n    },\n\n    scroll(e) {\n      console.log(\'scroll:\', e)\n    }\n  }\n}\n<\/script>\n\n<style>\n.page-section-spacing{\n  margin-top: 60rpx;\n}\n.scroll-view_H{\n  white-space: nowrap;\n}\n.scroll-view-item{\n  height: 300rpx;\n}\n.scroll-view-item_H{\n  display: inline-block;\n  width: 100%;\n  height: 300rpx;\n}\n\n.demo-text-1 { background: #ccc; }\n.demo-text-2 { background: #999; }\n.demo-text-3 { background: #666; }\n</style>\n')))),(0,a.kt)("h2",{id:"scrollviewprops"},"ScrollViewProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollX"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"fasle")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5141\u8bb8\u6a2a\u5411\u6eda\u52a8")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollY"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"fasle")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5141\u8bb8\u7eb5\u5411\u6eda\u52a8")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"upperThreshold"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"50")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8ddd\u9876\u90e8/\u5de6\u8fb9\u591a\u8fdc\u65f6\uff08\u5355\u4f4dpx\uff09\uff0c\u89e6\u53d1 scrolltoupper \u4e8b\u4ef6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"lowerThreshold"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"50")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8ddd\u5e95\u90e8/\u53f3\u8fb9\u591a\u8fdc\u65f6\uff08\u5355\u4f4dpx\uff09\uff0c\u89e6\u53d1 scrolltolower \u4e8b\u4ef6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollTop"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8bbe\u7f6e\u7ad6\u5411\u6eda\u52a8\u6761\u4f4d\u7f6e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollLeft"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8bbe\u7f6e\u6a2a\u5411\u6eda\u52a8\u6761\u4f4d\u7f6e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollIntoView"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u503c\u5e94\u4e3a\u67d0\u5b50\u5143\u7d20id\uff08id\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\uff09\u3002\u8bbe\u7f6e\u54ea\u4e2a\u65b9\u5411\u53ef\u6eda\u52a8\uff0c\u5219\u5728\u54ea\u4e2a\u65b9\u5411\u6eda\u52a8\u5230\u8be5\u5143\u7d20")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollWithAnimation"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"fasle")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5728\u8bbe\u7f6e\u6eda\u52a8\u6761\u4f4d\u7f6e\u65f6\u4f7f\u7528\u52a8\u753b\u8fc7\u6e21")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"enableBackToTop"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"fasle")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"iOS \u70b9\u51fb\u9876\u90e8\u72b6\u6001\u680f\u3001\u5b89\u5353\u53cc\u51fb\u6807\u9898\u680f\u65f6\uff0c\u6eda\u52a8\u6761\u8fd4\u56de\u9876\u90e8\uff0c\u53ea\u652f\u6301\u7ad6\u5411")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"enableFlex"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"fasle")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u542f\u7528 flexbox \u5e03\u5c40\u3002\u5f00\u542f\u540e\uff0c\u5f53\u524d\u8282\u70b9\u58f0\u660e\u4e86 ",(0,a.kt)("code",null,"display: flex")," \u5c31\u4f1a\u6210\u4e3a flex container\uff0c\u5e76\u4f5c\u7528\u4e8e\u5176\u5b69\u5b50\u8282\u70b9\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollAnchoring"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"fasle")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5f00\u542f scroll anchoring \u7279\u6027\uff0c\u5373\u63a7\u5236\u6eda\u52a8\u4f4d\u7f6e\u4e0d\u968f\u5185\u5bb9\u53d8\u5316\u800c\u6296\u52a8\uff0c\u4ec5\u5728 iOS \u4e0b\u751f\u6548\uff0c\u5b89\u5353\u4e0b\u53ef\u53c2\u8003 CSS ",(0,a.kt)("code",null,"overflow-anchor")," \u5c5e\u6027\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"refresherEnabled"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"fasle")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5f00\u542f\u81ea\u5b9a\u4e49\u4e0b\u62c9\u5237\u65b0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"refresherThreshold"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"45")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u4e0b\u62c9\u5237\u65b0\u9608\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"refresherDefaultStyle"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"'black'")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u4e0b\u62c9\u5237\u65b0\u9ed8\u8ba4\u6837\u5f0f\uff0c\u652f\u6301\u8bbe\u7f6e ",(0,a.kt)("code",null,"black | white | none"),"\uff0c none \u8868\u793a\u4e0d\u4f7f\u7528\u9ed8\u8ba4\u6837\u5f0f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"refresherBackground"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"'#FFF'")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u4e0b\u62c9\u5237\u65b0\u533a\u57df\u80cc\u666f\u989c\u8272")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"refresherTriggered"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"fasle")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8bbe\u7f6e\u5f53\u524d\u4e0b\u62c9\u5237\u65b0\u72b6\u6001\uff0ctrue \u8868\u793a\u4e0b\u62c9\u5237\u65b0\u5df2\u7ecf\u88ab\u89e6\u53d1\uff0cfalse \u8868\u793a\u4e0b\u62c9\u5237\u65b0\u672a\u88ab\u89e6\u53d1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onScrollToUpper"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6eda\u52a8\u5230\u9876\u90e8/\u5de6\u8fb9\uff0c\u4f1a\u89e6\u53d1 scrolltoupper \u4e8b\u4ef6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onScrollToLower"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6eda\u52a8\u5230\u5e95\u90e8/\u53f3\u8fb9\uff0c\u4f1a\u89e6\u53d1 scrolltolower \u4e8b\u4ef6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onScroll"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(event: BaseEventOrigFunction<onScrollDetail>) => any")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6eda\u52a8\u65f6\u89e6\u53d1",(0,a.kt)("br",null),(0,a.kt)("code",null,"event.detail = ","{ scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onRefresherPulling"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u81ea\u5b9a\u4e49\u4e0b\u62c9\u5237\u65b0\u63a7\u4ef6\u88ab\u4e0b\u62c9")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onRefresherRefresh"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u81ea\u5b9a\u4e49\u4e0b\u62c9\u5237\u65b0\u88ab\u89e6\u53d1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onRefresherRestore"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u81ea\u5b9a\u4e49\u4e0b\u62c9\u5237\u65b0\u88ab\u590d\u4f4d")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onRefresherAbort"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u81ea\u5b9a\u4e49\u4e0b\u62c9\u5237\u65b0\u88ab\u4e2d\u6b62")))),(0,a.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.scrollX"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f(\u4e8c\u9009\u4e00)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.scrollY"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f(\u4e8c\u9009\u4e00)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.upperThreshold"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.lowerThreshold"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.scrollTop"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.scrollLeft"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.scrollIntoView"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.scrollWithAnimation"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.enableBackToTop"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.enableFlex"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.scrollAnchoring"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.refresherEnabled"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.refresherThreshold"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.refresherDefaultStyle"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.refresherBackground"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.refresherTriggered"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.onScrollToUpper"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.onScrollToLower"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.onScroll"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.onRefresherPulling"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.onRefresherRefresh"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.onRefresherRestore"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.onRefresherAbort"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"onscrolldetail"},"onScrollDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollLeft"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u6a2a\u5411\u6eda\u52a8\u6761\u4f4d\u7f6e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollTop"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u7ad6\u5411\u6eda\u52a8\u6761\u4f4d\u7f6e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollHeight"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u6eda\u52a8\u6761\u9ad8\u5ea6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollWidth"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u6eda\u52a8\u6761\u5bbd\u5ea6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"deltaX"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"deltaY"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null)))))}p.isMDXComponent=!0},86010:function(t,e,n){"use strict";function r(t){var e,n,l="";if("string"==typeof t||"number"==typeof t)l+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(l&&(l+=" "),l+=n);else for(e in t)t[e]&&(l&&(l+=" "),l+=e);return l}function l(){for(var t,e,n=0,l="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(l&&(l+=" "),l+=e);return l}n.d(e,{Z:function(){return l}})}}]);