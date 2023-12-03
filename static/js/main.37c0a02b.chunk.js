(this["webpackJsonpbounty-zone"]=this["webpackJsonpbounty-zone"]||[]).push([[0],{87:function(e,n,t){},97:function(e,n,t){},98:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(2),o=t.n(c),a=t(34),i=t.n(a),u=t(16),s=t(11),l=t(5),b=t(6),d=t.n(b),j=t(10),h=t(18),p=t(19),f=t(22),x=t(25),O=t(24),g=t(8),m=t.n(g),v={DEV_API_URL:"https://localhost:5001/api/",PROD_API_URL:"https://bountyzoneapi20201207013622.azurewebsites.net/api/"};function y(e){return"Leader"===e.Type?"/leaders":"Hunter"===e.Type?"/hunters":"/"}var w=function e(n){Object(p.a)(this,e),this.URL="",this.URL=v.PROD_API_URL+n},k=function(e){Object(x.a)(t,e);var n=Object(O.a)(t);function t(){return Object(p.a)(this,t),n.call(this,"players")}return Object(f.a)(t,[{key:"createAccount",value:function(e){return console.log(e),m.a.post("".concat(this.URL),Object(h.a)({},e))}},{key:"getPlayerRoles",value:function(){return m.a.get("".concat(this.URL,"/roles"))}},{key:"getPlayerByID",value:function(e){return m.a.get("".concat(this.URL,"/").concat(e))}},{key:"getPlayerByEmail",value:function(e){return m.a.get("".concat(this.URL),{params:{email:e}})}},{key:"getHunterByPlayerID",value:function(e){return m.a.get("".concat(this.URL,"/").concat(e,"/hunter"))}},{key:"getLeaderByPlayerID",value:function(e){return m.a.get("".concat(this.URL,"/").concat(e,"/leader"))}}]),t}(w),L=t(4),R=t(3);function B(){var e=Object(L.a)(["\n  width: 40%;\n  height: 30%;\n  display: flex;\n  margin: 0 auto;\n  flex-direction: column;\n  text-align: center;\n  align-content: center;\n  justify-content: center;\n  transition: 0.3s;\n  border-radius: 5px;\n  background: linear-gradient(to bottom right, #46494d 13%, transparent 90%);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\n  &:hover {\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  }\n"]);return B=function(){return e},e}function D(){var e=Object(L.a)(["\n  color: ",";\n  background-color: transparent;\n  border-color: transparent;\n  width: 200px;\n  height: 80px;\n  font-size: 1.3rem;\n  margin: 0 auto;\n  display: block;\n"]);return D=function(){return e},e}function I(){var e=Object(L.a)(["\n  color: ",";\n  background-color: transparent;\n  border-color: transparent;\n  width: 150px;\n  font-size: 1.2rem;\n"]);return I=function(){return e},e}function C(){var e=Object(L.a)(["\n  width: 200px;\n  cursor: pointer;\n  border-radius: 5px;\n  background: linear-gradient(to bottom right, #46494d 13%, transparent 90%);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\n  &:hover {\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  }\n"]);return C=function(){return e},e}function P(){var e=Object(L.a)(["\n  display: grid;\n  grid-gap: 50px;\n  justify-content: center;\n  grid-template-columns: auto auto auto;\n"]);return P=function(){return e},e}function S(){var e=Object(L.a)(["\n  display: flex;\n  margin: 20px auto;\n  flex-direction: column;\n  text-align: center;\n  align-content: center;\n  justify-content: center;\n"]);return S=function(){return e},e}function A(){var e=Object(L.a)(["\n  font-size: 1.4rem;\n"]);return A=function(){return e},e}function T(){var e=Object(L.a)(["\n  font-size: 1.5rem;\n"]);return T=function(){return e},e}var z=R.b.span(T()),U=R.b.p(A()),E=R.b.div(S()),H=R.b.div(P()),N=R.b.div(C()),Y=R.b.button(I(),(function(e){return e.theme.color})),_=R.b.button(D(),(function(e){return e.theme.color})),F=R.b.div(B()),V=t(13),M=t.n(V),G=t(7),W=o.a.createContext({resetContext:function(){},setPlayerContext:function(e){},setLeaderContext:function(e){},setHunterContext:function(e){}});function $(){return Object(c.useContext)(W)}function J(e){var n=e.children,t=Object(c.useState)(void 0),o=Object(G.a)(t,2),a=o[0],i=o[1],u=Object(c.useState)(void 0),s=Object(G.a)(u,2),l=s[0],b=s[1],d=Object(c.useState)(void 0),j=Object(G.a)(d,2),h=j[0],p=j[1];return Object(r.jsx)(W.Provider,{value:{hunter:h,leader:l,player:a,resetContext:function(){i(void 0),b(void 0),p(void 0)},setPlayerContext:i,setHunterContext:p,setLeaderContext:b},children:n})}function q(){var e=Object(L.a)(["\n  width: 30%;\n  height: 400px;\n  display: flex;\n  text-align: center;\n  align-content: center;\n  flex-direction: column;\n  align-self: center;\n  justify-content: center;\n  color: white;\n  background: linear-gradient(to bottom right, #46494d 13%, transparent 90%);\n  transition: 0.3s;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\n  &:hover {\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  }\n"]);return q=function(){return e},e}function Z(){var e=Object(L.a)(["\n  border-radius: 0.15rem;\n  width: 160px;\n  height: 60px;\n  margin: 20vh auto;\n  color: white;\n  background: linear-gradient(#f1da36 0%, transparent 99%);\n"]);return Z=function(){return e},e}function K(){var e=Object(L.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return K=function(){return e},e}R.b.div(K());var Q=R.b.button(Z()),X=R.b.div(q()),ee=t.p+"static/media/login_bg.92f74779.jpg",ne={backgroundImage:"url(".concat(ee,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignContent:"center",textAlign:"center"};var te=function(){var e=Object(l.g)(),n=$().setPlayerContext,t=Object(u.b)(),c=t.loginWithRedirect,o=t.user,a=t.isAuthenticated;return Object(V.useAsyncEffect)(Object(j.a)(d.a.mark((function t(){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a||!o){t.next=12;break}return t.prev=1,t.next=4,(new k).getPlayerByEmail(o.email);case 4:r=t.sent,n(r.data),e.push(y(r.data.PlayerRole)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e.push("/register");case 12:case"end":return t.stop()}}),t,null,[[1,9]])}))),[a,o]),Object(r.jsx)("div",{style:ne,children:Object(r.jsxs)(X,{children:[Object(r.jsx)(U,{children:"Ready for mayhem?"}),Object(r.jsx)(Q,{onClick:function(){c()},children:"LOGIN"})]})})},re=t(17),ce=t(53),oe=t(23);function ae(){var e=Object(L.a)(["\n  background-color: transparent;\n  border-color: transparent;\n  text-transform: uppercase;\n  font-size: 1rem;\n  padding-right: 20px;\n  cursor: pointer;\n  margin-left: auto;\n  color: ",";\n"]);return ae=function(){return e},e}function ie(){var e=Object(L.a)(["\n  width: 100%;\n  height: 80px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n"]);return ie=function(){return e},e}function ue(){var e=Object(L.a)(["\n  color: #fff;\n  margin-left: 2rem;\n  font-size: 2rem;\n"]);return ue=function(){return e},e}function se(){var e=Object(L.a)(["\n  margin-left: 2rem;\n  font-size: 2rem;\n  background: none;\n  color: #000000;\n"]);return se=function(){return e},e}function le(){var e=Object(L.a)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  padding: 8px 0px 8px 8px;\n  list-style: none;\n  height: 60px;\n\n  & a {\n    text-decoration: none;\n    color: #f5f5f5;\n    font-size: 18px;\n    width: 95%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    padding: 0 16px;\n    border-radius: 4px;\n  }\n"]);return le=function(){return e},e}function be(){var e=Object(L.a)(["\n  width: 100%;\n"]);return be=function(){return e},e}function de(){var e=Object(L.a)(["\n  background-color: #000000;\n  width: 160px;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: -100%;\n  transition: 850ms;\n\n  &.active {\n    left: 0;\n    transition: 350ms;\n  }\n"]);return de=function(){return e},e}function je(){var e=Object(L.a)(["\n  background-color: #ffffff;\n  height: 80px;\n  display: flex;\n  align-items: center;\n"]);return je=function(){return e},e}var he=R.b.nav(je()),pe=R.b.nav(de()),fe=R.b.li(be()),xe=R.b.li(le()),Oe=Object(R.b)(re.a)(se()),ge=Object(R.b)(re.a)(ue()),me=R.b.li(ie()),ve=R.b.button(ae(),(function(e){return e.theme.color}));var ye=function(e){var n=Object(c.useState)(!1),t=Object(G.a)(n,2),o=t[0],a=t[1],i=function(){return a(!o)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsxs)(he,{children:[Object(r.jsx)(Oe,{to:"#",children:Object(r.jsx)(ce.a,{onClick:i})}),Object(r.jsx)(ve,{onClick:function(){return e.onLogout()},children:"Sign out"})]})}),Object(r.jsx)(pe,{className:o?"active":"",children:Object(r.jsxs)(fe,{onClick:i,children:[Object(r.jsx)(me,{children:Object(r.jsx)(ge,{to:"#",children:Object(r.jsx)(oe.b,{})})}),e.routes.map((function(e,n){return Object(r.jsx)(xe,{children:Object(r.jsxs)(re.a,{to:e.path,children:[e.icon,Object(r.jsx)("span",{children:e.title})]})},n)}))]})})]})},we=t(29);function ke(e){var n=e.victim,t=e.onConfirm,o=Object(c.useState)(0),a=Object(G.a)(o,2),i=a[0],u=a[1],s=Object(c.useState)(),l=Object(G.a)(s,2),b=l[0],d=l[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"How much are you willing to pay?"}),Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:["Bounty price: ",Object(r.jsx)("input",{type:"number",onChange:function(e){u(+e.target.value)}})," ","[Bounties can be free!]"]})}),Object(r.jsx)("h3",{children:"When do you need to attack him?"}),Object(r.jsx)("p",{style:{color:"red",fontSize:"0.8rem"},children:"*Remember that someone needs to accept this bounty, so you might want to to choose a reasonable time window in order to succefully complete the attack. You won't get your money back if no one takes the bounty!"}),Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:["Time: ",Object(r.jsx)("input",{type:"datetime-local",onChange:function(e){d(new Date(e.target.value))}})," ","[Attack will default to 2 days from now if no time is provided]"]})}),Object(r.jsxs)(_,{onClick:function(){var e=new Date;e.setDate(e.getDate()+2),t(n,{price:i,time:null!==b&&void 0!==b?b:e})},children:[Object(r.jsx)(z,{children:"\u2694\ufe0f"})," Confirm Bounty"]})]})}function Le(e){var n=e.victim,t=e.onViewVictim,c=e.onPlaceBounty;return Object(r.jsxs)(N,{onClick:function(){return t(n)},children:[Object(r.jsxs)(U,{children:[Object(r.jsx)(z,{children:"\u2b50"}),n.Player.NickName]}),Object(r.jsxs)(U,{children:["Reputation: ",n.Reputation]}),Object(r.jsx)(Y,{onClick:function(e){e.stopPropagation(),c(n)},children:"Place Bounty!"})]})}t(87);var Re=t(37),Be=t.n(Re);function De(e){var n=e.title,t=e.isOpen,c=e.onClose,o=e.children;return Object(r.jsx)(Be.a,{isOpen:t,onRequestClose:c,contentLabel:n,className:"mymodal",overlayClassName:"myoverlay",closeTimeoutMS:500,children:o})}Be.a.setAppElement("#root");var Ie=function(e){Object(x.a)(t,e);var n=Object(O.a)(t);function t(){return Object(p.a)(this,t),n.call(this,"leaders")}return Object(f.a)(t,[{key:"placeBountyOnVictim",value:function(e){return m.a.post("".concat(this.URL,"/place-bounty"),Object(h.a)({},e))}},{key:"getPopularVictims",value:function(){return m.a.get("".concat(this.URL,"/popular-victims"))}},{key:"getLeaderBounties",value:function(e){return m.a.get("".concat(this.URL,"/").concat(e,"/bounties"))}},{key:"getBountiesAgainstLeader",value:function(e){return m.a.get("".concat(this.URL,"/").concat(e,"/opposing-bounties"))}},{key:"defendFromBounty",value:function(e){return m.a.patch("".concat(this.URL,"/defend-bounty"),Object(h.a)({},e))}}]),t}(w);function Ce(e){var n=e.leader,t=e.title;return Object(r.jsxs)(F,{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsxs)(U,{children:[Object(r.jsx)(z,{children:"Money \ud83d\udcb8"}),": ",n.Money,"$"]}),Object(r.jsxs)(U,{children:["Reputation: ",n.Reputation]}),Object(r.jsxs)(U,{children:["Successful Attacks: ",n.SuccessfulAttacks]}),Object(r.jsxs)(U,{children:["Successful Defends: ",n.SuccessfulDefends]})]})}var Pe={title:"",isOpen:!1,content:Object(r.jsx)(r.Fragment,{})};function Se(e){var n=e.leader,t=Object(c.useState)(Pe),o=Object(G.a)(t,2),a=o[0],i=o[1],u=Object(c.useState)([]),s=Object(G.a)(u,2),l=s[0],b=s[1];function h(e){i({title:"Your enemy's information. Want to attack him?",isOpen:!0,content:Object(r.jsx)(Ce,{title:"Opponent: ".concat(e.Player.NickName),leader:e})})}function p(e,n){return f.apply(this,arguments)}function f(){return(f=Object(j.a)(d.a.mark((function e(t,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new Ie).placeBountyOnVictim({Price:r.price,LeaderID:n.ID,Time:r.time,VictimID:t.ID});case 3:alert("You've succesfully created the bounty!"),i(Pe),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Failed to place bounty on target",e.t0),alert(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(e){i({title:"Your enemy's information. Want to attack him?",isOpen:!0,content:Object(r.jsx)(ke,{victim:e,onConfirm:p})})}return M()(Object(j.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new Ie).getPopularVictims();case 3:n=e.sent,b(n.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error while getting popular victims"),console.log({e:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(De,{isOpen:a.isOpen,title:a.title,onClose:function(){i(Pe)},children:a.content}),Object(r.jsxs)(E,{children:[Object(r.jsx)("h3",{children:"Not feeling happy about your performance? "}),Object(r.jsx)(U,{children:"Try creating bounties! Here are the most popular leaders:"}),0===l.length?Object(r.jsx)("h4",{children:"Loading your targets...."}):Object(r.jsx)(H,{children:l.map((function(e,t){return n.ID!==e.ID&&Object(r.jsx)(Le,{victim:e,onViewVictim:h,onPlaceBounty:x},t)}))})]})]})}var Ae=function(){var e=$().player,n=Object(c.useState)(),t=Object(G.a)(n,2),r=t[0],o=t[1];return M()(Object(j.a)(d.a.mark((function n(){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r){n.next=12;break}return n.prev=1,n.next=4,(new k).getLeaderByPlayerID(e.ID);case 4:t=n.sent,o(t.data),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log("Error while loading the leader by its player ID."),console.log({e:n.t0});case 12:case"end":return n.stop()}}),n,null,[[1,8]])}))),[]),{leader:r,player:e}},Te=function(){var e=$().player,n=Object(c.useState)(),t=Object(G.a)(n,2),r=t[0],o=t[1];return M()(Object(j.a)(d.a.mark((function n(){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r){n.next=12;break}return n.prev=1,n.next=4,(new k).getHunterByPlayerID(e.ID);case 4:t=n.sent,o(t.data),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log("Error while loading the hunter by its player ID."),console.log({e:n.t0});case 12:case"end":return n.stop()}}),n,null,[[1,8]])}))),[]),{hunter:r,player:e}},ze=t.p+"static/media/bounty_map_bg1.5ebb9132.jpg",Ue={backgroundImage:"url(".concat(ze,")"),backgroundSize:"cover",backgroundRepeat:"space",color:"white",width:"100%",height:"170vh"};function Ee(){var e=Object(L.a)(["\n  width: 200px;\n  text-align: center;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\n  &:hover {\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  }\n"]);return Ee=function(){return e},e}function He(){var e=Object(L.a)(["\n  display: grid;\n  grid-gap: 50px;\n  margin-top: 30px;\n  justify-content: center;\n  grid-template-columns: auto auto auto;\n"]);return He=function(){return e},e}function Ne(){var e=Object(L.a)(["\n  color: ",";\n  background-color: transparent;\n  border-color: transparent;\n  font-size: 1.1rem;\n  cursor: pointer;\n  width: 100px;\n"]);return Ne=function(){return e},e}function Ye(){var e=Object(L.a)(["\n  text-align: center;\n"]);return Ye=function(){return e},e}function _e(){var e=Object(L.a)(["\n  text-align: center;\n"]);return _e=function(){return e},e}var Fe=R.b.h2(_e()),Ve=R.b.p(Ye()),Me=R.b.button(Ne(),(function(e){return e.theme.color})),Ge=R.b.div(He()),We=R.b.div(Ee());function $e(e){var n=e.bounty,t=new Date(n.Time);return Object(r.jsxs)(We,{children:[Object(r.jsx)(z,{children:"\ud83c\udfaf"}),Object(r.jsxs)("h4",{children:["You paid: ",n.Price,"$"]}),Object(r.jsxs)("h5",{children:["Is confirmed:",n.IsConfirmed?Object(r.jsx)(z,{children:"\u2714\ufe0f"}):Object(r.jsx)(z,{children:"\u274c"})]}),Object(r.jsxs)("h5",{children:["Bounty set for: ",t.toLocaleDateString()]}),Object(r.jsxs)("h5",{children:["At: ",t.toTimeString()]}),n.Bribed&&Object(r.jsxs)("p",{children:[Object(r.jsx)(z,{children:"\u26a0\ufe0f"}),"Your victim bribed the hunter! Your attack was defused",Object(r.jsx)(z,{children:"\u26a0\ufe0f"})]})]})}function Je(e){var n=e.bounty,t=new Date(n.Time);function c(){return(c=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new Ie).defendFromBounty(n);case 3:window.location.reload(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Error while bribing. E: ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(r.jsxs)(We,{children:[Object(r.jsx)("p",{children:Object(r.jsx)(z,{children:"\ud83d\udca3"})}),Object(r.jsxs)("h4",{children:["Bounty price: ",n.Price,"$"]}),Object(r.jsxs)("h5",{children:["Bounty set for: ",t.toLocaleDateString()]}),Object(r.jsxs)("h5",{children:["At: ",t.toTimeString()]}),n.Bribed&&Object(r.jsxs)("p",{children:[Object(r.jsx)(z,{children:"\u26a0\ufe0f"}),"Your victim bribed the hunter! Your attack was defused",Object(r.jsx)(z,{children:"\u26a0\ufe0f"})]}),Object(r.jsx)(Me,{onClick:function(){return c.apply(this,arguments)},children:"Bribe|Defend"})]})}var qe={leaderBounties:[],bountiesAgainstLeader:[]};var Ze="/leaders",Ke=[{title:"Home",path:"".concat(Ze,"/home"),icon:Object(r.jsx)(oe.a,{}),component:function(){var e=Ae().leader;return e?Object(r.jsxs)("div",{style:Ue,children:[Object(r.jsx)(Ce,{title:"Your stats so far",leader:e}),Object(r.jsx)(Se,{leader:e})]}):Object(r.jsx)("h3",{children:"Loading your profile.... You will be out there soon"})}},{title:"Bounties",path:"".concat(Ze,"/attacks"),icon:Object(r.jsx)(we.a,{}),component:function(){var e=Ae(),n=e.leader,t=e.player,o=Object(c.useState)(qe),a=Object(G.a)(o,2),i=a[0],u=a[1];if(M()(Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:m.a.all([(new Ie).getLeaderBounties(n.ID),(new Ie).getBountiesAgainstLeader(n.ID)]).then(m.a.spread((function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];u({leaderBounties:n[0].data,bountiesAgainstLeader:n[1].data})}))).catch((function(e){console.log("Error while loading leader's bounties. E: ",e)}));case 3:case"end":return e.stop()}}),e)}))),[n]),!n||!t)return Object(r.jsx)("h3",{children:"Loading your bounties.... Take this time to rethink your strategy"});var s=i.bountiesAgainstLeader,l=i.leaderBounties;return 0===(null===s||void 0===s?void 0:s.length)&&0===(null===l||void 0===l?void 0:l.length)?Object(r.jsx)(Fe,{children:"Looks like you don't have any bounties going on. Return to the home page to create bounties and get rewards!"}):Object(r.jsxs)("div",{children:[s&&0!==s.length&&Object(r.jsxs)("div",{children:[Object(r.jsx)(Fe,{children:"\u2620\ufe0f You're in danger! \u2620\ufe0f"}),Object(r.jsx)(Ve,{children:"Someone placed a bounty on you and a Hunter accepted it. You can either bribe the hunter before the time passes and conserve your reputation or loose everything you've worked for!"}),Object(r.jsx)(Ge,{children:null===s||void 0===s?void 0:s.map((function(e,n){return Object(r.jsx)(Je,{bounty:e},n)}))})]}),l&&0!==l.length&&Object(r.jsxs)("div",{children:[Object(r.jsxs)(Fe,{children:["Here are all the bounties you've placed on other leaders,"," ",t.NickName]}),Object(r.jsx)(Ge,{children:null===l||void 0===l?void 0:l.map((function(e,n){return Object(r.jsx)($e,{bounty:e},n)}))})]})]})}}];var Qe=function(){var e=Object(u.b)().logout;return Object(r.jsxs)("div",{children:[Object(r.jsx)(ye,{routes:Ke,onLogout:e}),Object(r.jsxs)(l.d,{children:[Ke.map((function(e,n){return Object(r.jsx)(l.b,{path:e.path,component:e.component},n)})),Object(r.jsx)(l.a,{from:"/leaders",to:"/leaders/home"})]})]})};function Xe(){var e=Object(L.a)(["\n  width: 40%;\n  height: 500px;\n  display: flex;\n  margin: 0 auto;\n  flex-direction: column;\n  text-align: center;\n  align-content: center;\n  justify-content: center;\n  color: white;\n  background: linear-gradient(to bottom right, #0e1f35 83%, #01118e 100%);\n\n  transition: 0.3s;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\n  &:hover {\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  }\n"]);return Xe=function(){return e},e}function en(){var e=Object(L.a)(["\n  width: 200px;\n  height: 60px;\n  color: white;\n  margin: 0 auto;\n  text-align: center;\n  cursor: pointer;\n  font-size: 1.1rem;\n  border-radius: 8px;\n  border-color: transparent;\n  text-decoration: none;\n  background-color: ",";\n"]);return en=function(){return e},e}var nn=Object(R.b)(re.a)(en(),(function(e){return e.theme.color})),tn=R.b.div(Xe()),rn=t.p+"static/media/hunter_bg2.6dd29d4c.jpg",cn={backgroundImage:"url(".concat(rn,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100vw",height:"87vh"};function on(){var e=Object(L.a)(["\n  color: ",";\n  background-color: transparent;\n  border-color: transparent;\n  font-size: 1.01rem;\n  margin: 0 auto;\n  display: block;\n"]);return on=function(){return e},e}function an(){var e=Object(L.a)(["\n  width: 200px;\n  height: 250px;\n  text-align: center;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\n  &:hover {\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  }\n"]);return an=function(){return e},e}function un(){var e=Object(L.a)(["\n  display: grid;\n  grid-gap: 50px;\n  margin-top: 30px;\n  justify-content: center;\n  grid-template-columns: auto auto auto;\n"]);return un=function(){return e},e}function sn(){var e=Object(L.a)(["\n  text-align: center;\n  justify-content: center;\n"]);return sn=function(){return e},e}R.b.div(sn());var ln=R.b.div(un()),bn=R.b.div(an()),dn=R.b.button(on(),(function(e){return e.theme.color}));function jn(e){var n=e.bounty,t=e.onBountyConfirm;return Object(r.jsxs)(bn,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(z,{children:"\u2b50"})}),Object(r.jsxs)("p",{children:["Bounty Reward \ud83d\udcb0: ",n.Price,"$"]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("b",{children:"This leader needs to be taken down by: "}),new Date(n.Time).toDateString()]}),Object(r.jsx)("h3",{children:"Want to take it?"}),Object(r.jsx)(dn,{onClick:function(){return t(n)},children:"Accept bounty!"})]})}var hn=function(e){Object(x.a)(t,e);var n=Object(O.a)(t);function t(){return Object(p.a)(this,t),n.call(this,"hunters")}return Object(f.a)(t,[{key:"confirmBounty",value:function(e,n){return m.a.patch("".concat(this.URL,"/").concat(e,"/confirm-bounty"),Object(h.a)({},n))}},{key:"getAvailableBounties",value:function(){return m.a.get("".concat(this.URL,"/bounties"))}}]),t}(w),pn=t.p+"static/media/hunter_bg5.4b3fab01.jpg",fn={backgroundImage:"url(".concat(pn,")"),backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",width:"100%",height:"100vh",textAlign:"center",justifyContent:"center"};var xn="/hunters",On=[{title:"Home",path:"".concat(xn,"/home"),icon:Object(r.jsx)(oe.a,{}),component:function(){var e=Te(),n=e.player,t=e.hunter;return n&&t?Object(r.jsx)("div",{style:cn,children:Object(r.jsxs)(tn,{children:[Object(r.jsxs)("h2",{children:[Object(r.jsx)(z,{children:"\ud83d\udd31"}),"Welcome back, ",n.NickName,Object(r.jsx)(z,{children:"\ud83d\udd31"})]}),Object(r.jsx)("h3",{children:"Here are your profile stats: "}),Object(r.jsxs)("p",{children:["Your total amount of guns: ",t.Guns]}),Object(r.jsxs)("p",{children:["Times you've been bribed: ",t.Bribes]}),Object(r.jsx)("h2",{children:"Not happy?"}),Object(r.jsx)("h2",{children:"Thirst for blood?"}),Object(r.jsx)(nn,{to:"/hunters/map",children:"Go to Map to pick up bounties!"})]})}):Object(r.jsx)("h3",{children:"Loading your profile..... Patience is a virtue"})}},{title:"Map",path:"".concat(xn,"/map"),icon:Object(r.jsx)(we.a,{}),component:function(){var e=Te(),n=e.player,t=e.hunter,o=Object(c.useState)(),a=Object(G.a)(o,2),i=a[0],u=a[1];if(M()(Object(j.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(new hn).getAvailableBounties();case 5:n=e.sent,u(n.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("Failed fetching bounties",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),[t]),!t||!n)return Object(r.jsx)("h2",{children:"Loading your profile...........!"});if(!i)return Object(r.jsx)("h2",{children:"Loading bounties.... You'll get em!"});function s(e){return l.apply(this,arguments)}function l(){return(l=Object(j.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new hn).confirmBounty(t.ID,n);case 3:alert("Bounty is yours!"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Error confirming bounty: ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(r.jsxs)("div",{style:fn,children:[Object(r.jsx)("h3",{children:"List of available bounties. Quick, Grab some!!"}),Object(r.jsx)(ln,{children:0!==i.length&&i.map((function(e,n){return Object(r.jsx)(jn,{bounty:e,onBountyConfirm:s},n)}))})]})}}];var gn=function(){var e=Object(u.b)().logout;return Object(r.jsxs)("div",{children:[Object(r.jsx)(ye,{routes:On,onLogout:e}),Object(r.jsxs)(l.d,{children:[On.map((function(e,n){return Object(r.jsx)(l.b,{path:e.path,component:e.component},n)})),Object(r.jsx)(l.a,{from:"/hunters",to:"/hunters/home"})]})]})},mn=t(54),vn=function(e){var n=e.component,t=Object(mn.a)(e,["component"]),c=Object(u.b)().isAuthenticated,o=$().resetContext;return c?Object(r.jsx)(l.b,Object(h.a)(Object(h.a)({},t),{},{render:function(e){return Object(r.jsx)(n,Object(h.a)(Object(h.a)({},t),e))}})):(o(),Object(r.jsx)(l.a,{to:{pathname:"/login"}}))};t(97);function yn(){var e=Object(L.a)(["\n  color: ",";\n  font-size: 1.2rem;\n  text-decoration: none;\n"]);return yn=function(){return e},e}function wn(){var e=Object(L.a)(["\n  width: 75vw;\n  height: 85vh;\n  border-radius: 8px;\n"]);return wn=function(){return e},e}function kn(){var e=Object(L.a)(["\n  font-size: 2.3rem;\n  font-family: Arial, Helvetica, sans-serif;\n"]);return kn=function(){return e},e}function Ln(){var e=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Ln=function(){return e},e}function Rn(){var e=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 5px;\n  margin-bottom: 20px;\n"]);return Rn=function(){return e},e}var Bn=R.b.div(Rn()),Dn=R.b.div(Ln()),In=R.b.h1(kn()),Cn=R.b.img(wn()),Pn=Object(R.b)(re.a)(yn(),(function(e){return e.theme.color}));function Sn(){var e=Object(L.a)(["\n  display: flex;\n  position: fixed;\n  overflow: hidden;\n  right: 0;\n  margin-top: 20px;\n  margin-right: 50px;\n"]);return Sn=function(){return e},e}var An=R.b.nav(Sn());var Tn=function(){return Object(r.jsx)(An,{children:Object(r.jsx)(Pn,{to:"/login",children:"Join Free!"})})},zn=t.p+"static/media/background1.3d03678f.jpg",Un=t.p+"static/media/hunter.f52bb8a4.jpg",En=t.p+"static/media/leader1.4d35bea6.jpg";function Hn(e){var n=e.ImageURL,t=e.Text,c=e.Title;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:c}),Object(r.jsx)(Cn,{src:n}),Object(r.jsx)("p",{children:t})]})}function Nn(){return Object(r.jsxs)(Bn,{children:[Object(r.jsx)("h1",{children:"Two types of characters"}),Object(r.jsx)(Hn,{Title:"Leaders",ImageURL:En,Text:"Attack other leaders to destroy their reputations! There can only be one"}),Object(r.jsx)(Hn,{Title:"Hunters",ImageURL:Un,Text:"Enjoy causing chaos? Accept bounties and help leaders take down their targets to earn some guns"})]})}var Yn=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Tn,{}),Object(r.jsxs)(Bn,{children:[Object(r.jsx)(In,{children:"BountyZone"}),Object(r.jsx)("p",{children:"A place where mistakes cannot be made "}),Object(r.jsx)(Cn,{src:zn}),Object(r.jsxs)(Dn,{children:[Object(r.jsx)("p",{children:"Ready to join the fight? Here is what you need to know"}),Object(r.jsx)(Nn,{}),Object(r.jsx)(Pn,{to:"/login",children:"Start Playing!"})]})]})]})};function _n(){var e=Object(L.a)(["\n  width: 400px;\n  height: 300px;\n  border-radius: 18px;\n  cursor: pointer;\n  margin-top: 20px;\n\n  transition: all 300ms ease-in;\n\n  &:hover {\n    margin-top: 0px;\n  }\n"]);return _n=function(){return e},e}function Fn(){var e=Object(L.a)(["\n  font-size: 1.3rem;\n  font-family: Arial, Helvetica, sans-serif;\n"]);return Fn=function(){return e},e}function Vn(){var e=Object(L.a)(["\n  font-size: 1.4rem;\n  margin-top: 40px;\n  text-decoration: none;\n  background-color: transparent;\n  color: ",";\n"]);return Vn=function(){return e},e}function Mn(){var e=Object(L.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-top: 30px;\n  gap: 20px;\n"]);return Mn=function(){return e},e}function Gn(){var e=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 5px;\n  margin-bottom: 20px;\n"]);return Gn=function(){return e},e}var Wn,$n,Jn,qn=R.b.div(Gn()),Zn=R.b.div(Mn()),Kn=Object(R.b)(re.a)(Vn(),(function(e){return e.theme.color})),Qn=R.b.h3(Fn()),Xn=R.b.img(_n());function et(e){return Object(r.jsxs)("div",{onClick:function(){return e.onSelect(e.RoleID)},children:[Object(r.jsx)("h4",{children:e.Title}),Object(r.jsx)(Xn,{src:e.ImageURL}),Object(r.jsx)("p",{children:e.Description})]})}var nt=Object(s.a)(),tt=null!==(Wn="https://luisdev99.github.io/BountyZone-frontend")?Wn:"",rt=null!==($n="lui-auth-d.us.auth0.com")?$n:"",ct=null!==(Jn="GKGy35XfoRm2iSyMzBnpTqsxFz6Y6gHI")?Jn:"";i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(J,{children:Object(r.jsx)(R.a,{theme:{color:"#0ef052"},children:Object(r.jsx)(u.a,{domain:rt,clientId:ct,redirectUri:tt,children:Object(r.jsx)(l.c,{history:nt,children:Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{path:"/",exact:!0,component:Yn}),Object(r.jsx)(l.b,{path:"/login",exact:!0,component:te}),Object(r.jsx)(vn,{path:"/register",component:function(){var e=Object(l.g)(),n=$().setPlayerContext,t=Object(u.b)(),o=t.user,a=t.isAuthenticated,i=Object(c.useState)([]),s=Object(G.a)(i,2),b=s[0],h=s[1];function p(e){return f.apply(this,arguments)}function f(){return(f=Object(j.a)(d.a.mark((function t(r){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=13;break}return t.prev=1,t.next=4,(new k).createAccount({Email:o.email,NickName:o.nickname,PlayerRoleID:r});case 4:c=t.sent,n(c.data),e.push(y(c.data.PlayerRole)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("Error while creating player character. Reason: "),console.log({e:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}return M()(Object(j.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(new k).getPlayerRoles();case 2:n=e.sent,h(n.data);case 4:case"end":return e.stop()}}),e)}))),[]),Object(r.jsxs)(qn,{children:[Object(r.jsx)(Qn,{children:"Looks like you are new here! Click the character which you would like to be"}),Object(r.jsx)(Zn,{children:b.map((function(e,n){return Object(r.jsx)(et,{RoleID:e.ID,Title:e.Type,ImageURL:e.ImageURL,onSelect:p,Description:e.Description},n)}))}),Object(r.jsx)(Kn,{to:"/",children:"Return to main page"})]})}}),Object(r.jsx)(vn,{path:"/leaders",component:Qe}),Object(r.jsx)(vn,{path:"/hunters",component:gn}),Object(r.jsx)(l.a,{from:"*",to:"/"})]})})})})})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.37c0a02b.chunk.js.map