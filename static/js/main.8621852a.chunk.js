(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{213:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),l=n(47),i=n(48),s=n(50),u=n(49),m=n(51),p=n(32),h=n.n(p),d=n(80),v=n.n(d),f=n(81),E=n.n(f),g=n(82),w=n.n(g),b=n(83),k=n.n(b),y=n(84),j=n.n(y),C=n(24),O=n.n(C),S=n(86),x=n.n(S),T=n(36),A=n.n(T),P=n(88),W=n.n(P),N=n(87),R=n.n(N),B=n(89),I=n.n(B),M=n(20),J=n(215),L=n(217),U=n(216),q=n(34),F=n.n(q),K=n(35),Q=n.n(K),$=n(79),z=n.n($),D=Object(M.createMuiTheme)({palette:{primary:{light:F.a[300],main:F.a[500],dark:F.a[700]},secondary:{light:Q.a[300],main:Q.a[500],dark:Q.a[700]}}});var G=function(e){return function(t){return r.a.createElement(M.MuiThemeProvider,{theme:D},r.a.createElement(z.a,null),r.a.createElement(e,t))}},H=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},n.handleClose=function(){n.setState({open:!1})},n.handleClick=function(){n.setState({open:!0})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.open;return r.a.createElement("div",{className:e.root},r.a.createElement(v.a,{open:t,onClose:this.handleClose},r.a.createElement(E.a,null,"Super Secret Password"),r.a.createElement(w.a,null,r.a.createElement(k.a,null,"1-2-3-4-5")),r.a.createElement(j.a,null,r.a.createElement(h.a,{color:"primary",onClick:this.handleClose},"OK"))),r.a.createElement(O.a,{variant:"h4",gutterBottom:!0},"Material-UI"),r.a.createElement(O.a,{variant:"subtitle1",gutterBottom:!0},"example project"),r.a.createElement(h.a,{variant:"contained",color:"secondary",onClick:this.handleClick},"Super Secret Password"))}}]),t}(r.a.Component),V=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"About"))},X=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement("h3",null,t.params.topicId))},Y=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement("h2",null,"Topics"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(J.a,{to:"".concat(t.url,"/rendering")},"Rendering with React")),r.a.createElement("li",null,r.a.createElement(J.a,{to:"".concat(t.url,"/components")},"Components")),r.a.createElement("li",null,r.a.createElement(J.a,{to:"".concat(t.url,"/props-v-state")},"Props v. State"))),r.a.createElement(L.a,{path:"".concat(t.path,"/:topicId"),component:X}),r.a.createElement(L.a,{exact:!0,path:t.path,render:function(){return r.a.createElement("h3",null,"Please select a topic.")}}))},Z=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:"recents"},n.handleChange=function(e,t){n.setState({value:t})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.value;return r.a.createElement(U.a,null,r.a.createElement("div",null,r.a.createElement(x.a,{value:t,onChange:this.handleChange},r.a.createElement(A.a,{label:"Favorites",value:"favorites",icon:r.a.createElement(R.a,null),component:J.a,to:"/about"}),r.a.createElement(A.a,{label:"Recents",value:"recents",icon:r.a.createElement(W.a,null),component:J.a,to:"/"}),r.a.createElement(A.a,{label:"Nearby",value:"nearby",icon:r.a.createElement(I.a,null),component:J.a,to:"/topics"})),r.a.createElement(L.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(H,Object.assign({},t,{classes:e}))}}),r.a.createElement(L.a,{path:"/about",component:V}),r.a.createElement(L.a,{path:"/topics",component:Y})))}}]),t}(r.a.Component),_=G(Object(M.withStyles)(function(e){return{root:{textAlign:"center",paddingTop:20*e.spacing.unit}}})(Z)),ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(_,null),document.querySelector("#root")),function(){if("serviceWorker"in navigator){if(new URL("/create-react-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/create-react-app","/service-worker.js");ee?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):te(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):te(e)})}}()},90:function(e,t,n){e.exports=n(213)}},[[90,2,1]]]);
//# sourceMappingURL=main.8621852a.chunk.js.map