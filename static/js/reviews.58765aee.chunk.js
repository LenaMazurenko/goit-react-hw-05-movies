(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[6],{53:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(11);var i=n(9);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},60:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var r,i,c=n(53),o=n(5),a=n(0),s=n(49),u=n(6),b=n(7),f=b.a.ul(r||(r=Object(u.a)(["\n  margin-top: 10px;\n  list-style: none;\n"]))),j=b.a.li(i||(i=Object(u.a)(["\n  font-size: 12px;\n  font-style: italic;\n"]))),h=n(2);function l(t){var e=t.movieId,n=Object(a.useState)([]),r=Object(o.a)(n,2),i=r[0],u=r[1];return Object(a.useEffect)((function(){Object(s.d)(e).then((function(t){return u(Object(c.a)(t.results))}))}),[e]),Object(h.jsx)(h.Fragment,{children:0===i.length?Object(h.jsx)("p",{children:"We don't have any reviews for this movie"}):Object(h.jsx)(f,{children:i.map((function(t){return Object(h.jsxs)(j,{children:[Object(h.jsxs)("h3",{children:["Author: ",t.author]}),Object(h.jsx)("p",{children:t.content})]},t.id)}))})})}}}]);
//# sourceMappingURL=reviews.58765aee.chunk.js.map