(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],[,,,,function(e,t,n){e.exports={optionsWrap:"Options_optionsWrap__2GMap",select:"Options_select__2gdDD",label:"Options_label__3FhOh",input:"Options_input__1vXfU"}},,,,,function(e,t,n){e.exports={link:"ZipDownload_link__1RjXH",linkWrap:"ZipDownload_linkWrap__YafmD",dlWrap:"ZipDownload_dlWrap__3MGyZ"}},function(e,t,n){e.exports={button:"SubmitFiles_button__35Asu",outline:"SubmitFiles_outline__176xs",buttonContainer:"SubmitFiles_buttonContainer__1XsmP"}},function(e,t,n){e.exports={loadWrap:"Loader_loadWrap__1x67o",border:"Loader_border__gqq8k",icon:"Loader_icon__3dCIC",spin:"Loader_spin__1X-nh"}},,function(e,t,n){e.exports={list:"FileList_list__3IaGs",listWrap:"FileList_listWrap__3laGr"}},,function(e,t,n){e.exports={info:"FileInfo_info__2lSWD",infoWrap:"FileInfo_infoWrap__2fsCB"}},function(e,t,n){e.exports={label:"FileInput_label__3etJ-",icon:"FileInput_icon__12Som"}},,function(e,t,n){e.exports={message:"ErrorMessage_message__qjfBA",errorWrap:"ErrorMessage_errorWrap__1snZB"}},,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(2),i=n.n(s),a=n(19),r=n.n(a),c=n(5),l=n(20),o=n.n(l),u=n(13),p=n.n(u),j=n(21),b=n(1);function d(e){var t=e.files,n=e.setFiles,s=e.setTotalSize,i=function(e){return e.reduce((function(e,t){return e+t.size}),0)},a=function(e){return function(){var a=t.filter((function(t){return t.name!==e}));n(a),s({pre:i(a),post:0})}};return Object(b.jsx)("section",{className:p.a.listWrap,children:Object(b.jsx)("ul",{className:p.a.list,children:t.map((function(e){var t=e.name;return Object(b.jsxs)("li",{children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("span",{onClick:a(t),children:Object(b.jsx)(j.a,{})})]},o()())}))})})}var f=n(14),O=n.n(f),h=n(15),x=n.n(h);function m(e){var t=e.fileSize,n=t.pre,s=t.post,i=parseFloat((n-s)/n*100).toFixed(2),a=Object(b.jsx)("p",{children:n&&s?"The files are ".concat(i,"% smaller!"):""}),r=Object(b.jsx)("p",{children:s?"processed total: "+O()(s):""}),c=Object(b.jsx)("p",{children:n?"preprocessed total: "+O()(n):""});return Object(b.jsx)("section",{className:x.a.infoWrap,children:Object(b.jsxs)("div",{className:x.a.info,style:{display:n?"block":"none"},children:[a,r,c]})})}var _=n(9),g=n.n(_);function v(e){var t=e.file;return Object(b.jsx)("section",{className:g.a.dlWrap,style:{display:t.length?"grid":"none"},children:t.map((function(e){return Object(b.jsx)("div",{className:g.a.linkWrap,children:Object(b.jsx)("a",{href:e,className:g.a.link,children:e?"Download Files":""})},Date.now())}))})}var y=n(23),F=n(16),N=n.n(F),W=n(8);function w(e){var t=e.setTotalSize,n=e.setErrorMsg,s=e.setFiles,i=e.clearDownload,a=function(e){return function(e){return Object(y.a)(e)}(e).slice(0,50)},r=function(e){return a(e).reduce((function(e,t){return e+t.size}),0)};return Object(b.jsxs)("label",{htmlFor:"file-input",onDragOver:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault();var c=e.dataTransfer.files;s((function(e){return e.concat(a(c))})),t((function(e){return{pre:e.pre+r(c),post:0}})),n(""),i()},className:N.a.label,children:[Object(b.jsx)(W.a,{className:N.a.icon}),Object(b.jsx)("h2",{children:"Drag your .jpg, .png, .gif, .webp files here"}),Object(b.jsx)("input",{id:"file-input",onChange:function(e){var c=e.target.files;s(a(c)),t({pre:r(c),post:0}),n(""),i()},type:"file",multiple:!0,accept:".png,.jpg,.jpeg,.gif,.webp"})]})}var S=n(17),D=n.n(S),k=n(3),C=n(22),z=n(10),T=n.n(z);function M(e){var t=e.files,n=e.setErrorMsg,s=e.setTotalSize,i=e.setFileDownload,a=e.processing,r=e.setProcessing,c=e.options,l=function(){var e=Object(C.a)(D.a.mark((function e(){var a,l,o,u,p;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.every((function(e){return"image"===e.type.split("/")[0]}))){e.next=5;break}return n("You can only upload images. Please remove anything besides image files."),e.abrupt("return");case 5:if(0!==t.length){e.next=8;break}return n("Try adding some images first!"),e.abrupt("return");case 8:return n(""),r(!0),(a=new FormData).append("options",JSON.stringify(c)),t.forEach((function(e){return a.append("files",e)})),e.next=15,fetch("https://young-oasis-86497.herokuapp.com/",{method:"post",mode:"cors",body:a});case 15:return l=e.sent,e.next=18,l.blob();case 18:o=e.sent,u=new File([o],"tinified.zip"),p=URL.createObjectURL(u),s((function(e){return Object(k.a)(Object(k.a)({},e),{},{post:o.size})})),i([p]),r(!1);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("section",{className:T.a.buttonContainer,children:Object(b.jsx)("div",{className:T.a.outline,children:Object(b.jsx)("button",{onClick:l,className:T.a.button,disabled:a,children:"Compress Images"})})})}var E=n(18),I=n.n(E);function L(e){var t=e.msg;return Object(b.jsx)("section",{className:I.a.errorWrap,style:{display:t?"flex":"none"},children:Object(b.jsx)("p",{className:I.a.message,children:t})})}var q=n(11),Z=n.n(q);function B(e){var t=e.loading;return Object(b.jsx)("section",{className:Z.a.loadWrap,style:{display:t?"grid":"none"},children:Object(b.jsx)("div",{className:Z.a.border,children:Object(b.jsx)(W.b,{className:Z.a.icon})})})}var G=n(4),H=n.n(G),J=["",10,20,30,40,50,60,64,90,100,120,125,200,300,360,420,440,468,600,720,768,800,900,1080,1280,1920],P=function(e){return{top:e?"-10px":"14px",left:e?"4px":"8px"}};function X(e){var t=e.options,n=e.setOptions,s=t.quality,i=t.format,a=t.height,r=t.width,c=function(){return J.map((function(e){return Object(b.jsx)("option",{children:e},e)}))};return Object(b.jsxs)("section",{className:H.a.optionsWrap,children:[Object(b.jsx)("span",{children:Object(b.jsxs)("label",{className:H.a.label,htmlFor:"fileOptions",children:[Object(b.jsxs)("select",{onChange:function(e){n((function(t){return Object(k.a)(Object(k.a)({},t),{},{format:e.target.value})}))},id:"fileOptions",name:"fileOptions",className:H.a.select,value:i,children:[Object(b.jsx)("option",{}),Object(b.jsx)("option",{children:"jpeg"}),Object(b.jsx)("option",{children:"webp"}),Object(b.jsx)("option",{children:"png"})]}),Object(b.jsx)("p",{style:P(i),children:"File Type"})]})}),Object(b.jsx)("span",{children:Object(b.jsxs)("label",{className:H.a.label,htmlFor:"inputQuantity",children:[Object(b.jsx)("select",{onChange:function(e){n((function(t){return Object(k.a)(Object(k.a)({},t),{},{quality:e.target.value})}))},id:"inputQuantity",name:"quantity",className:H.a.select,value:s,children:function(){for(var e=[Object(b.jsx)("option",{},"null")],t=10;t<=100;t+=10)e.push(Object(b.jsx)("option",{children:t},t));return e}()}),Object(b.jsx)("p",{style:P(s),children:"Quality"})]})}),Object(b.jsx)("span",{children:Object(b.jsxs)("label",{className:H.a.label,htmlFor:"selectedHeight",children:[Object(b.jsx)("select",{onChange:function(e){n((function(t){return Object(k.a)(Object(k.a)({},t),{},{height:e.target.value||""})}))},value:a,className:H.a.input,id:"selectedHeight",name:"height",min:"25",max:"2000",children:c()}),Object(b.jsx)("p",{style:P(a),children:"Height"})]})}),Object(b.jsx)("span",{children:Object(b.jsxs)("label",{className:H.a.label,htmlFor:"selectedWidth",children:[Object(b.jsx)("select",{onChange:function(e){n((function(t){return Object(k.a)(Object(k.a)({},t),{},{width:e.target.value||""})}))},value:r,className:H.a.input,id:"selectedWidth",name:"width",min:"25",max:"2000",filled:r,children:c()}),Object(b.jsx)("p",{style:P(r),children:"Width"})]})})]})}var Q=function(){var e=Object(s.useState)([]),t=Object(c.a)(e,2),n=t[0],i=t[1],a=Object(s.useState)([]),r=Object(c.a)(a,2),l=r[0],o=r[1],u=Object(s.useState)({pre:0,post:0}),p=Object(c.a)(u,2),j=p[0],f=p[1],O=Object(s.useState)(""),h=Object(c.a)(O,2),x=h[0],_=h[1],g=Object(s.useState)(!1),y=Object(c.a)(g,2),F=y[0],N=y[1],W=Object(s.useState)({height:"",width:"",format:"",quality:""}),S=Object(c.a)(W,2),D=S[0],k=S[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w,{setTotalSize:f,setErrorMsg:_,setFiles:i,clearDownload:function(){return o([])}}),Object(b.jsx)(X,{options:D,setOptions:k}),Object(b.jsx)(M,{files:n,setErrorMsg:_,setTotalSize:f,setFileDownload:o,processing:F,setProcessing:N,options:D}),Object(b.jsx)(v,{file:l}),Object(b.jsx)(m,{fileSize:j}),Object(b.jsx)(L,{msg:x}),Object(b.jsx)(d,{files:n,setFiles:i,setTotalSize:f}),Object(b.jsx)(B,{loading:F})]})};n(31);r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(Q,{})}),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.54797067.chunk.js.map