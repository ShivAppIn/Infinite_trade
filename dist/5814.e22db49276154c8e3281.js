"use strict";(self.webpackChunkweb_rcc_app=self.webpackChunkweb_rcc_app||[]).push([[5814],{94603:(I,A,s)=>{s.d(A,{G:()=>l});var a=s(37716);let l=(()=>{class c{constructor(){}ngOnInit(){}}return c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=a.Xpm({type:c,selectors:[["app-data-loader"]],decls:2,vars:0,consts:[[1,"data_loader"],[1,"loadersmall"]],template:function(i,u){1&i&&(a.TgZ(0,"div",0),a._UZ(1,"div",1),a.qZA())},styles:[".data_loader[_ngcontent-%COMP%]{padding:20px;display:flex;align-items:center;justify-content:center;margin-bottom:20px}.data_loader[_ngcontent-%COMP%]   .loadersmall[_ngcontent-%COMP%]{border:2px solid #cedceb;animation:spin 1s linear infinite;border-top:2px solid #0da4ce;border-radius:50%;width:30px;height:30px}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]}),c})()},51791:(I,A,s)=>{s.d(A,{K:()=>c});var a=s(38583),l=s(37716);let c=(()=>{class _{}return _.\u0275fac=function(u){return new(u||_)},_.\u0275mod=l.oAB({type:_}),_.\u0275inj=l.cJS({imports:[[a.ez]]}),_})()},11863:(I,A,s)=>{s.d(A,{c:()=>l,Fs:()=>c,wJ:()=>_,_n:()=>i,x6:()=>u,jF:()=>C,UJ:()=>T,KJ:()=>r,on:()=>p,U0:()=>P,mU:()=>M,Yw:()=>N,pZ:()=>y,Z_:()=>t,R3:()=>e,Fx:()=>o,LT:()=>n,Me:()=>d,bJ:()=>B,k7:()=>S,kV:()=>O});var a=s(48396);const l=[{path:a.ABS_PROFILE,label:"Profile"}],c=[...l,{path:a.ABS_PROFILE_EDIT,label:"Edit"}],_=[...l,{path:a.ABS_PROFILE_CHANGE_PASS,label:"Change Password"}],i=[{path:a.ABS_BANNERS,label:"Banners"}],u=[...i,{path:a.ABS_BANNERS_ADD,label:"Add"}],C=[...i,{path:a.ABS_BANNERS_EDIT,label:"Edit"}],T=[...i,{path:a.ABS_BANNERS_DETAILS,label:"Details"}],r=[{path:a.ABS_NOTIFICATION,label:"Notifications"}],p=[...r,{path:a.ABS_NOTIFICATION_ADD,label:"Add"}],E=[{path:a.ABS_CMS,label:"Content Management"}],P=[...E,{path:a.ABS_TERM_CONDITIONS,label:"Terms & Conditions"}],M=[...E,{path:a.ABS_PRIVACY_POLICY,label:"Privacy Policy"}],N=[...E,{path:a.ABS_ABOUT_US,label:"About Us"}],y=[...E,{path:a.ABS_FAQ,label:"FAQ's"}],h=[{path:a.ABS_ROLES_ACCESS,label:"Roles & Access Management"}],t=[...h,{path:a.ABS_ROLES,label:"Roles"}],e=[...t,{path:a.ABS_ROLES_ADD,label:"Add"}],o=[...t,{path:a.ABS_ROLES_EDIT,label:"Edit"}],n=[...t,{path:a.ABS_ROLES_DETAILS,label:"Details"}],d=[...h,{path:a.ABS_SUB_ADMINS,label:"Sub Admins"}],B=[...d,{path:a.ABS_SUB_ADMIN_ADD,label:"Add"}],S=[...d,{path:a.ABS_SUB_ADMIN_EDIT,label:"Edit"}],O=[...d,{path:a.ABS_SUB_ADMIN_DETAILS,label:"Details"}]},15844:(I,A,s)=>{s.d(A,{q0:()=>a,Xp:()=>l,Z:()=>c,Qs:()=>i,v9:()=>p,RU:()=>y,E2:()=>h});const a=t=>!!/^\s+|\s+$/g.test(t),l=(t,e)=>t?e?+new Date(t).setHours(23,59,59):+new Date(t):null,c=t=>{for(var e in t)if(t.hasOwnProperty(e))return!1;return!0},i=t=>t?t.toLowerCase().split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "):"",p=((new Date).getFullYear(),(t,e,o)=>{e=e||(e=(new Date).getTime()+".png");let n=t.split(","),d=n[0].match(/:(.*?);/)[1],B=atob(n[1]),S=B.length,O=new Uint8Array(S);for(;S--;)O[S]=B.charCodeAt(S);return new File([O],e,{type:d})}),y=(t,e,o=!1)=>{if(!t||t.length>15)return t;if(e){let n=new Date(e);if(n.setHours(new Date(t).getHours()),n.setMinutes(new Date(t).getMinutes()),n instanceof Date)return o?+new Date(n.toUTCString()).setSeconds(59):+new Date(n.toUTCString()).setSeconds(0,0);console.log("Date type is not valid ")}},h=t=>{let e=new Date(`January 29, 2001 ${t}`),o=new Date;return e.setDate(o.getDate()),e.setMonth(o.getMonth()+1),e.setFullYear(o.getFullYear()),e}},74900:(I,A,s)=>{s.r(A),s.d(A,{PrivacyPolicyModule:()=>T});var a=s(38583),l=s(37716),c=s(54655),_=s(53085);let i=(()=>{class r{constructor(D){this._router=D}ngOnInit(){this.currentTab=this._router.url.split("/")[2]}}return r.\u0275fac=function(D){return new(D||r)(l.Y36(c.F0))},r.\u0275cmp=l.Xpm({type:r,selectors:[["app-privacy-policy"]],decls:1,vars:1,consts:[[3,"currentUrl"]],template:function(D,m){1&D&&l._UZ(0,"app-editor",0),2&D&&l.Q6J("currentUrl",m.currentTab)},directives:[_.P],styles:[""]}),r})();var u=s(34153);const C=[{path:"",component:i}];let T=(()=>{class r{}return r.\u0275fac=function(D){return new(D||r)},r.\u0275mod=l.oAB({type:r}),r.\u0275inj=l.cJS({imports:[[a.ez,c.Bz.forChild(C),u.Z]]}),r})()}}]);