(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f7c6ff9"],{"064b":function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},"0a51":function(t,e,r){"use strict";var n=r("1c8b"),o=r("1e2c"),i=r("d890"),a=r("faa8"),s=r("a719"),c=r("d910").f,l=r("c69d"),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var u={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(u[e]=!0),e};l(d,f);var b=d.prototype=f.prototype;b.constructor=d;var p=b.toString,m="Symbol(test)"==String(f("test")),h=/^Symbol\((.*)\)[^)]+$/;c(b,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(a(u,t))return"";var r=m?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},"1bbd":function(t,e,r){"use strict";var n=r("9f67"),o=r("d910"),i=r("38b9");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},"1ea7":function(t,e,r){var n=r("efe2"),o=r("90fb"),i=r("f594"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4350:function(t,e,r){var n=r("90fb");e.f=n},"5cbe":function(t,e,r){t.exports=r.p+"img/recommend_bg.794b6628.jpg"},"5f1f":function(t,e,r){"use strict";r("88ae")},"6d51":function(t,e,r){var n=r("1b99"),o=r("faa8"),i=r("4350"),a=r("d910").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},"77ad":function(t,e,r){"use strict";var n=r("1c8b"),o=r("a719"),i=r("74e7"),a=r("e1d6"),s=r("d88d"),c=r("da10"),l=r("1bbd"),f=r("90fb"),u=r("1ea7"),d=r("ff9c"),b=u("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),m=f("species"),h=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!b||!p},{slice:function(t,e){var r,n,f,u=c(this),d=s(u.length),b=a(t,d),p=a(void 0===e?d:e,d);if(i(u)&&(r=u.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[m],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return h.call(u,b,p);for(n=new(void 0===r?Array:r)(v(p-b,0)),f=0;b<p;b++,f++)b in u&&l(n,f,u[b]);return n.length=f,n}})},"88ae":function(t,e,r){},"96db":function(t,e,r){"use strict";var n=r("f62c").charAt,o=r("b702"),i=r("99ee"),a="String Iterator",s=o.set,c=o.getterFor(a);i(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},"98e0":function(t,e,r){var n=r("1c8b"),o=r("e62b"),i=r("f471"),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},"9b11":function(t,e,r){var n=r("6d51");n("iterator")},af86:function(t,e,r){var n=r("d890"),o=r("064b"),i=r("a133"),a=r("0fc1"),s=r("90fb"),c=s("iterator"),l=s("toStringTag"),f=i.values;for(var u in o){var d=n[u],b=d&&d.prototype;if(b){if(b[c]!==f)try{a(b,c,f)}catch(m){b[c]=f}if(b[l]||a(b,l,u),o[u])for(var p in i)if(b[p]!==i[p])try{a(b,p,i[p])}catch(m){b[p]=i[p]}}}},b3d7:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper",attrs:{id:"home"}},[r("nav-bar",{staticClass:"home-nav"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物街")])]),r("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isShowTabControl,expression:"isShowTabControl"}],ref:"tabControl1",staticClass:"tab-control",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),r("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,"pull-up-load":!0},on:{scroll:t.contentScroll,pullingUp:t.loadMore}},[r("home-swiper",{attrs:{banners:t.banners},on:{swiperImageLoad:t.swiperImageLoad}}),r("recommend-view",{attrs:{recommends:t.recommends}}),r("feature-view"),r("tab-control",{ref:"tabControl2",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),r("goods-list",{attrs:{goods:t.showGoods}})],1),r("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.topClick(e)}}})],1)},o=[],i=r("df3b");function a(t){if(Array.isArray(t))return Object(i["a"])(t)}r("f3dd"),r("0a51"),r("9b11"),r("98e0"),r("e18c"),r("96db"),r("af86");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var c=r("db29");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return a(t)||s(t)||Object(c["a"])(t)||l()}var u=r("f1d4"),d=r("5d17"),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("swiper",t._l(t.banners,(function(e){return r("swiper-item",[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image},on:{load:t.imageLoad}})])])})),1)},p=[],m=r("dc2c"),h={name:"HomeSwiper",data:function(){return{isLoad:!1}},props:{banners:{type:Array,default:function(){return[]}}},components:{Swiper:m["a"],SwiperItem:m["b"]},methods:{imageLoad:function(){this.isLoad||(this.$emit("swiperImageLoad"),this.isLoad=!0)}}},v=h,g=r("2c07"),y=Object(g["a"])(v,b,p,!1,null,"47b0b90e",null),S=y.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"recommend"},t._l(t.recommends,(function(e){return r("div",{staticClass:"recommend-item"},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""}}),r("div",[t._v(t._s(e.title))])])])})),0)},C=[],O={name:"RecommendView",props:{recommends:{type:Array,default:function(){return[]}}}},L=O,T=(r("c6b8"),Object(g["a"])(L,w,C,!1,null,"69e1a9f9",null)),k=T.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feature"},[n("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[n("img",{attrs:{src:r("5cbe"),alt:""}})])])}],$={name:"FeatureView"},A=$,_=(r("5f1f"),Object(g["a"])(A,j,x,!1,null,"07b5bdfc",null)),I=_.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,n){return r("div",{staticClass:"tab-control-item",class:{active:n===t.currentIndex},on:{click:function(e){return t.itemClick(n)}}},[r("span",[t._v(t._s(e))])])})),0)},G=[],H={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,console.log("0流行, 1新款, 2精选",t),this.$emit("tabClick",t)}}},P=H,E=(r("f06f"),Object(g["a"])(P,M,G,!1,null,"2c98f6bb",null)),N=E.exports,V=r("6d71"),Y=r("eecb"),D=r("1bab");function F(){return Object(D["a"])({url:"/home/multidata"})}function R(t,e){return Object(D["a"])({url:"/home/data",params:{type:t,page:e}})}r("90b9");var B={name:"Home",mixins:[Y["b"],Y["a"]],data:function(){return{scroll:null,banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",tabOffsetTop:0,isShowTabControl:!1,saveY:0,itemImgListener:null}},computed:{showGoods:function(){return this.goods[this.currentType].list}},components:{NavBar:u["a"],HomeSwiper:S,RecommendView:k,FeatureView:I,TabControl:N,GoodsList:V["a"],Scroll:d["a"]},created:function(){this.getHomeMultidata(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},destroyed:function(){console.log("home已经被销毁")},mounted:function(){},deactivated:function(){console.log("离开Home时的saveY",this.saveY),this.saveY=this.$refs.scroll.getSaveY(),this.$bus.$off("itemImgLoad",this.ItemImgListener)},activated:function(){console.log("重新进入时的saveY",this.saveY),this.$refs.scroll.scrollTo(0,this.saveY,0),this.$refs.scroll.refresh()},methods:{tabClick:function(t){switch(console.log(t),t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControl1.currentIndex=t,this.$refs.tabControl2.currentIndex=t},topClick:function(){this.$refs.scroll.scrollTo(0,0,500)},contentScroll:function(t){this.showBackTop(t),this.isShowTabControl=t.y<=-this.$refs.tabControl2.$el.offsetTop},loadMore:function(){console.log("已执行下拉加载更多"),this.getHomeGoods(this.currentType)},swiperImageLoad:function(){console.log("tabControl监听轮播图后高度",this.$refs.tabControl2.$el.offsetTop),this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop},getHomeMultidata:function(){var t=this;F().then((function(e){console.log("请求首页的数据成功"),t.banners=e.data.banner.list,t.recommends=e.data.recommend.list}))},getHomeGoods:function(t){var e=this,r=this.goods[t].page+1;R(t,r).then((function(r){var n;console.log("拉取GOODS数据：","res, type, res.data.list,' this.goods[type].list","this.goods"),(n=e.goods[t].list).push.apply(n,f(r.data.list)),e.goods[t].page+=1,e.$refs.scroll.finishPullUp()}))}}},J=B,U=(r("cb99"),Object(g["a"])(J,n,o,!1,null,"8420e8d6",null));e["default"]=U.exports},c051:function(t,e,r){var n=r("da10"),o=r("b338").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?s(t):o(n(t))}},c6b8:function(t,e,r){"use strict";r("ee99")},cb99:function(t,e,r){"use strict";r("eeec")},db29:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("98e0"),r("77ad"),r("053b"),r("e18c"),r("1c2e"),r("96db");var n=r("df3b");function o(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n["a"])(t,e):void 0}}},df3b:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},e62b:function(t,e,r){"use strict";var n=r("e349"),o=r("3553"),i=r("69c5"),a=r("98a9"),s=r("d88d"),c=r("1bbd"),l=r("b60f");t.exports=function(t){var e,r,f,u,d,b,p=o(t),m="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,g=void 0!==v,y=l(p),S=0;if(g&&(v=n(v,h>2?arguments[2]:void 0,2)),void 0==y||m==Array&&a(y))for(e=s(p.length),r=new m(e);e>S;S++)b=g?v(p[S],S):p[S],c(r,S,b);else for(u=y.call(p),d=u.next,r=new m;!(f=d.call(u)).done;S++)b=g?i(u,v,[f.value,S],!0):f.value,c(r,S,b);return r.length=S,r}},eb07:function(t,e,r){},ee99:function(t,e,r){},eeec:function(t,e,r){},f06f:function(t,e,r){"use strict";r("eb07")},f3dd:function(t,e,r){"use strict";var n=r("1c8b"),o=r("d890"),i=r("6d7a"),a=r("9b9d"),s=r("1e2c"),c=r("c54b"),l=r("74cb"),f=r("efe2"),u=r("faa8"),d=r("74e7"),b=r("a719"),p=r("857c"),m=r("3553"),h=r("da10"),v=r("9f67"),g=r("38b9"),y=r("6d60"),S=r("cbab"),w=r("b338"),C=r("c051"),O=r("0a60"),L=r("aa6b"),T=r("d910"),k=r("ef71"),j=r("0fc1"),x=r("1944"),$=r("6d28"),A=r("7db2"),_=r("d5a8"),I=r("7e8b"),M=r("90fb"),G=r("4350"),H=r("6d51"),P=r("27b5"),E=r("b702"),N=r("5dfd").forEach,V=A("hidden"),Y="Symbol",D="prototype",F=M("toPrimitive"),R=E.set,B=E.getterFor(Y),J=Object[D],U=o.Symbol,z=i("JSON","stringify"),q=L.f,Q=T.f,W=C.f,K=k.f,X=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),rt=$("wks"),nt=o.QObject,ot=!nt||!nt[D]||!nt[D].findChild,it=s&&f((function(){return 7!=y(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=q(J,e);n&&delete J[e],Q(t,e,r),n&&t!==J&&Q(J,e,n)}:Q,at=function(t,e){var r=X[t]=y(U[D]);return R(r,{type:Y,tag:t,description:e}),s||(r.description=e),r},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},ct=function(t,e,r){t===J&&ct(Z,e,r),p(t);var n=v(e,!0);return p(r),u(X,n)?(r.enumerable?(u(t,V)&&t[V][n]&&(t[V][n]=!1),r=y(r,{enumerable:g(0,!1)})):(u(t,V)||Q(t,V,g(1,{})),t[V][n]=!0),it(t,n,r)):Q(t,n,r)},lt=function(t,e){p(t);var r=h(e),n=S(r).concat(pt(r));return N(n,(function(e){s&&!ut.call(r,e)||ct(t,e,r[e])})),t},ft=function(t,e){return void 0===e?y(t):lt(y(t),e)},ut=function(t){var e=v(t,!0),r=K.call(this,e);return!(this===J&&u(X,e)&&!u(Z,e))&&(!(r||!u(this,e)||!u(X,e)||u(this,V)&&this[V][e])||r)},dt=function(t,e){var r=h(t),n=v(e,!0);if(r!==J||!u(X,n)||u(Z,n)){var o=q(r,n);return!o||!u(X,n)||u(r,V)&&r[V][n]||(o.enumerable=!0),o}},bt=function(t){var e=W(h(t)),r=[];return N(e,(function(t){u(X,t)||u(_,t)||r.push(t)})),r},pt=function(t){var e=t===J,r=W(e?Z:h(t)),n=[];return N(r,(function(t){!u(X,t)||e&&!u(J,t)||n.push(X[t])})),n};if(c||(U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),r=function(t){this===J&&r.call(Z,t),u(this,V)&&u(this[V],e)&&(this[V][e]=!1),it(this,e,g(1,t))};return s&&ot&&it(J,e,{configurable:!0,set:r}),at(e,t)},x(U[D],"toString",(function(){return B(this).tag})),x(U,"withoutSetter",(function(t){return at(I(t),t)})),k.f=ut,T.f=ct,L.f=dt,w.f=C.f=bt,O.f=pt,G.f=function(t){return at(M(t),t)},s&&(Q(U[D],"description",{configurable:!0,get:function(){return B(this).description}}),a||x(J,"propertyIsEnumerable",ut,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:U}),N(S(rt),(function(t){H(t)})),n({target:Y,stat:!0,forced:!c},{for:function(t){var e=String(t);if(u(tt,e))return tt[e];var r=U(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(u(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(m(t))}}),z){var mt=!c||f((function(){var t=U();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));n({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(b(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),o[1]=e,z.apply(null,o)}})}U[D][F]||j(U[D],F,U[D].valueOf),P(U,Y),_[V]=!0}}]);
//# sourceMappingURL=chunk-4f7c6ff9.59359dd8.js.map