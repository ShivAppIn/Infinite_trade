"use strict";(self.webpackChunkweb_rcc_app=self.webpackChunkweb_rcc_app||[]).push([[8570],{94603:(m,d,n)=>{n.d(d,{G:()=>s});var e=n(37716);let s=(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-data-loader"]],decls:2,vars:0,consts:[[1,"data_loader"],[1,"loadersmall"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.qZA())},styles:[".data_loader[_ngcontent-%COMP%]{padding:20px;display:flex;align-items:center;justify-content:center;margin-bottom:20px}.data_loader[_ngcontent-%COMP%]   .loadersmall[_ngcontent-%COMP%]{border:2px solid #cedceb;animation:spin 1s linear infinite;border-top:2px solid #0da4ce;border-radius:50%;width:30px;height:30px}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]}),a})()},51791:(m,d,n)=>{n.d(d,{K:()=>a});var e=n(38583),s=n(37716);let a=(()=>{class l{}return l.\u0275fac=function(r){return new(r||l)},l.\u0275mod=s.oAB({type:l}),l.\u0275inj=s.cJS({imports:[[e.ez]]}),l})()},11863:(m,d,n)=>{n.d(d,{c:()=>s,Fs:()=>a,wJ:()=>l,_n:()=>o,x6:()=>r,jF:()=>g,UJ:()=>p,KJ:()=>t,on:()=>A,U0:()=>M,mU:()=>D,Yw:()=>S,pZ:()=>E,Z_:()=>h,R3:()=>I,Fx:()=>w,LT:()=>B,Me:()=>O,bJ:()=>i,k7:()=>_,kV:()=>c});var e=n(48396);const s=[{path:e.ABS_PROFILE,label:"Profile"}],a=[...s,{path:e.ABS_PROFILE_EDIT,label:"Edit"}],l=[...s,{path:e.ABS_PROFILE_CHANGE_PASS,label:"Change Password"}],o=[{path:e.ABS_BANNERS,label:"Banners"}],r=[...o,{path:e.ABS_BANNERS_ADD,label:"Add"}],g=[...o,{path:e.ABS_BANNERS_EDIT,label:"Edit"}],p=[...o,{path:e.ABS_BANNERS_DETAILS,label:"Details"}],t=[{path:e.ABS_NOTIFICATION,label:"Notifications"}],A=[...t,{path:e.ABS_NOTIFICATION_ADD,label:"Add"}],u=[{path:e.ABS_CMS,label:"Content Management"}],M=[...u,{path:e.ABS_TERM_CONDITIONS,label:"Terms & Conditions"}],D=[...u,{path:e.ABS_PRIVACY_POLICY,label:"Privacy Policy"}],S=[...u,{path:e.ABS_ABOUT_US,label:"About Us"}],E=[...u,{path:e.ABS_FAQ,label:"FAQ's"}],C=[{path:e.ABS_ROLES_ACCESS,label:"Roles & Access Management"}],h=[...C,{path:e.ABS_ROLES,label:"Roles"}],I=[...h,{path:e.ABS_ROLES_ADD,label:"Add"}],w=[...h,{path:e.ABS_ROLES_EDIT,label:"Edit"}],B=[...h,{path:e.ABS_ROLES_DETAILS,label:"Details"}],O=[...C,{path:e.ABS_SUB_ADMINS,label:"Sub Admins"}],i=[...O,{path:e.ABS_SUB_ADMIN_ADD,label:"Add"}],_=[...O,{path:e.ABS_SUB_ADMIN_EDIT,label:"Edit"}],c=[...O,{path:e.ABS_SUB_ADMIN_DETAILS,label:"Details"}]},63563:(m,d,n)=>{n.d(d,{t:()=>e});class e{constructor(){this.API_EVENT={defaultLimit:100,delete:3,active:2,block:1},this.today=new Date,this.total=0,this.nextHit=0,this.sortBy="created",this.sortOrder="-1",this.permissionClass="",this.total=0,this.pageNo=1,this.limit=10,this.pageOptions=[5,10,25,100]}get pageParams(){return{pageNo:this.pageNo,limit:this.limit}}get searchFilter(){return{searchKey:this.search}}get sortHeaders(){return{sortBy:this.sortBy,sortOrder:this.sortOrder}}get typeOf(){return{type:this.type,status:this.statusType}}confirmPageReload(){}allPrams(){return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},this.typeOf),this.pageParams),this.filterOptions),this.searchFilter),this.sortHeaders)}normalPrams(){return Object.assign(Object.assign(Object.assign({},this.pageParams),this.filterOptions),this.searchFilter)}validateDeletion(){1!==this.total&&this.total-(this.pageNo-1)*this.limit==1&&(this.pageNo--,this.total--)}get validPageOptions(){const a=this.allPrams(),l={};for(const o of Object.keys(a))(a[o]||0===a[o])&&(l[o]=a[o]);return l}get params(){const a=this.normalPrams(),l={};for(const o of Object.keys(a))(a[o]||0===a[o])&&(l[o]=a[o]);return l}set pageOptionsOnChange(a){this.pageNo=a.pageIndex+1,this.limit=a.pageSize}set sortOptions(a){a.direction?(this.sortBy=a.active,this.sortOrder="asc"===a.direction?"1":"-1"):(this.sortBy=null,this.sortOrder=null)}currentIndex(a){return(this.pageNo-1)*this.limit+a+1}resetPages(){this.pageNo=1,this.nextHit=0}}},48570:(m,d,n)=>{n.r(d),n.d(d,{SubAdminsDetailModule:()=>O});var e=n(51791),s=n(84245),a=n(62305),l=n(91017),o=n(38583),r=n(11863),g=n(32401),p=n(4863),t=n(37716),A=n(27632),P=n(54655),f=n(51080),u=n(8008),M=n(69763),D=n(94603),S=n(25145),E=n(82322),C=n(21443);function h(i,_){1&i&&t._UZ(0,"app-data-loader")}function I(i,_){if(1&i&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t.TgZ(2,"div",4),t.TgZ(3,"div",5),t.TgZ(4,"p",6),t._uU(5,"Name"),t.qZA(),t.TgZ(6,"p",7),t._uU(7),t.ALo(8,"emptyValue"),t.qZA(),t.qZA(),t.TgZ(9,"div",5),t.TgZ(10,"p",6),t._uU(11,"Email Address"),t.qZA(),t.TgZ(12,"p",7),t._uU(13),t.ALo(14,"emptyValue"),t.qZA(),t.qZA(),t.TgZ(15,"div",5),t.TgZ(16,"p",6),t._uU(17,"Role"),t.qZA(),t.TgZ(18,"p",7),t._uU(19),t.ALo(20,"emptyValue"),t.qZA(),t.qZA(),t.TgZ(21,"div",5),t.TgZ(22,"p",6),t._uU(23,"Status"),t.qZA(),t.TgZ(24,"p",7),t._uU(25),t.ALo(26,"formatStatus"),t.qZA(),t.qZA(),t.TgZ(27,"div",5),t.TgZ(28,"p",6),t._uU(29,"Created On"),t.qZA(),t.TgZ(30,"p",7),t._uU(31),t.ALo(32,"date"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(33,"app-show-permissions",8)),2&i){const c=t.oxw();t.xp6(7),t.Oqu(t.lcZ(8,6,null==c.subAdminDetails?null:c.subAdminDetails.name)),t.xp6(6),t.Oqu(t.lcZ(14,8,null==c.subAdminDetails?null:c.subAdminDetails.email)),t.xp6(6),t.Oqu(t.lcZ(20,10,null==c.subAdminDetails?null:c.subAdminDetails.role)),t.xp6(6),t.Oqu(t.lcZ(26,12,null==c.subAdminDetails?null:c.subAdminDetails.status)),t.xp6(6),t.Oqu(t.xi3(32,14,null==c.subAdminDetails?null:c.subAdminDetails.createdAt,null==c.dateType?null:c.dateType.DATE_WITH_TIME)),t.xp6(2),t.Q6J("permissions",null==c.subAdminDetails?null:c.subAdminDetails.permission)}}const B=[{path:"",component:(()=>{class i{constructor(c,b,T,x,v){this._bc=c,this._actRoute=b,this._roles=T,this._toast=x,this._common=v,this.isApiCallInProgress=!1,this.dateType=p.lb,this.subscriptions=[]}ngOnInit(){this._bc.setBreadcrumb(r.kV),this.validateIdAndFetchDetails()}validateIdAndFetchDetails(){this._common.isValidId(this._actRoute.snapshot.params.subAdminId)&&this.fetchSubAdminDetails()}fetchSubAdminDetails(){this.isApiCallInProgress=!0,this.subscriptions.push(this._roles.getSubAdminDetail(this._actRoute.snapshot.params.subAdminId).subscribe(c=>{this.isApiCallInProgress=!1,this.subAdminDetails=c.data},c=>{this.isApiCallInProgress=!1,400==c.statusCode&&(this._toast.error(c.message),this._common.navigate([g.b6,g.Wl]))}))}ngOnDestroy(){this.subscriptions.length>0&&this._common.unsubscribe(this.subscriptions)}}return i.\u0275fac=function(c){return new(c||i)(t.Y36(A.p),t.Y36(P.gz),t.Y36(f.s),t.Y36(u.k),t.Y36(M.v))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-sub-admins-detail"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["apiHit",""],[1,"page-banner-detail"],[1,"detail-ui"],[1,"row"],[1,"col-4"],[1,"label"],[1,"value"],[3,"permissions"]],template:function(c,b){if(1&c&&(t.YNc(0,h,1,0,"app-data-loader",0),t.YNc(1,I,34,17,"ng-template",null,1,t.W1O)),2&c){const T=t.MAs(2);t.Q6J("ngIf",b.isApiCallInProgress)("ngIfElse",T)}},directives:[o.O5,D.G,S.k],pipes:[E.J,C.x,o.uU],styles:[".row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-right:-10px;margin-left:-10px}.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%]{position:relative;padding-right:10px;padding-left:10px;max-width:auto!important}.col-1[_ngcontent-%COMP%]{width:calc(100% / 12)}.col-2[_ngcontent-%COMP%]{width:calc((100% / 12) * 2)}.col-3[_ngcontent-%COMP%]{width:calc((100% / 12) * 3)}.col-4[_ngcontent-%COMP%]{width:calc((100% / 12) * 4)}.col-5[_ngcontent-%COMP%]{width:calc((100% / 12) * 5)}.col-6[_ngcontent-%COMP%]{width:calc((100% / 12) * 6)}.col-7[_ngcontent-%COMP%]{width:calc((100% / 12) * 7)}.col-8[_ngcontent-%COMP%]{width:calc((100% / 12) * 8)}.col-9[_ngcontent-%COMP%]{width:calc((100% / 12) * 9)}.col-10[_ngcontent-%COMP%]{width:calc((100% / 12) * 10)}.col-11[_ngcontent-%COMP%]{width:calc((100% / 12) * 11)}.col-12[_ngcontent-%COMP%]{width:100%}@media screen and (max-width: 1200px){.col-xl-1[_ngcontent-%COMP%]{width:calc(100% / 12)}.col-xl-2[_ngcontent-%COMP%]{width:calc((100% / 12) * 2)}.col-xl-3[_ngcontent-%COMP%]{width:calc((100% / 12) * 3)}.col-xl-4[_ngcontent-%COMP%]{width:calc((100% / 12) * 4)}.col-xl-5[_ngcontent-%COMP%]{width:calc((100% / 12) * 5)}.col-xl-6[_ngcontent-%COMP%]{width:calc((100% / 12) * 6)}.col-xl-7[_ngcontent-%COMP%]{width:calc((100% / 12) * 7)}.col-xl-8[_ngcontent-%COMP%]{width:calc((100% / 12) * 8)}.col-xl-9[_ngcontent-%COMP%]{width:calc((100% / 12) * 9)}.col-xl-10[_ngcontent-%COMP%]{width:calc((100% / 12) * 10)}.col-xl-11[_ngcontent-%COMP%]{width:calc((100% / 12) * 11)}.col-xl-12[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width: 992px){.col-lg-1[_ngcontent-%COMP%]{width:calc(100% / 12)}.col-lg-2[_ngcontent-%COMP%]{width:calc((100% / 12) * 2)}.col-lg-3[_ngcontent-%COMP%]{width:calc((100% / 12) * 3)}.col-lg-4[_ngcontent-%COMP%]{width:calc((100% / 12) * 4)}.col-lg-5[_ngcontent-%COMP%]{width:calc((100% / 12) * 5)}.col-lg-6[_ngcontent-%COMP%]{width:calc((100% / 12) * 6)}.col-lg-7[_ngcontent-%COMP%]{width:calc((100% / 12) * 7)}.col-lg-8[_ngcontent-%COMP%]{width:calc((100% / 12) * 8)}.col-lg-9[_ngcontent-%COMP%]{width:calc((100% / 12) * 9)}.col-lg-10[_ngcontent-%COMP%]{width:calc((100% / 12) * 10)}.col-lg-11[_ngcontent-%COMP%]{width:calc((100% / 12) * 11)}.col-lg-12[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width: 768px){.col-md-1[_ngcontent-%COMP%]{width:calc(100% / 12)}.col-md-2[_ngcontent-%COMP%]{width:calc((100% / 12) * 2)}.col-md-3[_ngcontent-%COMP%]{width:calc((100% / 12) * 3)}.col-md-4[_ngcontent-%COMP%]{width:calc((100% / 12) * 4)}.col-md-5[_ngcontent-%COMP%]{width:calc((100% / 12) * 5)}.col-md-6[_ngcontent-%COMP%]{width:calc((100% / 12) * 6)}.col-md-7[_ngcontent-%COMP%]{width:calc((100% / 12) * 7)}.col-md-8[_ngcontent-%COMP%]{width:calc((100% / 12) * 8)}.col-md-9[_ngcontent-%COMP%]{width:calc((100% / 12) * 9)}.col-md-10[_ngcontent-%COMP%]{width:calc((100% / 12) * 10)}.col-md-11[_ngcontent-%COMP%]{width:calc((100% / 12) * 11)}.col-md-12[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width: 576px){.col-sm-1[_ngcontent-%COMP%]{width:calc(100% / 12)}.col-sm-2[_ngcontent-%COMP%]{width:calc((100% / 12) * 2)}.col-sm-3[_ngcontent-%COMP%]{width:calc((100% / 12) * 3)}.col-sm-4[_ngcontent-%COMP%]{width:calc((100% / 12) * 4)}.col-sm-5[_ngcontent-%COMP%]{width:calc((100% / 12) * 5)}.col-sm-6[_ngcontent-%COMP%]{width:calc((100% / 12) * 6)}.col-sm-7[_ngcontent-%COMP%]{width:calc((100% / 12) * 7)}.col-sm-8[_ngcontent-%COMP%]{width:calc((100% / 12) * 8)}.col-sm-9[_ngcontent-%COMP%]{width:calc((100% / 12) * 9)}.col-sm-10[_ngcontent-%COMP%]{width:calc((100% / 12) * 10)}.col-sm-11[_ngcontent-%COMP%]{width:calc((100% / 12) * 11)}.col-sm-12[_ngcontent-%COMP%]{width:100%}}.detail-ui[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   p.label[_ngcontent-%COMP%]{font-size:13px;font-weight:700;margin-bottom:5px}@media screen and (max-width: 576px){.detail-ui[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   p.label[_ngcontent-%COMP%]{font-size:10px}}.detail-ui[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:14px;margin-bottom:20px;margin-top:5px;color:#585858;line-height:20px}@media screen and (max-width: 576px){.detail-ui[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:10px;margin-bottom:10px;margin-top:2px;line-height:15px}}.detail-ui[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#585858!important}"]}),i})()}];let O=(()=>{class i{}return i.\u0275fac=function(c){return new(c||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[o.ez,P.Bz.forChild(B),l.m,a.h,e.K,s.b]]}),i})()},82322:(m,d,n)=>{n.d(d,{J:()=>s});var e=n(37716);let s=(()=>{class a{transform(o){return o||"-"}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275pipe=e.Yjl({name:"emptyValue",type:a,pure:!0}),a})()},84245:(m,d,n)=>{n.d(d,{b:()=>a});var e=n(38583),s=n(37716);let a=(()=>{class l{}return l.\u0275fac=function(r){return new(r||l)},l.\u0275mod=s.oAB({type:l}),l.\u0275inj=s.cJS({imports:[[e.ez]]}),l})()},21443:(m,d,n)=>{n.d(d,{x:()=>l});var e=n(63563),s=n(4863),a=n(37716);let l=(()=>{class o extends e.t{transform(g,p){switch(g){case this.API_EVENT.block:return"User"==p?"Blocked":"Inactive";case this.API_EVENT.active:return"Active";case this.API_EVENT.delete:return"Deleted";case s.i0[0].value:return s.i0[0].name;case s.i0[1].value:return s.i0[1].name;case s.i0[2].value:return"Before & After Login";default:return"-"}}}return o.\u0275fac=function(){let r;return function(p){return(r||(r=a.n5z(o)))(p||o)}}(),o.\u0275pipe=a.Yjl({name:"formatStatus",type:o,pure:!0}),o})()}}]);