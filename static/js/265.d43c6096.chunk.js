"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[265],{3468:function(n,e,t){t.d(e,{Z:function(){return o}});var r,c=t(168),i=t(6031).ZP.h1(r||(r=(0,c.Z)(["\n  padding: 8px;\n  margin-top: 10px;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 40px;\n  font-weight: 500;\n  text-align: center;\n  background-image: repeating-linear-gradient(\n    -45deg,\n    #606dbc,\n    #606dbc 15px,\n    #465298 15px,\n    #465298 30px\n  );\n"]))),a=t(184);function o(n){var e=n.children;return(0,a.jsx)(i,{children:e})}},2755:function(n,e,t){t.d(e,{D:function(){return c},V:function(){return r}});var r="https://image.tmdb.org/t/p/original",c="https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar-300x300.png"},3714:function(n,e,t){t.d(e,{Tg:function(){return p},Y5:function(){return x},bI:function(){return d},sv:function(){return l},xc:function(){return f}});var r=t(5861),c=t(7757),i=t.n(c),a="https://api.themoviedb.org/3/",o="606cb073ea160aeac28dec084af576e2";function s(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(i().mark((function n(){var e,t,r,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),u.apply(this,arguments)}function p(){return s("".concat(a,"trending/movie/week?api_key=").concat(o))}function d(n){return s("".concat(a,"search/movie?api_key=").concat(o,"&query=").concat(n))}function x(n){return s("".concat(a,"movie/").concat(n,"?api_key=").concat(o))}function f(n){return s("".concat(a,"movie/").concat(n,"/credits?api_key=").concat(o))}function l(n){return s("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(o))}},4265:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,c,i=t(885),a=t(168),o=t(2791),s=t(6871),u=t(3504),p=t(3714),d=t(3468),x=t(6031),f=t(2755),l=t(184),h=x.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 10px;\n  background-color: #fff;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n"]))),v=x.ZP.div(c||(c=(0,a.Z)(["\n  margin-left: 10px;\n"])));function g(){var n=(0,o.useState)(null),e=(0,i.Z)(n,2),t=e[0],r=e[1],c=(0,s.UO)().movieId,a=(0,s.s0)();(0,o.useEffect)((function(){p.Y5(c).then(r)}),[c]);return(0,l.jsxs)(l.Fragment,{children:[t&&(0,l.jsxs)("main",{children:[(0,l.jsx)("button",{type:"button",onClick:function(){a("/")},children:"Go back"}),(0,l.jsx)(d.Z,{children:"".concat(t.original_title)}),(0,l.jsxs)(h,{children:[(0,l.jsx)("img",{src:"".concat(f.V).concat(t.poster_path),alt:t.original_title}),(0,l.jsxs)(v,{children:[(0,l.jsx)("h2",{children:"Overview"}),(0,l.jsx)("p",{children:t.overview}),(0,l.jsx)("h3",{children:"Vote"}),(0,l.jsx)("p",{children:t.vote_average}),(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("p",{children:t.genres.map((function(n){var e=n.name;return"".concat(e," ")}))})]})]}),(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsx)(u.rU,{to:"cast",children:"Cast"}),(0,l.jsx)("br",{}),(0,l.jsx)(u.rU,{to:"reviews",children:"Reviews"})]}),(0,l.jsx)(s.j3,{})]})}}}]);
//# sourceMappingURL=265.d43c6096.chunk.js.map