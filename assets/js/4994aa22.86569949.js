"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38431],{59096:(e,s,a)=>{a.d(s,{A:()=>t});let t=a.p+"assets/files/docusaurus-asset-example-93ea653de6d8636f7254aecab1adbcce.docx"},76665:(e,s,a)=>{a.d(s,{A:()=>t});let t=a.p+"assets/files/docusaurus-asset-example-93ea653de6d8636f7254aecab1adbcce.docx"},15995:(e,s,a)=>{a.d(s,{A:()=>r});var t=a(62540);a(63696);var n=a(11750);function r({children:e,hidden:s,className:a}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.A)("tabItem_pnkT",a),hidden:s,children:e})}},27446:(e,s,a)=>{a.d(s,{A:()=>y});var t=a(62540),n=a(63696),r=a(11750),l=a(7846),i=a(49519),c=a(96439),o=a(19739),u=a(66904),d=a(79244);function h(e){var s,a;return null!==(a=null===(s=n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){let{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===s?void 0:s.filter(Boolean))&&void 0!==a?a:[]}function m({value:e,tabValues:s}){return s.some(s=>s.value===e)}var p=a(10709);function g(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},t=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(s){var t;t=a[s],s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t})}return e}function f(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):(function(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a.push.apply(a,t)}return a})(Object(s)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}),e}function b({className:e,block:s,selectedValue:a,selectValue:n,tabValues:i}){let c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),u=e=>{let s=e.currentTarget,t=i[c.indexOf(s)].value;t!==a&&(o(s),n(t))},d=e=>{var s,a;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let a=c.indexOf(e.currentTarget)+1;t=null!==(s=c[a])&&void 0!==s?s:c[0];break}case"ArrowLeft":{let s=c.indexOf(e.currentTarget)-1;t=null!==(a=c[s])&&void 0!==a?a:c[c.length-1]}}null==t||t.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},e),children:i.map(({value:e,label:s,attributes:n})=>(0,t.jsx)("li",f(g({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:e=>c.push(e),onKeyDown:d,onClick:u},n),{className:(0,r.A)("tabs__item","tabItem_AQgk",null==n?void 0:n.className,{"tabs__item--active":a===e}),children:null!=s?s:e}),e))})}function x({lazy:e,children:s,selectedValue:a}){let l=(Array.isArray(s)?s:[s]).filter(Boolean);if(e){let e=l.find(e=>e.props.value===a);return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==a}))})}function j(e){let s=function(e){let{defaultValue:s,queryString:a=!1,groupId:t}=e,r=function(e){let{values:s,children:a}=e;return(0,n.useMemo)(()=>{let e=null!=s?s:h(a).map(({props:{value:e,label:s,attributes:a,default:t}})=>({value:e,label:s,attributes:a,default:t}));return!function(e){let s=(0,u.XI)(e,(e,s)=>e.value===s.value);if(s.length>0)throw Error(`Docusaurus error: Duplicate values "${s.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[s,a])}(e),[l,p]=(0,n.useState)(()=>(function({defaultValue:e,tabValues:s}){var a;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let t=null!==(a=s.find(e=>e.default))&&void 0!==a?a:s[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:s,tabValues:r})),[g,f]=function({queryString:e=!1,groupId:s}){let a=(0,i.W6)(),t=function({queryString:e=!1,groupId:s}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:e,groupId:s});return[(0,o.aZ)(t),(0,n.useCallback)(e=>{var s,n;if(!t)return;let r=new URLSearchParams(a.location.search);r.set(t,e),a.replace((s=function(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},t=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(s){var t;t=a[s],s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t})}return e}({},a.location),n=n={search:r.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):(function(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a.push.apply(a,t)}return a})(Object(n)).forEach(function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(n,e))}),s))},[t,a])]}({queryString:a,groupId:t}),[b,x]=function({groupId:e}){let s=e?`docusaurus.tab.${e}`:null,[a,t]=(0,d.Dv)(s);return[a,(0,n.useCallback)(e=>{s&&t.set(e)},[s,t])]}({groupId:t}),j=(()=>{let e=null!=g?g:b;return m({value:e,tabValues:r})?e:null})();return(0,c.A)(()=>{j&&p(j)},[j]),{selectedValue:l,selectValue:(0,n.useCallback)(e=>{if(!m({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),x(e)},[f,x,r]),tabValues:r}}(e);return(0,t.jsxs)("div",{className:(0,r.A)("tabs-container","tabList_Qoir"),children:[(0,t.jsx)(b,g({},s,e)),(0,t.jsx)(x,g({},s,e))]})}function y(e){let s=(0,p.A)();return(0,t.jsx)(j,f(g({},e),{children:h(e.children)}),String(s))}},70361:(e,s,a)=>{a.d(s,{A:()=>i});var t=a(62540);a(63696);var n=a(11750);let r="dot_giz1",l="bar_rrRL";function i({children:e,minHeight:s,url:a="http://localhost:3000",style:i,bodyStyle:c}){var o,u;return(0,t.jsxs)("div",{className:"browserWindow_my1Q",style:(o=function(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},t=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(s){var t;t=a[s],s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t})}return e}({},i),u=u={minHeight:s},Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(u)):(function(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a.push.apply(a,t)}return a})(Object(u)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(u,e))}),o),children:[(0,t.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,t.jsxs)("div",{className:"buttons_uHc7",children:[(0,t.jsx)("span",{className:r,style:{background:"#f25f58"}}),(0,t.jsx)("span",{className:r,style:{background:"#fbbe3c"}}),(0,t.jsx)("span",{className:r,style:{background:"#58cb42"}})]}),(0,t.jsx)("div",{className:(0,n.A)("browserWindowAddressBar_Pd8y","text--truncate"),children:a}),(0,t.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:l}),(0,t.jsx)("span",{className:l}),(0,t.jsx)("span",{className:l})]})})]}),(0,t.jsx)("div",{className:"browserWindowBody_Idgs",style:c,children:e})]})}},95631:(e,s,a)=>{a.d(s,{A:()=>t});let t=a.p+"assets/images/docusaurus-asset-example-banner-63decf1180b7949f4c3d0f7b7ecfd162.png"},15911:(e,s,a)=>{a.d(s,{A:()=>t});let t=a.p+"assets/images/docusaurus_keytar-0cb85c4468d358b2028c7ab2a38aa3ff.svg"},2254:(e,s,a)=>{a.d(s,{A:()=>t});let t=a.p+"assets/images/docusaurus_speed-3cf95ee960d17fd7f1d2714e0d7525b2.svg"},86275:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>b,contentTitle:()=>f,default:()=>y,frontMatter:()=>g,metadata:()=>t,toc:()=>x});let t=JSON.parse('{"id":"guides/markdown-features/assets","title":"Assets","description":"Handling assets in Docusaurus Markdown","source":"@site/docs/guides/markdown-features/markdown-features-assets.mdx","sourceDirName":"guides/markdown-features","slug":"/markdown-features/assets","permalink":"/docs/markdown-features/assets","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-assets.mdx","tags":[],"version":"current","lastUpdatedBy":"Nguy\u1EC5n Th\xe0nh Nam","lastUpdatedAt":1726744540000,"frontMatter":{"id":"assets","description":"Handling assets in Docusaurus Markdown","slug":"/markdown-features/assets"},"sidebar":"docs","previous":{"title":"Headings and Table of contents","permalink":"/docs/markdown-features/toc"},"next":{"title":"Markdown links","permalink":"/docs/markdown-features/links"}}');var n,r=a(62540),l=a(43023),i=a(70361),c=a(27446),o=a(15995),u=a(63696);function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)({}).hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(null,arguments)}let h=e=>{let{title:s,titleId:a,...t}=e;return u.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:200,height:200,viewBox:"0 0 200 200","aria-labelledby":a},t),s?u.createElement("title",{id:a},s):null,n||(n=u.createElement("g",{fill:"none",fillRule:"evenodd"},u.createElement("path",{fill:"#FFF",d:"M99 52h84v34H99z"}),u.createElement("path",{fill:"#3ECC5F",d:"M23 163c-7.398 0-13.843-4.027-17.303-10A19.9 19.9 0 0 0 3 163c0 11.046 8.954 20 20 20h20v-20z"}),u.createElement("path",{fill:"#3ECC5F",d:"M112.98 57.376 183 53V43c0-11.046-8.954-20-20-20H73l-2.5-4.33c-1.112-1.925-3.889-1.925-5 0L63 23l-2.5-4.33c-1.111-1.925-3.889-1.925-5 0L53 23l-2.5-4.33c-1.111-1.925-3.889-1.925-5 0L43 23q-.032.002-.065.003l-4.142-4.141c-1.57-1.571-4.252-.853-4.828 1.294l-1.369 5.104-5.192-1.392c-2.148-.575-4.111 1.389-3.535 3.536l1.39 5.193-5.102 1.367c-2.148.576-2.867 3.259-1.296 4.83l4.142 4.142q-.002.031-.003.064l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 53l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 63l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 73l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 83l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 93l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 103l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 113l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 123l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 133l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 143l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 153l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 163c0 11.046 8.954 20 20 20h120c11.046 0 20-8.954 20-20V83l-70.02-4.376A10.645 10.645 0 0 1 103 68c0-5.621 4.37-10.273 9.98-10.624"}),u.createElement("path",{fill:"#3ECC5F",d:"M143 183h30v-40h-30z"}),u.createElement("path",{fill:"#44D860",d:"M193 158c-.219 0-.428.037-.639.064q-.055-.225-.116-.451A5 5 0 0 0 190.32 148a4.96 4.96 0 0 0-3.016 1.036 27 27 0 0 0-.335-.336 4.96 4.96 0 0 0 1.011-2.987 5 5 0 0 0-9.599-1.959c-.148-.042-.297-.077-.445-.115.027-.211.064-.42.064-.639a5 5 0 0 0-5-5 5 5 0 0 0-5 5c0 .219.037.428.064.639-.148.038-.297.073-.445.115a4.998 4.998 0 0 0-9.599 1.959c0 1.125.384 2.151 1.011 2.987-3.717 3.632-6.031 8.693-6.031 14.3 0 11.046 8.954 20 20 20 9.339 0 17.16-6.41 19.361-15.064.211.027.42.064.639.064a5 5 0 0 0 5-5 5 5 0 0 0-5-5"}),u.createElement("path",{fill:"#3ECC5F",d:"M153 123h30v-20h-30z"}),u.createElement("path",{fill:"#44D860",d:"M193 115.5a2.5 2.5 0 1 0 0-5c-.109 0-.214.019-.319.032q-.028-.113-.058-.225a2.501 2.501 0 0 0-.963-4.807c-.569 0-1.088.197-1.508.518a7 7 0 0 0-.168-.168c.314-.417.506-.931.506-1.494a2.5 2.5 0 0 0-4.8-.979A10 10 0 0 0 183 103c-5.522 0-10 4.478-10 10s4.478 10 10 10c.934 0 1.833-.138 2.69-.377a2.5 2.5 0 0 0 4.8-.979c0-.563-.192-1.077-.506-1.494q.085-.083.168-.168c.42.321.939.518 1.508.518a2.5 2.5 0 0 0 .963-4.807q.03-.112.058-.225c.105.013.21.032.319.032"}),u.createElement("path",{fill:"#000",d:"M63 55.5a2.5 2.5 0 0 1-2.5-2.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5a2.5 2.5 0 1 1-5 0c0-6.893 5.607-12.5 12.5-12.5S65.5 46.107 65.5 53a2.5 2.5 0 0 1-2.5 2.5"}),u.createElement("path",{fill:"#FFFF50",d:"M103 183h60c11.046 0 20-8.954 20-20V93h-60c-11.046 0-20 8.954-20 20z"}),u.createElement("path",{fill:"#000",d:"M168.02 124h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 20h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 20h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0-49.814h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 19.814h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 20h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2M183 61.611c-.012 0-.022-.006-.034-.005-3.09.105-4.552 3.196-5.842 5.923-1.346 2.85-2.387 4.703-4.093 4.647-1.889-.068-2.969-2.202-4.113-4.46-1.314-2.594-2.814-5.536-5.963-5.426-3.046.104-4.513 2.794-5.807 5.167-1.377 2.528-2.314 4.065-4.121 3.994-1.927-.07-2.951-1.805-4.136-3.813-1.321-2.236-2.848-4.75-5.936-4.664-2.994.103-4.465 2.385-5.763 4.4-1.373 2.13-2.335 3.428-4.165 3.351-1.973-.07-2.992-1.51-4.171-3.177-1.324-1.873-2.816-3.993-5.895-3.89-2.928.1-4.399 1.97-5.696 3.618-1.232 1.564-2.194 2.802-4.229 2.724a1 1 0 0 0-.072 2c3.017.101 4.545-1.8 5.872-3.487 1.177-1.496 2.193-2.787 4.193-2.855 1.926-.082 2.829 1.115 4.195 3.045 1.297 1.834 2.769 3.914 5.731 4.021 3.103.104 4.596-2.215 5.918-4.267 1.182-1.834 2.202-3.417 4.15-3.484 1.793-.067 2.769 1.35 4.145 3.681 1.297 2.197 2.766 4.686 5.787 4.796 3.125.108 4.634-2.62 5.949-5.035 1.139-2.088 2.214-4.06 4.119-4.126 1.793-.042 2.728 1.595 4.111 4.33 1.292 2.553 2.757 5.445 5.825 5.556l.169.003c3.064 0 4.518-3.075 5.805-5.794 1.139-2.41 2.217-4.68 4.067-4.773z"}),u.createElement("path",{fill:"#3ECC5F",d:"M83 183h40v-40H83z"}),u.createElement("path",{fill:"#44D860",d:"M143 158c-.219 0-.428.037-.639.064-.038-.15-.074-.301-.116-.451A5 5 0 0 0 140.32 148a4.96 4.96 0 0 0-3.016 1.036 27 27 0 0 0-.335-.336 4.96 4.96 0 0 0 1.011-2.987 5 5 0 0 0-9.599-1.959c-.148-.042-.297-.077-.445-.115.027-.211.064-.42.064-.639a5 5 0 0 0-5-5 5 5 0 0 0-5 5c0 .219.037.428.064.639-.148.038-.297.073-.445.115a4.998 4.998 0 0 0-9.599 1.959c0 1.125.384 2.151 1.011 2.987-3.717 3.632-6.031 8.693-6.031 14.3 0 11.046 8.954 20 20 20 9.339 0 17.16-6.41 19.361-15.064.211.027.42.064.639.064a5 5 0 0 0 5-5 5 5 0 0 0-5-5"}),u.createElement("path",{fill:"#3ECC5F",d:"M83 123h40v-20H83z"}),u.createElement("path",{fill:"#44D860",d:"M133 115.5a2.5 2.5 0 1 0 0-5c-.109 0-.214.019-.319.032q-.028-.113-.058-.225a2.501 2.501 0 0 0-.963-4.807c-.569 0-1.088.197-1.508.518a7 7 0 0 0-.168-.168c.314-.417.506-.931.506-1.494a2.5 2.5 0 0 0-4.8-.979A10 10 0 0 0 123 103c-5.522 0-10 4.478-10 10s4.478 10 10 10c.934 0 1.833-.138 2.69-.377a2.5 2.5 0 0 0 4.8-.979c0-.563-.192-1.077-.506-1.494q.085-.083.168-.168c.42.321.939.518 1.508.518a2.5 2.5 0 0 0 .963-4.807q.03-.112.058-.225c.105.013.21.032.319.032"}),u.createElement("path",{fill:"#000",d:"M143 41.75c-.16 0-.33-.02-.49-.05a2.5 2.5 0 0 1-.47-.14c-.15-.06-.29-.14-.431-.23-.13-.09-.259-.2-.38-.31-.109-.12-.219-.24-.309-.38s-.17-.28-.231-.43a2.6 2.6 0 0 1-.189-.96c0-.16.02-.33.05-.49s.08-.31.139-.47c.061-.15.141-.29.231-.43.09-.13.2-.26.309-.38.121-.11.25-.22.38-.31.141-.09.281-.17.431-.23s.31-.11.47-.14c.32-.07.65-.07.98 0 .159.03.32.08.47.14s.29.14.43.23c.13.09.259.2.38.31.11.12.22.25.31.38.09.14.17.28.23.43.06.16.11.31.14.47.029.16.05.33.05.49 0 .66-.271 1.31-.73 1.77-.121.11-.25.22-.38.31-.14.09-.281.17-.43.23a2.6 2.6 0 0 1-.96.19m20-1.25c-.66 0-1.3-.27-1.771-.73a4 4 0 0 1-.309-.38c-.09-.14-.17-.28-.231-.43a2.6 2.6 0 0 1-.189-.96c0-.66.27-1.3.729-1.77.121-.11.25-.22.38-.31.141-.09.281-.17.431-.23s.31-.11.47-.14c.32-.07.66-.07.98 0 .159.03.32.08.47.14s.29.14.43.23c.13.09.259.2.38.31.459.47.73 1.11.73 1.77 0 .16-.021.33-.05.49s-.08.32-.14.47c-.07.15-.14.29-.23.43-.09.13-.2.26-.31.38-.121.11-.25.22-.38.31-.14.09-.281.17-.43.23a2.6 2.6 0 0 1-.96.19"}))))};var m=a(27167),p=a(35688);let g={id:"assets",description:"Handling assets in Docusaurus Markdown",slug:"/markdown-features/assets"},f="Assets",b={},x=[{value:"Images",id:"images",level:2},{value:"Files",id:"files",level:2},{value:"Inline SVGs",id:"inline-svgs",level:2},{value:"Themed Images",id:"themed-images",level:2},{value:"GitHub-style themed images",id:"github-style-themed-images",level:3},{value:"Static assets",id:"static-assets",level:2}];function j(e){let s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"assets",children:"Assets"})}),"\n","\n",(0,r.jsx)(s.p,{children:"Sometimes you want to link to assets (e.g. docx files, images...) directly from Markdown files, and it is convenient to co-locate the asset next to the Markdown file using it."}),"\n",(0,r.jsx)(s.p,{children:"Let's imagine the following file structure:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"# Your doc\n/website/docs/myFeature.mdx\n\n# Some assets you want to use\n/website/docs/assets/docusaurus-asset-example-banner.png\n/website/docs/assets/docusaurus-asset-example.docx\n"})}),"\n",(0,r.jsx)(s.h2,{id:"images",children:"Images"}),"\n",(0,r.jsx)(s.p,{children:"You can display images in three different ways: Markdown syntax, CJS require, or ES imports syntax."}),"\n",(0,r.jsxs)(c.A,{children:[(0,r.jsxs)(o.A,{value:"Markdown syntax",children:[(0,r.jsx)(s.p,{children:"Display images using simple Markdown syntax:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-md",children:"![Example banner](./assets/docusaurus-asset-example-banner.png)\n"})})]}),(0,r.jsxs)(o.A,{value:"CommonJS require",children:[(0,r.jsxs)(s.p,{children:["Display images using inline CommonJS ",(0,r.jsx)(s.code,{children:"require"})," in JSX image tag:"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",children:"<img\n  src={require('./assets/docusaurus-asset-example-banner.png').default}\n  alt=\"Example banner\"\n/>\n"})})]}),(0,r.jsxs)(o.A,{value:"Import statement",children:[(0,r.jsxs)(s.p,{children:["Display images using ES ",(0,r.jsx)(s.code,{children:"import"})," syntax and JSX image tag:"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",children:"import myImageUrl from './assets/docusaurus-asset-example-banner.png';\n\n<img src={myImageUrl} alt=\"Example banner\" />;\n"})})]})]}),"\n",(0,r.jsx)(s.p,{children:"All of the above result in displaying the image:"}),"\n",(0,r.jsx)(i.A,{children:(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"My image alternative text",src:a(95631).A+"",width:"422",height:"110"})})}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["If you are using ",(0,r.jsx)(s.a,{href:"/docs/api/plugins/@docusaurus/plugin-ideal-image",children:"@docusaurus/plugin-ideal-image"}),", you need to use the dedicated image component, as documented."]})}),"\n",(0,r.jsx)(s.h2,{id:"files",children:"Files"}),"\n",(0,r.jsxs)(s.p,{children:["In the same way, you can link to existing assets by ",(0,r.jsx)(s.code,{children:"require"}),"'ing them and using the returned URL in ",(0,r.jsx)(s.code,{children:"video"}),"s, ",(0,r.jsx)(s.code,{children:"a"})," anchor links, etc."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-md",children:"# My Markdown page\n\n<a target=\"\\_blank\" href={require('./assets/docusaurus-asset-example.docx').default}> Download this docx </a>\n\nor\n\n[Download this docx using Markdown](./assets/docusaurus-asset-example.docx)\n"})}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)("a",{target:"_blank",href:a(59096).A,children:"Download this docx"}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(76665).A+"",children:"Download this docx using Markdown"})})]}),"\n",(0,r.jsx)(s.admonition,{title:"Markdown links are always file paths",type:"info",children:(0,r.jsxs)(s.p,{children:["If you use the Markdown image or link syntax, all asset paths will be resolved as file paths by Docusaurus and automatically converted to ",(0,r.jsx)(s.code,{children:"require()"})," calls. You don't need to use ",(0,r.jsx)(s.code,{children:"require()"})," in Markdown unless you use the JSX syntax, which you do have to handle yourself."]})}),"\n",(0,r.jsx)(s.h2,{id:"inline-svgs",children:"Inline SVGs"}),"\n",(0,r.jsx)(s.p,{children:"Docusaurus supports inlining SVGs out of the box."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",children:"import DocusaurusSvg from './docusaurus.svg';\n\n<DocusaurusSvg />;\n"})}),"\n",(0,r.jsx)(i.A,{children:(0,r.jsx)(h,{})}),"\n",(0,r.jsx)(s.p,{children:"This can be useful if you want to alter the part of the SVG image via CSS. For example, you can change one of the SVG colors based on the current theme."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",children:"import DocusaurusSvg from './docusaurus.svg';\n\n<DocusaurusSvg className=\"themedDocusaurus\" />;\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-css",children:"[data-theme='light'] .themedDocusaurus [fill='#FFFF50'] {\n  fill: greenyellow;\n}\n\n[data-theme='dark'] .themedDocusaurus [fill='#FFFF50'] {\n  fill: seagreen;\n}\n"})}),"\n",(0,r.jsx)(i.A,{children:(0,r.jsx)(h,{className:"themedDocusaurus"})}),"\n",(0,r.jsx)(s.h2,{id:"themed-images",children:"Themed Images"}),"\n",(0,r.jsxs)(s.p,{children:["Docusaurus supports themed images: the ",(0,r.jsx)(s.code,{children:"ThemedImage"})," component (included in the themes) allows you to switch the image source based on the current theme."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-jsx",children:"import useBaseUrl from '@docusaurus/useBaseUrl';\nimport ThemedImage from '@theme/ThemedImage';\n\n<ThemedImage\n  alt=\"Docusaurus themed image\"\n  // highlight-start\n  sources={{\n    light: useBaseUrl('/img/docusaurus_light.svg'),\n    dark: useBaseUrl('/img/docusaurus_dark.svg'),\n  }}\n  // highlight-end\n/>;\n"})}),"\n","\n",(0,r.jsx)(i.A,{children:(0,r.jsx)(p.A,{alt:"Docusaurus themed image",sources:{light:(0,m.Ay)("/img/docusaurus_keytar.svg"),dark:(0,m.Ay)("/img/docusaurus_speed.svg")}})}),"\n",(0,r.jsx)(s.h3,{id:"github-style-themed-images",children:"GitHub-style themed images"}),"\n",(0,r.jsxs)(s.p,{children:["GitHub uses its own ",(0,r.jsx)(s.a,{href:"https://github.blog/changelog/2021-11-24-specify-theme-context-for-images-in-markdown/",children:"image theming approach"})," with path fragments, which you can easily implement yourself."]}),"\n",(0,r.jsxs)(s.p,{children:["To toggle the visibility of an image using the path fragment (for GitHub, it's ",(0,r.jsx)(s.code,{children:"#gh-dark-mode-only"})," and ",(0,r.jsx)(s.code,{children:"#gh-light-mode-only"}),"), add the following to your custom CSS (you can also use your own suffix if you don't want to be coupled to GitHub):"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-css",metastring:'title="src/css/custom.css"',children:"[data-theme='light'] img[src$='#gh-dark-mode-only'],\n[data-theme='dark'] img[src$='#gh-light-mode-only'] {\n  display: none;\n}\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-md",children:"![Docusaurus themed image](/img/docusaurus_keytar.svg#gh-light-mode-only)![Docusaurus themed image](/img/docusaurus_speed.svg#gh-dark-mode-only)\n"})}),"\n",(0,r.jsx)(i.A,{children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.img,{alt:"Docusaurus themed image",src:a(15911).A+"#gh-light-mode-only",width:"200",height:"200"}),(0,r.jsx)(s.img,{alt:"Docusaurus themed image",src:a(2254).A+"#gh-dark-mode-only",width:"250",height:"200"})]})}),"\n",(0,r.jsx)(s.h2,{id:"static-assets",children:"Static assets"}),"\n",(0,r.jsxs)(s.p,{children:["If a Markdown link or image has an absolute path, the path will be seen as a file path and will be resolved from the static directories. For example, if you have configured ",(0,r.jsx)(s.a,{href:"/docs/static-assets",children:"static directories"})," to be ",(0,r.jsx)(s.code,{children:"['public', 'static']"}),", then for the following image:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-md",metastring:'title="my-doc.md"',children:"![An image from the static](/img/docusaurus.png)\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Docusaurus will try to look for it in both ",(0,r.jsx)(s.code,{children:"static/img/docusaurus.png"})," and ",(0,r.jsx)(s.code,{children:"public/img/docusaurus.png"}),". The link will then be converted to a ",(0,r.jsx)(s.code,{children:"require()"})," call instead of staying as a URL. This is desirable in two regards:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"You don't have to worry about the base URL, which Docusaurus will take care of when serving the asset;"}),"\n",(0,r.jsx)(s.li,{children:"The image enters Webpack's build pipeline and its name will be appended by a hash, which enables browsers to aggressively cache the image and improves your site's performance."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["If you intend to write URLs, you can use the ",(0,r.jsx)(s.code,{children:"pathname://"})," protocol to disable automatic asset linking."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-md",children:"![banner](pathname:///img/docusaurus-asset-example-banner.png)\n"})}),"\n",(0,r.jsxs)(s.p,{children:["This link will be generated as ",(0,r.jsx)(s.code,{children:'<img src="/img/docusaurus-asset-example-banner.png" alt="banner" />'}),", without any processing or file existence checking."]})]})}function y(e={}){let{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},43023:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>i});var t=a(63696);let n={},r=t.createContext(n);function l(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);