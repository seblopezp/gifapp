(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(7),c=n.n(i),r=n(2),s=n(9),u=n(0),d=function(e){var t=e.setCategories,n=Object(a.useState)(""),i=Object(r.a)(n,2),c=i[0],d=i[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t((function(e){return[c].concat(Object(s.a)(e))})),d(""))},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){d(e.target.value)},placeholder:"Ej: Studio Ghibli",className:"input is-rounded"})})},o=n(10),j=n(6),l=n.n(j),b=n(8),m=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a,i,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=SDeQeaPOdOnwKdDpTgEPYCzBE99meXqa"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return i=e.sent,c=i.data,r=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){e.id;var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{className:"subtitle is-6",children:t})]})},p=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(r.a)(t,2),i=n[0],c=n[1];return Object(a.useEffect)((function(){m(e).then((function(e){c({data:e,loading:!1})}))}),[e]),i}(t),i=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),c&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(u.jsx)("div",{className:"card-grid",children:i.map((function(e){return Object(u.jsx)(f,Object(o.a)({},e),e.id)}))})]})},h=function(){var e=Object(a.useState)(["Studio Ghibli"]),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"title",children:"Gif App"}),Object(u.jsx)(d,{setCategories:i}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(p,{category:e},e)}))})]})};n(17),n(18);c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.75970536.chunk.js.map