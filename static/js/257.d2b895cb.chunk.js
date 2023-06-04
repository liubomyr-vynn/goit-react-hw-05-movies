"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{854:function(n,e,i){i(2791);var t=i(5243),r=i(184);e.Z=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(t.iT,{height:80,width:80,color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#4fa94d",strokeWidth:2,strokeWidthSecondary:2})})}},9257:function(n,e,i){i.r(e),i.d(e,{default:function(){return Y}});var t,r,o,c,a,s,l,d=i(5861),x=i(9439),p=i(4687),h=i.n(p),f=i(1243),u=i(2791),g=i(7689),m=i(168),b=i(6444),v=i(1087),j=b.ZP.div(t||(t=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  /* align-items: center;\n  justify-content: center; */\n  gap: 20px;\n  margin-bottom: 20px;\n"]))),w=(0,b.ZP)(v.OL)(r||(r=(0,m.Z)(["\n  text-decoration: none;\n  align-items: center;\n  background-color: #226822;\n  border: 0;\n  border-radius: 100px;\n  box-sizing: border-box;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-flex;\n\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 20px;\n  max-width: 100px;\n  min-height: 40px;\n  min-width: 0px;\n  overflow: hidden;\n  padding: 0px;\n  padding-left: 20px;\n  padding-right: 20px;\n  text-align: center;\n  touch-action: manipulation;\n  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,\n    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,\n    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  user-select: none;\n  -webkit-user-select: none;\n  vertical-align: middle;\n\n  &:hover,\n  &:focus {\n    background-color: #497949;\n    color: #ffffff;\n  }\n"]))),Z=b.ZP.div(o||(o=(0,m.Z)(["\n  display: flex;\n  @media screen and (max-width: 700px) {\n    flex-direction: column;\n    gap: 20px;\n  }\n"]))),y=b.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-left: 30px;\n  @media screen and (max-width: 700px) {\n    margin-left: 0px;\n  }\n"]))),k=b.ZP.div(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n"]))),z=b.ZP.ul(s||(s=(0,m.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),I=(0,b.ZP)(v.OL)(l||(l=(0,m.Z)(["\n  text-decoration: none;\n  align-items: center;\n  background-color: #0a66c2;\n  border: 0;\n  border-radius: 100px;\n  box-sizing: border-box;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-flex;\n\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 20px;\n  width: 100px;\n  min-height: 40px;\n  min-width: 0px;\n  overflow: hidden;\n  padding: 0px;\n  padding-left: 20px;\n  padding-right: 20px;\n  text-align: center;\n  touch-action: manipulation;\n  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,\n    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,\n    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  user-select: none;\n  -webkit-user-select: none;\n  vertical-align: middle;\n\n  &:hover,\n  &:focus {\n    background-color: #0f2644;\n    color: #ffffff;\n  }\n\n  &:active {\n    background: #04111f;\n    color: rgb(255, 255, 255, 0.7);\n  }\n"]))),N=i(854),_=i(5150),J=i(184),Y=function(){var n,e,i=(0,u.useState)({}),t=(0,x.Z)(i,2),r=t[0],o=t[1],c=(0,u.useState)(""),a=(0,x.Z)(c,2),s=a[0],l=a[1],p=(0,u.useState)([]),m=(0,x.Z)(p,2),b=m[0],v=m[1],Y=(0,u.useState)(!1),P=(0,x.Z)(Y,2),S=P[0],W=P[1],C=(0,g.UO)(),O=(0,g.TH)(),U=(0,u.useRef)(null!==(n=null===(e=O.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,u.useEffect)((function(){W(!0);var n=function(){var n=(0,d.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.Z.get("https://api.themoviedb.org/3/movie/".concat(C.movieId),{params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmQ0ODE5YjFkMzFjMGU5YzVmY2Q0YWUxN2NlYzBiMiIsInN1YiI6IjY0NzA2NjEwNzcwNzAwMDEzNjdlZmY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BH5Ex4koF22N6gg0mj72NBJQ7EPqMZd2hU1unPYNLqA"}});case 3:e=n.sent,o(e.data),v(e.data.genres),e.data.poster_path?l("https://image.tmdb.org/t/p/w300".concat(e.data.poster_path)):l(_),W(!1),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0),W(!1);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();n()}),[C.movieId]),(0,J.jsxs)(j,{children:[(0,J.jsx)(w,{to:U.current,style:{textDecoration:"none"},children:"Return"}),(0,J.jsxs)(Z,{children:[S?(0,J.jsx)(N.Z,{}):(0,J.jsx)("img",{src:s||_,alt:r.original_title,style:{maxHeight:450,maxWidth:300}}),(0,J.jsxs)(y,{children:[(0,J.jsx)("h2",{children:r.original_title}),(0,J.jsxs)("p",{children:["User score: ",parseInt("".concat(10*r.vote_average)),"%"]}),(0,J.jsx)("h3",{children:"Overview:"}),(0,J.jsx)("p",{children:r.overview}),(0,J.jsx)("h3",{children:"Genres:"}),(0,J.jsx)("ul",{children:0!==b.length?b.map((function(n){return(0,J.jsx)("li",{children:n.name},n.id)})):(0,J.jsx)("p",{children:"We don't have any genres for this movie."})})]})]}),(0,J.jsxs)(k,{children:[(0,J.jsx)("h3",{children:"Additional information:"}),(0,J.jsxs)(z,{children:[(0,J.jsx)("li",{children:(0,J.jsx)(I,{to:"cast",children:"Cast"})}),(0,J.jsx)("li",{children:(0,J.jsx)(I,{to:"reviews",children:"Reviews"})})]})]}),(0,J.jsx)(u.Suspense,{fallback:(0,J.jsx)("div",{children:"Loading..."}),children:(0,J.jsx)(g.j3,{})})]})}},5150:function(n,e,i){n.exports=i.p+"static/media/actor.6242b50ac2d59c00d4b2.jpg"}}]);
//# sourceMappingURL=257.d2b895cb.chunk.js.map