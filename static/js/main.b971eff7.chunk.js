(this.webpackJsonpno_tag=this.webpackJsonpno_tag||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),i=(n(9),n(1)),l=(n(10),n(13)),s=function(){},u={_state:{newLength:"",newSection:"",coil:[{_id:Object(l.a)(),length:"500",section:"2x1.5"}]},_subscribe:function(e){s=e},getState:function(){return this._state}},h=u;var m=function(e){var t=e.store._state,n=Object(a.useState)(null),o=Object(i.a)(n,2),r=o[0],h=o[1],m=Object(a.useState)(null),g=Object(i.a)(m,2),w=g[0],f=g[1];return c.a.createElement("div",null,c.a.createElement("input",{value:t.newLength,onChange:function(e){h(null),function(e){u._state.newLength=e,s()}(e.currentTarget.value)},placeholder:"\u0414\u043b\u0438\u043d\u0430",type:"number"}),c.a.createElement("input",{value:t.newSection,onChange:function(e){f(null),function(e){u._state.newSection=e,s()}(e.currentTarget.value)},placeholder:"\u0421\u0435\u0447\u0435\u043d\u0438\u0435",type:"number"}),c.a.createElement("button",{onClick:function(){t.newLength.trim()&&t.newSection.trim()?function(){var e={_id:Object(l.a)(),section:u._state.newSection,length:u._state.newLength};u._state.coil.push(e),u._state.newLength="",u._state.newSection="",s()}():t.newLength.trim()?t.newSection.trim()||f("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0441\u0435\u0447\u0435\u043d\u0438\u0435"):h("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0434\u043b\u0438\u043d\u0443")}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r&&c.a.createElement("div",{className:"error-length"},r),w&&c.a.createElement("div",{className:"error-section"},w),t.coil.map((function(e){return c.a.createElement("div",{key:e._id},c.a.createElement("span",null,"\u0414\u043b\u0438\u043d\u0430: ".concat(e.length,"---- ")),c.a.createElement("span",null," ----\u0421\u0435\u0447\u0435\u043d\u0438\u0435 ".concat(e.section)))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=function(){r.a.render(c.a.createElement(m,{store:h}),document.getElementById("root"))};g(),h._subscribe(g),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.b971eff7.chunk.js.map