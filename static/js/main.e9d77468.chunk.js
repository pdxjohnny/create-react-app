(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),l=n(33),i=n.n(l),s=n(79),u=n(48),p=n(49),m=n(51),h=n(50),d=n(52),v=n(34),f=n.n(v),E=n(83),g=n.n(E),b=n(84),w=n.n(b),y=n(85),k=n.n(y),j=n(86),C=n.n(j),O=n(87),S=n.n(O),x=n(24),K=n.n(x),T=n(89),A=n.n(T),P=n(38),W=n.n(P),B=n(91),I=n.n(B),J=n(90),M=n.n(J),N=n(92),R=n.n(N),L=n(20),U=n(237),q=n(239),H=n(238),Q=n(36),$=n.n(Q),z=n(37),D=n.n(z),F=n(81),G=n.n(F),V=Object(L.createMuiTheme)({palette:{primary:{light:$.a[300],main:$.a[500],dark:$.a[700]},secondary:{light:D.a[300],main:D.a[500],dark:D.a[700]}}});var X=function(e){return function(t){return r.a.createElement(L.MuiThemeProvider,{theme:V},r.a.createElement(G.a,null),r.a.createElement(e,t))}},Y=n(82),Z=n.n(Y),_=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,publicKey:""},n.handleClose=function(){n.setState({open:!1})},n.handleClick=function(){n.genKey()},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"genKey",value:function(){var e=Object(s.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.publicKey.length){e.next=3;break}return this.setState({open:!0}),e.abrupt("return");case 3:return t={userIds:[{name:"Jon Smith",email:"jon@example.com"}],numBits:2048,passphrase:"super long and hard to guess secret"},e.next=6,Z.a.generateKey(t);case 6:n=e.sent,this.setState({open:!0,publicKey:n.publicKeyArmored});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.open,a=t.publicKey;return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{open:n,onClose:this.handleClose},r.a.createElement(w.a,null,"Super Secret Password"),r.a.createElement(k.a,null,r.a.createElement(C.a,null,a)),r.a.createElement(S.a,null,r.a.createElement(f.a,{color:"primary",onClick:this.handleClose},"OK"))),r.a.createElement(K.a,{variant:"h4",gutterBottom:!0},"Material-UI"),r.a.createElement(K.a,{variant:"subtitle1",gutterBottom:!0},"example project"),r.a.createElement(f.a,{variant:"contained",color:"secondary",onClick:this.handleClick},"Super Secret Password"))}}]),t}(r.a.Component),ee=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"About"))},te=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement("h3",null,t.params.topicId))},ne=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement("h2",null,"Topics"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(U.a,{to:"".concat(t.url,"/rendering")},"Rendering with React")),r.a.createElement("li",null,r.a.createElement(U.a,{to:"".concat(t.url,"/components")},"Components")),r.a.createElement("li",null,r.a.createElement(U.a,{to:"".concat(t.url,"/props-v-state")},"Props v. State"))),r.a.createElement(q.a,{path:"".concat(t.path,"/:topicId"),component:te}),r.a.createElement(q.a,{exact:!0,path:t.path,render:function(){return r.a.createElement("h3",null,"Please select a topic.")}}))},ae=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e,t){n.setState({value:t})},n.state={value:"recents"},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.value;return r.a.createElement(H.a,null,r.a.createElement("div",null,r.a.createElement(A.a,{value:t,onChange:this.handleChange},r.a.createElement(W.a,{label:"About",value:"favorites",icon:r.a.createElement(M.a,null),component:U.a,to:"/about"}),r.a.createElement(W.a,{label:"Home",value:"recents",icon:r.a.createElement(I.a,null),component:U.a,to:"/"}),r.a.createElement(W.a,{label:"Topics",value:"nearby",icon:r.a.createElement(R.a,null),component:U.a,to:"/topics"})),r.a.createElement(q.a,{exact:!0,path:"".concat("/create-react-app","/"),render:function(t){return r.a.createElement(_,Object.assign({},t,{classes:e}))}}),r.a.createElement(q.a,{path:"".concat("/create-react-app","/about"),component:ee}),r.a.createElement(q.a,{path:"".concat("/create-react-app","/topics"),component:ne})))}}]),t}(r.a.Component),re=X(Object(L.withStyles)(function(e){return{root:{textAlign:"center",paddingTop:20*e.spacing.unit}}})(ae)),ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(re,null),document.querySelector("#root")),function(){if("serviceWorker"in navigator){if(new URL("/create-react-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/create-react-app","/service-worker.js");ce?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):oe(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):oe(e)})}}()},93:function(e,t,n){e.exports=n(235)}},[[93,2,1]]]);
//# sourceMappingURL=main.e9d77468.chunk.js.map