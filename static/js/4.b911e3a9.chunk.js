(this["webpackJsonpfaceit-app-jsx"]=this["webpackJsonpfaceit-app-jsx"]||[]).push([[4],{60:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(1),i=t(38),l=t.n(i),s=t(40),u=t(59),o=t(41),d=t.n(o).a.create({baseURL:"https://open.faceit.com/data/v4/"});d.defaults.headers.common.Authorization="Bearer 3392a4a0-da4f-45bd-90ed-10d9e8918a15";var f=d,b=function(e){var a=r.a.useState(null),t=Object(u.a)(a,2),n=t[0],c=t[1];console.log(e);var i=function(){var a=Object(s.a)(l.a.mark((function a(){var t;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.get("/players/".concat(e.id,"/stats/csgo"));case 2:return t=a.sent,console.log(t.data),a.abrupt("return",t.data);case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.useEffect((function(){i().then((function(e){c(e)}))}),[e]),null==n?"Loading":r.a.createElement("div",null,r.a.createElement("p",null,"Average HS percentage: ",n.lifetime["Average Headshots %"],"%"),r.a.createElement("p",null,"Average K/D Ratio: ",n.lifetime["Average K/D Ratio"]),r.a.createElement("p",null,"Current Win Streak: ",n.lifetime["Current Win Streak"]))},p={liorID:"cd8a3937-a6b5-4972-8d0b-42c790ff3132",ayraID:"eb07ae0a-87c1-44c6-b348-ca18d5869ea4",heziID:"44f43251-739e-4c98-b2f9-dae3e0d42f9b",lavanID:"5153d825-9e29-408f-a772-d13375c78bc5",itayID:"c4d82eac-dd80-4151-bac8-4580904cdcdb"};a.default=function(){var e,a=Object(c.f)();switch(a.name){case"lior":e=p.liorID;break;case"itay":e=p.itayID;break;case"hezi":e=p.heziID;break;case"ayra":e=p.ayraID;break;case"lavan":e=p.lavanID;break;default:e=p.liorID}return r.a.createElement("div",null,r.a.createElement("h1",null,a.name),r.a.createElement(b,{id:e}))}}}]);
//# sourceMappingURL=4.b911e3a9.chunk.js.map