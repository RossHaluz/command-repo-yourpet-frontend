"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[920],{3083:function(e,n,t){t.d(n,{Z:function(){return M}});var i,r=t(5705),o=t(2791),a=["title","titleId"];function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},s.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function c(e,n){var t=e.title,r=e.titleId,c=l(e,a);return o.createElement("svg",s({width:19,height:19,viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},c),t?o.createElement("title",{id:r},t):null,i||(i=o.createElement("path",{d:"M17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L17.4697 18.5303ZM15.25 8.5C15.25 12.2279 12.2279 15.25 8.5 15.25V16.75C13.0563 16.75 16.75 13.0563 16.75 8.5H15.25ZM8.5 15.25C4.77208 15.25 1.75 12.2279 1.75 8.5H0.25C0.25 13.0563 3.94365 16.75 8.5 16.75V15.25ZM1.75 8.5C1.75 4.77208 4.77208 1.75 8.5 1.75V0.25C3.94365 0.25 0.25 3.94365 0.25 8.5H1.75ZM8.5 1.75C12.2279 1.75 15.25 4.77208 15.25 8.5H16.75C16.75 3.94365 13.0563 0.25 8.5 0.25V1.75ZM18.5303 17.4697L14.3428 13.2821L13.2821 14.3428L17.4697 18.5303L18.5303 17.4697Z",fill:"#54ADFF"})))}var u,d=o.forwardRef(c),p=(t.p,["title","titleId"]);function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},h.apply(this,arguments)}function x(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function f(e,n){var t=e.title,i=e.titleId,r=x(e,p);return o.createElement("svg",h({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},r),t?o.createElement("title",{id:i},t):null,u||(u=o.createElement("path",{d:"M15 1L1 15M1.00004 1L15 15",stroke:"#FFC107",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var m=o.forwardRef(f),g=(t.p,t(3457)),b=(0,g.Z)("div")({border:"none",backgroundColor:"inherit",position:"absolute",right:"10px",top:"12px",display:"flex"}),v=(0,g.Z)("button")({border:"none",backgroundColor:"inherit",cursor:"pointer"}),j=(0,g.Z)("button")({border:"none",backgroundColor:"inherit",cursor:"pointer"}),w=(0,g.Z)("form")({position:"relative",maxWidth:"608px",margin:"40px auto"}),Z=(0,g.Z)("form")({position:"relative",maxWidth:"280px",margin:"24px auto 20px"}),y=(0,g.Z)("input")({fontSize:"20px;",color:"#888888",width:"100%",maxWidth:"608px",height:"44px",borderRadius:"20px",boxShadow:"3px 8px 14px rgba(136, 198, 253, 0.19)",border:"none",padding:"10px 20px",boxSizing:"border-box","&:focus-visible":{outline:"unset"}}),O=(0,g.Z)("input")({color:"#888888",width:"100%",maxWidth:"608px",fontSize:"14px;",height:"44px",boxShadow:"3px 8px 14px rgba(136, 198, 253, 0.19)",border:"none",borderRadius:"20px",padding:"13px 20px",boxSizing:"border-box","&:focus-visible":{outline:"unset"}}),S=t(5193),C=t(5218),L=t(184),M=function(e){var n=e.handleSearch,t=(0,r.TA)({initialValues:{search:""},onSubmit:function(e,t){var i=e.search;""===i.trim()||i.trim().length>50?C.Am.error("Invalid query"):n(i)}}),i=(0,S.Z)("(max-width: 767px)");return(0,L.jsx)(L.Fragment,{children:i?(0,L.jsxs)(Z,{onSubmit:t.handleSubmit,onReset:t.handleReset,children:[(0,L.jsx)(O,{id:"search",name:"search",type:"text",onChange:t.handleChange,value:t.values.search}),(0,L.jsxs)(b,{children:[t.values.search&&(0,L.jsx)(j,{type:"reset",children:(0,L.jsx)(m,{})}),(0,L.jsx)(v,{type:"submit",children:(0,L.jsx)(d,{})})]})]}):(0,L.jsxs)(w,{onSubmit:t.handleSubmit,onReset:t.handleReset,children:[(0,L.jsx)(y,{id:"search",name:"search",type:"text",onChange:t.handleChange,value:t.values.search}),(0,L.jsxs)(b,{children:[t.values.search&&(0,L.jsx)(j,{type:"reset",onClick:function(){n(""),t.resetForm()},children:(0,L.jsx)(m,{})}),(0,L.jsx)(v,{type:"submit",children:(0,L.jsx)(d,{})})]})]})})}},4920:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var i,r,o,a,s,l,c,u,d,p,h,x=t(3083),f=t(168),m=t(225),g=m.Z.h1(i||(i=(0,f.Z)(["\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 33px;\n  text-align: center;\n  color: #111111;\n"]))),b=t(184),v=function(){return(0,b.jsx)(g,{children:"News"})},j=m.Z.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),w=m.Z.li(o||(o=(0,f.Z)(["\n  background: #ffffff;\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n  flex-basis: calc((100% - 20px * (1 - 1)) / 1);\n\n  @media (min-width: 768px) {\n    flex-basis: calc((100% - 20px * (2 - 1)) / 2);\n  }\n  @media (min-width: 1280px) {\n    flex-basis: calc((100% - 20px * (3 - 1)) / 3);\n  }\n"]))),Z=m.Z.img(a||(a=(0,f.Z)(["\n  height: 252px;\n  min-width: 100%;\n  border-radius: 20px;\n  margin-bottom: 16px;\n"]))),y=m.Z.h2(s||(s=(0,f.Z)(["\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 33px;\n  letter-spacing: -0.01em;\n  margin-bottom: 16px;\n"]))),O=m.Z.p(l||(l=(0,f.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #111111;\n  margin-bottom: 40px;\n"]))),S=m.Z.div(c||(c=(0,f.Z)(["\n  padding: 12px;\n  padding-top: 0;\n"]))),C=m.Z.div(u||(u=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),L=m.Z.span(d||(d=(0,f.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #888888;\n"]))),M=m.Z.button(p||(p=(0,f.Z)(["\n  background: none;\n  border: none;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  color: #54adff;\n\n  &:hover,\n  :focus {\n    border-bottom: 1px solid #54adff;\n  }\n"]))),k=(m.Z.div(h||(h=(0,f.Z)(["\n  height: 8px;\n  background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);\n  border-radius: 40px;\n  margin-top: 12px;\n"]))),function(){return(0,b.jsxs)(j,{children:[(0,b.jsxs)(w,{children:[(0,b.jsx)(Z,{src:"https://liftlearning.com/wp-content/uploads/2020/09/default-image.png",alt:"Img",width:"280",height:"252"}),(0,b.jsxs)(S,{children:[(0,b.jsx)(y,{children:"On Pets, Moral Logic and Love"}),(0,b.jsx)(O,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero ad praesentium amet omnis exercitationem commodi consectetur, officiis hic eius veniam quas explicabo tempora nobis, quisquam itaque at atque possimus."}),(0,b.jsxs)(C,{children:[(0,b.jsx)(L,{children:"15/03/2023"}),(0,b.jsx)(M,{children:"Read more"})]})]})]}),(0,b.jsxs)(w,{children:[(0,b.jsx)(Z,{src:"https://liftlearning.com/wp-content/uploads/2020/09/default-image.png",alt:"Img",width:"280",height:"252"}),(0,b.jsxs)(S,{children:[(0,b.jsx)(y,{children:"On Pets, Moral Logic and Love"}),(0,b.jsx)(O,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero ad praesentium amet omnis exercitationem commodi consectetur, officiis hic eius veniam quas explicabo tempora nobis, quisquam itaque at atque possimus."}),(0,b.jsxs)(C,{children:[(0,b.jsx)(L,{children:"15/03/2023"}),(0,b.jsx)(M,{children:"Read more"})]})]})]}),(0,b.jsxs)(w,{children:[(0,b.jsx)(Z,{src:"https://liftlearning.com/wp-content/uploads/2020/09/default-image.png",alt:"Img",width:"280",height:"252"}),(0,b.jsxs)(S,{children:[(0,b.jsx)(y,{children:"On Pets, Moral Logic and Love"}),(0,b.jsx)(O,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero ad praesentium amet omnis exercitationem commodi consectetur, officiis hic eius veniam quas explicabo tempora nobis, quisquam itaque at atque possimus."}),(0,b.jsxs)(C,{children:[(0,b.jsx)(L,{children:"15/03/2023"}),(0,b.jsx)(M,{children:"Read more"})]})]})]})]})}),q=function(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(v,{}),(0,b.jsx)(x.Z,{}),(0,b.jsx)(k,{})]})},R=function(){return(0,b.jsx)(q,{})}},5193:function(e,n,t){var i;t.d(n,{Z:function(){return p}});var r=t(9439),o=t(2791),a=t(9120),s=t(3073),l=t(162);function c(e,n,t,i,a){var s=o.useState((function(){return a&&t?t(e).matches:i?i(e).matches:n})),c=(0,r.Z)(s,2),u=c[0],d=c[1];return(0,l.Z)((function(){var n=!0;if(t){var i=t(e),r=function(){n&&d(i.matches)};return r(),i.addListener(r),function(){n=!1,i.removeListener(r)}}}),[e,t]),u}var u=(i||(i=t.t(o,2))).useSyncExternalStore;function d(e,n,t,i,a){var s=o.useCallback((function(){return n}),[n]),l=o.useMemo((function(){if(a&&t)return function(){return t(e).matches};if(null!==i){var n=i(e).matches;return function(){return n}}return s}),[s,e,i,a,t]),c=o.useMemo((function(){if(null===t)return[s,function(){return function(){}}];var n=t(e);return[function(){return n.matches},function(e){return n.addListener(e),function(){n.removeListener(e)}}]}),[s,t,e]),d=(0,r.Z)(c,2),p=d[0],h=d[1];return u(h,p,l)}function p(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,a.Z)(),i="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,r=(0,s.Z)({name:"MuiUseMediaQuery",props:n,theme:t}),o=r.defaultMatches,l=void 0!==o&&o,p=r.matchMedia,h=void 0===p?i?window.matchMedia:null:p,x=r.ssrMatchMedia,f=void 0===x?null:x,m=r.noSsr,g=void 0!==m&&m;var b="function"===typeof e?e(t):e;b=b.replace(/^@media( ?)/m,"");var v=void 0!==u?d:c,j=v(b,l,h,f,g);return j}},162:function(e,n,t){var i=t(5721);n.Z=i.Z}}]);
//# sourceMappingURL=920.316f7220.chunk.js.map