(this.webpackJsonpwidgets=this.webpackJsonpwidgets||[]).push([[0],{41:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(16),r=c.n(s),i=c(2),l=c(0),o=function(e){var t=e.items,c=Object(a.useState)(null),s=Object(i.a)(c,2),r=s[0],o=s[1],u=t.map((function(e,t){var c=t===r?"active":"";return Object(l.jsxs)(n.a.Fragment,{children:[Object(l.jsxs)("div",{className:"title ".concat(c),onClick:function(){return function(e){o(e)}(t)},children:[Object(l.jsx)("i",{className:"dropdown icon"}),e.title]}),Object(l.jsx)("div",{className:"content ".concat(c),children:Object(l.jsx)("p",{children:e.content})})]},e.title)}));return Object(l.jsx)("div",{className:"ui styled accordion",children:u})},u=c(4),j=c.n(u),d=c(5),b=c(6),h=c.n(b),p=function(){var e=Object(a.useState)("programming"),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(c),r=Object(i.a)(s,2),o=r[0],u=r[1],b=Object(a.useState)([]),p=Object(i.a)(b,2),O=p[0],f=p[1];Object(a.useEffect)((function(){var e=setTimeout((function(){u(c)}),1e3);return function(){clearTimeout(e)}}),[c]),Object(a.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://en.wikipedia.org/w/api.php",{params:{action:"query",list:"search",origin:"*",format:"json",srsearch:o}});case 2:t=e.sent,c=t.data,f(c.query.search);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]);var v=O.map((function(e){return Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("div",{className:"right floated content",children:Object(l.jsx)("a",{href:"https://en.wikipedia.org?curid=".concat(e.pageid),className:"ui button",children:"Go"})}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("div",{className:"header",children:e.title}),Object(l.jsx)("span",{dangerouslySetInnerHTML:{__html:e.snippet}})]})]},e.pageid)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"ui form",children:Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{children:"Enter Search Term"}),Object(l.jsx)("input",{value:c,onChange:function(e){return n(e.target.value)},className:"input"})]})}),Object(l.jsx)("div",{className:"ui celled list",children:v})]})},O=function(e){var t=e.label,c=e.options,n=e.selected,s=e.onSelectedChange,r=Object(a.useState)(!1),o=Object(i.a)(r,2),u=o[0],j=o[1],d=Object(a.useRef)();Object(a.useEffect)((function(){var e=function(e){d.current&&d.current.contains(e.target)||j(!1)};return document.body.addEventListener("click",e),function(){document.body.removeEventListener("click",e)}}));var b=c.map((function(e){return e.value===n.value?null:Object(l.jsx)("div",{className:"item",onClick:function(){return s(e)},children:e.label},e.value)}));return Object(l.jsx)("div",{ref:d,className:"ui form",children:Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"field",children:t}),Object(l.jsxs)("div",{onClick:function(){return j(!u)},className:"ui selection dropdown ".concat(u?"visible active":""),children:[Object(l.jsx)("i",{className:"dropdown icon"}),Object(l.jsx)("div",{className:"text",children:n.label}),Object(l.jsx)("div",{className:"menu ".concat(u?"visible transition":""),children:b})]})]})})},f=function(e){var t=e.language,c=e.text,n=Object(a.useState)(""),s=Object(i.a)(n,2),r=s[0],o=s[1],u=Object(a.useState)(c),b=Object(i.a)(u,2),p=b[0],O=b[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){O(c)}),500);return function(){clearTimeout(e)}}),[c]),Object(a.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("https://translation.googleapis.com/language/translate/v2",{},{params:{q:p,target:t.value,key:"AIzaSyAk1LDfQJiu7GUhzYbCHj8YLor4n5iNpMM"}});case 2:c=e.sent,a=c.data,o(a.data.translations[0].translatedText);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,p]),Object(l.jsx)("div",{children:Object(l.jsx)("h1",{className:"ui header",children:r})})},v=[{label:"Afrikaans",value:"af"},{label:"Arabic",value:"ar"},{label:"Hindi",value:"hi"},{label:"Dutch",value:"nl"}],m=function(){var e=Object(a.useState)(v[0]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],u=r[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"ui form",children:Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{children:"Enter text"}),Object(l.jsx)("input",{value:o,onChange:function(e){return u(e.target.value)}})]})}),Object(l.jsx)(O,{label:"Select a language",selected:c,onSelectedChange:n,options:v}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{className:"ui header",children:"Output"}),Object(l.jsx)(f,{language:c,text:o})]})},x=function(e){var t=e.path,c=e.children,n=Object(a.useState)(window.location.pathname),s=Object(i.a)(n,2),r=s[0],l=s[1];return Object(a.useEffect)((function(){var e=function(){l(window.location.pathname)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]),r===t?c:null},g=function(e){var t=e.className,c=e.href,a=e.children;return Object(l.jsx)("a",{onClick:function(e){if(!e.metaKey&&!e.ctrlKey){e.preventDefault(),window.history.pushState({},"",c);var t=new PopStateEvent("popstate");window.dispatchEvent(t)}},className:t,href:c,children:a})},N=function(){return Object(l.jsxs)("div",{className:"ui secondary pointing menu",children:[Object(l.jsx)(g,{href:"/basic-react-app",className:"item",children:"Accordion"}),Object(l.jsx)(g,{href:"/basic-react-app/list",className:"item",children:"Search"}),Object(l.jsx)(g,{href:"/basic-react-app/dropdown",className:"item",children:"Dropdown"}),Object(l.jsx)(g,{href:"/basic-react-app/translate",className:"item",children:"Translate"})]})},w=[{title:"What is React?",content:"React is a front-end js framework"},{title:"Why use React?",content:"React is a favourite js libary under engineers"},{title:"Why do you use React?",content:"You use React by creating components"}],S=[{label:"The color red",value:"red"},{label:"The color green",value:"green"},{label:"A shade of blue",value:"blue"}],y=function(){var e=Object(a.useState)(S[0]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(N,{}),Object(l.jsx)(x,{path:"/basic-react-app",children:Object(l.jsx)(o,{items:w})}),Object(l.jsx)(x,{path:"/basic-react-app/list",children:Object(l.jsx)(p,{})}),Object(l.jsx)(x,{path:"/basic-react-app/dropdown",children:Object(l.jsx)(O,{label:"Select a Color",options:S,selected:c,onSelectedChange:n})}),Object(l.jsx)(x,{path:"/basic-react-app/translate",children:Object(l.jsx)(m,{})})]})};r.a.render(Object(l.jsx)(y,{}),document.querySelector("#root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b6b568de.chunk.js.map