"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[133],{3714:function(n,e,t){t.d(e,{Tg:function(){return f},Y5:function(){return p},bI:function(){return h},sv:function(){return l},xc:function(){return v}});var r=t(5861),c=t(7757),o=t.n(c),a="https://api.themoviedb.org/3/",u="606cb073ea160aeac28dec084af576e2";function i(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(o().mark((function n(){var e,t,r,c=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return i("".concat(a,"trending/movie/week?api_key=").concat(u))}function h(n){return i("".concat(a,"search/movie?api_key=").concat(u,"&query=").concat(n))}function p(n){return i("".concat(a,"movie/").concat(n,"?api_key=").concat(u))}function v(n){return i("".concat(a,"movie/").concat(n,"/credits?api_key=").concat(u))}function l(n){return i("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(u))}},3133:function(n,e,t){t.r(e),t.d(e,{default:function(){return i}});var r=t(885),c=t(2791),o=t(3714),a=t(6871),u=t(184);function i(){var n=(0,a.UO)().movieId,e=(0,c.useState)(null),t=(0,r.Z)(e,2),i=t[0],s=t[1];return(0,c.useEffect)((function(){o.sv(n).then((function(n){var e=n.results;return s(e)}))}),[n]),(0,u.jsx)(u.Fragment,{children:i&&i.length>0?(0,u.jsx)("ul",{children:i.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,u.jsxs)("li",{children:[(0,u.jsx)("h3",{children:t}),(0,u.jsx)("p",{children:r})]},e)}))}):(0,u.jsx)("p",{children:"We don't have any reviews for this movie"})})}}}]);
//# sourceMappingURL=133.f5c8d14b.chunk.js.map