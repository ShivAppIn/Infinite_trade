import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CommonMatTableComponent } from 'src/app/components/common-mat-table/common-mat-table.component';
import { MatTableService } from 'src/app/components/common-mat-table/mat-table-service.service';
import { Pagination } from 'src/app/constants/pagination';
import { CommonService } from 'src/app/services/common/common.service';
import { UsersService } from '../../_service/users.service';

@Component({
  selector: 'app-oem-listing',
  templateUrl: './oem-listing.component.html',
  styleUrls: ['./oem-listing.component.scss']
})
export class OemListingComponent extends Pagination implements OnInit,OnDestroy {
  queryObj = {};
  searchValue='';

  @ViewChild(CommonMatTableComponent) tableRef: CommonMatTableComponent;

  subscripition: Subscription[]=[];


  heading = [
    { heading: 'BUSINESS NAME', key: 'name'},
    { heading: 'EMAIL', key: 'email'},
    { heading: 'LOCATION', key: 'location.address'},
    { heading: 'DATE JOINED', key: 'createdAt', align: 'center' , type: "date"},
    { heading: 'ACTIONS', key: 'actionOem', align: 'center' , type: 'action', action: [2]}
  ];
  constructor(
    private _tableSer: MatTableService,
    private _user: UsersService,
    private _common:CommonService
  ) {
    super();
    this.setSearchSubscription();
  }

  ngOnInit(): void {
    this.getUserList();
  }

  private setSearchSubscription() {
    this.subscripition.push(this._user._searchSubject.pipe(
      debounceTime(500)
    ).subscribe((searchValue: string) => {
      this.searchValue = searchValue;
      this.getUserList();
    })
    )
  }


  paginationWithSearch(ev: any, id: number) {
    switch (id) {
      case 0:
        this.resetPages();
        this.search = ev;
        if (this.tableRef.paginator) {
          this.tableRef.paginator.firstPage();
        }
        break;
      default:
        this.pageOptionsOnChange = ev;
        break;
    }
    this.getUserList();
  }

  getUserList() {
    if (this.searchValue.length) {
      this.queryObj = {
        ...this.validPageOptions,
        ...{searchKey:this.searchValue},
        userType: 'CLIENT'
      }
    } else {
      this.queryObj = {
        ...this.validPageOptions,
        userType: 'CLIENT'
      }
    }
    this.getList();
  }

  getList(){
    this.subscripition.push(this._user.userList(this.queryObj).subscribe((response: any) => {
      this._tableSer.tableRender(response,'oem','');
    }, () => {
      this._tableSer.tableRender({ data: [] },'','');
    })
    )
  }

  sortByListing(event: any) {
    this.sortOptions = event;
    this.getList();
  }

  checkedUsers(checkedUser: any) {

  }

  ngOnDestroy() {
    if (this.subscripition.length) {
      this._common.unsubscribe(this.subscripition);
    }
  }

}
