"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[591],{577:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var i,a,r,o,c=e(439),p=e(689),s=e(243),d=e(791),l=e.p+"static/media/actor.6242b50ac2d59c00d4b2.jpg",h=e(766),m=e(444),u=m.ZP.ul(i||(i=(0,h.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  grid-gap: 20px;\n  margin-top: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n"]))),x=m.ZP.li(a||(a=(0,h.Z)(["\n  border-radius: 3px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: pointer;\n  }\n"]))),g=m.ZP.img(r||(r=(0,h.Z)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n"]))),f=m.ZP.p(o||(o=(0,h.Z)(["\n  padding: 10px;\n"]))),j=e(184),b=function(){var n=(0,d.useState)([]),t=(0,c.Z)(n,2),e=t[0],i=t[1],a=(0,p.UO)();return(0,d.useEffect)((function(){var n={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(a.movieId,"/credits"),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmQ0ODE5YjFkMzFjMGU5YzVmY2Q0YWUxN2NlYzBiMiIsInN1YiI6IjY0NzA2NjEwNzcwNzAwMDEzNjdlZmY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BH5Ex4koF22N6gg0mj72NBJQ7EPqMZd2hU1unPYNLqA"}};s.Z.request(n).then((function(n){i(n.data.cast)})).catch((function(n){console.error(n)}))}),[a.movieId]),(0,j.jsxs)("div",{children:[e.length>0&&(0,j.jsx)(u,{children:e.map((function(n){return(0,j.jsxs)(x,{children:[null!==n.profile_path?(0,j.jsx)(g,{src:"https://image.tmdb.org/t/p/w300".concat(n.profile_path),alt:n.name}):(0,j.jsx)(g,{src:l,alt:n.name}),(0,j.jsx)(f,{children:n.name})]},n.id)}))}),0===e.length&&(0,j.jsx)("p",{children:"We don't have any cast for this movie."})]})}}}]);
//# sourceMappingURL=591.03f942f3.chunk.js.map