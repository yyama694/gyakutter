(function(e){function t(t){for(var r,a,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)a=o[d],s[a]&&p.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},s={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"31a8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Main")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),n("div",{staticClass:"notification"},[n("div",{staticClass:"description"},[e._v("\n      ユーザ名を指定して Search ボタンを押してください。\n    ")]),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("input",{ref:"input_user_id",staticClass:"input",attrs:{id:"search-text",tabindex:"1",type:"text",placeholder:"例）@TwitterJP"},domProps:{value:e.user_id},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}}})]),n("div",{staticClass:"column"},[n("a",{ref:"btn_search",staticClass:"button is-success",attrs:{tabindex:"2"},on:{click:e.search,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}}},[e._v("Search")])])]),n("section",{staticClass:"section"},[n("div",{staticClass:"spinner",attrs:{id:"spinner"}},[n("half-circle-spinner",{attrs:{"animation-duration":1e3,size:60,color:"#00d1b2"}})],1),n("div",{staticClass:"error",attrs:{id:"error-msg"}},[e._v("\n        ツィートが取得できませんでした。\n      ")]),e._l(e.list,function(t){return n("div",{key:t.id_str,staticClass:"box"},["ads"===t?n("div",{key:"ads_"+t.id_str,staticClass:"ads",attrs:{name:"ad-space"}}):n("div",{staticClass:"columns  is-mobile"},[n("div",{staticClass:"column is-1-desktop is-1-tablet is-2-mobile"},[n("figure",{staticClass:"image"},[n("img",{staticStyle:{"border-radius":"50%"},attrs:{clss:"is-rounded",src:t.user.profile_image_url_https}})])]),n("div",{staticClass:"column"},[n("span",{staticClass:"is-pulled-left has-text-black"},[e._v("\n              "+e._s(t.user.name)),n("span",{staticClass:"has-text-grey is-size-7"},[e._v("@"+e._s(t.user.screen_name))])]),n("span",{staticClass:"is-pulled-right has-text-grey is-size-7"},[e._v("\n              "+e._s(e.formatDate(t.created_at))+"\n            ")]),n("div",{staticClass:"tweet-text"},[e._v(e._s(t.text))])])])])}),n("a",{attrs:{href:"#",id:"return-top"}},[e._v("Top")])],2)])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hero is-primary"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v("\n          Gyakutter\n        ")]),n("h2",{staticClass:"subtitle"},[e._v("\n          ログイン不要！ 時系列昇順で ツィート を表示する Twitter\n          クライアントです。\n        ")])])])])}],c=(n("a481"),n("ac6a"),n("96cf"),n("3b8d")),l=n("bc3a"),u=n.n(l),d="https://twitter-ore-j.herokuapp.com/tweet/";function p(e){return f.apply(this,arguments)}function f(){return f=Object(c["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(d+t+"/50").then(function(e){return e.data.reverse()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),f.apply(this,arguments)}var m=n("4583"),h={components:{HalfCircleSpinner:m["a"]},name:"Main",props:{msg:String},data:function(){return{user_id:"",list:[]}},methods:{search:function(){document.getElementById("error-msg").style.display="none",document.getElementById("spinner").style.display="block";var e=document.getElementsByName("ad-space");e.forEach(function(e){while(e.firstChild)e.removeChild(e.firstChild)}),this.user_id=this.$refs.input_user_id.value;var t=this;p(this.user_id).then(function(e){t.list=e;for(var n=0;n<t.list.length;n++){var r=Math.floor(20*Math.random());0===r&&t.list.splice(n,0,"ads")}document.getElementById("spinner").style.display="none"}).catch(function(){t.list=[],document.getElementById("error-msg").style.display="block",document.getElementById("spinner").style.display="none"}),t.$refs.btn_search.focus()},formatDate:function(e){var t=new Date(Date.parse(e)),n="yyyy年MM月dd日 HH:mm:ss";return n=n.replace(/yyyy/g,t.getFullYear()),n=n.replace(/MM/g,("0"+(t.getMonth()+1)).slice(-2)),n=n.replace(/dd/g,("0"+t.getDate()).slice(-2)),n=n.replace(/HH/g,("0"+t.getHours()).slice(-2)),n=n.replace(/mm/g,("0"+t.getMinutes()).slice(-2)),n=n.replace(/ss/g,("0"+t.getSeconds()).slice(-2)),n},getDisplayWidh:function(){return document.body.clientWidth},scrollToTop:function(e,t){var n=document.getElementById(e);n.addEventListener("click",function(e){e.preventDefault();var n=new Date-0,r=window.pageYOffset,s=setInterval(function(){var e=new Date-n;e>t&&(clearInterval(s),e=t),window.scrollTo(0,r*(1-e/t))},10)},!1)}},mounted:function(){document.getElementById("search-text").focus(),this.scrollToTop("return-top",300)},updated:function(){var e=this.getDisplayWidh(),t=e>780?'<script src="//adm.shinobi.jp/s/6ceb5a2c7c61f2b1f65ef5095d17e63e"><\/script>':'<script src="//adm.shinobi.jp/s/ed15fe210d870b401447c2ae7992e5a7"><\/script>',n=document.getElementsByName("ad-space");n.forEach(function(n){var r=document.createElement("iframe");r.setAttribute("scrolling","no"),r.setAttribute("frameborder","0"),r.setAttribute("border","0"),r.setAttribute("class",e>780?"iframe-ads-pc":"iframe-ads-mobile"),n.appendChild(r);var s=r.contentWindow.document;s.open(),s.write(t),s.close()})}},v=h,g=(n("fa01"),n("2877")),y=Object(g["a"])(v,a,o,!1,null,null,null),b=y.exports,_={name:"app",components:{Main:b}},w=_,C=Object(g["a"])(w,s,i,!1,null,null,null),k=C.exports,x=n("9483");Object(x["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var E=n("ecee"),j=n("c074"),O=n("ad3d");E["c"].add(j["a"]),r["a"].component("font-awesome-icon",O["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(k)}}).$mount("#app")},fa01:function(e,t,n){"use strict";var r=n("31a8"),s=n.n(r);s.a}});
//# sourceMappingURL=app.afa1a152.js.map