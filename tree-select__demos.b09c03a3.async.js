"use strict";(self.webpackChunknicecode=self.webpackChunknicecode||[]).push([[9433],{62768:function(A,r,e){e.r(r);var u=e(48305),l=e.n(u),c=e(50959),n=e(77626),i=e(11527),t=function(){var d=(0,c.useState)(),o=l()(d,2),s=o[0],f=o[1],M=(0,c.useState)([{id:1,pId:0,value:"1",title:"Expand to load"},{id:2,pId:0,value:"2",title:"Expand to load"},{id:3,pId:0,value:"3",title:"Tree Node",isLeaf:!0}]),E=l()(M,2),m=E[0],C=E[1],T=function(I){var W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,j=Math.random().toString(36).substring(2,6);return{id:j,pId:I,value:j,title:W?"Tree Node":"Expand to load",isLeaf:W}},y=function(I){var W=I.id;return new Promise(function(j){setTimeout(function(){C(m.concat([T(W,!1),T(W,!0),T(W,!0)])),j(void 0)},300)})},U=function(I){console.log(I),f(I)};return(0,i.jsx)(n.Z,{treeDataSimpleMode:!0,style:{width:"100%"},value:s,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",onChange:U,loadData:y,treeData:m})};r.default=t},74776:function(A,r,e){e.r(r);var u=e(48305),l=e.n(u),c=e(50959),n=e(77626),i=e(11527),t=[{value:"parent 1",title:"parent 1",children:[{value:"parent 1-0",title:"parent 1-0",children:[{value:"leaf1",title:"leaf1"},{value:"leaf2",title:"leaf2"}]},{value:"parent 1-1",title:"parent 1-1",children:[{value:"leaf3",title:(0,i.jsx)("b",{style:{color:"#08c"},children:"leaf3"})}]}]}],p=function(){var o=(0,c.useState)(),s=l()(o,2),f=s[0],M=s[1],E=function(C){M(C)};return(0,i.jsx)(n.Z,{showSearch:!0,style:{width:"100%"},value:f,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",allowClear:!0,treeDefaultExpandAll:!0,onChange:E,treeData:t})};r.default=p},88571:function(A,r,e){e.r(r);var u=e(26068),l=e.n(u),c=e(48305),n=e.n(c),i=e(50959),t=e(77626),p=e(11527),d=t.Z.SHOW_PARENT,o=[{title:"Node1",value:"0-0",key:"0-0",children:[{title:"Child Node1",value:"0-0-0",key:"0-0-0"}]},{title:"Node2",value:"0-1",key:"0-1",children:[{title:"Child Node3",value:"0-1-0",key:"0-1-0"},{title:"Child Node4",value:"0-1-1",key:"0-1-1"},{title:"Child Node5",value:"0-1-2",key:"0-1-2"}]}],s=function(){var M=(0,i.useState)(["0-0-0"]),E=n()(M,2),m=E[0],C=E[1],T=function(S){console.log("onChange ",S),C(S)},y={treeData:o,value:m,onChange:T,treeCheckable:!0,showCheckedStrategy:d,placeholder:"Please select",style:{width:"100%"}};return(0,p.jsx)(t.Z,l()({},y))};r.default=s},85566:function(A,r,e){e.r(r);var u=e(48305),l=e.n(u),c=e(50959),n=e(47645),i=e(77626),t=e(11527),p=[{value:"parent 1",title:"parent 1",children:[{value:"parent 1-0",title:"parent 1-0",children:[{value:"leaf1",title:"leaf1"},{value:"leaf2",title:"leaf2"}]},{value:"parent 1-1",title:"parent 1-1",children:[{value:"leaf3",title:(0,t.jsx)("b",{style:{color:"#08c"},children:"leaf3"})}]}]}],d=function(){var s=(0,c.useState)(),f=l()(s,2),M=f[0],E=f[1],m=function(T){E(T)};return(0,t.jsx)(n.ZP,{theme:{components:{TreeSelect:{nodeHoverBg:"#fff2f0",nodeSelectedBg:"#ffa39e"}}},children:(0,t.jsx)(i.Z,{showSearch:!0,style:{width:"100%"},value:M,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",allowClear:!0,treeDefaultExpandAll:!0,onChange:m,treeData:p})})};r.default=d},15287:function(A,r,e){e.r(r);var u=e(48305),l=e.n(u),c=e(50959),n=e(77626),i=e(11527),t=[{value:"parent 1",title:"parent 1",children:[{value:"parent 1-0",title:"parent 1-0",children:[{value:"leaf1",title:"my leaf"},{value:"leaf2",title:"your leaf"}]},{value:"parent 1-1",title:"parent 1-1",children:[{value:"sss",title:(0,i.jsx)("b",{style:{color:"#08c"},children:"sss"})}]}]}],p=function(){var o=(0,c.useState)(),s=l()(o,2),f=s[0],M=s[1],E=function(C){console.log(C),M(C)};return(0,i.jsx)(n.Z,{showSearch:!0,style:{width:"100%"},value:f,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",allowClear:!0,multiple:!0,treeDefaultExpandAll:!0,onChange:E,treeData:t})};r.default=p},23912:function(A,r,e){e.r(r);var u=e(48305),l=e.n(u),c=e(50959),n=e(41179),i=e(77626),t=e(11527),p=[{value:"parent 1",title:"parent 1",children:[{value:"parent 1-0",title:"parent 1-0",children:[{value:"leaf1",title:"leaf1"},{value:"leaf2",title:"leaf2"}]},{value:"parent 1-1",title:"parent 1-1",children:[{value:"leaf3",title:(0,t.jsx)("b",{style:{color:"#08c"},children:"leaf3"})}]}]}],d=function(){var s=(0,c.useState)("topLeft"),f=l()(s,2),M=f[0],E=f[1],m=function(T){E(T.target.value)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ZP.Group,{value:M,onChange:m,children:[(0,t.jsx)(n.ZP.Button,{value:"topLeft",children:"topLeft"}),(0,t.jsx)(n.ZP.Button,{value:"topRight",children:"topRight"}),(0,t.jsx)(n.ZP.Button,{value:"bottomLeft",children:"bottomLeft"}),(0,t.jsx)(n.ZP.Button,{value:"bottomRight",children:"bottomRight"})]}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(i.Z,{showSearch:!0,dropdownStyle:{maxHeight:400,overflow:"auto",minWidth:300},placeholder:"Please select",dropdownMatchSelectWidth:!1,placement:M,allowClear:!0,treeDefaultExpandAll:!0,treeData:p})]})};r.default=d},76099:function(A,r,e){e.r(r);var u=e(50959),l=e(77626),c=e(11527),n=l.Z._InternalPanelDoNotUseOrYouWillBeFired,i=[{title:"Node1",value:"0-0",children:[{title:"Child Node1",value:"0-0-1"},{title:"Child Node2",value:"0-0-2"}]},{title:"Node2",value:"0-1"}],t=function(){return(0,c.jsx)(n,{defaultValue:"lucy",style:{width:"100%"},treeData:i})};r.default=t},44499:function(A,r,e){e.r(r);var u=e(50959),l=e(20314),c=e(77626),n=e(11527),i=function(){return(0,n.jsxs)(l.Z,{direction:"vertical",style:{width:"100%"},children:[(0,n.jsx)(c.Z,{status:"error",style:{width:"100%"},placeholder:"Error"}),(0,n.jsx)(c.Z,{status:"warning",style:{width:"100%"},multiple:!0,placeholder:"Warning multiple"})]})};r.default=i},78307:function(A,r,e){e.r(r);var u=e(48305),l=e.n(u),c=e(50959),n=e(39402),i=e(77626),t=e(11527),p=(0,t.jsx)(n.Z,{}),d=[{value:"parent 1",title:"parent 1",children:[{value:"parent 1-0",title:"parent 1-0",children:[{value:"leaf1",title:"my leaf"},{value:"leaf2",title:"your leaf"}]},{value:"parent 1-1",title:"parent 1-1",children:[{value:"sss",title:(0,t.jsx)("b",{style:{color:"#08c"},children:"sss"})}]}]}],o=function(){var f=(0,c.useState)(),M=l()(f,2),E=M[0],m=M[1],C=function(y){console.log(y),m(y)};return(0,t.jsx)(i.Z,{showSearch:!0,suffixIcon:p,style:{width:"100%"},value:E,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",allowClear:!0,treeDefaultExpandAll:!0,onChange:C,treeData:d})};r.default=o},17193:function(A,r,e){e.r(r);var u=e(48305),l=e.n(u),c=e(50959),n=e(77626),i=e(11527),t=[{title:"Node1",value:"0-0",children:[{title:"Child Node1",value:"0-0-1"},{title:"Child Node2",value:"0-0-2"}]},{title:"Node2",value:"0-1"}],p=function(){var o=(0,c.useState)(),s=l()(o,2),f=s[0],M=s[1],E=function(C){console.log(C),M(C)};return(0,i.jsx)(n.Z,{style:{width:"100%"},value:f,dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:t,placeholder:"Please select",treeDefaultExpandAll:!0,onChange:E})};r.default=p},77177:function(A,r,e){e.r(r);var u=e(48305),l=e.n(u),c=e(50959),n=e(66242),i=e(20314),t=e(42454),p=e(77626),d=e(11527),o=[{value:"parent 1",title:"parent 1",icon:(0,d.jsx)(n.Z,{}),children:[{value:"parent 1-0",title:"parent 1-0",icon:(0,d.jsx)(n.Z,{}),children:[{value:"leaf1",title:"leaf1",icon:(0,d.jsx)(n.Z,{})},{value:"leaf2",title:"leaf2",icon:(0,d.jsx)(n.Z,{})}]},{value:"parent 1-1",title:"parent 1-1",icon:(0,d.jsx)(n.Z,{}),children:[{value:"sss",title:"sss",icon:(0,d.jsx)(n.Z,{})}]}]}],s=function(){var M=(0,c.useState)(!0),E=l()(M,2),m=E[0],C=E[1],T=(0,c.useState)(!1),y=l()(T,2),U=y[0],S=y[1],I=(0,c.useState)(!1),W=l()(I,2),j=W[0],z=W[1];return(0,d.jsxs)(i.Z,{direction:"vertical",children:[(0,d.jsx)(t.Z,{checkedChildren:"showIcon",unCheckedChildren:"showIcon",checked:j,onChange:function(){return z(!j)}}),(0,d.jsx)(t.Z,{checkedChildren:"treeLine",unCheckedChildren:"treeLine",checked:m,onChange:function(){return C(!m)}}),(0,d.jsx)(t.Z,{disabled:!m,checkedChildren:"showLeafIcon",unCheckedChildren:"showLeafIcon",checked:U,onChange:function(){return S(!U)}}),(0,d.jsx)(p.Z,{treeLine:m&&{showLeafIcon:U},style:{width:300},treeData:o,treeIcon:j})]})};r.default=s},70254:function(A,r,e){e.d(r,{Cn:function(){return M},u6:function(){return d}});var u=e(48305),l=e.n(u),c=e(50959),n=e(49651),i=e(3683),t=100,p=10,d=t*p,o={Modal:t,Drawer:t,Popover:t,Popconfirm:t,Tooltip:t,Tour:t},s={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function f(E){return E in o}function M(E,m){var C=(0,n.ZP)(),T=l()(C,2),y=T[1],U=c.useContext(i.Z),S=f(E);if(m!==void 0)return[m,m];var I=U!=null?U:0;return S?(I+=(U?0:y.zIndexPopupBase)+o[E],I=Math.min(I,y.zIndexPopupBase+d)):I+=s[E],[U===void 0?m:I,I]}},33866:function(A,r,e){e.d(r,{m:function(){return p}});var u=function(){return{height:0,opacity:0}},l=function(o){var s=o.scrollHeight;return{height:s,opacity:1}},c=function(o){return{height:o?o.offsetHeight:0}},n=function(o,s){return(s==null?void 0:s.deadline)===!0||s.propertyName==="height"},i=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"ant";return{motionName:"".concat(o,"-motion-collapse"),onAppearStart:u,onEnterStart:u,onAppearActive:l,onEnterActive:l,onLeaveStart:c,onLeaveActive:u,onAppearEnd:n,onEnterEnd:n,onLeaveEnd:n,motionDeadline:500}},t=null,p=function(o,s,f){return f!==void 0?f:"".concat(o,"-").concat(s)};r.Z=i},3683:function(A,r,e){var u=e(50959),l=u.createContext(void 0);r.Z=l},40798:function(A,r,e){var u=e(82092),l=e.n(u),c=function(i){return l()({},i.componentCls,l()(l()({},"".concat(i.antCls,"-motion-collapse-legacy"),{overflow:"hidden","&-active":{transition:"height ".concat(i.motionDurationMid," ").concat(i.motionEaseInOut,`,
        opacity `).concat(i.motionDurationMid," ").concat(i.motionEaseInOut," !important")}}),"".concat(i.antCls,"-motion-collapse"),{overflow:"hidden",transition:"height ".concat(i.motionDurationMid," ").concat(i.motionEaseInOut,`,
        opacity `).concat(i.motionDurationMid," ").concat(i.motionEaseInOut," !important")}))};r.Z=c},49868:function(A,r,e){e.d(r,{R:function(){return p}});var u=e(82092),l=e.n(u),c=e(26068),n=e.n(c),i=function(o){return{animationDuration:o,animationFillMode:"both"}},t=function(o){return{animationDuration:o,animationFillMode:"both"}},p=function(o,s,f,M){var E=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,m=E?"&":"";return l()(l()(l()(l()({},`
      `.concat(m).concat(o,`-enter,
      `).concat(m).concat(o,`-appear
    `),n()(n()({},i(M)),{},{animationPlayState:"paused"})),"".concat(m).concat(o,"-leave"),n()(n()({},t(M)),{},{animationPlayState:"paused"})),`
      `.concat(m).concat(o,"-enter").concat(o,`-enter-active,
      `).concat(m).concat(o,"-appear").concat(o,`-appear-active
    `),{animationName:s,animationPlayState:"running"}),"".concat(m).concat(o,"-leave").concat(o,"-leave-active"),{animationName:f,animationPlayState:"running",pointerEvents:"none"})}},42454:function(A,r,e){e.d(r,{Z:function(){return oe}});var u=e(26068),l=e.n(u),c=e(82092),n=e.n(c),i=e(48305),t=e.n(i),p=e(67825),d=e.n(p),o=e(50959),s=e(76132),f=e.n(s),M=e(82187),E=e.n(M),m=e(86896),C=e(62473),T=e(61809),y=e(53804),U=e(658),S=e(63504),I=e(32861),W=e(12347),j=e(89480),z=e(16496),H=function(a){var _=a.componentCls,O=a.trackHeightSM,P=a.trackPadding,R=a.trackMinWidthSM,L=a.innerMinMarginSM,b=a.innerMaxMarginSM,v=a.handleSizeSM,h=a.calc,D="".concat(_,"-inner"),x=(0,S.bf)(h(v).add(h(P).mul(2)).equal()),K=(0,S.bf)(h(b).mul(2).equal());return n()({},_,n()({},"&".concat(_,"-small"),n()(n()(n()(n()(n()({minWidth:R,height:O,lineHeight:(0,S.bf)(O)},"".concat(_,"-inner"),n()(n()({paddingInlineStart:b,paddingInlineEnd:L},"".concat(D,"-checked"),{marginInlineStart:"calc(-100% + ".concat(x," - ").concat(K,")"),marginInlineEnd:"calc(100% - ".concat(x," + ").concat(K,")")}),"".concat(D,"-unchecked"),{marginTop:h(O).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0})),"".concat(_,"-handle"),{width:v,height:v}),"".concat(_,"-loading-icon"),{top:h(h(v).sub(a.switchLoadingIconSize)).div(2).equal(),fontSize:a.switchLoadingIconSize}),"&".concat(_,"-checked"),n()(n()({},"".concat(_,"-inner"),n()(n()({paddingInlineStart:L,paddingInlineEnd:b},"".concat(D,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),"".concat(D,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(x," + ").concat(K,")"),marginInlineEnd:"calc(-100% + ".concat(x," - ").concat(K,")")})),"".concat(_,"-handle"),{insetInlineStart:"calc(100% - ".concat((0,S.bf)(h(v).add(P).equal()),")")})),"&:not(".concat(_,"-disabled):active"),n()(n()({},"&:not(".concat(_,"-checked) ").concat(D),n()({},"".concat(D,"-unchecked"),{marginInlineStart:h(a.marginXXS).div(2).equal(),marginInlineEnd:h(a.marginXXS).mul(-1).div(2).equal()})),"&".concat(_,"-checked ").concat(D),n()({},"".concat(D,"-checked"),{marginInlineStart:h(a.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:h(a.marginXXS).div(2).equal()})))))},J=function(a){var _=a.componentCls,O=a.handleSize,P=a.calc;return n()({},_,n()(n()({},"".concat(_,"-loading-icon").concat(a.iconCls),{position:"relative",top:P(P(O).sub(a.fontSize)).div(2).equal(),color:a.switchLoadingIconColor,verticalAlign:"top"}),"&".concat(_,"-checked ").concat(_,"-loading-icon"),{color:a.switchColor}))},k=function(a){var _=a.componentCls,O=a.trackPadding,P=a.handleBg,R=a.handleShadow,L=a.handleSize,b=a.calc,v="".concat(_,"-handle");return n()({},_,n()(n()(n()({},v,{position:"absolute",top:O,insetInlineStart:O,width:L,height:L,transition:"all ".concat(a.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:P,borderRadius:b(L).div(2).equal(),boxShadow:R,transition:"all ".concat(a.switchDuration," ease-in-out"),content:'""'}}),"&".concat(_,"-checked ").concat(v),{insetInlineStart:"calc(100% - ".concat((0,S.bf)(b(L).add(O).equal()),")")}),"&:not(".concat(_,"-disabled):active"),n()(n()({},"".concat(v,"::before"),{insetInlineEnd:a.switchHandleActiveInset,insetInlineStart:0}),"&".concat(_,"-checked ").concat(v,"::before"),{insetInlineEnd:0,insetInlineStart:a.switchHandleActiveInset})))},q=function(a){var _=a.componentCls,O=a.trackHeight,P=a.trackPadding,R=a.innerMinMargin,L=a.innerMaxMargin,b=a.handleSize,v=a.calc,h="".concat(_,"-inner"),D=(0,S.bf)(v(b).add(v(P).mul(2)).equal()),x=(0,S.bf)(v(L).mul(2).equal());return n()({},_,n()(n()(n()({},h,n()(n()(n()({display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:L,paddingInlineEnd:R,transition:"padding-inline-start ".concat(a.switchDuration," ease-in-out, padding-inline-end ").concat(a.switchDuration," ease-in-out")},"".concat(h,"-checked, ").concat(h,"-unchecked"),{display:"block",color:a.colorTextLightSolid,fontSize:a.fontSizeSM,transition:"margin-inline-start ".concat(a.switchDuration," ease-in-out, margin-inline-end ").concat(a.switchDuration," ease-in-out"),pointerEvents:"none"}),"".concat(h,"-checked"),{marginInlineStart:"calc(-100% + ".concat(D," - ").concat(x,")"),marginInlineEnd:"calc(100% - ".concat(D," + ").concat(x,")")}),"".concat(h,"-unchecked"),{marginTop:v(O).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0})),"&".concat(_,"-checked ").concat(h),n()(n()({paddingInlineStart:R,paddingInlineEnd:L},"".concat(h,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),"".concat(h,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(D," + ").concat(x,")"),marginInlineEnd:"calc(-100% + ".concat(D," - ").concat(x,")")})),"&:not(".concat(_,"-disabled):active"),n()(n()({},"&:not(".concat(_,"-checked) ").concat(h),n()({},"".concat(h,"-unchecked"),{marginInlineStart:v(P).mul(2).equal(),marginInlineEnd:v(P).mul(-1).mul(2).equal()})),"&".concat(_,"-checked ").concat(h),n()({},"".concat(h,"-checked"),{marginInlineStart:v(P).mul(-1).mul(2).equal(),marginInlineEnd:v(P).mul(2).equal()}))))},ee=function(a){var _=a.componentCls,O=a.trackHeight,P=a.trackMinWidth;return n()({},_,l()(l()(l()({},(0,W.Wf)(a)),{},n()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:P,height:O,lineHeight:"".concat((0,S.bf)(O)),verticalAlign:"middle",background:a.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(a.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(_,"-disabled)"),{background:a.colorTextTertiary}),(0,W.Qy)(a)),{},n()(n()(n()({},"&".concat(_,"-checked"),n()({background:a.switchColor},"&:hover:not(".concat(_,"-disabled)"),{background:a.colorPrimaryHover})),"&".concat(_,"-loading, &").concat(_,"-disabled"),{cursor:"not-allowed",opacity:a.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),"&".concat(_,"-rtl"),{direction:"rtl"})))},ne=function(a){var _=a.fontSize,O=a.lineHeight,P=a.controlHeight,R=a.colorWhite,L=_*O,b=P/2,v=2,h=L-v*2,D=b-v*2;return{trackHeight:L,trackHeightSM:b,trackMinWidth:h*2+v*4,trackMinWidthSM:D*2+v*2,trackPadding:v,handleBg:R,handleSize:h,handleSizeSM:D,handleShadow:"0 2px 4px 0 ".concat(new I.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:h/2,innerMaxMargin:h+v+v*2,innerMinMarginSM:D/2,innerMaxMarginSM:D+v+v*2}},ae=(0,j.I$)("Switch",function(g){var a=(0,z.TS)(g,{switchDuration:g.motionDurationMid,switchColor:g.colorPrimary,switchDisabledOpacity:g.opacityLoading,switchLoadingIconSize:g.calc(g.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:"rgba(0, 0, 0, ".concat(g.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[ee(a),q(a),k(a),J(a),H(a)]},ne),te=e(61657),N=e(11527),le=["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"],$=o.forwardRef(function(g,a){var _=g.prefixCls,O=g.size,P=g.disabled,R=g.loading,L=g.className,b=g.rootClassName,v=g.style,h=g.checked,D=g.value,x=g.defaultChecked,K=g.defaultValue,F=g.onChange,re=d()(g,le),ie=(0,te.Z)(!1,{value:h!=null?h:D,defaultValue:x!=null?x:K}),G=t()(ie,2),_e=G[0],de=G[1],X=o.useContext(T.E_),ce=X.getPrefixCls,se=X.direction,w=X.switch,ue=o.useContext(y.Z),he=(P!=null?P:ue)||R,B=ce("switch",_),me=(0,N.jsx)("div",{className:"".concat(B,"-handle"),children:R&&(0,N.jsx)(f(),{className:"".concat(B,"-loading-icon")})}),ve=ae(B),V=t()(ve,3),Ee=V[0],ge=V[1],fe=V[2],Me=(0,U.Z)(O),pe=E()(w==null?void 0:w.className,n()(n()(n()({},"".concat(B,"-small"),Me==="small"),"".concat(B,"-loading"),R),"".concat(B,"-rtl"),se==="rtl"),L,b,ge,fe),Ce=l()(l()({},w==null?void 0:w.style),v),Pe=function(){for(var Y=arguments.length,Q=new Array(Y),Z=0;Z<Y;Z++)Q[Z]=arguments[Z];de(Q[0]),F==null||F.apply(void 0,Q)};return Ee((0,N.jsx)(C.Z,{component:"Switch",children:(0,N.jsx)(m.Z,l()(l()({},re),{},{checked:_e,onChange:Pe,prefixCls:B,className:pe,style:Ce,disabled:he,ref:a,loadingIcon:me}))}))});$.__ANT_SWITCH=!0;var oe=$}}]);
