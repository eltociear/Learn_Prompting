"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7083],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},o="\ud83d\udfe2 Giving Instructions",s={unversionedId:"basics/instructions",id:"basics/instructions",title:"\ud83d\udfe2 Giving Instructions",description:"One of the simplest prompting methods is just giving instructions. We already saw a simple instruction",source:"@site/docs/basics/instructions.md",sourceDirName:"basics",slug:"/basics/instructions",permalink:"/ja/docs/basics/instructions",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/basics/instructions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Prompting",permalink:"/ja/docs/basics/prompting"},next:{title:"\ud83d\udfe2 Role Prompting",permalink:"/ja/docs/basics/roles"}},l={},p=[{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Notes",id:"notes",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-giving-instructions"},"\ud83d\udfe2 Giving Instructions"),(0,i.kt)("p",null,"One of the simplest prompting methods is just giving instructions. We already saw a simple instruction\nin a previous section (",(0,i.kt)("inlineCode",{parentName:"p"},"What is 1,000,000 * 9,000? Make sure to put the right amount of zeros, even if there are many:"),"). However,\nmodern AIs can follow much more complex instructions. "),(0,i.kt)("p",null,"Below is an example that is a Dyno interactive embed. If you do not see it, make sure to turn Javascript on in your browser. Since this an interactive demo, you can edit the text and hit ",(0,i.kt)("inlineCode",{parentName:"p"},"Generate")," to re-run the AI."),(0,i.kt)("h4",{id:"example-1"},"Example 1"),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"A user has input their first and last name into a form. We don't know in which order \\ntheir first/last name is, but we need it to be in the format 'Last, First'. Convert the following:\\n\\njohn doe","initial-response":"Doe, John","max-tokens":"256","box-rows":"7","model-temp":"0","top-p":"0"}),(0,i.kt)("br",null),"The AI is easily able to solve this problem. Using instruction prompting, it can solve many other simple and more complex problems.",(0,i.kt)("h4",{id:"example-2"},"Example 2"),(0,i.kt)("p",null,"Here is a more complicated example",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Read the following sales email. Remove any personally identifiable information (PII),\nand replace it with the appropriate placeholder. For example, replace the name "John Doe"\nwith "[NAME]".\n\nHi John,\n\nI\'m writing to you because I noticed you recently purchased a new car. I\'m a salesperson\nat a local dealership (Cheap Dealz), and I wanted to let you know that we have a great deal on a new\ncar. If you\'re interested, please let me know.\n\nThanks,\n\nJimmy Smith\n\nPhone: 410-805-2345\nEmail: jimmysmith@cheapdealz.com\n')),(0,i.kt)("p",null,"Here is the ",(0,i.kt)("a",{parentName:"p",href:"https://beta.openai.com/playground/p/002o3gmji5jlwUfRq9d7KDHc?model=text-davinci-003"},"AI's response"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"// highlight-start\nHi [NAME],\n\nI'm writing to you because I noticed you recently purchased a new car. I'm a salesperson\nat a local dealership ([DEALERSHIP]), and I wanted to let you know that we have a great deal on a new\ncar. If you're interested, please let me know.\n\nThanks,\n\n[SALESPERSON]\n\nPhone: [PHONE NUMBER]\nEmail: [EMAIL ADDRESS]\n// highlight-end\n")),(0,i.kt)("p",null,"It is very cool to see how the model can extrapolate from the instructions. For example, it knows\nto replace ",(0,i.kt)("inlineCode",{parentName:"p"},"Cheap Dealz")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"[DEALERSHIP]")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Jimmy Smith")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"[SALESPERSON]"),", even though\nwe did not explicitly tell it to do so."),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"\ud83d\udea7 This page needs citations \ud83d\udea7"),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Allowing AI to remove PII from text is a promising approach, but it should be used with extraordinary caution as it may make mistakes.",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);