(self.webpackChunkmatic_js_docs=self.webpackChunkmatic_js_docs||[]).push([[3668],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},829:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:3},c="Burn ERC20",s={unversionedId:"pos/ERC20/burnERC20",id:"version-2.0.x/pos/ERC20/burnERC20",isDocsHomePage:!1,title:"Burn ERC20",description:"`js",source:"@site/versioned_docs/version-2.0.x/pos/ERC20/burnERC20.md",sourceDirName:"pos/ERC20",slug:"/pos/ERC20/burnERC20",permalink:"/matic.js/docs/pos/ERC20/burnERC20",editUrl:"https://github.com/maticnetwork/matic.js/edit/master/docs/versioned_docs/version-2.0.x/pos/ERC20/burnERC20.md",version:"2.0.x",lastUpdatedBy:"ujjwalgupta94",lastUpdatedAt:1628081349,formattedLastUpdatedAt:"8/4/2021",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-2.0.x/docs",previous:{title:"Deposit ERC20",permalink:"/matic.js/docs/pos/ERC20/depositERC20ForUser"},next:{title:"Exit ERC20",permalink:"/matic.js/docs/pos/ERC20/exitERC20"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"burn-erc20"},"Burn ERC20"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"maticPOSClient.burnERC20(childToken, amount, options)\n")),(0,i.kt)("p",null,"Burn given ",(0,i.kt)("inlineCode",{parentName:"p"},"amount")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"childToken")," to be exited from POS Portal."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"childToken")," must be valid ERC20 token address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount")," must be token amount in wei (string, not in Number)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," see ",(0,i.kt)("a",{parentName:"li",href:"#approveERC20TokensForDeposit"},"more infomation here"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encodeAbi")," must be boolean value. For Byte code of transaction, use ",(0,i.kt)("inlineCode",{parentName:"li"},"encodeAbi: true"))))),(0,i.kt)("p",null,"This returns ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," object, which will be fulfilled when transaction gets confirmed (when receipt is generated)."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"maticPOSClient.burnERC20('0x718Ca123...', '1000000000000000000', {\n  from: '0xABc578455...',\n})\n")),(0,i.kt)("hr",null))}m.isMDXComponent=!0}}]);