(this["webpackJsonpreact-jamming"]=this["webpackJsonpreact-jamming"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),c=n(9),i=n.n(c),o=(n(17),n(11)),u=n(3);n(18);function l(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),s=n[0],c=n[1];return Object(r.jsxs)("div",{className:"SearchBar",children:[Object(r.jsx)("input",{type:"text",placeholder:"Enter A Song, Album, or Artist",onChange:function(e){var t=e.target;console.log(t.value),c(t.value)},value:s}),Object(r.jsx)("button",{className:"SearchButton",onClick:function(){e.onSearch(s)},children:"SEARCH"})]})}n(19),n(20);function h(e){return Object(r.jsxs)("div",{className:"Track",children:[Object(r.jsxs)("div",{className:"Track-information",children:[Object(r.jsx)("h3",{children:e.name}),Object(r.jsxs)("p",{children:[e.artist," | ",e.album]})]}),Object(r.jsx)("button",{className:"Track-action",onClick:e.handleClick,children:e.isRemoval?"-":"+"})]})}function p(e){return Object(r.jsx)("div",{className:"TrackList",children:e.tracks.map((function(t){return Object(r.jsx)(h,{name:t.name,artist:t.artist,album:t.album,isRemoval:e.isRemoval,handleClick:function(){return e.onClick(t)}},t.id)}))})}p.defaultProps={tracks:[]};n(21);function d(e){return Object(r.jsxs)("div",{className:"SearchResults",children:[Object(r.jsx)("h2",{children:"Results"}),Object(r.jsx)(p,{tracks:e.searchResults,onClick:e.onAdd,isRemoval:!1})]})}n(22);function f(e){return Object(r.jsxs)("div",{className:"Playlist",children:[Object(r.jsx)("input",{onChange:function(t){t.preventDefault(),e.onNameChange(t.target.value)},value:e.playlistName}),Object(r.jsx)(p,{tracks:e.playlistTracks,isRemoval:!0,onClick:e.onRemove}),Object(r.jsx)("button",{className:"Playlist-save",onClick:e.onSave,children:"SAVE TO SPOTIFY"})]})}n(23);var m=n(2),b=n.n(m),v=n(5),j=n(10),g=n(8),k=n.n(g),x={authorization_endpoint:"https://accounts.spotify.com/authorize",redirect_url:"http://johnarumemi.github.io/react-jamming",scope:"playlist-modify-public",_users_access_token:"",hash_params:{},expires_at:"",clearAccessToken:function(){this.access_token="",this.expires_at="",this.hash_params={}},getRequestUrl:function(){return"https://accounts.spotify.com/authorize?client_id=".concat(this.clientId,"&response_type=token&scope=").concat(this.scope,"&redirect_uri=").concat(this.redirect_url).replace(/[\s\n]/,"")},get access_token(){return this._users_access_token},set access_token(e){this._users_access_token=e},get clientId(){return"6c5fb4a3fa6048678ac42dc5271538d8"},getHashFragment:function(){return window.location.hash},parseHash:function(){var e=new RegExp(Object(j.a)(/(?<=[#&])((?:(?![\t-\r &=\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])*)=((?:(?![\t-\r &=\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])*)[\t-\r &\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?/g,{key:1,value:2})),t=this.getHashFragment();if(!t)return console.debug("\n            hash fragment is empty\n            ------\n            ".concat(t,"\n            -----\n            Could not parse harsh fragment\n            ")),null;return Array.from(t.matchAll(e)).reduce((function(e,t){if(e[t.groups.key]=t.groups.value,Object.defineProperty(e,t.groups.key,{value:t.groups.value,writable:!1,enumerable:!0,configurable:!0}),"expires_in"===t.groups.key){var n=k.a.HTML5_FMT.DATETIME_LOCAL_SECONDS,r=Number(t.groups.value),a=k()().add(r,"seconds").format(n);Object.defineProperty(e,"expires_at",{value:a,writable:!1,enumerable:!0,configurable:!0})}return e}),{})},update_token_data:function(e){var t=this;this.hash_params=e,this.access_token=e.access_token,this.expires_at=e.expires_at;var n=e.expires_in;setTimeout((function(){t.hash_params="",t.access_token="",t.expires_at=""}),1e3*Number(n))},get isHashParamsAvailable(){var e=this.parseHash();return!!(e&&e.access_token&&e.expires_in)&&(this.hash_params=e,!0)},getAccessToken:function(){return this.access_token?this.access_token:this.isHashParamsAvailable?(this.update_token_data(this.hash_params),window.history.pushState("Access Token",null,"/"),this.access_token):(window.location.assign(this.getRequestUrl()),console.log("redirecting user to get access token"),void setTimeout((function(){window.history.replaceState("",null,"/")}),1e3))},search:function(e){var t=this;return Object(v.a)(b.a.mark((function n(){var r,a,s,c,i,o;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=3;break}return console.debug("empty search term passed in, cancelling search."),n.abrupt("return");case 3:return r="https://api.spotify.com/v1/search?type=track&q=".concat(e),a=t.getAccessToken(),s={method:"GET",headers:{Authorization:"Bearer ".concat(a)}},n.prev=6,n.next=9,fetch(r,s);case 9:if(!(i=n.sent).ok){n.next=17;break}return n.next=13,i.json();case 13:return c=n.sent,o=c.tracks.items.map((function(e){return{id:e.id,name:e.name.replace(/\(.*\)/,"").trim(),artist:e.artists[0].name,album:e.album.name,uri:e.uri}})),console.debug(o),n.abrupt("return",o);case 17:throw new Error("failed to retrieve Spotify search data\n"+i.statusText);case 20:return n.prev=20,n.t0=n.catch(6),console.error(n.t0),n.abrupt("return",new Promise.reject(n.t0.message?n.t0.message:c));case 24:case"end":return n.stop()}}),n,null,[[6,20]])})))()},_getUserId:function(){var e=this;return Object(v.a)(b.a.mark((function t(){var n,r,a,s,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.getAccessToken(),r={Authorization:"Bearer ".concat(n)},"https://api.spotify.com/v1/me",t.prev=3,t.next=6,fetch("https://api.spotify.com/v1/me",{method:"GET",headers:r});case 6:if(!(s=t.sent).ok){t.next=14;break}return t.next=10,s.json();case 10:return a=t.sent,(c=a.id)&&console.debug("Successfully retrieved Spotify user_id"),t.abrupt("return",c);case 14:throw new Error("failed to retrieve user id");case 17:return t.prev=17,t.t0=t.catch(3),console.error(t.t0),t.abrupt("return",new Promise.reject(t.t0.message?t.t0.message:a));case 21:case"end":return t.stop()}}),t,null,[[3,17]])})))()},_createPlaylist:function(e){var t=this;return Object(v.a)(b.a.mark((function n(){var r,a,s,c,i,o,u,l;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,t._getUserId();case 4:if(r=n.sent){n.next=7;break}return n.abrupt("return");case 7:return a=t.getAccessToken(),s="https://api.spotify.com/v1/users/".concat(r,"/playlists"),c={Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},i={name:e,public:!0,collaborative:!1,description:"Jamming App Playlist"},n.prev=11,n.next=14,fetch(s,{method:"POST",body:JSON.stringify(i),headers:c});case 14:if(!(u=n.sent).ok){n.next=22;break}return n.next=18,u.json();case 18:return o=n.sent,(l=o.id)&&console.debug("Successfully created Playlist ".concat(e)),n.abrupt("return",l);case 22:throw new Error("failed to create playlist\n"+u.statusText);case 25:return n.prev=25,n.t0=n.catch(11),console.error(n.t0),n.abrupt("return",new Promise.reject(n.t0.message?n.t0.message:o));case 29:case"end":return n.stop()}}),n,null,[[11,25]])})))()},savePlaylist:function(e,t){var n=this;return Object(v.a)(b.a.mark((function r(){var a,s,c,i,o,u,l,h;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e||t){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,n._createPlaylist(e);case 4:if(a=r.sent){r.next=7;break}return r.abrupt("return");case 7:return s=n.getAccessToken(),c="https://api.spotify.com/v1/playlists/".concat(a,"/tracks"),i={Authorization:"Bearer ".concat(s),"Content-Type":"application/json"},o={uris:t},r.prev=11,r.next=14,fetch(c,{method:"POST",body:JSON.stringify(o),headers:i});case 14:if(!(u=r.sent).ok){r.next=22;break}return r.next=18,u.json();case 18:return l=r.sent,(h=l.id)&&console.debug("\n                Successfully saved tracks to playlist ".concat(e,". \n                snapshot id: ").concat(h)),r.abrupt("return",h);case 22:throw new Error("failed to save playlist");case 25:r.prev=25,r.t0=r.catch(11),console.error(r.t0);case 28:case"end":return r.stop()}}),r,null,[[11,25]])})))()}};function y(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)("New Playlist"),i=Object(u.a)(c,2),h=i[0],p=i[1],m=Object(a.useState)([]),b=Object(u.a)(m,2),v=b[0],j=b[1];Object(a.useEffect)((function(){var e=function(){x.getAccessToken()};return window.addEventListener("load",e),function(){window.removeEventListener("load",e)}}),[]);return Object(r.jsxs)("div",{"data-testid":"app",children:[Object(r.jsxs)("h1",{"aria-level":"1",children:["Ja",Object(r.jsx)("span",{className:"highlight",children:"mm"}),"ing"]}),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{onSearch:function(e){x.search(e).then((function(e){s(e)}))}}),Object(r.jsxs)("div",{className:"App-playlist",children:[Object(r.jsx)(d,{searchResults:n,onAdd:function(e){v.every((function(t){return t.id!==e.id}))&&j((function(t){return[].concat(Object(o.a)(t),[e])}))}}),Object(r.jsx)(f,{playlistName:h,onNameChange:function(e){return p(e)},playlistTracks:v,onRemove:function(e){var t=v.filter((function(t){return t.id!==e.id}));j(t)},onSave:function(){var e=v.map((function(e){return e.uri}));x.savePlaylist(h,e).then((function(){p("New Playlist"),j([])}))}})]})]})]})}var O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root")),O()}],[[26,1,2]]]);
//# sourceMappingURL=main.a1274795.chunk.js.map