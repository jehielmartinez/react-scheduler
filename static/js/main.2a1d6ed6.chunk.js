(this.webpackJsonpscheduler=this.webpackJsonpscheduler||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),i=(a(13),a(7)),m=a(1),u=a(2),o=a(5),s=a(6),E=a.n(s),d=function(e){var t=e.createEvent,a=Object(n.useState)({_id:"",name:"",organizer:"",date:"",time:"",details:""}),r=Object(m.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(!1),d=Object(m.a)(s,2),v=d[0],p=d[1],f=function(e){i(Object(o.a)({},c,Object(u.a)({},e.target.name,e.target.value)))},h=c.name,g=c.organizer,b=c.date,w=c.time,N=c.details;return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Create Event"),v?l.a.createElement("p",{className:"alert-error"},"Every field is required"):null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==h.trim()&&""!==g.trim()&&""!==b.trim()&&""!==w.trim()&&""!==N.trim()?(c._id=E()(),t(c),i({_id:"",name:"",organizer:"",date:"",time:"",details:""})):p(!0)}},l.a.createElement("label",null,"Event Title"),l.a.createElement("input",{type:"text",name:"name",className:"u-full-width",placeholder:"Event Title",onChange:f,value:h}),l.a.createElement("label",null,"Organizer"),l.a.createElement("input",{type:"text",name:"organizer",className:"u-full-width",placeholder:"Organizer Name",onChange:f,value:g}),l.a.createElement("label",null,"Date"),l.a.createElement("input",{type:"date",name:"date",className:"u-full-width",onChange:f,value:b}),l.a.createElement("label",null,"Time"),l.a.createElement("input",{type:"time",name:"time",className:"u-full-width",onChange:f,value:w}),l.a.createElement("label",null,"Details"),l.a.createElement("textarea",{className:"u-full-width",name:"details",onChange:f,value:N}),l.a.createElement("button",{type:"submit",className:"u-full-width button-primary"},"Add Event")))},v=function(e){var t=e.event,a=e.deleteEvent;return l.a.createElement("div",{className:"event"},l.a.createElement("p",null,"Event: ",l.a.createElement("span",null,t.name)),l.a.createElement("p",null,"Organizer: ",l.a.createElement("span",null,t.organizer)),l.a.createElement("p",null,"Date: ",l.a.createElement("span",null,t.date)),l.a.createElement("p",null,"Time: ",l.a.createElement("span",null,t.time)),l.a.createElement("p",null,"Details: ",l.a.createElement("span",null,t.details)),l.a.createElement("button",{className:"button delete u-full-width",onClick:function(){return a(t._id)}},"Delete \xd7"))};var p=function(){var e=JSON.parse(localStorage.getItem("events"));e||(e=[]);var t=Object(n.useState)(e),a=Object(m.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)((function(){localStorage.setItem("events",JSON.stringify(r))}),[r]);var u=function(e){var t=r.filter((function(t){return t._id!==e}));c(t)};return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"Scheduler"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"one-half column"},l.a.createElement(d,{createEvent:function(e){c([].concat(Object(i.a)(r),[e]))}})),l.a.createElement("div",{className:"one-half column"},l.a.createElement("h2",null,"Events"),r.map((function(e){return l.a.createElement(v,{key:e._id,event:e,deleteEvent:u})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.2a1d6ed6.chunk.js.map