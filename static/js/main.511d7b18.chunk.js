(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],[,,,,,,function(e,t,n){e.exports={link:"ZipDownload_link__1RjXH",linkWrap:"ZipDownload_linkWrap__YafmD",dlWrap:"ZipDownload_dlWrap__3MGyZ"}},function(e,t,n){e.exports={button:"SubmitFiles_button__35Asu",outline:"SubmitFiles_outline__176xs",buttonContainer:"SubmitFiles_buttonContainer__1XsmP"}},function(e,t,n){e.exports={loadWrap:"Loader_loadWrap__1x67o",border:"Loader_border__gqq8k",icon:"Loader_icon__3dCIC",spin:"Loader_spin__1X-nh"}},,function(e,t,n){e.exports={list:"FileList_list__3IaGs",listWrap:"FileList_listWrap__3laGr"}},,function(e,t,n){e.exports={info:"FileInfo_info__2lSWD",infoWrap:"FileInfo_infoWrap__2fsCB"}},function(e,t,n){e.exports={label:"FileInput_label__3etJ-",icon:"FileInput_icon__12Som"}},,function(e,t,n){e.exports={message:"ErrorMessage_message__qjfBA",errorWrap:"ErrorMessage_errorWrap__1snZB"}},,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=n(17),i=n.n(a),o=n(2),c=n(18),l=n.n(c),u=n(10),p=n.n(u),j=n(0);function b(e){var t=e.files;return Object(j.jsx)("section",{className:p.a.listWrap,children:Object(j.jsx)("ul",{className:p.a.list,children:t.map((function(e){var t=e.name;return Object(j.jsx)("li",{children:t},l()())}))})})}var d=n(11),f=n.n(d),_=n(12),m=n.n(_);function O(e){var t=e.fileSize,n=t.pre,r=t.post,s=parseFloat((n-r)/n*100).toFixed(2),a=Object(j.jsx)("p",{children:n&&r?"The files are ".concat(s,"% smaller!"):""}),i=Object(j.jsx)("p",{children:r?"processed total: "+f()(r):""}),o=Object(j.jsx)("p",{children:n?"preprocessed total: "+f()(n):""});return Object(j.jsx)("section",{className:m.a.infoWrap,children:Object(j.jsxs)("div",{className:m.a.info,style:{display:n?"block":"none"},children:[a,i,o]})})}var x=n(6),g=n.n(x);function h(e){var t=e.file;return Object(j.jsx)("section",{className:g.a.dlWrap,style:{display:t.length?"grid":"none"},children:t.map((function(e){return Object(j.jsx)("div",{className:g.a.linkWrap,children:Object(j.jsx)("a",{href:e,className:g.a.link,children:e?"Download Files":""})},Date.now())}))})}var v=n(20),y=n(13),F=n.n(y),S=n(5);function W(e){var t=e.setTotalSize,n=e.setErrorMsg,r=e.setFiles,s=e.clearDownload,a=function(e){return function(e){return Object(v.a)(e)}(e).slice(0,50)},i=function(e){return a(e).reduce((function(e,t){return e+t.size}),0)};return Object(j.jsxs)("label",{htmlFor:"file-input",onDragOver:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault();var o=e.dataTransfer.files;t({pre:i(o),post:0}),r(a(o)),n(""),s()},className:F.a.label,children:[Object(j.jsx)(S.a,{className:F.a.icon}),Object(j.jsx)("h2",{children:"Drag your .jpg, .png, .gif, .webp files here"}),Object(j.jsx)("input",{id:"file-input",onChange:function(e){var o=e.target.files;r(a(o)),t({pre:i(o),post:0}),n(""),s()},type:"file",multiple:!0,accept:".png,.jpg,.jpeg,.gif,.webp"})]})}var D=n(14),N=n.n(D),k=n(16),w=n(19),z=n(7),C=n.n(z);function E(e){var t=e.files,n=e.setErrorMsg,r=e.totalSize,s=e.setTotalSize,a=e.setFileDownload,i=e.processing,o=e.setProcessing,c=function(){var e=Object(w.a)(N.a.mark((function e(){var i,c,l,u;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.every((function(e){return"image"===e.type.split("/")[0]}))){e.next=5;break}return n("You can only upload images. Please remove anything besides image files."),e.abrupt("return");case 5:if(0!==t.length){e.next=8;break}return n("Try adding some images first!"),e.abrupt("return");case 8:return o(!0),i=new FormData,t.forEach((function(e){return i.append("files",e)})),e.next=13,fetch("https://young-oasis-86497.herokuapp.com/",{method:"post",mode:"cors",body:i});case 13:return c=e.sent,e.next=16,c.blob();case 16:l=e.sent,u=URL.createObjectURL(l),s(Object(k.a)(Object(k.a)({},r),{},{post:l.size})),a([u]),o(!1);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("section",{className:C.a.buttonContainer,children:Object(j.jsx)("div",{className:C.a.outline,children:Object(j.jsx)("button",{onClick:c,className:C.a.button,disabled:i,children:"Compress Images"})})})}var I=n(15),L=n.n(I);function M(e){var t=e.msg;return Object(j.jsx)("section",{className:L.a.errorWrap,style:{display:t?"block":"none"},children:Object(j.jsx)("p",{className:L.a.message,children:t})})}var T=n(8),Z=n.n(T);function B(e){var t=e.loading;return Object(j.jsx)("section",{className:Z.a.loadWrap,style:{display:t?"grid":"none"},children:Object(j.jsx)("div",{className:Z.a.border,children:Object(j.jsx)(S.b,{className:Z.a.icon})})})}var P=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)([]),i=Object(o.a)(a,2),c=i[0],l=i[1],u=Object(r.useState)({pre:0,post:0}),p=Object(o.a)(u,2),d=p[0],f=p[1],_=Object(r.useState)(""),m=Object(o.a)(_,2),x=m[0],g=m[1],v=Object(r.useState)(!1),y=Object(o.a)(v,2),F=y[0],S=y[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(W,{setTotalSize:f,setErrorMsg:g,setFiles:s,clearDownload:function(){return l([])}}),Object(j.jsx)(E,{files:n,setErrorMsg:g,totalSize:d,setTotalSize:f,setFileDownload:l,processing:F,setProcessing:S}),Object(j.jsx)(M,{msg:x}),Object(j.jsx)(h,{file:c}),Object(j.jsx)(O,{fileSize:d}),Object(j.jsx)(b,{files:n}),Object(j.jsx)(B,{loading:F})]})};n(28);i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.511d7b18.chunk.js.map