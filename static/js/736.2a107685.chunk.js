"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{8855:function(n,e,t){t.d(e,{M1:function(){return p},V0:function(){return l},kC:function(){return u},tx:function(){return f},wr:function(){return s}});var r=t(5861),c=t(4687),a=t.n(c),o="8bbca68b0ae3741f3662f327be8188fc",i="https://api.themoviedb.org/3",s=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"/trending/movie/day?api_key=").concat(o));case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,n.abrupt("return",t.results);case 10:n.prev=10,n.t0=n.catch(0),console.log("Error fetching trending movies:",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"/movie/").concat(e,"?api_key=").concat(o));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log("Error fetching movie details:",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(o));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log("Error fetching cast details:",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(o));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log("Error fetching reviews:",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(e));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log("Error fetching search movies:",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},9736:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,c,a,o,i,s=t(9439),u=t(2791),p=t(7689),f=t(8855),l=t(966),h=t(168),v=t(8789),d=v.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n"]))),x=v.ZP.li(c||(c=(0,h.Z)(["\n    list-style: none;\n    width: 150px;\n    border-radius: 4px;\n    border: 1px #80808040 solid;\n"]))),m=v.ZP.img(a||(a=(0,h.Z)(["\n    width: 100%;\n    height: 200px;\n    border-radius: 4px 4px 0 0;\n"]))),g=v.ZP.div(o||(o=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  \n"]))),w=v.ZP.p(i||(i=(0,h.Z)(["\n  margin: 0;\n  padding: 5px;\n"]))),y=t(184),Z=function(){var n=(0,p.UO)().movieId,e=(0,u.useState)([]),t=(0,s.Z)(e,2),r=t[0],c=t[1],a=(0,u.useState)(!0),o=(0,s.Z)(a,2),i=o[0],h=o[1];return(0,u.useEffect)((function(){h(!0),(0,f.M1)(n).then((function(n){c(n.cast)})).finally((function(){h(!1)}))}),[n]),i?(0,y.jsx)(l.Z,{}):r&&0!==r.length?(0,y.jsx)(d,{children:r.map((function(n){var e=n.id,t=n.name,r=n.character,c=n.profile_path;return(0,y.jsxs)(x,{children:[(0,y.jsx)(m,{src:c?"https://image.tmdb.org/t/p/w300".concat(c):"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",alt:t,width:"100"}),(0,y.jsxs)(g,{children:[(0,y.jsx)(w,{children:t}),(0,y.jsxs)(w,{children:[(0,y.jsx)("b",{children:"Character:"})," ",r]})]})]},e)}))}):(0,y.jsx)("div",{style:{marginLeft:"40px"},children:"This movie has no actors."})}},5861:function(n,e,t){function r(n,e,t,r,c,a,o){try{var i=n[a](o),s=i.value}catch(u){return void t(u)}i.done?e(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,a){var o=n.apply(e,t);function i(n){r(o,c,a,i,s,"next",n)}function s(n){r(o,c,a,i,s,"throw",n)}i(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=736.2a107685.chunk.js.map