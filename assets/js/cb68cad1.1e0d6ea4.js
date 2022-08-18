"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[637],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return f}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?t.createElement(h,i(i({ref:r},u),{},{components:n})):t.createElement(h,i({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3560:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:5},l="Common Errors",s={unversionedId:"Dashactyl/common_errors",id:"Dashactyl/common_errors",title:"Common Errors",description:"This is a list of common errors you might come across when using Dashactyl.",source:"@site/docs/Dashactyl/common_errors.md",sourceDirName:"Dashactyl",slug:"/Dashactyl/common_errors",permalink:"/docs/Dashactyl/common_errors",editUrl:"https://github.com/Votion-Development/documentation/blob/main/docs/Dashactyl/common_errors.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/docs/Dashactyl/congratulations"}},u=[{value:"Arch Error:",id:"arch-error",children:[],level:2},{value:"MongoClient error",id:"mongoclient-error",children:[],level:2},{value:"Invalid oauth2 redirect_uri",id:"invalid-oauth2-redirect_uri",children:[],level:2}],p={toc:u};function d(e){var r=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,c,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"common-errors"},"Common Errors"),(0,a.kt)("p",null,"This is a list of common errors you might come across when using Dashactyl."),(0,a.kt)("h2",{id:"arch-error"},"Arch Error:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"arch_error",src:n(7634).Z})),(0,a.kt)("p",null,"This error sometimes appears when you try and install the NPM packages. A workaround is to do ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i -f")," instead."),(0,a.kt)("h2",{id:"mongoclient-error"},"MongoClient error"),(0,a.kt)("p",null,"If you are getting the error: ",(0,a.kt)("inlineCode",{parentName:"p"},"MongoClient must be connected"),", a simple workaround is by using the non srv connection uri which you can get by choosing an older driver version like ",(0,a.kt)("inlineCode",{parentName:"p"},"2.2.12")," on MongoDB Atlas, or just converting it yourself."),(0,a.kt)("p",null,"Thank you to Acktar#6724 on discord for the above 2 answers."),(0,a.kt)("h2",{id:"invalid-oauth2-redirect_uri"},"Invalid oauth2 redirect_uri"),(0,a.kt)("p",null,"The reason you are getting ",(0,a.kt)("inlineCode",{parentName:"p"},"invalid oauth2 redirect_uri")," is because you haven't set the ",(0,a.kt)("inlineCode",{parentName:"p"},"application_url")," key in the settings collection in the database, or it is not set correctly. It MUST be set like the following below. ",(0,a.kt)("strong",{parentName:"p"},"Make sure there is not a trailing ",(0,a.kt)("inlineCode",{parentName:"strong"},"/")," at the end!")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"application_url",src:n(5355).Z})))}d.isMDXComponent=!0},5355:function(e,r){r.Z="data:image/png;base64,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"},7634:function(e,r,n){r.Z=n.p+"assets/images/arch_error-c81548590f7f0b1c2d52b2e208ccba71.png"}}]);