(self.webpackChunknicecode=self.webpackChunknicecode||[]).push([[8859],{19945:function(r,n,e){"use strict";e.r(n);var _=e(48305),f=e.n(_),a=e(50959),s=e(15561),i=e(37324),t=e(11527),o=function(){var x=a.useState(100),M=f()(x,2),O=M[0],l=M[1],h=a.useState(100),E=f()(h,2),c=E[0],g=E[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Z,{offsetTop:O,children:(0,t.jsx)(i.ZP,{type:"primary",onClick:function(){return l(O+10)},children:"Affix top"})}),(0,t.jsx)("br",{}),(0,t.jsx)(s.Z,{offsetBottom:c,children:(0,t.jsx)(i.ZP,{type:"primary",onClick:function(){return g(c+10)},children:"Affix bottom"})})]})};n.default=o},80985:function(r,n,e){"use strict";e.r(n);var _=e(48305),f=e.n(_),a=e(50959),s=e(15561),i=e(37324),t=e(11527),o=function(){var x=(0,a.useState)(10),M=f()(x,2),O=M[0],l=M[1];return(0,t.jsxs)("div",{style:{height:1e4},children:[(0,t.jsx)("div",{children:"Top"}),(0,t.jsx)(s.Z,{offsetTop:O,children:(0,t.jsx)("div",{style:{background:"red"},children:(0,t.jsx)(i.ZP,{type:"primary",onClick:function(){return l(O+10)},children:"Affix top"})})}),(0,t.jsx)("div",{children:"Bottom"})]})};n.default=o},44461:function(r,n,e){"use strict";e.r(n);var _=e(50959),f=e(15561),a=e(37324),s=e(11527),i=function(){return(0,s.jsx)(f.Z,{offsetTop:120,onChange:function(p){return console.log(p)},children:(0,s.jsx)(a.ZP,{children:"120px to affix top"})})};n.default=i},96731:function(r,n,e){"use strict";e.r(n);var _=e(48305),f=e.n(_),a=e(50959),s=e(15561),i=e(37324),t=e(11527),o={width:"100%",height:100,overflow:"auto",border:"1px solid #40a9ff"},p={width:"100%",height:1e3},x=function(){var O=a.useState(null),l=f()(O,2),h=l[0],E=l[1];return(0,t.jsx)("div",{style:o,ref:E,children:(0,t.jsx)("div",{style:p,children:(0,t.jsx)(s.Z,{target:function(){return h},children:(0,t.jsx)(i.ZP,{type:"primary",children:"Fixed at the top of container"})})})})};n.default=x},15561:function(r,n,e){"use strict";e.d(n,{Z:function(){return ce}});var _=e(26068),f=e.n(_),a=e(82092),s=e.n(a),i=e(48305),t=e.n(i),o=e(50959),p=e(82187),x=e.n(p),M=e(12682),O=e(37824),l=e(15558),h=e.n(l),E=e(85669);function c(u){var m,A=function(R){return function(){m=null,u.apply(void 0,h()(R))}},U=function(){if(m==null){for(var R=arguments.length,X=new Array(R),B=0;B<R;B++)X[B]=arguments[B];m=(0,E.Z)(A(X))}};return U.cancel=function(){E.Z.cancel(m),m=null},U}var g=c,C=e(61809),y=e(89480),D=function(m){var A=m.componentCls;return s()({},A,{position:"fixed",zIndex:m.zIndexPopup})},W=function(m){return{zIndexPopup:m.zIndexBase+10}},I=(0,y.I$)("Affix",D,W);function j(u){return u!==window?u.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function K(u,m,A){if(A!==void 0&&m.top>u.top-A)return A+m.top}function V(u,m,A){if(A!==void 0&&m.bottom<u.bottom+A){var U=window.innerHeight-m.bottom;return A+U}}var Z=e(11527),ee=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function _e(){return typeof window!="undefined"?window:null}var b=function(u){return u[u.None=0]="None",u[u.Prepare=1]="Prepare",u}(b||{}),ve=o.forwardRef(function(u,m){var A,U=u.style,N=u.offsetTop,R=u.offsetBottom,X=u.prefixCls,B=u.className,Ee=u.rootClassName,me=u.children,$=u.target,Y=u.onChange,te=o.useContext(C.E_),he=te.getPrefixCls,Pe=te.getTargetContainer,ne=he("affix",X),Ae=o.useState(!1),re=t()(Ae,2),ye=re[0],xe=re[1],Me=o.useState(),oe=t()(Me,2),L=oe[0],Oe=oe[1],Ce=o.useState(),ae=t()(Ce,2),De=ae[0],Te=ae[1],w=o.useRef(b.None),k=o.useRef(null),z=o.useRef(),F=o.useRef(null),se=o.useRef(null),J=o.useRef(null),T=(A=$!=null?$:Pe)!==null&&A!==void 0?A:_e,ue=R===void 0&&N===void 0?0:N,pe=function(){if(!(w.current!==b.Prepare||!se.current||!F.current||!T)){var P=T();if(P){var v={status:b.None},d=j(F.current);if(d.top===0&&d.left===0&&d.width===0&&d.height===0)return;var G=j(P),fe=K(d,G,ue),de=V(d,G,R);fe!==void 0?(v.affixStyle={position:"fixed",top:fe,width:d.width,height:d.height},v.placeholderStyle={width:d.width,height:d.height}):de!==void 0&&(v.affixStyle={position:"fixed",bottom:de,width:d.width,height:d.height},v.placeholderStyle={width:d.width,height:d.height}),v.lastAffix=!!v.affixStyle,ye!==v.lastAffix&&(Y==null||Y(v.lastAffix)),w.current=v.status,Oe(v.affixStyle),Te(v.placeholderStyle),xe(v.lastAffix)}}},ie=function(){if(w.current=b.Prepare,pe(),!1)var P,v},H=g(function(){ie()}),Q=g(function(){if(T&&L){var S=T();if(S&&F.current){var P=j(S),v=j(F.current),d=K(v,P,ue),G=V(v,P,R);if(d!==void 0&&L.top===d||G!==void 0&&L.bottom===G)return}}ie()}),le=function(){var P=T==null?void 0:T();P&&(ee.forEach(function(v){if(z.current){var d;(d=k.current)===null||d===void 0||d.removeEventListener(v,z.current)}P==null||P.addEventListener(v,Q)}),k.current=P,z.current=Q)},ge=function(){J.current&&(clearTimeout(J.current),J.current=null);var P=T==null?void 0:T();ee.forEach(function(v){if(P==null||P.removeEventListener(v,Q),z.current){var d;(d=k.current)===null||d===void 0||d.removeEventListener(v,z.current)}}),H.cancel(),Q.cancel()};o.useImperativeHandle(m,function(){return{updatePosition:H}}),o.useEffect(function(){return J.current=setTimeout(le),function(){return ge()}},[]),o.useEffect(function(){le()},[$,L]),o.useEffect(function(){H()},[$,N,R]);var Ie=I(ne),q=t()(Ie,3),Re=q[0],je=q[1],Le=q[2],Ue=x()(Ee,je,ne,Le),Be=x()(s()({},Ue,L)),Se=(0,O.default)(u,["prefixCls","offsetTop","offsetBottom","target","onChange","rootClassName"]);return Re((0,Z.jsx)(M.Z,{onResize:H,children:(0,Z.jsxs)("div",f()(f()({style:U,className:B,ref:F},Se),{},{children:[L&&(0,Z.jsx)("div",{style:De,"aria-hidden":"true"}),(0,Z.jsx)("div",{className:Be,ref:se,style:L,children:(0,Z.jsx)(M.Z,{onResize:H,children:me})})]}))}))}),ce=ve},45680:function(r,n,e){"use strict";e.d(n,{C8:function(){return f.Z},t4:function(){return a.t4},x1:function(){return a.x1},zX:function(){return _.Z}});var _=e(92577),f=e(29953),a=e(78404),s=e(77812),i=e(24694)},48290:function(r,n,e){"use strict";e.d(n,{Z:function(){return _}});function _(f,a){for(var s=f,i=0;i<a.length;i+=1){if(s==null)return;s=s[a[i]]}return s}},77812:function(r,n,e){"use strict";e.d(n,{T:function(){return O},Z:function(){return o}});var _=e(59307),f=e(36522),a=e(88396),s=e(26664),i=e(48290);function t(l,h,E,c){if(!h.length)return E;var g=(0,s.Z)(h),C=g[0],y=g.slice(1),D;return!l&&typeof C=="number"?D=[]:Array.isArray(l)?D=(0,a.Z)(l):D=(0,f.Z)({},l),c&&E===void 0&&y.length===1?delete D[C][y[0]]:D[C]=t(D[C],y,E,c),D}function o(l,h,E){var c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return h.length&&c&&E===void 0&&!(0,i.Z)(l,h.slice(0,-1))?l:t(l,h,E,c)}function p(l){return(0,_.Z)(l)==="object"&&l!==null&&Object.getPrototypeOf(l)===Object.prototype}function x(l){return Array.isArray(l)?[]:{}}var M=typeof Reflect=="undefined"?Object.keys:Reflect.ownKeys;function O(){for(var l=arguments.length,h=new Array(l),E=0;E<l;E++)h[E]=arguments[E];var c=x(h[0]);return h.forEach(function(g){function C(y,D){var W=new Set(D),I=(0,i.Z)(g,y),j=Array.isArray(I);if(j||p(I)){if(!W.has(I)){W.add(I);var K=(0,i.Z)(c,y);j?c=o(c,y,[]):(!K||(0,_.Z)(K)!=="object")&&(c=o(c,y,x(I))),M(I).forEach(function(V){C([].concat((0,a.Z)(y),[V]),W)})}}else c=o(c,y,I)}C([])}),c}},37824:function(r,n,e){"use strict";var _=e(18666).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=a;var f=_(e(44164));function a(s,i){var t=(0,f.default)({},s);return Array.isArray(i)&&i.forEach(function(o){delete t[o]}),t}},38498:function(r,n,e){var _=e(78770);function f(a){if(Array.isArray(a))return _(a)}r.exports=f,r.exports.__esModule=!0,r.exports.default=r.exports},20698:function(r){function n(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}r.exports=n,r.exports.__esModule=!0,r.exports.default=r.exports},91162:function(r){function n(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}r.exports=n,r.exports.__esModule=!0,r.exports.default=r.exports},15558:function(r,n,e){var _=e(38498),f=e(20698),a=e(31479),s=e(91162);function i(t){return _(t)||f(t)||a(t)||s()}r.exports=i,r.exports.__esModule=!0,r.exports.default=r.exports},26664:function(r,n,e){"use strict";e.d(n,{Z:function(){return i}});var _=e(43039),f=e(74645),a=e(87570),s=e(46986);function i(t){return(0,_.Z)(t)||(0,f.Z)(t)||(0,a.Z)(t)||(0,s.Z)()}}}]);
