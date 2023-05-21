"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[420],{1420:function(t,n,r){r.r(n),r.d(n,{default:function(){return d}});var a,o=r(184),e=function(){return(0,o.jsx)(o.Fragment,{})},i=r(2419),p=r(168),h=r(4942),s=r(225),u=r(1087),l=r(4567),g=(0,s.Z)(l.Z)((function(t){var n,r=t.theme;return n={},(0,h.Z)(n,r.breakpoints.down("tablet"),{fontSize:"20px",fontWeight:r.typography.fontWeightBold,fontFamily:r.typography.fontFamily}),(0,h.Z)(n,r.breakpoints.up("tablet"),{fontSize:"28px",fontWeight:r.typography.fontWeightBold,fontFamily:r.typography.fontFamily}),n})),c=s.Z.div(a||(a=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) and (max-width: 1279px) {\n    margin-bottom: 20px;\n  }\n"]))),f=(0,s.Z)(u.OL)((function(t){var n=t.theme;return{width:"129px",height:"40px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"8px",fontWeight:n.typography.fontWeightBold,fontFamily:n.typography.fontFamily,fontSize:"16px",lineHeight:"22px",color:"#fef9f9",background:"#54adff",borderRadius:"40px"}})),m=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(c,{children:[(0,o.jsx)(g,{children:"My pets:"}),(0,o.jsxs)(f,{to:"/add-pet",children:["Add pet ",(0,o.jsx)(i.Z,{})]})]})})},d=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e,{}),(0,o.jsx)(m,{})]})}},2419:function(t,n,r){var a=r(4836);n.Z=void 0;var o=a(r(5649)),e=r(184),i=(0,o.default)((0,e.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.Z=i},4567:function(t,n,r){var a=r(5987),o=r(1413),e=r(2791),i=r(8182),p=r(8519),h=r(4419),s=r(6934),u=r(1402),l=r(4036),g=r(940),c=r(184),f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],m=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,n){var r=t.ownerState;return[n.root,r.variant&&n[r.variant],"inherit"!==r.align&&n["align".concat((0,l.Z)(r.align))],r.noWrap&&n.noWrap,r.gutterBottom&&n.gutterBottom,r.paragraph&&n.paragraph]}})((function(t){var n=t.theme,r=t.ownerState;return(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({margin:0},r.variant&&n.typography[r.variant]),"inherit"!==r.align&&{textAlign:r.align}),r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}),r.gutterBottom&&{marginBottom:"0.35em"}),r.paragraph&&{marginBottom:16})})),d={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},v=e.forwardRef((function(t,n){var r=(0,u.Z)({props:t,name:"MuiTypography"}),e=function(t){return y[t]||t}(r.color),s=(0,p.Z)((0,o.Z)((0,o.Z)({},r),{},{color:e})),v=s.align,Z=void 0===v?"inherit":v,x=s.className,b=s.component,w=s.gutterBottom,W=void 0!==w&&w,j=s.noWrap,B=void 0!==j&&j,k=s.paragraph,F=void 0!==k&&k,M=s.variant,P=void 0===M?"body1":M,S=s.variantMapping,A=void 0===S?d:S,C=(0,a.Z)(s,f),R=(0,o.Z)((0,o.Z)({},s),{},{align:Z,color:e,className:x,component:b,gutterBottom:W,noWrap:B,paragraph:F,variant:P,variantMapping:A}),_=b||(F?"p":A[P]||d[P])||"span",z=function(t){var n=t.align,r=t.gutterBottom,a=t.noWrap,o=t.paragraph,e=t.variant,i=t.classes,p={root:["root",e,"inherit"!==t.align&&"align".concat((0,l.Z)(n)),r&&"gutterBottom",a&&"noWrap",o&&"paragraph"]};return(0,h.Z)(p,g.f,i)}(R);return(0,c.jsx)(m,(0,o.Z)({as:_,ref:n,ownerState:R,className:(0,i.Z)(z.root,x)},C))}));n.Z=v},940:function(t,n,r){r.d(n,{f:function(){return e}});var a=r(5878),o=r(1217);function e(t){return(0,o.Z)("MuiTypography",t)}var i=(0,a.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);n.Z=i},8519:function(t,n,r){r.d(n,{Z:function(){return s}});var a=r(1413),o=r(3433),e=r(5987),i=r(2466),p=r(7416),h=["sx"];function s(t){var n,r=t.sx,s=function(t){var n,r,a={systemProps:{},otherProps:{}},o=null!=(n=null==t||null==(r=t.theme)?void 0:r.unstable_sxConfig)?n:p.Z;return Object.keys(t).forEach((function(n){o[n]?a.systemProps[n]=t[n]:a.otherProps[n]=t[n]})),a}((0,e.Z)(t,h)),u=s.systemProps,l=s.otherProps;return n=Array.isArray(r)?[u].concat((0,o.Z)(r)):"function"===typeof r?function(){var t=r.apply(void 0,arguments);return(0,i.P)(t)?(0,a.Z)((0,a.Z)({},u),t):u}:(0,a.Z)((0,a.Z)({},u),r),(0,a.Z)((0,a.Z)({},l),{},{sx:n})}}}]);
//# sourceMappingURL=420.979397f2.chunk.js.map