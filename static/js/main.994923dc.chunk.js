(this.webpackJsonpgitsearch=this.webpackJsonpgitsearch||[]).push([[0],{38:function(e,t,a){e.exports=a(68)},46:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var r=a(14),n=a(15),s=a(17),l=a(16),o=a(18),i=a(1),c=a.n(i),u=a(13),m=a.n(u),h=a(9),p=a.n(h);a(43),a(44),a(45),a(46),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=a(3),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={username:"sigilai5",userData:[],userFollowers:[],userFollowing:[],userRepos:[],perPage:5},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"getUserData",value:function(){m.a.ajax({url:"https://api.github.com/users/"+this.state.username+"?client_id="+this.props.clientId+"&client_secret="+this.props.clientSecret,dataType:"json",cache:!1,success:function(e){this.setState({userData:e})}.bind(this),error:function(e,t,a){alert(a)}.bind(this)})}},{key:"getUserFollowers",value:function(){m.a.ajax({url:"https://api.github.com/users/"+this.state.username+"/followers",dataType:"json",cache:!1,success:function(e){this.setState({userFollowers:e}),console.log(e)}.bind(this),error:function(e,t,a){alert(a)}.bind(this)})}},{key:"getUserFollowing",value:function(){m.a.ajax({url:"https://api.github.com/users/"+this.state.username+"/following",dataType:"json",cache:!1,success:function(e){this.setState({userFollowing:e}),console.log(e)}.bind(this),error:function(e,t,a){alert(a)}.bind(this)})}},{key:"getUserRepos",value:function(){m.a.ajax({url:"https://api.github.com/users/"+this.state.username+"/repos",dataType:"json",cache:!1,success:function(e){this.setState({userRepos:e}),console.log(e)}.bind(this),error:function(e,t,a){alert(a)}.bind(this)})}},{key:"handleFormSubmit",value:function(e){this.setState({username:e},(function(){this.getUserData(),this.getUserFollowers(),this.getUserFollowing(),this.getUserRepos()}))}},{key:"componentDidMount",value:function(){this.getUserData(),this.getUserFollowers(),this.getUserFollowing(),this.getUserRepos()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,c.a.createElement("center",null,"Github Search")),c.a.createElement(f,{onFormSubmit:this.handleFormSubmit.bind(this)}),c.a.createElement(b,{userData:this.state.userData,userFollowers:this.state.userFollowers,userFollowing:this.state.userFollowing,userRepos:this.state.userRepos}))}}]),t}(i.Component);g.defaultProps={clientId:"163d925f27b21a8a0b8e",clientSecret:"3244c0d43f3c5f598cb98e3827f339764e742b24"};var b=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={activeItem:"1"},a.toggle=function(e){return function(t){a.state.activeItem!==e&&a.setState({activeItem:e})}},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.d,null,c.a.createElement(d.k,null,c.a.createElement(d.c,{md:"3"},c.a.createElement("h2",null,c.a.createElement("u",null,"User")),c.a.createElement("img",{src:this.props.userData.avatar_url,className:"img-fluid",alt:"",radius:"50%"}),c.a.createElement("br",null),c.a.createElement("h3",null,c.a.createElement(d.e,{icon:"user-check"})," ",this.props.userData.login),c.a.createElement("h5",null,c.a.createElement(d.e,{icon:"envelope"}),this.props.userData.email),c.a.createElement("h6",null,c.a.createElement(d.e,{icon:"location-arrow"})," ",this.props.userData.location),c.a.createElement("a",{href:this.props.userData.html_url,style:{color:"white"}},c.a.createElement(d.b,{color:"elegant"},"Visit Profile"))),c.a.createElement(d.c,{md:"9"},c.a.createElement("h2",null,c.a.createElement("u",null,"Profile")),c.a.createElement(d.d,null,c.a.createElement(d.g,{className:"nav-tabs mt-5"},c.a.createElement(d.h,null,c.a.createElement(d.e,{to:"#",active:"1"===this.state.activeItem,onClick:this.toggle("1"),role:"tab"},c.a.createElement(d.b,{rounded:!0,color:"info"},this.props.userData.followers," Followers"))),c.a.createElement(d.h,null,c.a.createElement(d.e,{to:"#",active:"2"===this.state.activeItem,onClick:this.toggle("2"),role:"tab"},c.a.createElement(d.b,{rounded:!0,color:"warning"},this.props.userData.following," Following"))),c.a.createElement(d.h,null,c.a.createElement(d.e,{to:"#",active:"3"===this.state.activeItem,onClick:this.toggle("3"),role:"tab"},c.a.createElement(d.b,{rounded:!0,color:"danger"},this.props.userData.public_repos," Repositrories")))),c.a.createElement(d.l,{activeItem:this.state.activeItem},c.a.createElement(d.m,{tabId:"1",role:"tabpanel"},c.a.createElement("p",{className:"mt-2"},this.props.userFollowers.map((function(e){return c.a.createElement("p",null,c.a.createElement("a",{href:e.html_url},c.a.createElement("img",{src:e.avatar_url,className:"img-fluid",alt:"",width:"80px",style:{width:100,height:100,borderBottomLeftRadius:50,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:50,overflow:"hidden"}}),"@",e.login))})))),c.a.createElement(d.m,{tabId:"2",role:"tabpanel"},c.a.createElement("p",{className:"mt-2"},this.props.userFollowing.map((function(e){return c.a.createElement("p",null,c.a.createElement("a",{href:e.html_url},c.a.createElement("img",{src:e.avatar_url,className:"img-fluid",alt:"",width:"80px",style:{width:100,height:100,borderBottomLeftRadius:50,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:50,overflow:"hidden"}}),"@",e.login))})))),c.a.createElement(d.m,{tabId:"3",role:"tabpanel"},c.a.createElement("p",{className:"mt-2"},this.props.userRepos.map((function(t){return c.a.createElement("p",null,c.a.createElement("a",{href:t.html_url},c.a.createElement("img",{src:e.props.userData.avatar_url,className:"img-fluid",alt:"",width:"80px",style:{width:100,height:100,borderBottomLeftRadius:50,borderBottomRightRadius:50,borderTopRightRadius:50,borderTopLeftRadius:50,overflow:"hidden"}}),t.name))}))))))))))}}]),t}(i.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault();var t=this.refs.username.value.trim();t?(this.props.onFormSubmit(t),this.refs.username.value=""):alert("Please enter a valid username")}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},c.a.createElement("label",null,"Search Users"),c.a.createElement("input",{type:"text",ref:"username",className:"form-control"})))}}]),t}(i.Component);p.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.994923dc.chunk.js.map