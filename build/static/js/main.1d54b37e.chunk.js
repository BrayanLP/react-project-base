(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,n){e.exports=n(50)},38:function(e,t,n){},40:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"DemoModels",function(){return S});var a=n(1),o=n.n(a),c=n(24),i=n.n(c),u=n(25),s=n.n(u),l=(n(38),n(6)),h=n(7),p=n(9),m=n(8),f=n(10),d=n(53),b=n(54),v=(n(40),n(26)),j=n.n(v),w=n(52),E=(n(12),{security:"http://develop.rcp.pe/api/v1",sonqo:"http://develop.rcp.pe/dashboard/api/v1",socket:"http://localhost:8000",bo:"http://172.20.60.62:8011/bo/api/v1",customers:"http://172.20.60.62:8012/bo/api/v1",mixLogin:"http://develop.rcp.pe/login",demo:"https://jsonplaceholder.typicode.com"}),O="/",g="/demo",y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:j.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,o.a.createElement("h1",null," Proyecto Base RCP")),o.a.createElement(w.a,{to:g},o.a.createElement("p",null,"Api Demo")))}}]),t}(a.Component),D=n(13),k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.props.getData(),this.props.getDataId()}},{key:"render",value:function(){var e=this.props,t=e.result,n=e.resultId;return console.log(t,this.props),o.a.createElement("div",null,o.a.createElement("h1",null,"Listado de Usuario"),o.a.createElement("ul",null,t&&t.map(function(e,t){return o.a.createElement("li",{key:t+1},e.name)})),o.a.createElement("h1",null,"Detalle del Usuario: 1"),n&&o.a.createElement("div",null,"Nombre: ",n.name,o.a.createElement("br",null),"Email: ",n.email,o.a.createElement("br",null),"Celular: ",n.phone,o.a.createElement("br",null),"P\xe1gina Web: ",n.website))}}]),t}(a.Component),I=Object(D.b)(function(e){return{result:e.DemoModels.result,resultId:e.DemoModels.resultId}},function(e){var t=e.DemoModels,n=t.fetchData,r=t.fetchIdData;return{getData:function(){return n()},getDataId:function(e){return r(1)}}})(k),x=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(b.a,{exact:!0,path:O,component:y}),o.a.createElement(b.a,{path:g,component:I}))))}}]),t}(a.Component),C=n(29),M=n(5),A=n.n(M),L=n(11),N=n(20),S={state:{},reducers:{increment:function(e,t){return e+t},list:function(e,t){return Object(N.a)({},e,{result:t})},listObject:function(e,t){return Object(N.a)({},e,{resultId:t})}},effects:function(e){return{fetchData:function(){var e=Object(L.a)(A.a.mark(function e(){var t=this;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(E.demo,"/users")).then(function(e){return e.json()}).then(function(e){console.log(e),t.list(e)}).catch(function(e){return console.error("Something went wrong")});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),fetchIdData:function(){var e=Object(L.a)(A.a.mark(function e(t){var n=this;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(E.demo,"/users/").concat(t)).then(function(e){return e.json()}).then(function(e){return n.listObject(e)}).catch(function(e){return console.error("Something went wrong")});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),fetchDeleteData:function(){var e=Object(L.a)(A.a.mark(function e(t){var n=this;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(E.demo,"/users/").concat(t),{method:"DELETE",headers:new Headers({"Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(e){return n.listObject(e)}).catch(function(e){return console.error("Something went wrong")});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),fetchCreateData:function(){var e=Object(L.a)(A.a.mark(function e(t){var n=this;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(E.demo,"/users/").concat(t.id),{method:"DELETE",headers:new Headers({"Content-Type":"application/json"}),body:t}).then(function(e){return e.json()}).then(function(e){return n.listObject(e)}).catch(function(e){return console.error("Something went wrong")});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}}},T=n(51);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=Object(C.init)({models:r}),B=s()();i.a.render(o.a.createElement(D.a,{store:W},o.a.createElement(T.a,{history:B},o.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.1d54b37e.chunk.js.map