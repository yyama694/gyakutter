(function(e){function t(t){for(var n,a,o=t[0],u=t[1],c=t[2],d=0,p=[];d<o.length;d++)a=o[d],i[a]&&p.push(i[a][0]),i[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,o=1;o<s.length;o++){var u=s[o];0!==i[u]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=s[0]))}return e}var n={},i={app:0},r=[];function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=n,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"08b0":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("a026"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Main")],1)},r=[],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{"background-color":"#eff7f6"},on:{click:e.hiddenUserMenu}},[e._m(0),s("div",{staticClass:"container main-area"},[s("div",{staticClass:"description"},[e._v("\n      ユーザ名を指定して Search ボタンを押してください。\n    ")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("input",{ref:"input_user_id",staticClass:"input",attrs:{id:"search-text",tabindex:"1",type:"text",placeholder:"例）@TwitterJP",list:"user-list"},domProps:{value:e.user_id},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}}}),s("datalist",{attrs:{id:"user-list"}},e._l(e.usersCandidate,function(e){return s("option",{key:e,domProps:{value:e}})}),0)]),s("div",{staticClass:"column"},[s("a",{ref:"btn_search",staticClass:"button is-success",attrs:{tabindex:"2"},on:{click:e.search,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}}},[e._v("Search")])])]),s("section",{staticClass:"section"},[s("div",{staticClass:"spinner",attrs:{id:"spinner"}},[s("half-circle-spinner",{attrs:{"animation-duration":1e3,size:60,color:"#00d1b2"}})],1),s("div",{staticClass:"error",attrs:{id:"error-msg"}},[e._v("\n        ツィートが取得できませんでした。\n      ")]),e._l(e.list,function(t){return s("div",{key:t.id_str,staticClass:"box",staticStyle:{"margin-bottom":"1.0rem"}},[s("div","ads"===t?{key:"ads_"+t.id_str,staticClass:"ads",attrs:{name:"ad-space"}}:[t.retweeted_status?s("div",[s("tweet",{attrs:{data:t},on:{user:e.showUserMenu}})],1):t.quoted_status?s("div",[s("quote-retweet",{attrs:{data:t},on:{user:e.showUserMenu}})],1):s("div",[s("tweet",{attrs:{data:t},on:{user:e.showUserMenu}})],1)])])}),s("a",{attrs:{href:"#",id:"return-top"}},[e._v("Top")])],2)]),s("div",{ref:"userMenu",staticClass:"card box",staticStyle:{padding:"1rem","background-color":"#f4f7f7"},attrs:{id:"user-menu"}},[s("a",{staticClass:"is-size-6",attrs:{href:"#",onclick:"return false;"},on:{click:e.searchUser}},[e._v("このユーザを検索")])])])},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hero is-primary hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[e._v("\n        Gyakutter\n      ")]),s("h2",{staticClass:"subtitle"},[e._v("\n        ログイン不要！ 時系列昇順で ツィート を表示する Twitter\n        クライアントです。\n      ")])])])}],u=(s("386d"),s("f559"),s("28a5"),s("ac6a"),s("96cf"),s("3b8d")),c=s("bc3a"),l=s.n(c),d="https://twitter-ore-j.herokuapp.com/tweet/";function p(e){return f.apply(this,arguments)}function f(){return f=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(d+t+"/50").then(function(e){return e.data.reverse()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),f.apply(this,arguments)}var m=s("4583"),h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.displayData?s("div",[e.data.retweeted_status?s("div",{staticClass:"columns is-mobile",staticStyle:{padding:"0",margin:"0"}},[s("div",{staticClass:"column is-1-desktop is-1-tablet is-2-mobile",staticStyle:{padding:"0"}},[s("font-awesome-icon",{staticClass:"fa-pull-right",attrs:{icon:"retweet"}})],1),s("div",{staticClass:"column"})]):e._e(),s("div",{staticClass:"columns  is-mobile"},[s("div",{staticClass:"column is-1-desktop is-1-tablet is-2-mobile"},[s("figure",{staticClass:"image"},[s("img",{staticStyle:{"border-radius":"50%"},attrs:{clss:"is-rounded",src:e.displayData.user.profile_image_url_https}})])]),s("div",{staticClass:"column"},[s("span",{staticClass:"is-pulled-left has-text-black"},[e._v("\n        "+e._s(e.displayData.user.name)),s("span",{staticClass:"has-text-grey is-size-7"},[s("a",{attrs:{href:"#",onclick:"return false;"},on:{click:function(t){return t.stopPropagation(),e.$emit("user",e.displayData.user.screen_name,t)}}},[e._v("@"+e._s(e.displayData.user.screen_name))])])]),s("span",{staticClass:"is-pulled-right has-text-grey is-size-7"},[e._v("\n        "+e._s(e.fd(e.displayData.created_at))+"\n      ")]),s(e.dynamicTweetText,{tag:"component",on:{user:e.showUserMenu}}),e.displayData.og?s("div",{staticClass:"box",staticStyle:{margin:"10px"}},[s("a",{staticClass:"columns url-img",attrs:{href:e.displayData.og.og_url,target:"_blank"}},[s("img",{staticClass:"column is-2",staticStyle:{"max-height":"120px",width:"auto","object-fit":"contain"},attrs:{src:e.displayData.og.og_image}}),s("div",{staticClass:"column"},[s("div",[e._v("\n              "+e._s(e.displayData.og.og_title)+"\n            ")]),s("div",[e._v("\n              "+e._s(e.displayData.og.og_description)+"\n            ")])])])]):e.lPhotoCount>0?s("div",{staticClass:"columns is-mobile is-marginless",staticStyle:{width:"100%","max-width":"1024px","line-height":"0"}},[s("div",{staticClass:"column is-marginless is-paddingless"},[s("img",{attrs:{src:e.displayData.extended_entities.media[0].media_url_https}}),s("br"),e.lPhotoCount>=3?s("img",{attrs:{src:e.displayData.extended_entities.media[2].media_url_https}}):e._e()]),e.lPhotoCount>=2?s("div",{staticClass:"column is-marginless is-paddingless"},[e.lPhotoCount>=2?s("img",{attrs:{src:e.displayData.extended_entities.media[1].media_url_https}}):e._e(),s("br"),e.lPhotoCount>=4?s("img",{attrs:{src:e.displayData.extended_entities.media[3].media_url_https}}):e._e()]):e._e()]):e._e()],1)])]):e._e()},_=[];s("a481");function g(e){return v.apply(this,arguments)}function v(){return v=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://twitter-ore-j.herokuapp.com/http/getog?url="+t,{responseType:"text"}).then(function(e){return JSON.parse(JSON.stringify(e.data).replace(/og:/g,"og_"))});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),v.apply(this,arguments)}function y(e){var t=new Date(Date.parse(e)),s="yyyy年MM月dd日 HH:mm:ss";return s=s.replace(/yyyy/g,t.getFullYear()),s=s.replace(/MM/g,("0"+(t.getMonth()+1)).slice(-2)),s=s.replace(/dd/g,("0"+t.getDate()).slice(-2)),s=s.replace(/HH/g,("0"+t.getHours()).slice(-2)),s=s.replace(/mm/g,("0"+t.getMinutes()).slice(-2)),s=s.replace(/ss/g,("0"+t.getSeconds()).slice(-2)),s}function b(e){if(!e.extended_entities)return 0;if(!e.extended_entities.media)return 0;var t=e.extended_entities.media;return t.filter(function(e){return"photo"===e.type}).length}function w(e){return e.forEach(function(e){e.extended_entities&&e.extended_entities.media[0]&&(e.text=e.text.replace(e.extended_entities.media[0].url,"")),e.retweeted_status&&e.retweeted_status.extended_entities&&e.retweeted_status.extended_entities.media[0]&&(e.retweeted_status.text=e.retweeted_status.text.replace(e.retweeted_status.extended_entities.media[0].url,"")),e.quoted_status&&e.quoted_status.extended_entities&&e.quoted_status.extended_entities.media[0]&&(e.quoted_status.text=e.quoted_status.text.replace(e.quoted_status.extended_entities.media[0].url,"")),e.quoted_status&&e.entities.urls[0]&&e.entities.urls[0].url&&(e.text=e.text.replace(e.entities.urls[0].url,""))}),e}function x(e){return e.forEach(function(e){var t=e.entities.user_mentions;t.length&&t.forEach(function(t){e.text=e.text.replace("@"+t.screen_name,"<a href=\"#\" @click.stop=\"$emit('user','"+t.screen_name+'\', $event);" onclick="return false;">@'+t.screen_name+"</a>")});var s=e.quoted_status&&e.quoted_status.entities&&e.quoted_status.entities.user_mentions;s&&s.length&&s.forEach(function(t){e.quoted_status.text=e.quoted_status.text.replace("@"+t.screen_name,"<a href=\"#\" @click.stop=\"$emit('user','"+t.screen_name+'\', $event);" onclick="return false;">@'+t.screen_name+"</a>")});var n=e.retweeted_status&&e.retweeted_status.entities&&e.retweeted_status.entities.user_mentions;n&&n.length&&n.forEach(function(t){e.retweeted_status.text=e.retweeted_status.text.replace("@"+t.screen_name,"<a href=\"#\" @click.stop=\"$emit('user','"+t.screen_name+'\', $event);" onclick="return false;">@'+t.screen_name+"</a>")})}),e}function C(e,t){return console.log(t),e.forEach(function(e){e.text=e.text.replace(/\n/g,"<br />");var s=e.entities.urls;s.length&&s.forEach(function(n,i){i+1===s.length&&g(n.expanded_url).then(function(s){s.og_image&&s.og_title&&s.og_description&&t.$set(e,"og",s)}),e.text=e.text.replace(n.url,'<a href="'+n.url+'" target="_brank">'+n.display_url+"</a>")});var n=e.quoted_status&&e.quoted_status.entities&&e.quoted_status.entities.urls;n&&n.length&&(e.quoted_status.text=e.quoted_status.text.replace(/\n/g,"<br />"),n.forEach(function(s,i){i+1===n.length&&g(s.expanded_url).then(function(s){s.og_image&&s.og_title&&s.og_description&&t.$set(e.quoted_status,"og",s)}),e.quoted_status.text=e.quoted_status.text.replace(s.url,'<a href="'+s.url+'" target="_brank">'+s.display_url+"</a>")}));var i=e.retweeted_status&&e.retweeted_status.entities&&e.retweeted_status.entities.urls;i&&i.length&&(e.retweeted_status.text=e.retweeted_status.text.replace(/\n/g,"<br />"),i.forEach(function(s,n){n+1===i.length&&g(s.expanded_url).then(function(s){s.og_image&&s.og_title&&s.og_description&&t.$set(e.retweeted_status,"og",s)}),e.retweeted_status.text=e.retweeted_status.text.replace(s.url,'<a href="'+s.url+'" target="_brank">'+s.display_url+"</a>")}))}),e}var k={props:{data:{type:Object,required:!0}},computed:{dynamicTweetText:function(){return{template:'<div class="tweet-text">'.concat(this.displayData.text,"</div>")}}},data:function(){return{displayData:void 0,lPhotoCount:0}},methods:{fd:function(e){return y(e)},showUserMenu:function(e,t){this.$emit("user",e,t)}},mounted:function(){this.data.retweeted_status?this.displayData=this.data.retweeted_status:this.displayData=this.data,this.lPhotoCount=b(this.data)}},E=k,M=(s("68d3"),s("2877")),D=Object(M["a"])(E,h,_,!1,null,"2b0e4d8f",null),$=D.exports,q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"columns  is-mobile"},[s("div",{staticClass:"column is-1-desktop is-1-tablet is-2-mobile"},[s("figure",{staticClass:"image"},[s("img",{staticStyle:{"border-radius":"50%"},attrs:{clss:"is-rounded",src:e.data.user.profile_image_url_https}})])]),s("div",{staticClass:"column"},[s("span",{staticClass:"is-pulled-left has-text-black"},[e._v("\n      "+e._s(e.data.user.name)),s("span",{staticClass:"has-text-grey is-size-7"},[s("a",{attrs:{href:"#",onclick:"return false;"},on:{click:function(t){return t.stopPropagation(),e.$emit("user",e.data.user.screen_name,t)}}},[e._v("@"+e._s(e.data.user.screen_name))])])]),s("span",{staticClass:"is-pulled-right has-text-grey is-size-7"},[e._v("\n      "+e._s(e.fd(e.data.created_at))+"\n    ")]),s(e.dynamicTweetText,{tag:"component",on:{user:e.showUserMenu}}),s("div",{staticClass:"box",staticStyle:{margin:"10px"}},[s("tweet",{attrs:{data:e.data.quoted_status},on:{user:e.showUserMenu}})],1)],1)])},T=[],S={components:{Tweet:$},props:{data:{type:Object,required:!0}},computed:{dynamicTweetText:function(){return{template:'<div class="tweet-text">'.concat(this.data.text,"</div>")}}},methods:{fd:function(e){return y(e)},showUserMenu:function(e,t){this.$emit("user",e,t)}}},j=S,O=Object(M["a"])(j,q,T,!1,null,null,null),P=O.exports,U=function(e){e.srcElement.style.visibility="hidden"},I={components:{HalfCircleSpinner:m["a"],Tweet:$,QuoteRetweet:P},name:"Main",props:{msg:String},data:function(){return{user_id:"",list:[],pre_user_id:"",usersCandidate:[]}},methods:{scroll:function(){var e=document.documentElement.scrollTop||document.body.scrollTop,t=document.getElementById("return-top");e>100?(t.removeEventListener("transitionend",U),t.style.opacity=.8,t.style.visibility="visible"):(t.style.opacity=0,t.addEventListener("transitionend",U))},search:function(){document.getElementById("error-msg").style.display="none",document.getElementById("spinner").style.display="block";var e=document.getElementsByName("ad-space");e.forEach(function(e){while(e.firstChild)e.removeChild(e.firstChild)}),this.user_id=this.$refs.input_user_id.value;var t=this;p(this.user_id).then(function(e){t.list=w(e),t.list=x(t.list),t.list=C(t.list,t);for(var s=0;s<t.list.length;s++){var n=Math.floor(20*Math.random());0===n&&t.list.splice(s,0,"ads")}document.getElementById("spinner").style.display="none";var i=decodeURIComponent(document.cookie).split(";").filter(function(e){return e.trim().startsWith("users=")})[0].substr(7).split(","),r=i.filter(function(e){return!e.startsWith(t.user_id)});r.unshift(t.user_id),r.splice(25);var a=new Date("2037/12/31 23:59");document.cookie="users="+encodeURIComponent(r.join(","))+"; expires="+a.toUTCString()+";",t.usersCandidate=r}).catch(function(){t.list=[],document.getElementById("error-msg").style.display="block",document.getElementById("spinner").style.display="none"})},getDisplayWidh:function(){return document.body.clientWidth},scrollToTop:function(e,t){var s=document.getElementById(e);s.addEventListener("click",function(e){e.preventDefault();var s=new Date-0,n=window.pageYOffset,i=setInterval(function(){var e=new Date-s;e>t&&(clearInterval(i),e=t),window.scrollTo(0,n*(1-e/t))},10)},!1)},showUserMenu:function(e,t){var s=t.clientX,n=t.clientY;this.$refs.userMenu.style.left=s+"px",this.$refs.userMenu.style.top=n+"px",this.$refs.userMenu.classList.add("show"),this.pre_user_id=e},hiddenUserMenu:function(){this.$refs.userMenu&&this.$refs.userMenu.classList.contains("show")&&this.$refs.userMenu.classList.remove("show")},searchUser:function(){this.$refs.input_user_id.value=this.pre_user_id,document.getElementById("spinner").style.display="block",document.getElementById("return-top").click(),setTimeout(this.search,300)}},mounted:function(){window.addEventListener("scroll",this.hiddenUserMenu),window.addEventListener("scroll",this.scroll),document.getElementById("search-text").focus(),this.scrollToTop("return-top",300);var e=decodeURIComponent(document.cookie).split(";"),t=e.filter(function(e){return e.trim().startsWith("users=")})[0].substr(7);this.usersCandidate=t.split(",")},updated:function(){var e=this.getDisplayWidh(),t=e>780?'<script src="//adm.shinobi.jp/s/6ceb5a2c7c61f2b1f65ef5095d17e63e"><\/script>':'<script src="//adm.shinobi.jp/s/ed15fe210d870b401447c2ae7992e5a7"><\/script>',s=document.getElementsByName("ad-space");s.forEach(function(s){if(!(s.children.length>0)){var n=document.createElement("iframe");n.setAttribute("scrolling","no"),n.setAttribute("frameborder","0"),n.setAttribute("border","0"),n.setAttribute("class",e>780?"iframe-ads-pc":"iframe-ads-mobile"),s.appendChild(n);var i=n.contentWindow.document;i.open(),i.write(t),i.close()}})}},B=I,L=(s("fa01"),Object(M["a"])(B,a,o,!1,null,null,null)),R=L.exports,A={name:"app",components:{Main:R}},N=A,W=Object(M["a"])(N,i,r,!1,null,null,null),z=W.exports,H=s("9483");Object(H["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var J=s("ecee"),F=s("c074"),Y=s("ad3d");J["c"].add(F["a"]),n["a"].component("font-awesome-icon",Y["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(z)}}).$mount("#app")},"68d3":function(e,t,s){"use strict";var n=s("6c38"),i=s.n(n);i.a},"6c38":function(e,t,s){},fa01:function(e,t,s){"use strict";var n=s("08b0"),i=s.n(n);i.a}});
//# sourceMappingURL=app.bbaf8cec.js.map