"use strict";(self.webpackChunkweb_rcc_app=self.webpackChunkweb_rcc_app||[]).push([[1596],{94603:(I,u,s)=>{s.d(u,{G:()=>l});var a=s(37716);let l=(()=>{class c{constructor(){}ngOnInit(){}}return c.\u0275fac=function(A){return new(A||c)},c.\u0275cmp=a.Xpm({type:c,selectors:[["app-data-loader"]],decls:2,vars:0,consts:[[1,"data_loader"],[1,"loadersmall"]],template:function(A,d){1&A&&(a.TgZ(0,"div",0),a._UZ(1,"div",1),a.qZA())},styles:[".data_loader[_ngcontent-%COMP%]{padding:20px;display:flex;align-items:center;justify-content:center;margin-bottom:20px}.data_loader[_ngcontent-%COMP%]   .loadersmall[_ngcontent-%COMP%]{border:2px solid #cedceb;animation:spin 1s linear infinite;border-top:2px solid #0da4ce;border-radius:50%;width:30px;height:30px}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]}),c})()},51791:(I,u,s)=>{s.d(u,{K:()=>c});var a=s(38583),l=s(37716);let c=(()=>{class _{}return _.\u0275fac=function(d){return new(d||_)},_.\u0275mod=l.oAB({type:_}),_.\u0275inj=l.cJS({imports:[[a.ez]]}),_})()},11863:(I,u,s)=>{s.d(u,{c:()=>l,Fs:()=>c,wJ:()=>_,_n:()=>A,x6:()=>d,jF:()=>C,UJ:()=>T,KJ:()=>r,on:()=>p,U0:()=>M,mU:()=>N,Yw:()=>R,pZ:()=>b,Z_:()=>t,R3:()=>e,Fx:()=>o,LT:()=>n,Me:()=>D,bJ:()=>B,k7:()=>S,kV:()=>O});var a=s(48396);const l=[{path:a.ABS_PROFILE,label:"Profile"}],c=[...l,{path:a.ABS_PROFILE_EDIT,label:"Edit"}],_=[...l,{path:a.ABS_PROFILE_CHANGE_PASS,label:"Change Password"}],A=[{path:a.ABS_BANNERS,label:"Banners"}],d=[...A,{path:a.ABS_BANNERS_ADD,label:"Add"}],C=[...A,{path:a.ABS_BANNERS_EDIT,label:"Edit"}],T=[...A,{path:a.ABS_BANNERS_DETAILS,label:"Details"}],r=[{path:a.ABS_NOTIFICATION,label:"Notifications"}],p=[...r,{path:a.ABS_NOTIFICATION_ADD,label:"Add"}],E=[{path:a.ABS_CMS,label:"Content Management"}],M=[...E,{path:a.ABS_TERM_CONDITIONS,label:"Terms & Conditions"}],N=[...E,{path:a.ABS_PRIVACY_POLICY,label:"Privacy Policy"}],R=[...E,{path:a.ABS_ABOUT_US,label:"About Us"}],b=[...E,{path:a.ABS_FAQ,label:"FAQ's"}],h=[{path:a.ABS_ROLES_ACCESS,label:"Roles & Access Management"}],t=[...h,{path:a.ABS_ROLES,label:"Roles"}],e=[...t,{path:a.ABS_ROLES_ADD,label:"Add"}],o=[...t,{path:a.ABS_ROLES_EDIT,label:"Edit"}],n=[...t,{path:a.ABS_ROLES_DETAILS,label:"Details"}],D=[...h,{path:a.ABS_SUB_ADMINS,label:"Sub Admins"}],B=[...D,{path:a.ABS_SUB_ADMIN_ADD,label:"Add"}],S=[...D,{path:a.ABS_SUB_ADMIN_EDIT,label:"Edit"}],O=[...D,{path:a.ABS_SUB_ADMIN_DETAILS,label:"Details"}]},15844:(I,u,s)=>{s.d(u,{q0:()=>a,Xp:()=>l,Z:()=>c,Qs:()=>A,v9:()=>p,RU:()=>b,E2:()=>h});const a=t=>!!/^\s+|\s+$/g.test(t),l=(t,e)=>t?e?+new Date(t).setHours(23,59,59):+new Date(t):null,c=t=>{for(var e in t)if(t.hasOwnProperty(e))return!1;return!0},A=t=>t?t.toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "):"",p=((new Date).getFullYear(),(t,e,o)=>{e=e||(e=(new Date).getTime()+".png");let n=t.split(","),D=n[0].match(/:(.*?);/)[1],B=atob(n[1]),S=B.length,O=new Uint8Array(S);for(;S--;)O[S]=B.charCodeAt(S);return new File([O],e,{type:D})}),b=(t,e,o=!1)=>{if(!t||t.length>15)return t;if(e){let n=new Date(e);if(n.setHours(new Date(t).getHours()),n.setMinutes(new Date(t).getMinutes()),n instanceof Date)return o?+new Date(n.toUTCString()).setSeconds(59):+new Date(n.toUTCString()).setSeconds(0,0);console.log("Date type is not valid ")}},h=t=>{let e=new Date(`January 29, 2001 ${t}`),o=new Date;return e.setDate(o.getDate()),e.setMonth(o.getMonth()+1),e.setFullYear(o.getFullYear()),e}},4113:(I,u,s)=>{s.r(u),s.d(u,{AboutUsModule:()=>T});var a=s(38583),l=s(37716),c=s(54655),_=s(53085);let A=(()=>{class r{constructor(i){this._router=i}ngOnInit(){this.currentTab=this._router.url.split("/")[2]}}return r.\u0275fac=function(i){return new(i||r)(l.Y36(c.F0))},r.\u0275cmp=l.Xpm({type:r,selectors:[["app-about-us"]],decls:1,vars:1,consts:[[3,"currentUrl"]],template:function(i,m){1&i&&l._UZ(0,"app-editor",0),2&i&&l.Q6J("currentUrl",m.currentTab)},directives:[_.P],styles:[""]}),r})();var d=s(34153);const C=[{path:"",component:A}];let T=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=l.oAB({type:r}),r.\u0275inj=l.cJS({imports:[[a.ez,c.Bz.forChild(C),d.Z]]}),r})()}}]);