"use strict";(self.webpackChunkweb_rcc_app=self.webpackChunkweb_rcc_app||[]).push([[5618],{45618:(v,c,s)=>{s.r(c),s.d(c,{OemListingModule:()=>y});var m=s(38583),g=s(54395),h=s(70615),l=s(63563),t=s(37716),u=s(1017),p=s(91859),d=s(69763);let b=(()=>{class i extends l.t{constructor(e,n,a){super(),this._tableSer=e,this._user=n,this._common=a,this.queryObj={},this.searchValue="",this.subscripition=[],this.heading=[{heading:"BUSINESS NAME",key:"name"},{heading:"EMAIL",key:"email"},{heading:"LOCATION",key:"location.address"},{heading:"DATE JOINED",key:"createdAt",align:"center",type:"date"},{heading:"ACTIONS",key:"actionOem",align:"center",type:"action",action:[2]}],this.setSearchSubscription()}ngOnInit(){this.getUserList()}setSearchSubscription(){this.subscripition.push(this._user._searchSubject.pipe((0,g.b)(500)).subscribe(e=>{this.searchValue=e,this.getUserList()}))}paginationWithSearch(e,n){switch(n){case 0:this.resetPages(),this.search=e,this.tableRef.paginator&&this.tableRef.paginator.firstPage();break;default:this.pageOptionsOnChange=e}this.getUserList()}getUserList(){this.queryObj=Object.assign(this.searchValue.length?Object.assign(Object.assign({},this.validPageOptions),{searchKey:this.searchValue}):Object.assign({},this.validPageOptions),{userType:"CLIENT"}),this.getList()}getList(){this.subscripition.push(this._user.userList(this.queryObj).subscribe(e=>{this._tableSer.tableRender(e,"oem","")},()=>{this._tableSer.tableRender({data:[]},"","")}))}sortByListing(e){this.sortOptions=e,this.getList()}checkedUsers(e){}ngOnDestroy(){this.subscripition.length&&this._common.unsubscribe(this.subscripition)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(u.L),t.Y36(p.f),t.Y36(d.v))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-oem-listing"]],viewQuery:function(e,n){if(1&e&&t.Gf(h.H,5),2&e){let a;t.iGM(a=t.CRH())&&(n.tableRef=a.first)}},features:[t.qOj],decls:1,vars:1,consts:[[3,"heading","find","page","sortData","checkUsers"]],template:function(e,n){1&e&&(t.TgZ(0,"common-mat-table",0),t.NdJ("find",function(o){return n.paginationWithSearch(o,0)})("page",function(o){return n.paginationWithSearch(o,1)})("sortData",function(o){return n.sortByListing(o)})("checkUsers",function(o){return n.checkedUsers(o)}),t.qZA()),2&e&&t.Q6J("heading",n.heading)},directives:[h.H],styles:[""]}),i})();var O=s(54655),f=s(2502);const L=[{path:"",component:b}];let y=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[m.ez,O.Bz.forChild(L),f.k]]}),i})()}}]);