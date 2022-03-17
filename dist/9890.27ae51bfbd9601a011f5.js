"use strict";(self.webpackChunkweb_rcc_app=self.webpackChunkweb_rcc_app||[]).push([[9890],{15844:(O,d,o)=>{o.d(d,{q0:()=>f,Xp:()=>u,Z:()=>m,Qs:()=>c,v9:()=>M,RU:()=>w,E2:()=>x});const f=e=>!!/^\s+|\s+$/g.test(e),u=(e,n)=>e?n?+new Date(e).setHours(23,59,59):+new Date(e):null,m=e=>{for(var n in e)if(e.hasOwnProperty(n))return!1;return!0},c=e=>e?e.toLowerCase().split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" "):"",M=((new Date).getFullYear(),(e,n,l)=>{n=n||(n=(new Date).getTime()+".png");let g=e.split(","),C=g[0].match(/:(.*?);/)[1],P=atob(g[1]),h=P.length,y=new Uint8Array(h);for(;h--;)y[h]=P.charCodeAt(h);return new File([y],n,{type:C})}),w=(e,n,l=!1)=>{if(!e||e.length>15)return e;if(n){let g=new Date(n);if(g.setHours(new Date(e).getHours()),g.setMinutes(new Date(e).getMinutes()),g instanceof Date)return l?+new Date(g.toUTCString()).setSeconds(59):+new Date(g.toUTCString()).setSeconds(0,0);console.log("Date type is not valid ")}},x=e=>{let n=new Date(`January 29, 2001 ${e}`),l=new Date;return n.setDate(l.getDate()),n.setMonth(l.getMonth()+1),n.setFullYear(l.getFullYear()),n}},86191:(O,d,o)=>{o.d(d,{m:()=>f,V:()=>u});const f={NUMBER:/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,ONLY_NUMBER:/^\d+$/,ONLY_ALPHABET:/^[a-zA-Z]*$/,NAME:/^[a-z\ -]+$/i,START_WITH_ALPHABET_ENDS_WITH_DIGITS:/^[a-zA-Z]{4}[0-9]{4}$/,ALPHABET_WITH_DIGITS:/^[a-zA-Z0-9]+$/,AMOUNT:/(^[0][1-9]+)|([1-9]\d*)+$/,EMAIL:/^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,5}$/i,PASSWORD:/(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=.*[@#$%^&+=])(?=[^0-9]*[0-9]).{8,16}/,URL:/^(http|https):\/\/(([a-zA-Z0-9$\-_.+!*'(),;:&=]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])){3})|localhost|([a-zA-Z0-9\-\u00C0-\u017F]+\.)+([a-zA-Z]{2,}))(:[0-9]+)?(\/(([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*(\/([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*)*)?(\?([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?(\#([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?)?$/},u={MAX_PASSWORD_LENGTH:16,MAX_EMAIL_LENGTH:100,MAX_MOBILE_LENGTH:10,MIN_MOBILE_LENGTH:10,MAX_NAME_LENGTH:50,MIN_NAME_LENGTH:3,MAX_TITLE_LENGTH:50,MAX_FOCUS_BODY_PART_LENGTH:20,MAX_DES_LENGTH:500,MAX_CAL_BURN_LENGTH:10,MAX_QUESTION_LENGTH:500,MAX_DISPLAY_ORDER_LENGTH:3}},34550:(O,d,o)=>{o.d(d,{i:()=>u});var f=o(37716);let u=(()=>{class m{constructor(){this.isPasteAllowed=!0}onKeyUp(c){!this.isPasteAllowed&&86===c.keyCode&&!0===c.ctrlKey&&c.preventDefault(),this.preventKeys&&this.preventKeys.includes(c.keyCode)&&c.preventDefault()}}return m.\u0275fac=function(c){return new(c||m)},m.\u0275dir=f.lG2({type:m,selectors:[["","prevent-keys",""]],hostBindings:function(c,t){1&c&&f.NdJ("keydown",function(v){return t.onKeyUp(v)})},inputs:{preventKeys:["prevent-keys","preventKeys"],isPasteAllowed:"isPasteAllowed"}}),m})()},69528:(O,d,o)=>{o.d(d,{H:()=>m});var f=o(38583),u=o(37716);let m=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=u.oAB({type:i}),i.\u0275inj=u.cJS({imports:[[f.ez]]}),i})()},19890:(O,d,o)=>{o.r(d),o.d(d,{LoginModule:()=>B});var f=o(38583),u=o(4863),m=o(86191),i=o(3679),c=o(15844),t=o(37716),A=o(86578),v=o(27794),I=o(8008),M=o(98295),E=o(49983),Z=o(34550),D=o(76627),T=o(51095),L=o(54655),S=o(49689);const w=["email"],x=["pass"];function e(s,p){if(1&s&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&s){const r=t.oxw();t.xp6(1),t.Oqu(null==r.errorMsg?null:r.errorMsg.EMAIL_REQ)}}function n(s,p){if(1&s&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&s){const r=t.oxw();t.xp6(1),t.Oqu(null==r.errorMsg?null:r.errorMsg.INVALID_EMAIL)}}function l(s,p){1&s&&t._UZ(0,"img",19)}function g(s,p){1&s&&t._UZ(0,"img",20)}function C(s,p){if(1&s&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&s){const r=t.oxw();t.xp6(1),t.hij("",null==r.errorMsg?null:r.errorMsg.PASSWORD_REQ," ")}}function P(s,p){if(1&s&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&s){const r=t.oxw();t.xp6(1),t.hij("",null==r.errorMsg?null:r.errorMsg.INVALID_EMAIL_PASS," ")}}function h(s,p){if(1&s&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&s){const r=t.oxw();t.xp6(1),t.hij("",null==r.errorMsg?null:r.errorMsg.NO_SPACE_PASSWORD," ")}}const y=function(){return[32]},R=function(s){return[s]};let N=(()=>{class s{constructor(r,a,_,b){this._fb=r,this._storage=a,this._account=_,this._toast=b,this.limit=m.V,this.hide=!0,this.errorMsg=u.Dc}ngOnInit(){this.createForm()}createForm(){this.loginForm=this._fb.group({email:["",[i.kI.pattern(m.m.EMAIL)]],password:["",i.kI.pattern(m.m.PASSWORD)],deviceToken:[this._storage.deviceDetail(1)],deviceId:[this._storage.deviceDetail(2)],platform:[this._storage.deviceDetail(3)]})}get frmCtrl(){return this.loginForm.controls}loginHandler(){this.loginValidation(),this.loginForm.valid&&this.confirmLogIn()}confirmLogIn(){this._account.logIn(this.loginForm.value).subscribe(a=>{this._storage.loginSuccessfully(a)},a=>{a&&(403==a.statusCode?(this._toast.error(u.Dc.INVALID_EMAIL_PASS),this.frmCtrl.password.reset(),this.passRef.nativeElement.focus()):400==a.statusCode&&(this._toast.error(u.Dc.INVALID_EMAIL_PASS),this.emailRef.nativeElement.focus()))})}trimValues(){for(const r in this.loginForm.value)this.loginForm.value.hasOwnProperty(r)&&this.frmCtrl[r].value&&"string"==typeof this.frmCtrl[r].value&&this.frmCtrl[r].patchValue(this.frmCtrl[r].value.trim())}loginValidation(){if(this.frmCtrl.email.valid){if(this.frmCtrl.password.valid)return(0,c.q0)(this.frmCtrl.password.value)?(this.frmCtrl.password.setErrors({space:!0}),void this.passRef.nativeElement.focus()):void 0;this.passRef.nativeElement.focus()}else this.emailRef.nativeElement.focus()}}return s.\u0275fac=function(r){return new(r||s)(t.Y36(i.qu),t.Y36(A.V),t.Y36(v.B),t.Y36(I.k))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-login"]],viewQuery:function(r,a){if(1&r&&(t.Gf(w,5),t.Gf(x,5)),2&r){let _;t.iGM(_=t.CRH())&&(a.emailRef=_.first),t.iGM(_=t.CRH())&&(a.passRef=_.first)}},decls:31,vars:19,consts:[[1,"page-login"],[1,"head-text","bold","mb-10"],[1,"head-mini","mb-20","pb-10"],[3,"formGroup","ngSubmit"],[1,"mat-label"],["appearance","outline"],["matInput","","type","email","placeholder","Your Email Address","formControlName","email","autocomplete","off","required","",3,"prevent-keys","maxlength","blur"],["email",""],[4,"ngIf"],["appearance","outline",1,"passwordFormField"],["autocomplete","off","matInput","","placeholder","Your Password","formControlName","password","required","",3,"maxlength","type","keydown.space"],["pass",""],["matSuffix","",1,"pointer",3,"click"],["src","assets/images/svg/eye-slash.svg","alt","Hidden",4,"ngIf"],["src","assets/images/svg/eye.svg","alt","Visible",4,"ngIf"],[1,"actions"],["type","button","mat-button","",1,"forget-btn",3,"routerLink"],[1,"btn-cover"],["type","submit","mat-stroked-button","",1,"btn","btn-primary","butn","butn__new",3,"disabled"],["src","assets/images/svg/eye-slash.svg","alt","Hidden"],["src","assets/images/svg/eye.svg","alt","Visible"]],template:function(r,a){1&r&&(t.TgZ(0,"div",0),t.TgZ(1,"h3",1),t._uU(2,"Login to Infinite Trades"),t.qZA(),t.TgZ(3,"div",2),t._uU(4,"Enter your email and password below."),t.qZA(),t.TgZ(5,"form",3),t.NdJ("ngSubmit",function(){return a.loginHandler()}),t.TgZ(6,"mat-label",4),t._uU(7,"EMAIL ADDRESS"),t.qZA(),t.TgZ(8,"mat-form-field",5),t.TgZ(9,"input",6,7),t.NdJ("blur",function(){return a.trimValues()}),t.qZA(),t.YNc(11,e,2,1,"mat-error",8),t.YNc(12,n,2,1,"mat-error",8),t.qZA(),t.TgZ(13,"mat-label",4),t._uU(14,"PASSWORD"),t.qZA(),t.TgZ(15,"mat-form-field",9),t.TgZ(16,"input",10,11),t.NdJ("keydown.space",function(b){return b.preventDefault()}),t.qZA(),t.TgZ(18,"mat-icon",12),t.NdJ("click",function(){return a.hide=!a.hide}),t.YNc(19,l,1,0,"img",13),t.YNc(20,g,1,0,"img",14),t.qZA(),t.YNc(21,C,2,1,"mat-error",8),t.YNc(22,P,2,1,"mat-error",8),t.YNc(23,h,2,1,"mat-error",8),t.qZA(),t.TgZ(24,"div",15),t.TgZ(25,"a",16),t.ALo(26,"absolutePath"),t._uU(27," FORGOT PASSWORD? "),t.qZA(),t.qZA(),t.TgZ(28,"div",17),t.TgZ(29,"button",18),t._uU(30,"Login"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&r&&(t.xp6(5),t.Q6J("formGroup",a.loginForm),t.xp6(4),t.Q6J("prevent-keys",t.DdM(16,y))("maxlength",null==a.limit?null:a.limit.MAX_EMAIL_LENGTH),t.xp6(2),t.Q6J("ngIf",a.frmCtrl.email.hasError("required")),t.xp6(1),t.Q6J("ngIf",a.frmCtrl.email.hasError("pattern")),t.xp6(4),t.Q6J("maxlength",null==a.limit?null:a.limit.MAX_PASSWORD_LENGTH)("type",a.hide?"password":"text"),t.xp6(3),t.Q6J("ngIf",a.hide),t.xp6(1),t.Q6J("ngIf",!a.hide),t.xp6(1),t.Q6J("ngIf",a.frmCtrl.password.hasError("required")),t.xp6(1),t.Q6J("ngIf",a.frmCtrl.password.hasError("pattern")),t.xp6(1),t.Q6J("ngIf",a.frmCtrl.password.hasError("space")),t.xp6(2),t.Q6J("routerLink",t.VKq(17,R,t.lcZ(26,14,"ABS_FORGOT_PASSWORD"))),t.xp6(4),t.Q6J("disabled",a.loginForm.invalid))},directives:[i._Y,i.JL,i.sg,M.hX,M.KE,E.Nt,i.Fj,i.JJ,i.u,i.Q7,Z.i,i.nD,f.O5,D.Hw,M.R9,T.zs,L.yS,T.lW,M.TO],pipes:[S.g],styles:['[_nghost-%COMP%]   .accounts-wrapper[_ngcontent-%COMP%]{padding:0;display:flex;align-items:center;justify-content:space-between;width:100%;min-height:100vh;overflow:auto;background-color:#f5f5f5}[_nghost-%COMP%]   .accounts-wrapper[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]{flex:0 0 50%;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#e0e0e0}[_nghost-%COMP%]   .accounts-wrapper[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .logo-para[_ngcontent-%COMP%]{font-weight:900;font-size:64px;position:relative;text-shadow:0px 2px 10px #0000002e}[_nghost-%COMP%]   .accounts-wrapper[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .logo-para[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;filter:blur(118px);background:#0da4ce;width:100%;height:100%}[_nghost-%COMP%]   .accounts-wrapper[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]{flex:0 0 50%;background:#ffffff;min-height:100vh;display:flex;align-items:center;justify-content:center;position:relative}[_nghost-%COMP%]   .on-boarding-page[_ngcontent-%COMP%]{background-color:#fff;width:500px;padding:40px;max-width:100%;margin:auto;border-radius:1.5em}[_nghost-%COMP%]   .on-boarding-page[_ngcontent-%COMP%]   .logo-cover[_ngcontent-%COMP%]{width:120px;margin:auto auto 20px}@media screen and (max-width: 1500px){[_nghost-%COMP%]   .on-boarding-page[_ngcontent-%COMP%]   .logo-cover[_ngcontent-%COMP%]{width:100px}}[_nghost-%COMP%]   .on-boarding-page[_ngcontent-%COMP%]   .logo-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   .on-boarding-page[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .on-boarding-page[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .on-boarding-page[_ngcontent-%COMP%]   .link-cover[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%]   .on-boarding-page[_ngcontent-%COMP%]   .link-cover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .on-boarding-page[_ngcontent-%COMP%]   .link-cover[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%]{margin-bottom:0}[_nghost-%COMP%]   .on-boarding-page[_ngcontent-%COMP%]   .link-cover[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{font-size:14px}[_nghost-%COMP%]   .on-boarding-page[_ngcontent-%COMP%]   .join-cover[_ngcontent-%COMP%]{margin-top:10px;text-align:center}[_nghost-%COMP%]   .on-boarding-page[_ngcontent-%COMP%]   .join-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;line-height:26px}@media screen and (max-width: 576px){[_nghost-%COMP%]   .on-boarding-page[_ngcontent-%COMP%]   .join-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;line-height:22px}}[_nghost-%COMP%]   .passwordFormField[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .passwordFormField[_ngcontent-%COMP%]   .mat-form-field-suffix[_ngcontent-%COMP%]{top:7px!important}.head-text[_ngcontent-%COMP%]{font-size:30px;color:#4f4f4f}.head-mini[_ngcontent-%COMP%]{font-size:16px;color:#828282;border-bottom:1px solid #bdbdbd;padding-bottom:10px}[_nghost-%COMP%]     .password .mat-form-field-flex .mat-form-field-suffix{display:flex;align-items:flex-start}[_nghost-%COMP%]     .password .mat-form-field-flex .mat-form-field-suffix .page-invalid-password-hint{margin-left:10px}.actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.actions[_ngcontent-%COMP%]   .forget-btn[_ngcontent-%COMP%]{font-weight:600;font-size:13px;color:#8d98a1}.actions[_ngcontent-%COMP%]   .forget-btn[_ngcontent-%COMP%]:focus, .actions[_ngcontent-%COMP%]   .forget-btn[_ngcontent-%COMP%]:hover{color:#333}.page-login[_ngcontent-%COMP%]   .btn-cover[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{width:100%;min-width:100%;height:48px}']}),s})();var H=o(58415),F=o(7539),U=o(16961),G=o(69528);const z=[{path:"",component:N}];let B=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[f.ez,L.Bz.forChild(z),H.F,i.UX,E.c,M.lN,F.p9,D.Ps,T.ot,U.Q,G.H]]}),s})()},58415:(O,d,o)=>{o.d(d,{F:()=>m});var f=o(38583),u=o(37716);let m=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=u.oAB({type:i}),i.\u0275inj=u.cJS({imports:[[f.ez]]}),i})()}}]);