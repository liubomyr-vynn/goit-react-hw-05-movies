"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{854:function(e,n,i){i(2791);var t=i(5243),r=i(184);n.Z=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(t.Z1,{height:"100",width:"100",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},9257:function(e,n,i){i.r(n),i.d(n,{default:function(){return z}});var t,r,a,s,l,c,o=i(5861),d=i(9439),x=i(4687),p=i.n(x),h=i(1243),u=i(2791),f=i(7689),m=i(1087),j=i(168),g=i(6444),v=g.ZP.div(t||(t=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  /* align-items: center;\n  justify-content: center; */\n  gap: 20px;\n  margin-bottom: 20px;\n"]))),Z=g.ZP.div(r||(r=(0,j.Z)(["\n  margin-right: auto;\n  display: inline-block;\n\n  outline: none;\n  cursor: pointer;\n  font-weight: 600;\n  border-radius: 3px;\n  padding: 8px 20px;\n  border: 1px solid #42ecc2;\n  line-height: 1.15;\n  font-size: 16px;\n  margin-left: 15px;\n\n  &:hover {\n    transition: all 0.1s ease;\n    box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;\n  }\n"]))),w=g.ZP.div(a||(a=(0,j.Z)(["\n  display: flex;\n  @media screen and (max-width: 700px) {\n    flex-direction: column;\n    gap: 20px;\n  }\n"]))),b=g.ZP.div(s||(s=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-left: 30px;\n  @media screen and (max-width: 700px) {\n    margin-left: 0px;\n  }\n"]))),y=g.ZP.div(l||(l=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n"]))),I=g.ZP.ul(c||(c=(0,j.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),N=i(854),_=i(5150),C=i(184),z=function(){var e,n,i=(0,u.useState)({}),t=(0,d.Z)(i,2),r=t[0],a=t[1],s=(0,u.useState)(""),l=(0,d.Z)(s,2),c=l[0],x=l[1],j=(0,u.useState)([]),g=(0,d.Z)(j,2),z=g[0],k=g[1],J=(0,u.useState)(!1),Y=(0,d.Z)(J,2),P=Y[0],S=Y[1],U=(0,f.UO)(),O=(0,f.TH)(),E=(0,u.useRef)(null!==(e=null===(n=O.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,u.useEffect)((function(){S(!0);var e=function(){var e=(0,o.Z)(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.Z.get("https://api.themoviedb.org/3/movie/".concat(U.movieId),{params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmQ0ODE5YjFkMzFjMGU5YzVmY2Q0YWUxN2NlYzBiMiIsInN1YiI6IjY0NzA2NjEwNzcwNzAwMDEzNjdlZmY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BH5Ex4koF22N6gg0mj72NBJQ7EPqMZd2hU1unPYNLqA"}});case 3:n=e.sent,a(n.data),k(n.data.genres),n.data.poster_path?x("https://image.tmdb.org/t/p/w300".concat(n.data.poster_path)):x(_),S(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),S(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[U.movieId]),(0,C.jsxs)(v,{children:[(0,C.jsx)(Z,{children:(0,C.jsx)(m.rU,{to:E.current,style:{textDecoration:"none"},children:"Return"})}),(0,C.jsxs)(w,{children:[P?(0,C.jsx)(N.Z,{}):(0,C.jsx)("img",{src:c||_,alt:r.original_title,style:{maxHeight:450,maxWidth:300}}),(0,C.jsxs)(b,{children:[(0,C.jsx)("h2",{children:r.original_title}),(0,C.jsxs)("p",{children:["User score: ",parseInt("".concat(10*r.vote_average)),"%"]}),(0,C.jsx)("h3",{children:"Overview:"}),(0,C.jsx)("p",{children:r.overview}),(0,C.jsx)("h3",{children:"Genres:"}),(0,C.jsx)("ul",{children:0!==z.length?z.map((function(e){return(0,C.jsx)("li",{children:e.name},e.id)})):(0,C.jsx)("p",{children:"We don't have any genres for this movie."})})]})]}),(0,C.jsxs)(y,{children:[(0,C.jsx)("h3",{children:"Additional information:"}),(0,C.jsxs)(I,{children:[(0,C.jsx)("li",{children:(0,C.jsx)(m.OL,{to:"cast",children:"Cast"})}),(0,C.jsx)("li",{children:(0,C.jsx)(m.OL,{to:"reviews",children:"Reviews"})})]})]}),(0,C.jsx)(u.Suspense,{fallback:(0,C.jsx)("div",{children:"Loading..."}),children:(0,C.jsx)(f.j3,{})})]})}},5150:function(e,n,i){e.exports=i.p+"static/media/actor.6242b50ac2d59c00d4b2.jpg"}}]);
//# sourceMappingURL=257.4dcd1aa6.chunk.js.map