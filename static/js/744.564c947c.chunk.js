"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[744],{3468:function(n,e,t){t.d(e,{Z:function(){return a}});var r,c=t(168),i=t(6031).ZP.h1(r||(r=(0,c.Z)(["\n  padding: 8px;\n  margin-top: 10px;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 40px;\n  font-weight: 500;\n  text-align: center;\n  background-image: repeating-linear-gradient(\n    -45deg,\n    #606dbc,\n    #606dbc 15px,\n    #465298 15px,\n    #465298 30px\n  );\n"]))),o=t(184);function a(n){var e=n.children;return(0,o.jsx)(i,{children:e})}},3714:function(n,e,t){t.d(e,{Tg:function(){return f},Y5:function(){return p},bI:function(){return d},sv:function(){return h},xc:function(){return l}});var r=t(5861),c=t(7757),i=t.n(c),o="https://api.themoviedb.org/3/",a="606cb073ea160aeac28dec084af576e2";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(i().mark((function n(){var e,t,r,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return u("".concat(o,"trending/movie/week?api_key=").concat(a))}function d(n){return u("".concat(o,"search/movie?api_key=").concat(a,"&query=").concat(n))}function p(n){return u("".concat(o,"movie/").concat(n,"?api_key=").concat(a))}function l(n){return u("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(a))}function h(n){return u("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(a))}},6744:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});var r=t(885),c=t(2791),i=t(3504),o=t(3714),a=t(3468),u=t(184);function s(){var n=(0,c.useState)(null),e=(0,r.Z)(n,2),t=e[0],s=e[1];return(0,c.useEffect)((function(){o.Tg().then((function(n){var e=n.results;return s(e)}))}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Z,{children:"Trending today "}),t&&(0,u.jsx)("ul",{children:t.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsxs)(i.rU,{to:"movies/".concat(n.id),children:[" ",n.original_title]})},n.id)}))})]})}}}]);
//# sourceMappingURL=744.564c947c.chunk.js.map