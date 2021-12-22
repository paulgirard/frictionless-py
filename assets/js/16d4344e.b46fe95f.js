(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{161:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),c=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var u=c.a.createContext({}),d=function(e){var n=c.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=d(e.components);return c.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},p=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=d(t),p=r,f=b["".concat(i,".").concat(p)]||b[p]||s[p]||a;return t?c.a.createElement(f,l(l({ref:n},u),{},{components:t})):c.a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return b}));var r=t(3),c=t(8),a=(t(0),t(161)),i=["components"],l={title:"Checks Reference"},o={unversionedId:"references/checks-reference",id:"references/checks-reference",isDocsHomePage:!1,title:"Checks Reference",description:"This document provides a full reference to the Frictionless checks.",source:"@site/../docs/references/checks-reference.md",slug:"/references/checks-reference",permalink:"/docs/references/checks-reference",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/references/checks-reference.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1640171671,formattedLastUpdatedAt:"12/22/2021",sidebar:"references",previous:{title:"Errors Reference",permalink:"/docs/references/errors-reference"},next:{title:"Steps Reference",permalink:"/docs/references/steps-reference"}},u=[{value:"baseline",id:"baseline",children:[]},{value:"duplicate_row",id:"duplicate_row",children:[]},{value:"deviated_value",id:"deviated_value",children:[]},{value:"truncated_value",id:"truncated_value",children:[]},{value:"forbidden_value",id:"forbidden_value",children:[]},{value:"sequential_value",id:"sequential_value",children:[]},{value:"row_constraint",id:"row_constraint",children:[]},{value:"table_dimensions",id:"table_dimensions",children:[]}],d={toc:u};function b(e){var n=e.components,t=Object(c.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This document provides a full reference to the Frictionless checks."),Object(a.b)("h2",{id:"baseline"},"baseline"),Object(a.b)("p",null,"Code: ",Object(a.b)("inlineCode",{parentName:"p"},"baseline")," ",Object(a.b)("br",null)),Object(a.b)("h2",{id:"duplicate_row"},"duplicate_row"),Object(a.b)("p",null,"Code: ",Object(a.b)("inlineCode",{parentName:"p"},"duplicate-row")," ",Object(a.b)("br",null)),Object(a.b)("h2",{id:"deviated_value"},"deviated_value"),Object(a.b)("p",null,"Code: ",Object(a.b)("inlineCode",{parentName:"p"},"deviated-value")," ",Object(a.b)("br",null)),Object(a.b)("h2",{id:"truncated_value"},"truncated_value"),Object(a.b)("p",null,"Code: ",Object(a.b)("inlineCode",{parentName:"p"},"truncated-value")," ",Object(a.b)("br",null)),Object(a.b)("h2",{id:"forbidden_value"},"forbidden_value"),Object(a.b)("p",null,"Code: ",Object(a.b)("inlineCode",{parentName:"p"},"forbidden-value")," ",Object(a.b)("br",null)),Object(a.b)("h2",{id:"sequential_value"},"sequential_value"),Object(a.b)("p",null,"Code: ",Object(a.b)("inlineCode",{parentName:"p"},"sequential-value")," ",Object(a.b)("br",null)),Object(a.b)("h2",{id:"row_constraint"},"row_constraint"),Object(a.b)("p",null,"Code: ",Object(a.b)("inlineCode",{parentName:"p"},"row-constraint")," ",Object(a.b)("br",null)),Object(a.b)("h2",{id:"table_dimensions"},"table_dimensions"),Object(a.b)("p",null,"Code: ",Object(a.b)("inlineCode",{parentName:"p"},"table-dimensions")," ",Object(a.b)("br",null)))}b.isMDXComponent=!0}}]);