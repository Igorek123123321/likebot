(this.webpackJsonplikebot=this.webpackJsonplikebot||[]).push([[0],{121:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},218:function(e,t,a){e.exports=a(347)},340:function(e,t,a){},347:function(e,t,a){"use strict";a.r(t);a(219),a(245),a(247),a(248),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267),a(268),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279),a(280),a(281),a(282),a(283),a(284),a(285),a(286),a(287);var n=a(0),c=a.n(n),r=a(115),o=a.n(r),i=a(40),l=a.n(i),s=a(41),u=a.n(s),p=a(53),d=a(46),m=a(74),b=a.n(m),f=a(125),h=a.n(f),E=(a(296),a(54)),k=a.n(E),v=a(55),g=a.n(v),j=a(119),C=a.n(j),O=a(75),y=a.n(O),x=a(116),w=a.n(x),A=a(118),D=a.n(A),I=a(117),S=a.n(I),U=function(e){var t=e.id,a=e.go,n=e.fetchedUser,r=e.properties;return c.a.createElement(k.a,{id:t},c.a.createElement(g.a,null,"\u0426\u0435 \u043f\u0438\u0437\u0434\u0430"),n&&c.a.createElement(y.a,{title:"User Data Fetched with VK Bridge and API DataBase"},c.a.createElement(w.a,{before:n.photo_200?c.a.createElement(S.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(y.a,{title:"Navigation Block"},c.a.createElement(D.a,null,c.a.createElement(C.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"\u041a\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0431\u0430\u043b\u043b\u044b"))),r.vk&&c.a.createElement("p",null,"\u0412\u041a: ".concat(r.vk," \u0431\u0430\u043b\u043b\u044b: ").concat(r.balance," \u0440\u0443\u0431\u043b\u0438: ").concat(r.rub," \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e \u0441\u0435\u0433\u043e\u0434\u043d\u044f: ").concat(r.points)))},_=a(76),B=a(122),K=a.n(B),P=a(123),V=a.n(P),N=a(124),W=a.n(N),z=a(120),J=a.n(z),T=a(121),F=a.n(T),G=(a(340),Object(_.b)()),q=function(e){return c.a.createElement(k.a,{id:e.id},c.a.createElement(g.a,{left:c.a.createElement(K.a,{onClick:e.go,"data-to":"home"},G===_.a?c.a.createElement(V.a,null):c.a.createElement(W.a,null))},"\u041f\u0443\u0448\u0438\u0441\u0442\u044b\u0439 \u043f\u0438\u0434\u043e\u0440\u0430\u0441"),c.a.createElement("img",{className:"Persik",src:F.a,alt:"Persik The Cat"}),c.a.createElement("button",{type:"button",onClick:Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:J.a.post("http://185.255.135.122:90/testapi",{test:1231}).then((function(e){return e.data}));case 1:case"end":return e.stop()}}),e)}))),style:{padding:20,backgroundColor:"red",cursor:"pointer"}},"Send to ...."),c.a.createElement("p",null,"1"))},H=function(){var e=Object(n.useState)("home"),t=Object(d.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),i=Object(d.a)(o,2),s=i[0],m=i[1],f=Object(n.useState)(c.a.createElement(h.a,{size:"large"})),E=Object(d.a)(f,2),k=E[0],v=E[1],g=Object(n.useState)([{vk:void 0,balance:void 0,rub:void 0,points:void 0}]),j=Object(d.a)(g,2),C=j[0],O=j[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.send("VKWebAppGetUserInfo");case 2:return t=e.sent,m(t),v(null),"C4D52C8426DAC",e.next=8,fetch("https://likebot.ru/data?token=".concat("C4D52C8426DAC","&id=").concat(t.id));case 8:return a=e.sent,e.next=11,a.json();case 11:n=e.sent,O({vk:n.vk,balance:n.balance,rub:n.rub,points:n.points});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var y=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(b.a,{activePanel:a,popout:k},c.a.createElement(U,{id:"home",fetchedUser:s,properties:C,go:y}),c.a.createElement(q,{id:"persik",go:y}))};l.a.send("VKWebAppInit"),o.a.render(c.a.createElement(H,null),document.getElementById("root"))}},[[218,1,2]]]);
//# sourceMappingURL=main.0d766148.chunk.js.map