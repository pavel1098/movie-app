(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{22:function(e,a,t){e.exports=t(48)},48:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(15),c=t.n(r),l=t(2),o=t.n(l),s=t(3),m=t(16),v=t(17),u=t(20),g=t(18),p=t(21),d=function(){return i.a.createElement("nav",null,i.a.createElement("div",{className:"nav-wrapper black "},i.a.createElement("a",{href:"#",className:"brand-logo"},"__TheMovieDB")))},E=function(e){return i.a.createElement("div",{className:"col s12 m6 l3"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image waves-effect"},null!=e.image?i.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185".concat(e.image),alt:"Movie image",style:{height:300}}):i.a.createElement("img",{src:"https://ru.uoslab.com/images/tovary/no_image.jpg",alt:"Movie image"})),i.a.createElement("div",{className:"card-content"},i.a.createElement("p",null,i.a.createElement("a",{href:"#",onClick:function(){e.viewMovieInfo(e.movieId),e.getSimilarMovies(e.movieId)}},"More info")))))},f=function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12"},e.movies.map((function(a,t){return i.a.createElement(E,{viewMovieInfo:e.viewMovieInfo,getSimilarMovies:e.getSimilarMovies,movieId:a.id,key:t,image:a.poster_path})})))))},h=function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},e.currentPage>1?i.a.createElement("a",{href:"#!",onClick:function(){return e.nextPage(e.currentPage-1)}},i.a.createElement("i",{className:"material-icons"},"navigate_before")):"",i.a.createElement("a",{href:"#!",onClick:function(){return e.nextPage(e.currentPage+1)}},i.a.createElement("i",{className:"material-icons"},"navigate_next"))))},M=function(e){return i.a.createElement("div",{className:"col s12 m6 l3"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image waves-effect"},null!=e.image?i.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185".concat(e.image),alt:"Movie image"}):i.a.createElement("img",{src:"https://ru.uoslab.com/images/tovary/no_image.jpg",alt:"Movie image"})),i.a.createElement("div",{className:"card-content",style:{height:70,padding:5}},e.title)))},w=function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12"},e.similarMovies.map((function(e,a){return i.a.createElement(M,{key:a,movieId:e.id,image:e.poster_path,title:e.title})})))))},b=function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row",onClick:e.closeMovieInfo,style:{cursor:"pointer",paddingTop:50}},i.a.createElement("i",{className:"material-icons"},"navigate_before"),i.a.createElement("span",{style:{marginLeft:10}},"Go back")),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12 m4"},null!=e.currentMovie.poster_path?i.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185".concat(e.currentMovie.poster_path),alt:"Movie image",style:{width:"90%"}}):i.a.createElement("img",{src:"https://ru.uoslab.com/images/tovary/no_image.jpg",alt:"Movie image"})),i.a.createElement("div",{className:"col s12 m8"},i.a.createElement("div",{className:"info-container"},i.a.createElement("h4",null,i.a.createElement("p",null,e.currentMovie.title)),i.a.createElement("p",null,i.a.createElement("b",null,"Release date:")," ",e.currentMovie.release_date),i.a.createElement("p",null,e.currentMovie.overview),i.a.createElement("p",null,i.a.createElement("b",null,"Original language: "),e.currentMovie.original_language),i.a.createElement("p",null,i.a.createElement("b",null,"Popularity: "),e.currentMovie.popularity)))),i.a.createElement("div",{className:"row"},i.a.createElement("h4",null,i.a.createElement("p",null,"Similar movies"))),i.a.createElement("div",null,i.a.createElement(w,{similarMovies:e.similarMovies})))},N=t(19),y=t.n(N),_=(t(45),y.a.create({baseURL:"https://api.themoviedb.org/3/",headers:{Accept:"application/json","Content-Type":"application/json"}})),k=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(g.a)(a).call(this,e))).getPopularMovies=function(){var e;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.awrap(_.get("/movie/popular?api_key=".concat(t.apiKey,"&language=en-US&page=1")));case 2:e=a.sent,t.setState({movies:Object(s.a)(e.data.results)});case 4:case"end":return a.stop()}}))},t.getSimilarMovies=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(_.get("/movie/".concat(e,"/similar?api_key=").concat(t.apiKey,"&language=en-US&page=1")));case 2:a=n.sent,t.setState({similarMovies:Object(s.a)(a.data.results)});case 4:case"end":return n.stop()}}))},t.viewMovieInfo=function(e){var a=t.state.movies.filter((function(a){return a.id===e})),n=a.length>0?a[0]:null;t.setState({currentMovie:n})},t.closeMovieInfo=function(){t.setState({currentMovie:null})},t.nextPage=function(e){var a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(_.get("/movie/popular?api_key=".concat(t.apiKey,"&language=en-US&page=").concat(e)));case 2:a=n.sent,t.setState({movies:Object(s.a)(a.data.results),currentPage:a.data.page});case 4:case"end":return n.stop()}}))},t.state={movies:[],currentPage:1,currentMovie:null,similarMovies:[]},t.apiKey="fbdf8f0bc6851ffc975c8254d9dbc7fa",t.getPopularMovies(),t}return Object(p.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,null),null==this.state.currentMovie?i.a.createElement("div",null,i.a.createElement(f,{movies:this.state.movies,viewMovieInfo:this.viewMovieInfo,getSimilarMovies:this.getSimilarMovies}),i.a.createElement(h,{currentPage:this.state.currentPage,nextPage:this.nextPage})):i.a.createElement("div",null,i.a.createElement(b,{currentMovie:this.state.currentMovie,similarMovies:this.state.similarMovies,closeMovieInfo:this.closeMovieInfo})))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.c6964f79.chunk.js.map