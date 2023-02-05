"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[4181],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=i,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},703:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var n=r(7462),i=(r(7294),r(3905));const a=r.p+"assets/images/mountains-dee053e7fc748cec7157cfb62c9ccb72.png",o=r.p+"assets/images/mountains_no_trees-bda4b8e8fb866ad9f1b14f1b4c1cd13f.png",s=r.p+"assets/images/planets-4363b6ea6533a737170b8e4adbe8ec3a.png",p={sidebar_position:60},c="\ud83d\udfe2 Weighted Terms",l={unversionedId:"Images/weighted_terms",id:"Images/weighted_terms",title:"\ud83d\udfe2 Weighted Terms",description:"Some models (Stable Diffusion, Midjourney, etc.) allow you to weight terms in a prompt. This can be used to emphasize certain words or phrases in the generated image. It can",source:"@site/docs/Images/weighted_terms.md",sourceDirName:"Images",slug:"/Images/weighted_terms",permalink:"/ja/docs/Images/weighted_terms",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/Images/weighted_terms.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Repetition",permalink:"/ja/docs/Images/repetition"},next:{title:"\ud83d\udfe2 Fix Deformed Generations",permalink:"/ja/docs/Images/fix_deformed_generations"}},m={},d=[{value:"Notes",id:"notes",level:2}],u={toc:d};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-weighted-terms"},"\ud83d\udfe2 Weighted Terms"),(0,i.kt)("p",null,"Some models (Stable Diffusion, Midjourney, etc.) allow you to weight terms in a prompt. This can be used to emphasize certain words or phrases in the generated image. It can\nalso be used to de-emphasize certain words or phrases in the generated image. Let's consider a simple example:"),(0,i.kt)("h1",{id:"example"},"Example"),(0,i.kt)("p",null,"Here are a few mountains generated by Stable Diffusion, with the prompt ",(0,i.kt)("inlineCode",{parentName:"p"},"mountain"),"."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a,style:{width:"350px"}})),(0,i.kt)("p",null,"However, if we want mountains without trees, we can use the prompt ",(0,i.kt)("inlineCode",{parentName:"p"},"mountain | tree:-10"),". Since we weighted tree very negatively, they do not appear in the generated image."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:o,style:{width:"350px"}})),(0,i.kt)("p",null,"Weighted terms can be combined into more complicated prompts, like\n",(0,i.kt)("inlineCode",{parentName:"p"},"A planet in space:10 | bursting with color red, blue, and purple:4 | aliens:-10 | 4K, high quality")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:s,style:{width:"350px"}})),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"Read more about weighting in some of the resources at the end of this chapter."))}g.isMDXComponent=!0}}]);