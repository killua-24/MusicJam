(this.webpackJsonputube=this.webpackJsonputube||[]).push([[0],{3:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var n=i(2),c=i.n(n),s=i(18),a=i.n(s),r=i(9),o=i.n(r),l=i(19),d=i(4),u=i(5),m=i(7),j=i(6),b=(i(3),i(0)),h=function(e){var t=e.video,i=e.onVideoSelect;return Object(b.jsxs)("div",{onClick:function(){return i(t)},className:"video item",children:[Object(b.jsx)("img",{alt:t.snippet.title,className:"ui image ",src:t.snippet.thumbnails.medium.url}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("div",{className:"list-text",children:t.snippet.title.replace(/&amp;/g,"&").replace(/&#39;/g," ")})})]})},p=function(e){var t=e.videos,i=e.onVideoSelect,n=t.map((function(e){return Object(b.jsx)(h,{onVideoSelect:i,video:e},e.id.videoId)}));return Object(b.jsx)("div",{className:"ui relaxed divided list",children:n})},v=function(e){Object(m.a)(i,e);var t=Object(j.a)(i);function i(){var e;Object(d.a)(this,i);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(u.a)(i,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"search-bar ui segment search",children:Object(b.jsx)("form",{className:"ui form",onSubmit:this.onFormSubmit,children:Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:Object(b.jsxs)("h1",{className:"headline",children:[Object(b.jsx)("i",{className:"music icon"}),"Music Jam"]})}),Object(b.jsx)("input",{type:"text",placeholder:"Search anything",value:this.state.term,onChange:this.onInputChange})]})})})}}]),i}(c.a.Component),O=i(20),x=i.n(O).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:10,key:"AIzaSyDf3fUMeyWPQZ9qQ56WbOYnXt6sCpLZa6k"}}),f=function(e){var t=e.video;if(!t)return Object(b.jsx)("div",{className:"loadme",children:Object(b.jsx)("div",{className:"ui active centered inline loader"})});var i="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"ui embed",children:Object(b.jsx)("iframe",{title:"video player",src:i})}),Object(b.jsxs)("div",{className:"ui segment",children:[Object(b.jsx)("h4",{className:"ui",children:t.snippet.title.replace(/&amp;/g,"&").replace(/&#39;/g," ")}),Object(b.jsx)("p",{children:t.snippet.description})]})]})},g=function(e){Object(m.a)(i,e);var t=Object(j.a)(i);function i(){var e;Object(d.a)(this,i);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(l.a)(o.a.mark((function t(i){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.get("/search",{params:{q:i}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(i,[{key:"componentDidMount",value:function(){this.onTermSubmit("kshmr")}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"ui container bg-color",children:[Object(b.jsx)(v,{onFormSubmit:this.onTermSubmit}),Object(b.jsx)("div",{className:"ui grid",children:Object(b.jsxs)("div",{className:"ui row",children:[Object(b.jsx)("div",{className:"eleven wide column",children:Object(b.jsx)(f,{video:this.state.selectedVideo})}),Object(b.jsx)("div",{className:"five wide column",children:Object(b.jsx)(p,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})})]})})]})}}]),i}(c.a.Component);a.a.render(Object(b.jsx)(g,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.d4fdde1d.chunk.js.map