"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[250],{3714:function(e,n,t){t.d(n,{Tg:function(){return l},Y5:function(){return h},bI:function(){return f},sv:function(){return m},xc:function(){return d}});var r=t(5861),c=t(7757),a=t.n(c),i="https://api.themoviedb.org/3/",u="606cb073ea160aeac28dec084af576e2";function o(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function e(){var n,t,r,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(n,t);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function l(){return o("".concat(i,"trending/movie/week?api_key=").concat(u))}function f(e){return o("".concat(i,"search/movie?api_key=").concat(u,"&query=").concat(e))}function h(e){return o("".concat(i,"movie/").concat(e,"?api_key=").concat(u))}function d(e){return o("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(u))}function m(e){return o("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(u))}},3250:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(885),c=t(2791),a=t(3504),i=t(3714),u=t(5705),o=t(5650),s=t(184);function l(){var e=(0,c.useState)(null),n=(0,r.Z)(e,2),t=n[0],l=n[1],f=(0,a.lr)(),h=(0,r.Z)(f,2),d=h[0],m=h[1],p=o.Ry().shape({name:o.Z_().min(2,"Must be longer than 2 characters").required("Required")}),v=d.get("query");return(0,c.useEffect)((function(){null!==v&&i.bI(v).then((function(e){var n=e.results;return l(n)}))}),[v]),(0,s.jsxs)("div",{children:[(0,s.jsx)(u.J9,{initialValues:{name:""},onSubmit:function(e,n){var t=n.resetForm,r=Object.values(e);m({query:r}),t()},validationSchema:p,children:(0,s.jsxs)(u.l0,{children:[(0,s.jsx)(u.gN,{name:"name",type:"text",placeholder:"Enter a film title"}),(0,s.jsx)(u.Bc,{name:"name"}),(0,s.jsx)("button",{type:"submit",children:"Search"})]})}),t&&(0,s.jsx)("ul",{children:t.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsxs)(a.rU,{to:"".concat(e.id),children:[" ",e.original_title]})},e.id)}))})]})}}}]);
//# sourceMappingURL=250.3cc65add.chunk.js.map