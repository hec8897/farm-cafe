(function(t){function e(e){for(var n,i,l=e[0],r=e[1],c=e[2],u=0,p=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,l=1;l<a.length;l++){var r=a[l];0!==s[r]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0808":function(t,e,a){"use strict";var n=a("6da7"),s=a.n(n);s.a},"0a03":function(t,e,a){"use strict";var n=a("3799"),s=a.n(n);s.a},"15b1":function(t,e,a){"use strict";var n=a("6f2d"),s=a.n(n);s.a},"15b4":function(t,e,a){},"22ef":function(t,e,a){},2995:function(t,e,a){},3799:function(t,e,a){},"37ba":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2d34");var n=a("a026"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("AsideBar"),a("ModalLogin"),a("ModalJoin"),a("ModalJoinClass"),a("Modalsuccess"),a("ModalFail"),a("main",[a("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"lnb"},[a("h2",[t._v("우성팜카페")]),a("ul",{staticClass:"list",class:{active:t.show}},[t._m(0),a("li",{staticClass:"pc"},[t._v("장사 이야기")]),a("li",{staticClass:"pc"},[t._v("자유게시판")]),a("li",{staticClass:"pc"},[t._v("농업계 새소식")]),a("li",{staticClass:"pc"},[t._v("스마트팜 TV")]),t._m(1)]),a("dd",{staticClass:"mo",on:{click:t.Navshow}},[t.show?a("b-icon",{attrs:{icon:"caret-up-fill"}}):a("b-icon",{attrs:{icon:"caret-down-fill"}})],1),a("CommonNav")],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"pc"},[t._v(" 공지사항 "),a("div",{staticClass:"hidden_menu"},[a("div",[a("p",[t._v("카페 회칙")]),a("p",[t._v("공지 사항")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"disable"},[t._v("제조사 만남의 광장 "),a("div",{staticClass:"hidden_menu"},[a("div",[a("p",[t._v("작물보호제 제조사")]),a("p",[t._v("비료 제조사")]),a("p",[t._v("종묘 / 종자 제조사")]),a("p",[t._v("농기계 / 농기구 제조사")]),a("p",[t._v("제조사 이벤트")])])])])}],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right"},[this.$store.state.login?a("div",[a("span",{staticClass:"pointer",on:{click:function(e){return t.Modalshow("join-modal")}}},[t._v("마이페이지")]),a("span",{staticClass:"pointer"},[t._v("로그아웃")])]):a("div",[a("span",{staticClass:"pointer",on:{click:function(e){return t.Modalshow("login-modal")}}},[t._v("로그인")]),a("span",{staticClass:"pointer",on:{click:function(e){return t.Modalshow("join-modal")}}},[t._v("회원가입")])])])},c=[],d={data:function(){return{login:this.$store.state.login}},methods:{Modalshow:function(t){this.$modal.show(t)}}},u=d,p=(a("15b1"),a("2877")),h=Object(p["a"])(u,r,c,!1,null,null,null),v=h.exports,m={components:{CommonNav:v},data:function(){return{show:!1}},methods:{Navshow:function(){this.show=1!=this.show}}},f=m,_=(a("e3e8"),Object(p["a"])(f,i,l,!1,null,null,null)),g=_.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{name:"login-modal",adaptive:!0,width:"90%",minHeight:500,maxWidth:800,focusTrap:!0}},[a("div",{staticClass:"inner left"},[a("h2",[t._v("우성 팜카페 로그인")]),a("ul",[a("li",[a("span",{staticClass:"left"},[a("b-icon",{attrs:{icon:"person-fill","font-scale":"1.5"}})],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.LoginId,expression:"LoginId"}],attrs:{placeholder:"사용자 코드(아이디)를 입력하세요"},domProps:{value:t.LoginId},on:{input:function(e){e.target.composing||(t.LoginId=e.target.value)}}})]),a("li",[a("span",{staticClass:"left"},[a("b-icon",{attrs:{icon:"lock","font-scale":"1.5"}})],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.LoginPw,expression:"LoginPw"}],attrs:{placeholder:"비밀번호를 입력하세요",type:"password"},domProps:{value:t.LoginPw},on:{input:function(e){e.target.composing||(t.LoginPw=e.target.value)}}})])]),a("div",{staticClass:"btns"},[a("div",{staticClass:"btn",on:{click:t.LoginFn}},[t._v("우성 로그인")]),a("div",{staticClass:"btn green"},[t._v("네이버 로그인")]),a("div",{staticClass:"btn red",on:{click:function(e){return t.Modalshow()}}},[t._v("회원 가입")])]),a("a",{attrs:{href:""}},[t._v("비밀번호를 잊으셨나요?")])]),a("div",{staticClass:"inner right"},[a("h2",[t._v("로그인 광고 영역 ")]),a("p",[t._v("동영상, 이미지")])])])},b=[],w={data:function(){return{LoginId:"",LoginPw:""}},methods:{LoginFn:function(){var t={login:!0,LoginId:this.LoginId,Name:"우성소프트"};this.$store.commit("loginFn",t),1==this.$store.state.login.login&&this.$modal.show("succes-modal",{mode:"login"}),this.$modal.hide("login-modal")},Modalshow:function(){this.$modal.hide("login-modal"),this.$modal.show("join-modal")}}},k=w,I=(a("a7d9"),Object(p["a"])(k,C,b,!1,null,null,null)),x=I.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{name:"join-modal",adaptive:!0,scrollable:!0,width:"95%",height:"auto",maxWidth:600}},[a("div",{staticClass:"inner"},[a("h2",[t._v("우성 팜카페 회원가입")]),a("ul",[a("li",{class:{active:t.IdCheck,beactive:0==t.IdCheck}},[a("span",{staticClass:"left"},[a("b-icon",{attrs:{icon:"person-fill","font-scale":"1.5"}})],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.InsertData.Id,expression:"InsertData.Id"}],attrs:{type:"text",placeholder:"사용자실 아이디를 입력하세요"},domProps:{value:t.InsertData.Id},on:{blur:t.checkId,input:function(e){e.target.composing||t.$set(t.InsertData,"Id",e.target.value)}}}),a("span",[1==t.IdCheck?a("em",{staticClass:"t_blue"},[t._v("사용이 가능 한 아이디입니다.")]):0==t.IdCheck?a("em",{staticClass:"t_red"},[t._v("중복된 아이디입니다.")]):"short"==t.IdCheck?a("em",{staticClass:"t_red"},[t._v("아이디는 6글자 이상이여야 합니다.")]):t._e()]),a("span",{staticClass:"right"},[1==t.IdCheck?a("b-icon",{attrs:{icon:"exclamation-circle-fill",variant:"info"}}):"short"==t.IdCheck||0==t.IdCheck?a("b-icon",{attrs:{icon:"exclamation-circle-fill",variant:"danger"}}):t._e()],1)]),a("li",[a("span",{staticClass:"left"},[a("b-icon",{attrs:{icon:"lock","font-scale":"1.5"}})],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordCheck,expression:"passwordCheck"}],attrs:{type:"password",placeholder:"사용하실 비밀번호를 입력하세요"},domProps:{value:t.passwordCheck},on:{blur:t.checkPw,input:function(e){e.target.composing||(t.passwordCheck=e.target.value)}}}),a("span",["short"==t.PwCheck?a("em",{staticClass:"t_red"},[t._v("아이디는 6글자 이상이여야 합니다.")]):t._e()]),a("span",{staticClass:"right"},["short"==t.PwCheck?a("b-icon",{attrs:{icon:"exclamation-circle-fill",variant:"danger"}}):t._e()],1)]),a("li",{class:{active:t.PwCheck,beactive:0==t.PwCheck}},[a("span",{staticClass:"left"},[a("b-icon",{attrs:{icon:"lock-fill","font-scale":"1.5"}})],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.InsertData.password,expression:"InsertData.password"}],attrs:{type:"password",placeholder:"비밀번호를 확인해주세요"},domProps:{value:t.InsertData.password},on:{blur:t.checkPw,input:function(e){e.target.composing||t.$set(t.InsertData,"password",e.target.value)}}}),a("span",{class:{t_blue:t.PwCheck,t_red:0==t.PwCheck}},[0==t.PwCheck?a("em",[t._v("패스워드가 다릅니다.")]):t._e()]),a("span",{staticClass:"right"},[0==t.PwCheck?a("b-icon",{attrs:{icon:"exclamation-circle-fill",variant:"danger"}}):t._e()],1)]),a("li",[a("span",{staticClass:"left"},[a("b-icon",{attrs:{icon:"phone","font-scale":"1.5"}})],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.InsertData.phone,expression:"InsertData.phone"}],attrs:{type:"number",placeholder:"연락처를 입력하세요('-'를 제외하고 입력하세요)"},domProps:{value:t.InsertData.phone},on:{input:function(e){e.target.composing||t.$set(t.InsertData,"phone",e.target.value)}}})]),a("li",[a("span",{staticClass:"left"},[a("b-icon",{attrs:{icon:"briefcase-fill","font-scale":"1.5"}})],1),a("select",{directives:[{name:"model",rawName:"v-model",value:t.InsertData.Class,expression:"InsertData.Class"}],staticClass:"full",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.InsertData,"Class",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"null",disabled:"",selected:""}},[t._v("가입유형을 선택하세요")]),t._l(t.Classifications,(function(e,n){return a("option",{key:n,domProps:{value:e.value}},[t._v(t._s(e.Name))])}))],2)])]),a("div",{staticClass:"p_box"},[a("infoAgree")],1),a("p",{staticClass:"agree"},[a("input",{attrs:{type:"checkbox",id:"check"}}),a("label",{attrs:{for:"check"}},[t._v(" 개인정보 수집 및 이용에 동의합니다. ")])]),a("div",{staticClass:"btns"},[a("div",{staticClass:"btn green"},[t._v("네이버 아이디로 회원가입")]),a("div",{staticClass:"btn red",on:{click:t.JoinData}},[t._v("우성 팜카페 회원 가입")])])]),a("ModalJoinClass",{attrs:{mode:t.InsertData.Class}})],1)},$=[],j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[a("h3",[t._v("수집하는 개인정보의 항목 및 수집방법")]),a("h4",{staticClass:"t_red"},[t._v("1. 수집하는 개인정보의 항목 ")]),a("ol",[a("li",[t._v("회원가입: 이메일, 업체명, 이름, 사업장 주소, 전화, 업태, 사업자등록번호")]),a("li",[t._v("프로그램 및 POS 설치요청: 신청자명, 직책, 회사명, 전화번호, 휴대폰 사업장 주소, 요청사항, 희망일시, 사업자등록번호")]),a("li",[t._v("이메일/상담 문의: 이름, 회사명, 이메일, 전화번호, 문의사항")])]),a("h4",{staticClass:"t_red"},[t._v("2. 개인정보 수집방법 ")]),a("ol",[a("li",[t._v("홈페이지에서의 신청 및 회원가입")])])])}],M=(a("0808"),{}),O=Object(p["a"])(M,j,y,!1,null,null,null),D=O.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{name:"class-modal",adaptive:!0,width:"90%",minHeight:400,maxWidth:600,focusTrap:!0}},[a("div",{staticClass:"inner"},[t._v("추가 정보")])])},L=[],E={props:["mode"]},J=E,S=Object(p["a"])(J,N,L,!1,null,null,null),H=S.exports,T={components:{infoAgree:D,ModalJoinClass:H},data:function(){return{IdCheck:null,PwCheck:null,passwordCheck:"",InsertData:{Id:"",password:null,phone:null,NicName:null,Class:null},Classifications:[{idx:0,value:"Saller",Name:"판매 업자 (도매, 소매상)"},{idx:1,value:"partner",Name:"제조사,광고사"},{idx:2,value:"association",Name:"기관 및 협회"}]}},methods:{checkId:function(){this.InsertData.Id.length>5?this.IdCheck=111111==this.InsertData.Id:this.IdCheck="short"},checkPw:function(){this.passwordCheck.length>4?this.PwCheck=this.passwordCheck==this.InsertData.password:this.PwCheck="short"},JoinData:function(){this.$modal.show("succes-modal",{mode:"join"})}}},A=T,F=(a("0a03"),Object(p["a"])(A,P,$,!1,null,null,null)),W=F.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{name:"succes-modal",adaptive:!0,scrollable:!0,width:"90%",height:"auto",maxWidth:650,shiftY:.1},on:{"before-open":t.beforeOpen,closed:t.classModal}},[a("b-alert",{attrs:{show:""}},["login"==t.mode?a("div",{domProps:{innerHTML:t._s(t.templateLogin)}}):"join"==t.mode?a("div",{domProps:{innerHTML:t._s(t.templateJoin)}}):t._e()])],1)},Y=[],V={data:function(){return{mode:"",templateJoin:"\n                <h3 class='alert-heading'>가입이 신청이 완료되었습니다!</h3>\n                <hr>\n                <h4>추가정보를 입력해서 비공개 게시판 접속 권한을 받으세요</h4>\n                <hr>\n                <p>로그인 후 사용해주세요</p>",templateLogin:"<h3>로그인 되었습니다.</h3>"}},methods:{classModal:function(){this.$modal.hide("join-modal")},beforeOpen:function(t){this.mode=t.params.mode}}},q=V,z=(a("f86e"),Object(p["a"])(q,B,Y,!1,null,null,null)),G=z.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{name:"fail-modal",adaptive:!0,width:"90%",maxWidth:650,shiftY:.1,height:"auto"}},[a("b-alert",{attrs:{show:"",variant:"danger"}},[a("h3",{staticClass:"alert-heading"},[t._v(t._s(t.mode)+"가입 실패!")])])],1)},Q=[],R={props:["mode"]},U=R,X=(a("6165"),Object(p["a"])(U,K,Q,!1,null,null,null)),Z=X.exports,tt={components:{AsideBar:g,ModalLogin:x,ModalJoin:W,ModalJoinClass:H,Modalsuccess:G,ModalFail:Z}},et=tt,at=(a("5c0b"),Object(p["a"])(et,s,o,!1,null,null,null)),nt=at.exports,st=a("8c4f"),ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("HomeSlider")],1)},it=[],lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-jumbotron",{attrs:{"bg-variant":"info","text-variant":"white"}},[a("div",{staticClass:"wrap slide"},[a("p",[t._v("전국 농자재 판매 관리인의 커뮤니티")]),a("h2",[t._v("우성 팜카페")]),a("p",[t._v("혼자하면 힘들지만, 함께하면 든든합니다.")])])])},rt=[],ct=(a("e39d"),{}),dt=Object(p["a"])(ct,lt,rt,!1,null,null,null),ut=dt.exports,pt={name:"Home",components:{HomeSlider:ut}},ht=pt,vt=Object(p["a"])(ht,ot,it,!1,null,null,null),mt=vt.exports;n["a"].use(st["a"]);var ft=[{path:"/",name:"Home",component:mt},{path:"/about",name:"About",component:mt}],_t=new st["a"]({mode:"history",base:"",routes:ft}),gt=_t,Ct=a("2f62");n["a"].use(Ct["a"]);var bt=new Ct["a"].Store({state:{login:!1,Name:"로그인해주세요"},mutations:{loginFn:function(t,e){t.login=e.login,t.Name=e.Name}},actions:{},modules:{}}),wt=a("46f8"),kt=a.n(wt),It=a("ea9a"),xt=a("9ed1");a("32f0"),a("60d7"),a("dab2");n["a"].use(kt.a),n["a"].use(It["a"]),n["a"].use(xt["a"]),n["a"].config.productionTip=!1,new n["a"]({router:gt,store:bt,render:function(t){return t(nt)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},6165:function(t,e,a){"use strict";var n=a("15b4"),s=a.n(n);s.a},"6da7":function(t,e,a){},"6f2d":function(t,e,a){},"9b93":function(t,e,a){},"9c0c":function(t,e,a){},a7d9:function(t,e,a){"use strict";var n=a("37ba"),s=a.n(n);s.a},dab2:function(t,e,a){},e39d:function(t,e,a){"use strict";var n=a("2995"),s=a.n(n);s.a},e3e8:function(t,e,a){"use strict";var n=a("22ef"),s=a.n(n);s.a},f86e:function(t,e,a){"use strict";var n=a("9b93"),s=a.n(n);s.a}});
//# sourceMappingURL=app.911758eb.js.map