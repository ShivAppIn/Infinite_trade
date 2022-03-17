"use strict";(self.webpackChunkweb_rcc_app=self.webpackChunkweb_rcc_app||[]).push([[7319],{87319:(G,_,i)=>{i.r(_),i.d(_,{FaqModule:()=>j});var u=i(38583),h=i(4863),b=i(11863),x=i(63563),C=i(80466),O=i(64762),l=i(3679),r=i(22238),f=i(86191),w=i(15844),t=i(37716),m=i(54344),q=i(48599),M=i(8008),g=i(98295),v=i(49983);let Z=(()=>{class o{constructor(){this.isMobileNumber=!1,this.isPercentage=!1}ngOnInit(){}onKeyDown(n){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275dir=t.lG2({type:o,selectors:[["input","number",""]],hostBindings:function(n,e){1&n&&t.NdJ("keydown",function(c){return e.onKeyDown(c)})},inputs:{isMobileNumber:"isMobileNumber",isPercentage:"isPercentage"}}),o})();var P=i(36858),A=i(51095),y=i(85597);function T(o,p){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Oqu(n.errMsg.ORDER_REQ)}}function F(o,p){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Oqu(n.errMsg.INVALID_ORDER)}}function I(o,p){if(1&o&&(t.TgZ(0,"label",21),t._uU(1),t.qZA()),2&o){const n=t.oxw(2);t.xp6(1),t.Oqu(n.errMsg.ANSWER_REQ)}}function E(o,p){if(1&o&&(t.TgZ(0,"span",19),t.YNc(1,I,2,1,"label",20),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.answer.errors.required)}}let N=(()=>{class o{constructor(n,e,a,c,s,d){this._dialogRef=n,this.data=e,this._fb=a,this._cms=c,this._s3=s,this._toast=d,this._limit=f.V,this.errMsg=h.eY,this._dialogRef._containerInstance._config.width="680px",this._dialogRef._containerInstance._config.autoFocus=!1}ngOnInit(){this.createForm(),1==this.data.id&&this.patchFaqData()}createForm(){this.faqForm=this._fb.group({question:[""],answer:["",l.kI.required],position:["",[l.kI.pattern(f.m.AMOUNT)]]})}get f(){return this.faqForm.controls}faqHandler(){return(0,O.mG)(this,void 0,void 0,function*(){this.faqForm.valid?this.getQuilEditorImages(()=>{let n=this.faqForm.value;n.position=Number(n.position),0==this.data.id?this.confirmAddFaq(n):this.confirmEditFaq(n)}):this.f.answer.markAsDirty()})}getQuilEditorImages(n){return(0,O.mG)(this,void 0,void 0,function*(){const e=document.querySelectorAll("#ql-editor1 img");for(let c=0;c<e.length;c++){const s=e[c].src;s.length>500&&(yield this.fileReaderBase64ToFile(s).then(d=>{e[c].src=d}))}const a=document.getElementById("ql-editor1").innerHTML;this.f.answer.setValue(a),n(!0)})}fileReaderBase64ToFile(n){return new Promise((e,a)=>{(0,w.v9)(n,null,c=>{this.uploadImage(c,function(s){e(s)})})})}uploadImage(n,e){this._s3.uploadFile(n).then(a=>{e(a.Location)})}confirmAddFaq(n){this._cms.addFaq(n).subscribe(e=>{this.closePopup(e)},e=>{401==e.statusCode&&this.closePopup("",!1)})}confirmEditFaq(n){this.faqForm.dirty?(n.faqId=this.data.data._id,this._cms.updateFaq(n).subscribe(e=>{this.closePopup(e)},e=>{401==e.statusCode&&this.closePopup("",!1)})):this._dialogRef.close(!1)}closePopup(n,e=!0){this._dialogRef.close({isHitApi:!!e}),e&&this._toast.success(n.message)}patchFaqData(){this.faqForm.patchValue(this.data.data)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.so),t.Y36(r.WI),t.Y36(l.qu),t.Y36(m.c),t.Y36(q.b),t.Y36(M.k))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-edit-faq"]],decls:35,vars:15,consts:[[3,"formGroup","ngSubmit"],[1,"page-add-edit-faq","popup-ui"],[1,"popup-header"],["mat-dialog-close","",1,"material-icons","close-icon"],[1,"popup-body"],["appearance","outline"],["matInput","","formControlName","question","autocomplete","off","required","",3,"maxlength"],["ques1",""],["align","end"],["matInput","","number","","formControlName","position","autocomplete","off","required","",3,"maxlength"],[4,"ngIf"],[1,"left","bold","mb-10"],["formControlName","answer"],["id","ql-editor1","hidden","",3,"innerHTML"],["class","mat-error",4,"ngIf"],[1,"popup-footer"],[1,"btn-cover"],["type","button","mat-stroked-button","","mat-dialog-close","",1,"btn","btn-simple"],["type","submit","mat-stroked-button","",1,"btn","btn-primary"],[1,"mat-error"],["class","error-msg",4,"ngIf"],[1,"error-msg"]],template:function(n,e){if(1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return e.faqHandler()}),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h4"),t._uU(4),t.qZA(),t.TgZ(5,"span",3),t._uU(6,"close"),t.qZA(),t.qZA(),t.TgZ(7,"div",4),t.TgZ(8,"mat-form-field",5),t.TgZ(9,"mat-label"),t._uU(10,"Question"),t.qZA(),t._UZ(11,"input",6,7),t.TgZ(13,"mat-hint",8),t._uU(14),t.qZA(),t.TgZ(15,"mat-error"),t._uU(16),t.qZA(),t.qZA(),t.TgZ(17,"mat-form-field",5),t.TgZ(18,"mat-label"),t._uU(19,"Display Order"),t.qZA(),t._UZ(20,"input",9),t.YNc(21,T,2,1,"mat-error",10),t.YNc(22,F,2,1,"mat-error",10),t.qZA(),t.TgZ(23,"h4",11),t._uU(24,"Answer"),t.qZA(),t._UZ(25,"quill-editor",12),t._UZ(26,"div",13),t.ALo(27,"safe"),t.YNc(28,E,2,1,"span",14),t.qZA(),t.TgZ(29,"div",15),t.TgZ(30,"div",16),t.TgZ(31,"button",17),t._uU(32," Cancel"),t.qZA(),t.TgZ(33,"button",18),t._uU(34),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const a=t.MAs(12);t.Q6J("formGroup",e.faqForm),t.xp6(4),t.hij("",0==(null==e.data?null:e.data.id)?"Add New":"Edit"," FAQ"),t.xp6(7),t.Q6J("maxlength",null==e._limit?null:e._limit.MAX_QUESTION_LENGTH),t.xp6(3),t.AsE("",a.value.length," / ",null==e._limit?null:e._limit.MAX_QUESTION_LENGTH,""),t.xp6(2),t.Oqu(e.errMsg.QUESTION_REQ),t.xp6(4),t.Q6J("maxlength",null==e._limit?null:e._limit.MAX_DISPLAY_ORDER_LENGTH),t.xp6(1),t.Q6J("ngIf",e.f.position.hasError("required")),t.xp6(1),t.Q6J("ngIf",e.f.position.hasError("pattern")),t.xp6(4),t.Q6J("innerHTML",t.xi3(27,12,e.f.answer.value,"html"),t.oJD),t.xp6(2),t.Q6J("ngIf",e.f.answer.errors&&(e.f.answer.touched||e.f.answer.dirty)),t.xp6(6),t.hij(" ",0==(null==e.data?null:e.data.id)?"Add":"Update"," ")}},directives:[l._Y,l.JL,l.sg,r.ZT,g.KE,g.hX,v.Nt,l.Fj,l.JJ,l.u,l.Q7,l.nD,g.bx,g.TO,Z,u.O5,P.g6,A.lW],pipes:[y.y],styles:[".popup-ui[_ngcontent-%COMP%]{background:#ffffff}.popup-ui[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]{padding:30px 20px 0;background-color:#fff;border-radius:3px 3px 0 0;color:#202020;position:relative;display:flex;align-items:center;justify-content:flex-start}.popup-ui[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .popup-inner-header[_ngcontent-%COMP%]{max-width:432px;padding-left:88px}.popup-ui[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{position:absolute;right:34px;top:50%;transform:translateY(-50%);z-index:9;cursor:pointer;color:#202020}.popup-ui[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-left[_ngcontent-%COMP%]{margin-right:10px}.popup-ui[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#202020;text-transform:capitalize;font-weight:500;font-size:24px}.popup-ui[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]{text-align:center;padding:20px;max-height:calc(100vh - 160px);overflow-y:auto;overflow-x:auto}.popup-ui[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px}.popup-ui[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]::-webkit-scrollbar-track{width:8px;height:8px;border-radius:20px;background:#c7c9cb}.popup-ui[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:20px;background-color:#0da4ce;opacity:.5;width:8px}.popup-ui[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{opacity:1}.popup-ui[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:24px;font-weight:500;margin-bottom:26px}.popup-ui[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.popup-ui[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%]{text-align:left!important}.popup-ui[_ngcontent-%COMP%]   .popup-footer[_ngcontent-%COMP%]{padding-bottom:20px}.popup-ui[_ngcontent-%COMP%]   .popup-footer[_ngcontent-%COMP%]   .btn-cover[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin:0 -10px}.popup-ui[_ngcontent-%COMP%]   .popup-footer[_ngcontent-%COMP%]   .btn-cover[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin:10px;min-width:110px!important}.popup-ui[_ngcontent-%COMP%]   .popup-footer[_ngcontent-%COMP%]   .single-btn[_ngcontent-%COMP%]{text-align:left;max-width:432px;width:100%;margin:0 auto 20px}.popup-ui[_ngcontent-%COMP%]   .popup-footer[_ngcontent-%COMP%]   .single-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.popup-ui[_ngcontent-%COMP%]   .popup-footer[_ngcontent-%COMP%]   .btn-ex-large[_ngcontent-%COMP%]{max-width:96%;width:100%;margin:0 auto 20px}.popup-ui[_ngcontent-%COMP%]   .popup-footer[_ngcontent-%COMP%]   .btn-ex-large[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]     .popup-body{padding:10px 20px!important}[_nghost-%COMP%]     .ql-snow .ql-tooltip{left:auto!important;top:0!important;right:10%}[_nghost-%COMP%]     .ql-image{display:none!important}[_nghost-%COMP%]     .ql-video{display:none!important}"]}),o})();var U=i(82322);let D=(()=>{class o{constructor(n,e){this._dialogRef=n,this.data=e,this.dateType=h.lb,this._dialogRef._containerInstance._config.width="650px",this._dialogRef._containerInstance._config.autoFocus=!1}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.so),t.Y36(r.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-faq-details"]],decls:32,vars:13,consts:[[1,"page-welcome-mssg-detail","popup-ui"],[1,"popup-header"],["mat-dialog-close","",1,"material-icons","close-icon"],[1,"popup-body","detail-ui","left"],[1,"faq_details_wrapper"],[1,"row"],[1,"col-6"],[1,"label"],[1,"value"],[1,"col-12"],[1,"value",3,"innerHTML"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h4"),t._uU(3,"FAQ Details"),t.qZA(),t.TgZ(4,"span",2),t._uU(5,"close"),t.qZA(),t.qZA(),t.TgZ(6,"div",3),t.TgZ(7,"div",4),t.TgZ(8,"div",5),t.TgZ(9,"div",6),t.TgZ(10,"p",7),t._uU(11,"Question Display Order"),t.qZA(),t.TgZ(12,"p",8),t._uU(13),t.ALo(14,"emptyValue"),t.qZA(),t.qZA(),t.TgZ(15,"div",6),t.TgZ(16,"p",7),t._uU(17,"Added On"),t.qZA(),t.TgZ(18,"p",8),t._uU(19),t.ALo(20,"date"),t.qZA(),t.qZA(),t.TgZ(21,"div",9),t.TgZ(22,"p",7),t._uU(23,"Question"),t.qZA(),t.TgZ(24,"p",8),t._uU(25),t.ALo(26,"emptyValue"),t.qZA(),t.qZA(),t.TgZ(27,"div",9),t.TgZ(28,"p",7),t._uU(29,"Answer"),t.qZA(),t._UZ(30,"div",10),t.ALo(31,"emptyValue"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(13),t.Oqu(t.lcZ(14,4,null==e.data?null:e.data.position)),t.xp6(6),t.Oqu(t.xi3(20,6,null==e.data?null:e.data.created,e.dateType.DATE_WITH_TIME)),t.xp6(6),t.Oqu(t.lcZ(26,9,null==e.data?null:e.data.question)),t.xp6(5),t.Q6J("innerHTML",t.lcZ(31,11,null==e.data?null:e.data.answer),t.oJD))},directives:[r.ZT],pipes:[U.J,u.uU],styles:[".popup-ui[_ngcontent-%COMP%]{background:#ffffff}.popup-ui[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]{padding:30px 20px 0;background-color:#fff;border-radius:3px 3px 0 0;color:#202020;position:relative;display:flex;align-items:center;justify-content:flex-start}.popup-ui[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .popup-inner-header[_ngcontent-%COMP%]{max-width:432px;padding-left:88px}.popup-ui[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{position:absolute;right:34px;top:50%;transform:translateY(-50%);z-index:9;cursor:pointer;color:#202020}.popup-ui[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-left[_ngcontent-%COMP%]{margin-right:10px}.popup-ui[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#202020;text-transform:capitalize;font-weight:500;font-size:24px}.popup-ui[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]{text-align:center;padding:20px;max-height:calc(100vh - 160px);overflow-y:auto;overflow-x:auto}.popup-ui[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px}.popup-ui[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]::-webkit-scrollbar-track{width:8px;height:8px;border-radius:20px;background:#c7c9cb}.popup-ui[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:20px;background-color:#0da4ce;opacity:.5;width:8px}.popup-ui[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{opacity:1}.popup-ui[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:24px;font-weight:500;margin-bottom:26px}.popup-ui[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.popup-ui[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%]{text-align:left!important}.popup-ui[_ngcontent-%COMP%]   .popup-footer[_ngcontent-%COMP%]{padding-bottom:20px}.popup-ui[_ngcontent-%COMP%]   .popup-footer[_ngcontent-%COMP%]   .btn-cover[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin:0 -10px}.popup-ui[_ngcontent-%COMP%]   .popup-footer[_ngcontent-%COMP%]   .btn-cover[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin:10px;min-width:110px!important}.popup-ui[_ngcontent-%COMP%]   .popup-footer[_ngcontent-%COMP%]   .single-btn[_ngcontent-%COMP%]{text-align:left;max-width:432px;width:100%;margin:0 auto 20px}.popup-ui[_ngcontent-%COMP%]   .popup-footer[_ngcontent-%COMP%]   .single-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.popup-ui[_ngcontent-%COMP%]   .popup-footer[_ngcontent-%COMP%]   .btn-ex-large[_ngcontent-%COMP%]{max-width:96%;width:100%;margin:0 auto 20px}.popup-ui[_ngcontent-%COMP%]   .popup-footer[_ngcontent-%COMP%]   .btn-ex-large[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-right:-10px;margin-left:-10px}.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%]{position:relative;padding-right:10px;padding-left:10px;max-width:auto!important}.col-1[_ngcontent-%COMP%]{width:calc(100% / 12)}.col-2[_ngcontent-%COMP%]{width:calc((100% / 12) * 2)}.col-3[_ngcontent-%COMP%]{width:calc((100% / 12) * 3)}.col-4[_ngcontent-%COMP%]{width:calc((100% / 12) * 4)}.col-5[_ngcontent-%COMP%]{width:calc((100% / 12) * 5)}.col-6[_ngcontent-%COMP%]{width:calc((100% / 12) * 6)}.col-7[_ngcontent-%COMP%]{width:calc((100% / 12) * 7)}.col-8[_ngcontent-%COMP%]{width:calc((100% / 12) * 8)}.col-9[_ngcontent-%COMP%]{width:calc((100% / 12) * 9)}.col-10[_ngcontent-%COMP%]{width:calc((100% / 12) * 10)}.col-11[_ngcontent-%COMP%]{width:calc((100% / 12) * 11)}.col-12[_ngcontent-%COMP%]{width:100%}@media screen and (max-width: 1200px){.col-xl-1[_ngcontent-%COMP%]{width:calc(100% / 12)}.col-xl-2[_ngcontent-%COMP%]{width:calc((100% / 12) * 2)}.col-xl-3[_ngcontent-%COMP%]{width:calc((100% / 12) * 3)}.col-xl-4[_ngcontent-%COMP%]{width:calc((100% / 12) * 4)}.col-xl-5[_ngcontent-%COMP%]{width:calc((100% / 12) * 5)}.col-xl-6[_ngcontent-%COMP%]{width:calc((100% / 12) * 6)}.col-xl-7[_ngcontent-%COMP%]{width:calc((100% / 12) * 7)}.col-xl-8[_ngcontent-%COMP%]{width:calc((100% / 12) * 8)}.col-xl-9[_ngcontent-%COMP%]{width:calc((100% / 12) * 9)}.col-xl-10[_ngcontent-%COMP%]{width:calc((100% / 12) * 10)}.col-xl-11[_ngcontent-%COMP%]{width:calc((100% / 12) * 11)}.col-xl-12[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width: 992px){.col-lg-1[_ngcontent-%COMP%]{width:calc(100% / 12)}.col-lg-2[_ngcontent-%COMP%]{width:calc((100% / 12) * 2)}.col-lg-3[_ngcontent-%COMP%]{width:calc((100% / 12) * 3)}.col-lg-4[_ngcontent-%COMP%]{width:calc((100% / 12) * 4)}.col-lg-5[_ngcontent-%COMP%]{width:calc((100% / 12) * 5)}.col-lg-6[_ngcontent-%COMP%]{width:calc((100% / 12) * 6)}.col-lg-7[_ngcontent-%COMP%]{width:calc((100% / 12) * 7)}.col-lg-8[_ngcontent-%COMP%]{width:calc((100% / 12) * 8)}.col-lg-9[_ngcontent-%COMP%]{width:calc((100% / 12) * 9)}.col-lg-10[_ngcontent-%COMP%]{width:calc((100% / 12) * 10)}.col-lg-11[_ngcontent-%COMP%]{width:calc((100% / 12) * 11)}.col-lg-12[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width: 768px){.col-md-1[_ngcontent-%COMP%]{width:calc(100% / 12)}.col-md-2[_ngcontent-%COMP%]{width:calc((100% / 12) * 2)}.col-md-3[_ngcontent-%COMP%]{width:calc((100% / 12) * 3)}.col-md-4[_ngcontent-%COMP%]{width:calc((100% / 12) * 4)}.col-md-5[_ngcontent-%COMP%]{width:calc((100% / 12) * 5)}.col-md-6[_ngcontent-%COMP%]{width:calc((100% / 12) * 6)}.col-md-7[_ngcontent-%COMP%]{width:calc((100% / 12) * 7)}.col-md-8[_ngcontent-%COMP%]{width:calc((100% / 12) * 8)}.col-md-9[_ngcontent-%COMP%]{width:calc((100% / 12) * 9)}.col-md-10[_ngcontent-%COMP%]{width:calc((100% / 12) * 10)}.col-md-11[_ngcontent-%COMP%]{width:calc((100% / 12) * 11)}.col-md-12[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width: 576px){.col-sm-1[_ngcontent-%COMP%]{width:calc(100% / 12)}.col-sm-2[_ngcontent-%COMP%]{width:calc((100% / 12) * 2)}.col-sm-3[_ngcontent-%COMP%]{width:calc((100% / 12) * 3)}.col-sm-4[_ngcontent-%COMP%]{width:calc((100% / 12) * 4)}.col-sm-5[_ngcontent-%COMP%]{width:calc((100% / 12) * 5)}.col-sm-6[_ngcontent-%COMP%]{width:calc((100% / 12) * 6)}.col-sm-7[_ngcontent-%COMP%]{width:calc((100% / 12) * 7)}.col-sm-8[_ngcontent-%COMP%]{width:calc((100% / 12) * 8)}.col-sm-9[_ngcontent-%COMP%]{width:calc((100% / 12) * 9)}.col-sm-10[_ngcontent-%COMP%]{width:calc((100% / 12) * 10)}.col-sm-11[_ngcontent-%COMP%]{width:calc((100% / 12) * 11)}.col-sm-12[_ngcontent-%COMP%]{width:100%}}.detail-ui[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   p.label[_ngcontent-%COMP%]{font-size:13px;font-weight:700;margin-bottom:5px}@media screen and (max-width: 576px){.detail-ui[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   p.label[_ngcontent-%COMP%]{font-size:10px}}.detail-ui[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:14px;margin-bottom:20px;margin-top:5px;color:#585858;line-height:20px}@media screen and (max-width: 576px){.detail-ui[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:10px;margin-bottom:10px;margin-top:2px;line-height:15px}}.detail-ui[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#585858!important}.page-welcome-mssg-detail[_ngcontent-%COMP%]{max-width:100%}.faq_details_wrapper[_ngcontent-%COMP%]{text-align:left}"]}),o})();var L=i(27632),Q=i(78703),R=i(69763);let Y=(()=>{class o extends x.t{constructor(n,e,a,c,s,d){super(),this._bc=n,this._table=e,this._toast=a,this._cms=c,this._common=s,this._dialog=d,this.heading=[{heading:"Question",key:"question",type:"link",faqContent:!0},{heading:"Display Order",key:"position",align:"center"},{heading:"Added On",key:"created",align:"center",type:"date"},{heading:"Action",key:"status",type:"action",action:[1,3]}],this.tempList=[],this.subscriptions=[]}ngOnInit(){this._bc.setBreadcrumb(b.pZ),this.permissionHandler(),this.getFaqListing()}permissionHandler(){this._common.getPermissionByModuleId(h.rL.CMS)}removeOnlyAddBtn(){this.permissionClass=this._common.getClassToRemoveAddBtn()}removeActionObj(){this.heading.splice(this.heading.length-1,1)}removeActionOperation(n){this.heading[this.heading.length-1].action=this.removeAction([n])}removeAction(n){return this.heading[this.heading.length-1].action.filter(e=>!n.includes(e))}getFaqListing(n=!1){this.subscriptions.push(this._cms.getFaqList(this.pageParams,n).subscribe(e=>{this.tempList=e.data,this._table.tableRender(e)},()=>{this._table.tableRender({data:[]})}))}showDetailInPopup(n){this._dialog.open(D,{autoFocus:!1,data:n})}addEditFaq(n){this._dialog.open(N,{autoFocus:!1,disableClose:!0,data:n}).afterClosed().subscribe(a=>{a&&a.isHitApi&&this.getFaqListing(!0)})}paginationWithSearch(n,e){switch(e){case 0:this.resetPages(),this.search=n,this.tableRef.paginator&&this.tableRef.paginator.firstPage();break;default:this.pageOptionsOnChange=n}this.getFaqListing(!0)}sortByListing(n){this.sortOptions=n,this.getFaqListing(!0)}changeStatus(n){switch(n.id){case 1:this.addEditFaq(n);break;default:this.changeFaqStatus(n)}}changeFaqStatus(n){this._cms.deleteFaq({faqId:n.data._id}).subscribe(a=>{n.action==this.API_EVENT.delete&&n.data.s_no>1&&n.data.s_no%this.limit==1&&1==this.tempList.length&&(this.pageNo=this.pageNo-1,this.tableRef.paginator.pageIndex=this.pageNo-1),this.getFaqListing(!0),this._toast.success(a.message)})}ngOnDestroy(){this.subscriptions.length>0&&this._common.unsubscribe(this.subscriptions)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(L.p),t.Y36(Q.w),t.Y36(M.k),t.Y36(m.c),t.Y36(R.v),t.Y36(r.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-faq"]],viewQuery:function(n,e){if(1&n&&t.Gf(C.S,5),2&n){let a;t.iGM(a=t.CRH())&&(e.tableRef=a.first)}},features:[t.qOj],decls:1,vars:1,consts:[["notFound","FAQ's not added","cls","removeSearch removeFilter",1,"mat_table",3,"heading","add","detailInPopup","find","page","status","sort"]],template:function(n,e){1&n&&(t.TgZ(0,"mat-table-renderer",0),t.NdJ("add",function(c){return e.addEditFaq(c)})("detailInPopup",function(c){return e.showDetailInPopup(c)})("find",function(c){return e.paginationWithSearch(c,0)})("page",function(c){return e.paginationWithSearch(c,1)})("status",function(c){return e.changeStatus(c)})("sort",function(c){return e.sortByListing(c)}),t.qZA()),2&n&&t.Q6J("heading",e.heading)},directives:[C.S],styles:[".mat_table[_ngcontent-%COMP%]{background-color:#000}"]}),o})();var S=i(54655),J=i(73478),H=i(61322),z=i(16961),B=i(62305);const k=[{path:"",component:Y}];let j=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[m.c],imports:[[u.ez,S.Bz.forChild(k),l.UX,J.g,r.Is,H.q,z.Q,B.h,P.fi.forRoot()]]}),o})()}}]);