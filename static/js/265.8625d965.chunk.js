"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[265,942,77,959],{3468:function(n,t,e){e.d(t,{Z:function(){return a}});var r,c=e(168),i=e(6031).ZP.h1(r||(r=(0,c.Z)(["\n  padding: 8px;\n  margin-top: 10px;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 40px;\n  font-weight: 500;\n  text-align: center;\n  background-image: repeating-linear-gradient(\n    -45deg,\n    #606dbc,\n    #606dbc 15px,\n    #465298 15px,\n    #465298 30px\n  );\n"]))),o=e(184);function a(n){var t=n.children;return(0,o.jsx)(i,{children:t})}},2755:function(n,t,e){e.d(t,{D:function(){return c},V:function(){return r}});var r="https://image.tmdb.org/t/p/original",c="https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar-300x300.png"},3714:function(n,t,e){e.d(t,{Tg:function(){return f},Y5:function(){return d},bI:function(){return p},sv:function(){return l},xc:function(){return x}});var r=e(5861),c=e(7757),i=e.n(c),o="https://api.themoviedb.org/3/",a="606cb073ea160aeac28dec084af576e2";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(i().mark((function n(){var t,e,r,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return u("".concat(o,"trending/movie/week?api_key=").concat(a))}function p(n){return u("".concat(o,"search/movie?api_key=").concat(a,"&query=").concat(n))}function d(n){return u("".concat(o,"movie/").concat(n,"?api_key=").concat(a))}function x(n){return u("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(a))}function l(n){return u("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(a))}},77:function(n,t,e){e.r(t),e.d(t,{default:function(){return a}});var r=e(3468),c=e(5959),i=e(2755),o=e(184);function a(n){var t=n.movie,e=n.onClick,a=t.original_title,u=t.poster_path,s=t.overview,f=t.vote_average;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{type:"button",onClick:e,children:"Go back"}),(0,o.jsx)(r.Z,{children:"".concat(a)}),(0,o.jsxs)(c.Section,{children:[(0,o.jsx)("img",{src:"".concat(i.V).concat(u),alt:a}),(0,o.jsxs)(c.InfoContainer,{children:[(0,o.jsx)("h2",{children:"Overview"}),(0,o.jsx)("p",{children:s}),(0,o.jsx)("h3",{children:"Vote"}),(0,o.jsx)("p",{children:f}),(0,o.jsx)("h3",{children:"Genres"}),(0,o.jsx)("p",{children:t.genres.map((function(n){var t=n.name;return"".concat(t," ")}))})]})]})]})}},5959:function(n,t,e){e.r(t),e.d(t,{InfoContainer:function(){return u},Section:function(){return a}});var r,c,i=e(168),o=e(6031),a=o.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 10px;\n  background-color: #fff;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n"]))),u=o.ZP.div(c||(c=(0,i.Z)(["\n  margin-left: 10px;\n"])))},3942:function(n,t,e){e.r(t),e.d(t,{default:function(){return r.default}});var r=e(77)},4265:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(885),c=e(2791),i=e(6871),o=e(3504),a=e(3714),u=e(3942),s=e(184);function f(){var n=(0,c.useState)(null),t=(0,r.Z)(n,2),e=t[0],f=t[1],p=(0,i.UO)().movieId,d=(0,i.s0)();return(0,c.useEffect)((function(){a.Y5(p).then(f)}),[p]),(0,s.jsxs)(s.Fragment,{children:[e&&(0,s.jsxs)("main",{children:[(0,s.jsx)(u.default,{onClick:function(){return d("/")},movie:e}),(0,s.jsx)("p",{children:"Additional information"}),(0,s.jsx)(o.rU,{to:"cast",children:"Cast"}),(0,s.jsx)("br",{}),(0,s.jsx)(o.rU,{to:"reviews",children:"Reviews"})]}),(0,s.jsx)(i.j3,{})]})}}}]);
//# sourceMappingURL=265.8625d965.chunk.js.map