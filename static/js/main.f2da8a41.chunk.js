(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={link:"ZipDownload_link__1RjXH",linkWrap:"ZipDownload_linkWrap__YafmD",dlWrap:"ZipDownload_dlWrap__3MGyZ"}},function(e,t,n){e.exports={button:"SubmitFiles_button__35Asu",outline:"SubmitFiles_outline__176xs",buttonContainer:"SubmitFiles_buttonContainer__1XsmP"}},function(e,t,n){e.exports={loadWrap:"Loader_loadWrap__1x67o",border:"Loader_border__gqq8k",icon:"Loader_icon__3dCIC",spin:"Loader_spin__1X-nh"}},,function(e,t,n){e.exports={list:"FileList_list__3IaGs",listWrap:"FileList_listWrap__3laGr"}},,function(e,t,n){e.exports={info:"FileInfo_info__2lSWD",infoWrap:"FileInfo_infoWrap__2fsCB"}},function(e,t,n){e.exports={label:"FileInput_label__3etJ-",icon:"FileInput_icon__12Som"}},,function(e,t,n){e.exports={message:"ErrorMessage_message__qjfBA",errorWrap:"ErrorMessage_errorWrap__1snZB"}},,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(2),s=n.n(r),a=n(18),i=n.n(a),o=n(3),c=n(19),l=n.n(c),u=n(11),p=n.n(u),j=n(20),b=n(1);function d(e){var t=e.files,n=e.setFiles,r=e.setTotalSize,s=function(e){return e.reduce((function(e,t){return e+t.size}),0)},a=function(e){return function(){var a=t.filter((function(t){return t.name!==e}));n(a),r({pre:s(a),post:0})}};return Object(b.jsx)("section",{className:p.a.listWrap,children:Object(b.jsx)("ul",{className:p.a.list,children:t.map((function(e){var t=e.name;return Object(b.jsxs)("li",{children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("span",{onClick:a(t),children:Object(b.jsx)(j.a,{})})]},l()())}))})})}var f=n(12),_=n.n(f),O=n(13),m=n.n(O);function x(e){var t=e.fileSize,n=t.pre,r=t.post,s=parseFloat((n-r)/n*100).toFixed(2),a=Object(b.jsx)("p",{children:n&&r?"The files are ".concat(s,"% smaller!"):""}),i=Object(b.jsx)("p",{children:r?"processed total: "+_()(r):""}),o=Object(b.jsx)("p",{children:n?"preprocessed total: "+_()(n):""});return Object(b.jsx)("section",{className:m.a.infoWrap,children:Object(b.jsxs)("div",{className:m.a.info,style:{display:n?"block":"none"},children:[a,i,o]})})}var h=n(7),g=n.n(h);function v(e){var t=e.file;return Object(b.jsx)("section",{className:g.a.dlWrap,style:{display:t.length?"grid":"none"},children:t.map((function(e){return Object(b.jsx)("div",{className:g.a.linkWrap,children:Object(b.jsx)("a",{href:e,className:g.a.link,children:e?"Download Files":""})},Date.now())}))})}var F=n(22),S=n(14),y=n.n(S),W=n(6);function k(e){var t=e.setTotalSize,n=e.setErrorMsg,r=e.setFiles,s=e.clearDownload,a=function(e){return function(e){return Object(F.a)(e)}(e).slice(0,50)},i=function(e){return a(e).reduce((function(e,t){return e+t.size}),0)};return Object(b.jsxs)("label",{htmlFor:"file-input",onDragOver:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault();var o=e.dataTransfer.files;t({pre:i(o),post:0}),r(a(o)),n(""),s()},className:y.a.label,children:[Object(b.jsx)(W.a,{className:y.a.icon}),Object(b.jsx)("h2",{children:"Drag your .jpg, .png, .gif, .webp files here"}),Object(b.jsx)("input",{id:"file-input",onChange:function(e){var o=e.target.files;r(a(o)),t({pre:i(o),post:0}),n(""),s()},type:"file",multiple:!0,accept:".png,.jpg,.jpeg,.gif,.webp"})]})}var D=n(15),N=n.n(D),w=n(17),z=n(21),C=n(8),T=n.n(C);function E(e){var t=e.files,n=e.setErrorMsg,r=e.totalSize,s=e.setTotalSize,a=e.setFileDownload,i=e.processing,o=e.setProcessing,c=function(){var e=Object(z.a)(N.a.mark((function e(){var i,c,l,u;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.every((function(e){return"image"===e.type.split("/")[0]}))){e.next=5;break}return n("You can only upload images. Please remove anything besides image files."),e.abrupt("return");case 5:if(0!==t.length){e.next=8;break}return n("Try adding some images first!"),e.abrupt("return");case 8:return n(""),o(!0),i=new FormData,t.forEach((function(e){return i.append("files",e)})),e.next=14,fetch("https://young-oasis-86497.herokuapp.com/",{method:"post",mode:"cors",body:i});case 14:return c=e.sent,e.next=17,c.blob();case 17:l=e.sent,u=URL.createObjectURL(l),s(Object(w.a)(Object(w.a)({},r),{},{post:l.size})),a([u]),o(!1);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("section",{className:T.a.buttonContainer,children:Object(b.jsx)("div",{className:T.a.outline,children:Object(b.jsx)("button",{onClick:c,className:T.a.button,disabled:i,children:"Compress Images"})})})}var I=n(16),L=n.n(I);function M(e){var t=e.msg;return Object(b.jsx)("section",{className:L.a.errorWrap,style:{display:t?"block":"none"},children:Object(b.jsx)("p",{className:L.a.message,children:t})})}var Z=n(9),B=n.n(Z);function P(e){var t=e.loading;return Object(b.jsx)("section",{className:B.a.loadWrap,style:{display:t?"grid":"none"},children:Object(b.jsx)("div",{className:B.a.border,children:Object(b.jsx)(W.b,{className:B.a.icon})})})}var q=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)([]),i=Object(o.a)(a,2),c=i[0],l=i[1],u=Object(r.useState)({pre:0,post:0}),p=Object(o.a)(u,2),j=p[0],f=p[1],_=Object(r.useState)(""),O=Object(o.a)(_,2),m=O[0],h=O[1],g=Object(r.useState)(!1),F=Object(o.a)(g,2),S=F[0],y=F[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(k,{setTotalSize:f,setErrorMsg:h,setFiles:s,clearDownload:function(){return l([])}}),Object(b.jsx)(E,{files:n,setErrorMsg:h,totalSize:j,setTotalSize:f,setFileDownload:l,processing:S,setProcessing:y}),Object(b.jsx)(v,{file:c}),Object(b.jsx)(M,{msg:m}),Object(b.jsx)(x,{fileSize:j}),Object(b.jsx)(d,{files:n,setFiles:s,setTotalSize:f}),Object(b.jsx)(P,{loading:S})]})};n(30);i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.f2da8a41.chunk.js.map