"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{415:function(e,t,i){i.r(t);var n=i(439),c=i(243),r=i(689),a=i(87),o=i(791),s=i(184);t.default=function(){var e=(0,o.useState)([]),t=(0,n.Z)(e,2),i=t[0],u=t[1],h=(0,r.TH)();return(0,o.useEffect)((function(){c.Z.request({method:"GET",url:"https://api.themoviedb.org/3/trending/movie/day",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmQ0ODE5YjFkMzFjMGU5YzVmY2Q0YWUxN2NlYzBiMiIsInN1YiI6IjY0NzA2NjEwNzcwNzAwMDEzNjdlZmY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BH5Ex4koF22N6gg0mj72NBJQ7EPqMZd2hU1unPYNLqA"}}).then((function(e){u(e.data.results)})).catch((function(e){console.error(e)}))}),[]),(0,s.jsx)("ul",{children:i.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:h},children:e.title})},e.id)}))})}}}]);
//# sourceMappingURL=415.9cee3f8f.chunk.js.map