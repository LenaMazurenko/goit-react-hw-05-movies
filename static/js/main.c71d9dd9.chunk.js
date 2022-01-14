(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c,r,i=n(0),a=n.n(i),s=n(13),o=n.n(s),j=n(6),u=n(2),b=n(7),h=n(8),l=h.a.div(c||(c=Object(b.a)(["\n  max-width: 1170px;\n  margin: 10 auto;\n  padding-left: 15px;\n  padding-right: 15px;\n"]))),d=n(1);function p(e){var t=e.children;return Object(d.jsx)(l,{children:t})}var O=Object(h.a)(j.c)(r||(r=Object(b.a)(["\n  display: inline-block;\n  text-decoration: none;\n  padding: 12px;\n  font-weight: 500;\n  color: #3b332a;\n  font-size: 18px;\n\n  &.active {\n    color: red;\n  }\n"])));function x(){return Object(d.jsxs)("nav",{children:[Object(d.jsx)(O,{exact:!0,to:"/",children:"Home"}),Object(d.jsx)(O,{to:"movies/",children:"Movies"}),Object(d.jsx)("hr",{})]})}var f,v,m=n(3),g=n(5),w=n.n(g),y=n(10),k="https://api.themoviedb.org/3",I="926288ccedb892ed59969fcc82f10d15";function S(e){return E.apply(this,arguments)}function E(){return(E=Object(y.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(k,"/").concat(t,"?api_key=").concat(I,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Not found"))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(y.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S("trending/movie/day"));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(y.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S("movie/".concat(t)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(y.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(I,"&language=en-US")));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(y.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S("movie/".concat(t,"/reviews")));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){var e=Object(i.useState)(null),t=Object(m.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){(function(){return _.apply(this,arguments)})().then((function(e){c(e.results)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Trending today:"}),n&&Object(d.jsx)("ul",{children:n.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(j.b,{to:"movies/".concat(e.id),children:e.title})},e.id)}))})]})}function U(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("h1",{children:"TMovies"})})}var z=h.a.div(f||(f=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),A=h.a.img(v||(v=Object(b.a)(["\n  display: block;\n  width: 260px;\n  height: 260px;\n  object-fit: cover;\n  margin-right: 20px;\n"])));function B(e){var t=e.md;return Object(d.jsxs)(z,{children:[Object(d.jsx)(A,{src:"https://www.themoviedb.org/t/p/w780/".concat(t.backdrop_path),alt:t.original_title}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:t.original_title}),Object(d.jsxs)("p",{children:["Average: ",t.vote_average]}),Object(d.jsx)("h3",{children:"Overview"}),Object(d.jsx)("p",{children:t.overview}),Object(d.jsx)("h3",{children:"Genres"}),Object(d.jsx)("ul",{children:t.genres.map((function(e){return Object(d.jsx)("li",{children:e.name},e.id)}))})]})]})}var C=n(15);function G(e){var t=e.movieId,n=Object(i.useState)(null),c=Object(m.a)(n,2),r=c[0],a=c[1];return Object(i.useEffect)((function(){(function(e){return M.apply(this,arguments)})(t).then((function(e){return a(Object(C.a)(e.cast))}))}),[t]),console.log(r,t),Object(d.jsx)(d.Fragment,{})}function H(e){var t=e.movieId,n=Object(i.useState)(null),c=Object(m.a)(n,2),r=c[0],a=c[1];return console.log(r),Object(i.useEffect)((function(){(function(e){return J.apply(this,arguments)})(t).then((function(e){a(e)}))}),[t]),Object(d.jsx)("p",{children:r.id})}function N(){var e=Object(u.g)().movieId,t=Object(i.useState)(null),n=Object(m.a)(t,2),c=n[0],r=n[1];return Object(i.useEffect)((function(){(function(e){return F.apply(this,arguments)})(e).then((function(e){r(e)}))}),[e]),Object(d.jsxs)(p,{children:[c&&Object(d.jsx)(B,{md:c}),Object(d.jsx)("hr",{}),Object(d.jsx)("ul",{children:Object(d.jsxs)("li",{children:[Object(d.jsx)(O,{to:"/movies/".concat(e,"/cast"),children:"Cast"}),Object(d.jsx)(O,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})]})}),Object(d.jsx)("hr",{}),Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"cast",element:Object(d.jsx)(G,{movieId:e})}),Object(d.jsx)(u.a,{path:"reviews",element:Object(d.jsx)(H,{movieId:e})})]})]})}function P(){return Object(d.jsxs)(p,{children:[Object(d.jsx)(x,{}),Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"/",element:Object(d.jsx)(T,{})}),Object(d.jsx)(u.a,{path:"movies/",element:Object(d.jsx)(U,{})}),Object(d.jsx)(u.a,{path:"/movies/:movieId*",element:Object(d.jsx)(N,{})})]})]})}n(26);o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(j.a,{children:Object(d.jsx)(P,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c71d9dd9.chunk.js.map