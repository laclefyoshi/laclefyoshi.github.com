webpackJsonp([1],{DQry:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var l=e("uwQG"),o=e("dFrh"),s=e("VU/8")(l.a,o.a,!1,null,null,null);s.options.__file="pages/links.vue",i.default=s.exports},dFrh:function(t,i,e){"use strict";var l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[e("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[e("v-card",[e("v-toolbar",[e("v-toolbar-title",[t._v("Links")])],1),e("v-list",{attrs:{"two-line":""}},t._l(t.links,function(i,l){return e("v-list-tile",{key:l,on:{click:function(e){t.openUrl(i.url)}}},[e("v-list-tile-action",[e("v-icon",[t._v("collections_bookmark")])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v(t._s(i.title))]),e("v-list-tile-sub-title",[t._v(t._s(i.description))])],1)],1)}))],1)],1)],1)};l._withStripped=!0;var o={render:l,staticRenderFns:[]};i.a=o},nBNR:function(t,i){t.exports=[{title:"Github: laclefyoshi",url:"https://github.com/laclefyoshi",description:"コードリポジトリ"},{title:"Bitbucket: laclefyoshi",url:"https://bitbucket.org/laclefyoshi/",description:"コードリポジトリ (主に非公開用)"},{title:"SlideShare: laclefyoshi",url:"http://www.slideshare.net/laclefyoshi",description:"対外発表スライド"},{title:"LinkedIn: laclefyoshi",url:"https://www.linkedin.com/in/laclefyoshi",description:"SNS"},{title:"Facebook: laclefyoshi",url:"https://www.facebook.com/laclefyoshi",description:"SNS"},{title:"Twitter: laclefyoshi",url:"https://twitter.com/laclefyoshi",description:"SNS"},{title:"Amazon ほしいものリスト",url:"https://www.amazon.co.jp/registry/wishlist/354W8IKB543F7",description:"買い物リスト"},{title:"はてなダイアリー: LaclefYoshi/DiaryException",url:"http://d.hatena.ne.jp/LaclefYoshi/",description:"ブログ (日本語)"},{title:"Blogger: laclefyoshi/EngineeringException",url:"http://laclefyoshi.blogspot.jp/",description:"ブログ (英語)"},{title:"Tumblr: laclefyoshi",url:"http://laclefyoshi.tumblr.com/",description:"reblog"},{title:"laclefwiki (wiki)",url:"https://wiki.saekiyoshiyasu.org/",description:"自分用Wiki"}]},uwQG:function(t,i,e){"use strict";var l=e("nBNR"),o=e.n(l);i.a={data:function(){return{links:o.a}},methods:{openUrl:function(t){window.open(t,"_blank")}}}}});