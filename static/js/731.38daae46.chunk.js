"use strict";(self.webpackChunkmy_movies=self.webpackChunkmy_movies||[]).push([[731],{950:function(n,e,i){i.d(e,{Z:function(){return S}});var a=i(433),o=i(791),t=i(683),r=i(711),s=i(689),c={main:"Sidebar_main__cxmGs"},l={main:"Logo_main__G-vnZ"},u=i(12),m=i(184),v=function(n){var e=n.large,i=void 0!==e&&e,a=(0,u.rB)().themeMode;return(0,m.jsx)("div",{className:l.logoContainer,children:(0,m.jsx)("img",{src:i?"dark"===a?"logo-dark.svg":"logo-light.svg":"icon.svg",alt:"myMovies"})})},d=o.memo(v),h=function(n){var e=n.label,i=(n.route,n.icon),a=n.isActive;return(0,m.jsxs)("div",{className:"".concat(a?c.active:""," ").concat(c.navigationItem),children:[(0,m.jsx)(r.JO,{className:c.icon,icon:i}),(0,m.jsx)("span",{className:c.label,children:e})]})},x=function(n){var e=n.routes,i=(0,s.TH)().pathname;return(0,m.jsxs)("div",{className:c.navigation,children:[(0,m.jsx)("div",{className:c.logoContainer,children:(0,m.jsx)(d,{})}),(0,m.jsx)("div",{className:c.navigationContent,children:e.map((function(n,e){return(0,m.jsx)(h,(0,t.Z)({isActive:i===n.route},n))}))})]})},j={main:"Navbar_main__QELHF"},f=function(n){var e=n.label,i=n.icon,a=n.isActive;return(0,m.jsxs)("div",{className:"".concat(a?j.active:""," ").concat(j.navigationItem),children:[(0,m.jsx)(r.JO,{className:j.icon,icon:i}),(0,m.jsx)("span",{className:j.label,children:e})]})},p=function(n){var e=n.routes,i=(0,s.TH)().pathname;return(0,m.jsxs)("div",{className:j.navigation,children:[(0,m.jsx)("div",{className:j.logoContainer,children:(0,m.jsx)(d,{})}),(0,m.jsx)("div",{className:j.navigationContent,children:e.map((function(n,e){return(0,m.jsx)(f,(0,t.Z)({isActive:i===n.route},n))}))})]})},g=i(27),N={main:"TopBar_main__Eowv8"},b={main:"IconButton_main__ZVw2p"},y=function(n){var e=n.icon,i=n.sharp,a=void 0===i?"default":i,o=n.fontSize,t=n.handleClick;return(0,m.jsx)("button",{onClick:t,className:"".concat(b.iconButton," ").concat(b[a]),children:(0,m.jsx)(r.JO,{icon:e,fontSize:o})})},_=o.memo(y),k=function(n){var e=n.title,i=n.withSearch,a=n.actionButton,o=function(n){return(0,g.uX)(n)};return(0,m.jsxs)("div",{className:N.topBar,children:[(0,m.jsxs)("div",{className:N.leftPart,children:[(0,m.jsx)(d,{}),(0,m.jsx)("h2",{className:N.title,children:e})]}),(0,m.jsxs)("div",{className:N.rightPart,children:[i&&(0,m.jsx)(_,{icon:"ion:search",fontSize:24,sharp:"rounded",handleClick:function(){return o("/search")}}),a&&(0,m.jsx)(_,{icon:a.icon,fontSize:24,sharp:"rounded",handleClick:function(){return o(a.route)}})]})]})},C=JSON.parse('[{"label":"Home","route":"/","icon":"clarity:home-line","key":"home"},{"label":"TV","route":"/tv","icon":"gala:tv","key":"tv"},{"label":"Movie","route":"/movie","icon":"fluent:movies-and-tv-20-regular","key":"movie"},{"label":"People","route":"/people","icon":"fluent:people-20-regular","key":"movie"}]'),S=function(n,e,i){return function(){return(0,m.jsxs)("div",{children:[(0,m.jsx)(x,{routes:i?[].concat((0,a.Z)(C),[i]):C}),(0,m.jsxs)("div",{children:[(0,m.jsx)(k,{title:e,withSearch:!0,actionButton:i}),(0,m.jsx)(n,{}),(0,m.jsx)(p,{routes:C})]})]})}}},731:function(n,e,i){i.r(e),i.d(e,{default:function(){return r}});i(791);var a=i(950),o=i(184),t=function(){return(0,o.jsx)("div",{children:(0,o.jsx)("h1",{children:"Home"})})};t.displayName="Home";var r=(0,a.Z)(t,t.displayName||"Home",{key:"library",label:"My Library",route:"/my-library",icon:"solar:library-line-duotone"})}}]);
//# sourceMappingURL=731.38daae46.chunk.js.map