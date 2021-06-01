(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{166:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(31),o=a.n(c),u=a(6),i=a.n(u),l=a(12),s=a(18),m=a(19),p=a(8),d=a(34),f=a(5),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(s.a)(t,2),r=a[0],c=a[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},u=function(e){var t=e.target;c(Object(f.a)(Object(f.a)({},r),{},Object(d.a)({},t.name,t.value)))};return[r,u,o]},h=a(7),E="[Auth] Login",v="[Auth] Logout",g="[UI] Set Error",j="[UI] Remove Error",O="[UI] Start Loading",y="[UI] Finish Loading",_="[NOTES] Set active notes",w="[NOTES] Load notes",N="[NOTES] Update notes",x="[NOTES] Logout",k="[NOTES] Delete notes",C=a(27);a(168),a(74);C.a.initializeApp({apiKey:"AIzaSyClWP14w7MrTQD42aHUTIY25vaRNoMpVN8",authDomain:"redux-d9447.firebaseapp.com",projectId:"redux-d9447",storageBucket:"redux-d9447.appspot.com",messagingSenderId:"676828266080",appId:"1:676828266080:web:0e40c7e583767ea7410d05",measurementId:"G-EPLJPNDHYC"});var L=C.a.firestore(),S=new C.a.auth.GoogleAuthProvider,I=function(e){return{type:g,payLoad:e}},D=function(){return{type:O}},A=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/sarabermudez4/image/upload",(a=new FormData).append("upload_preset","react-app-notes"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/sarabermudez4/image/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=16;break}return e.next=11,n.json();case 11:return r=e.sent,console.log(r),e.abrupt("return",r.secure_url);case 16:return e.next=18,n.json;case 18:throw e.sent;case 19:e.next=24;break;case 21:throw e.prev=21,e.t0=e.catch(4),e.t0;case 24:case"end":return e.stop()}}),e,null,[[4,21]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.collection("".concat(t,"/jurnal/notes")).get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(f.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=a(20),U=a.n(T),z=function(e,t){return{type:_,payLoad:Object(f.a)({uid:e},t)}},R=function(e){return{type:w,payLoad:e}},W=function(e){return function(){var t=Object(l.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:n=t.sent,a(R(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},F=function(e){return function(){var t=Object(l.a)(i.a.mark((function t(a,n){var r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,e.url||delete e.url,delete(c=Object(f.a)({},e)).uid,t.next=6,L.doc("".concat(r,"/jurnal/notes/").concat(e.uid)).update(c);case 6:a(W(r)),U.a.fire({title:"Exito",text:"Nota ".concat(e.title," actualizada correctamente")});case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},G=function(e){return{type:k,payLoad:e}},q=function(e,t){return function(a){return C.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(D),a(B(t.uid,t.displayName))})).catch((function(e){console.log(e),a({type:y})}))}},B=function(e,t){return{type:E,payLoad:{uid:e,displayName:t}}},H=function(){return function(e){C.a.auth().signOut(),e(J()),e({type:x})}},J=function(){return{type:v}},M=function(){var e=Object(h.b)(),t=b({email:"",password:""}),a=Object(s.a)(t,2),n=a[0],c=a[1],o=n.email,u=n.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Login"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(q(o,u))}},r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:o,onChange:c}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",password:u,onChange:c}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Login"),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",null,"Login with social networks"),r.a.createElement("div",{className:"google-btn"},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text",onClick:function(){e((function(e){C.a.auth().signInWithPopup(S).then(function(){var t=Object(l.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.user,t.next=3,e(B(n.uid,n.displayName));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}))}},r.a.createElement("b",null,"Sign in with google")))),r.a.createElement(m.b,{to:"/auth/register",className:"link"},"Create new account")))},V=a(61),X=a.n(V),Y=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.ui})).msjError,a=b({name:"",email:"",password:"",password2:""}),n=Object(s.a)(a,3),c=n[0],o=n[1],u=n[2],p=c.name,d=c.email,f=c.password,E=c.password2,v=function(){return 0===p.trim().length?(e(I("Nombre requerido")),!1):X.a.isEmail(d)?f!==E||f<5?(e(I("La contrase\xf1a es incorecta")),!1):(e({type:j}),!0):(e(I("Email requerido")),!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Register"),r.a.createElement("form",{onSubmit:function(a){var n;a.preventDefault(),n=t,U.a.fire({icon:"error",title:"Oops...",text:n}),v()&&(u(),e(function(e,t,a){return function(n){C.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(l.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:a});case 3:n(B(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){alert("Hay un error mi so"+e)}))}}(d,f,p)))}},r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:p,onChange:o}),r.a.createElement("input",{type:"email",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:d,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:f,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:E,onChange:o}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block mb-5"},"Register"),r.a.createElement(m.b,{to:"/auth/login",className:"link"},"Already registered?")))},K=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/auth/login",component:M}),r.a.createElement(p.b,{exact:!0,path:"/auth/register",component:Y}),r.a.createElement(p.a,{to:"/auth/login"}))))},Q=a(62),Z=a.n(Q),$=function(e){var t=e.id,a=e.date,n=e.title,c=e.body,o=e.url,u=Z()(a),i=Object(h.b)();return r.a.createElement("div",{className:"journal__entry pointer",onClick:function(){i(z(t,{date:a,title:n,body:c,url:o}))}},r.a.createElement("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(o,")")}}),r.a.createElement("div",{className:"journal__entry-body"},r.a.createElement("p",{className:"journal__entry-title"},n),r.a.createElement("p",{className:"journal__entry-content"},c)),r.a.createElement("div",{className:"journal__entry-date-box"},r.a.createElement("span",null,u.format("dddd")),r.a.createElement("h4",null,u.format("Do"))))},ee=function(){var e=Object(h.c)((function(e){return e.notes})).notes;return r.a.createElement("div",{className:"journal__entries"},e.map((function(e){return r.a.createElement($,Object.assign({key:e.id},e))})))},te=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.auth})).name;return r.a.createElement("aside",{className:"journal__sidebar"},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("i",{className:"far fa-moon"}),r.a.createElement("span",null,t)),r.a.createElement("button",{className:"btn",onClick:function(){e(H())}},"Logout")),r.a.createElement("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(l.a)(i.a.mark((function e(t,a){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=4,L.collection("".concat(n,"/jurnal/notes")).add(r);case 4:c=e.sent,t(z(n,r)),t(W(n)),console.log(c);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"far fa-calendar-plus fa-5x"}),r.a.createElement("p",{className:"mt-5"},"New entry")),r.a.createElement(ee,null))},ae=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.notes})).active,a=(new Date,new Date(Date.now()));return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("span",null,a.toDateString()),r.a.createElement("div",null,r.a.createElement("input",{type:"file",id:"fileId",name:"file",style:{display:"none"},onChange:function(a){var n=a.target.files[0];console.log(n),e(function(e,t){return function(){var a=Object(l.a)(i.a.mark((function a(n){var r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return U.a.fire({title:"Uploading...",text:"Por favor espere, se est\xe1 cargando la imagen ".concat(t.name),allowOutsideClick:!1,onBeforeOpen:function(){U.a.showLoading()}}),a.next=3,A(t);case 3:r=a.sent,e.url=r,n(F(e)),U.a.close();case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t,n))}}),r.a.createElement("button",{className:"btn",onClick:function(){document.querySelector("#fileId").click(),console.log("Click")}},"Picture"),r.a.createElement("button",{className:"btn",onClick:function(){e(F(t))}},"Save"),r.a.createElement("button",{className:"btn",onClick:function(){var a;e((a=t.uid,function(){var e=Object(l.a)(i.a.mark((function e(t,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().auth.uid,e.next=3,L.doc("".concat(r,"/jurnal/notes/").concat(a)).delete();case 3:t(G(a)),t(W(r)),U.a.fire({title:"Exito",text:"Nota eliminada correctamente"});case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))}},"Delete")))},ne=function(){var e=Object(h.c)((function(e){return e.notes})).active,t=b(e),a=Object(s.a)(t,3),c=a[0],o=a[1],u=a[2],i=c.title,l=void 0===i?"":i,m=c.body,p=void 0===m?"":m,d=c.uid,E=void 0===d?"":d,v=Object(n.useRef)(e.uid),g=Object(h.b)();return Object(n.useEffect)((function(){e.uid!==v.current&&u(),v.current=e.uid}),[e,u]),Object(n.useEffect)((function(){g(z(E,Object(f.a)({},c)))}),[g,c]),r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(ae,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",value:l,name:"title",onChange:o}),r.a.createElement("textarea",{placeholder:"What happened today",className:"notes__textarea",value:p,name:"body",onChange:o}),r.a.createElement("div",{className:"notes__image"},e.url?r.a.createElement("img",{src:e.url,alt:"imagen"}):r.a.createElement("div",null))))},re=function(){return r.a.createElement("div",{className:"nothing__main-content"},r.a.createElement("p",null,"Select something",r.a.createElement("br",null),"pr create an entry!"),r.a.createElement("i",{className:"far fa-star fa-4x mt-5"}))},ce=function(){var e=Object(h.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"journal__main-content"},r.a.createElement(te,null),r.a.createElement("main",null,e?r.a.createElement(ne,null):r.a.createElement(re,null)))},oe=a(35),ue=function(e){var t=e.isAuthenticated,a=e.component,n=Object(oe.a)(e,["isAuthenticated","component"]);return r.a.createElement(p.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(p.a,{to:"/"}):r.a.createElement(a,e)}}))},ie=function(e){var t=e.isAuthenticated,a=e.component,n=Object(oe.a)(e,["isAuthenticated","component"]);return r.a.createElement(p.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(p.a,{to:"/auth/login"})}}))},le=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),u=Object(s.a)(o,2),d=u[0],f=u[1],b=Object(h.b)();return Object(n.useEffect)((function(){C.a.auth().onAuthStateChanged(function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(null===t||void 0===t?void 0:t.uid)?(b(B(t.uid,t.displayName)),f(!0),b(W(t.uid))):(console.log("Usuario no registrado"),f(!1)),c(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[b,c]),a?r.a.createElement("h1",null,"Cargando info"):r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(p.d,null,r.a.createElement(ue,{path:"/auth",component:K,isAuthenticated:d}),r.a.createElement(ie,{exact:!0,path:"/",component:ce,isAuthenticated:d}),r.a.createElement(p.a,{to:"/auth/login"}))))},se=a(28),me=a(63),pe={loading:!1,msjError:null},de=a(64),fe={notes:[],active:""},be=Object(se.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{uid:t.payLoad.uid,name:t.payLoad.displayName};case v:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(f.a)(Object(f.a)({},e),{},{msjError:t.payLoad});case j:return Object(f.a)(Object(f.a)({},e),{},{msjError:null});case O:return Object(f.a)(Object(f.a)({},e),{},{loading:!0});case y:return Object(f.a)(Object(f.a)({},e),{},{loading:!1});case v:return{};default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(f.a)(Object(f.a)({},e),{},{active:Object(f.a)({},t.payLoad)});case w:return Object(f.a)(Object(f.a)({},e),{},{notes:Object(de.a)(t.payLoad)});case N:return Object(f.a)(Object(f.a)({},e),{},{notes:e.notes.map((function(e){return e.uid===t.payLoad.uid?t.payLoad.notes:e}))});case k:return Object(f.a)(Object(f.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.uid!==t.payLoad}))});case x:return Object(f.a)(Object(f.a)({},e),{},{active:null,notes:[]});default:return e}}}),he="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.c,Ee=Object(se.d)(be,he(Object(se.a)(me.a))),ve=function(){return r.a.createElement(h.a,{store:Ee},r.a.createElement(le,null))};a(166);o.a.render(r.a.createElement(ve,null),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.2923f6be.chunk.js.map