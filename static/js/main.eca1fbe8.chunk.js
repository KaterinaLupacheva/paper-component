(this["webpackJsonp@ramonak/paper-example"]=this["webpackJsonp@ramonak/paper-example"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);n(8);var c=n(1),a=n(7),s=n.n(a),r=(n(6),n(4)),o=n.n(r),l=n(2),i=n(3),j=n(0),u=function(){var e={elevation:"",outlined:!1,square:!1},t=Object(c.useState)(e),n=Object(i.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(!1),u=Object(i.a)(r,2),b=u[0],d=u[1],O=Object(c.useState)(""),p=Object(i.a)(O,2),h=p[0],x=p[1],m=Object(c.useState)("Copy"),v=Object(i.a)(m,2),f=v[0],C=v[1],g=Object(c.useRef)(null);return Object(j.jsxs)("div",{className:"playground-container",children:[Object(j.jsx)("div",{className:"paper-playground-wrapper",children:Object(j.jsx)(o.a,Object(l.a)({customClass:"paper-class"},a))}),Object(j.jsxs)("div",{className:"parameters-wrapper",children:[Object(j.jsx)("label",{htmlFor:"elevation",children:"Elevation"}),Object(j.jsx)("input",{name:"elevation",id:"elevation",type:"text",placeholder:"1-24 or empty",onChange:function(e){return s(Object(l.a)(Object(l.a)({},a),{},{elevation:Number(e.target.value)}))}}),Object(j.jsx)("label",{htmlFor:"outlined",children:"Outlined"}),Object(j.jsxs)("select",{name:"outlined",id:"outlined",onChange:function(){return s(Object(l.a)(Object(l.a)({},a),{},{outlined:!a.outlined}))},children:[Object(j.jsx)("option",{value:!1,children:"False"}),Object(j.jsx)("option",{value:!0,children:"True"})]}),Object(j.jsx)("label",{htmlFor:"square",children:"Square"}),Object(j.jsxs)("select",{name:"square",id:"square",onChange:function(){return s(Object(l.a)(Object(l.a)({},a),{},{square:!a.square}))},children:[Object(j.jsx)("option",{value:!1,children:"False"}),Object(j.jsx)("option",{value:!0,children:"True"})]}),Object(j.jsx)("button",{className:"myButton reset-button",onClick:function(){s(e),d(!1)},children:"RESET"}),Object(j.jsx)("button",{className:"myButton code-button",onClick:function(){C("Copy"),d(!0);var e="<Paper ".concat(a.elevation&&"elevation={".concat(a.elevation,"}")," ").concat(a.outlined?"outlined":""," ").concat(a.square?"square":""," />").replace(/^\s*$(?:\r\n?|\n)/gm,"").replace(/  +/g," ");x(e)},children:"Generate Component Code"}),Object(j.jsx)("div",{children:b&&Object(j.jsxs)("div",{className:"code-area",children:[Object(j.jsx)("button",{onClick:function(e){g.current.select(),document.execCommand("copy"),e.target.focus(),C("Copied!")},children:f}),Object(j.jsx)("textarea",{ref:g,value:h,onChange:function(e){return x(e.target.value)}})]})})]})]})},b=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1],s=function(){var e=window.location.pathname;return"/"===e.charAt(0)&&(e=e.substring(1)),e}();return Object(c.useEffect)((function(){fetch("https://my-projects-dashboard.vercel.app/api/views/".concat(s),{mode:"no-cors"}).then((function(e){return e.json()})).then((function(e){a(e.totalViews)})).catch((function(e){return console.error(e.message)}))}),[s]),{views:n}},d=function(){return b(),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{children:"DEMO"}),Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(o.a,{customClass:"paper-class",children:Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("b",{children:"Default:"})," ",Object(j.jsx)("br",{}),"No Elevation ",Object(j.jsx)("br",{})," No Outline ",Object(j.jsx)("br",{})," Rounded corners"," "]})}),Object(j.jsx)(o.a,{elevation:3,customClass:"paper-class",children:Object(j.jsxs)("div",{className:"text",children:["Elevation = 3 ",Object(j.jsx)("br",{})," No Outline ",Object(j.jsx)("br",{})," Rounded corners"," "]})}),Object(j.jsx)(o.a,{elevation:7,outlined:!0,customClass:"paper-class",square:!0,children:Object(j.jsxs)("div",{className:"text",children:["Elevation = 7 ",Object(j.jsx)("br",{})," Oulined ",Object(j.jsx)("br",{})," Square"," "]})})]}),Object(j.jsx)("h2",{children:"Playground"}),Object(j.jsx)(u,{})]})};s.a.render(Object(j.jsx)(d,{}),document.getElementById("root"))},6:function(e,t,n){},8:function(e,t,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.eca1fbe8.chunk.js.map