import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CommonMatTableComponent } from 'src/app/components/common-mat-table/common-mat-table.component';
import { MatTableService } from 'src/app/components/common-mat-table/mat-table-service.service';
import { ConfirmationModalComponent } from 'src/app/components/confirmation-modal/confirmation-modal.component';
import { ToastService } from 'src/app/components/toast-notification/toast.service';
import { MSSG_CONFIRMATION_DELETE, TITLE_CONFIRMATION_DELETE } from 'src/app/constants/messages';
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

  subscripition: Subscription[] = [];
  
  userIds = [];
  deleteText:string



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
    private _common: CommonService,
    private _dialog: MatDialog,
    private _toast:ToastService
  ) {
    super();
    this.setSearchSubscription();
    this.addOemListing();
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

  private addOemListing() {
    this.subscripition.push(this._user._addOEMListing.subscribe((val) => {
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
      this.resetPages();
      this.tableRef.paginator?.firstPage();
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
    this.userIds = [];
    this.deleteText = checkedUser.length === 1 ? checkedUser[0]?.name : `selected (${checkedUser.length})`
    for (let item of checkedUser) {
      this.userIds.push(item._id);
    }
  }

  deleteOem() {
    const dialog = this._dialog.open(ConfirmationModalComponent, {
      data: {
        title: this.userIds.length==1 ? TITLE_CONFIRMATION_DELETE(this.deleteText): TITLE_CONFIRMATION_DELETE(`${this.userIds.length} users`) ,
        message:this.userIds.length==1 ? MSSG_CONFIRMATION_DELETE(`${this.deleteText}'s account`): MSSG_CONFIRMATION_DELETE(`the selected ${this.userIds.length} users`) ,
        btn2: 'CANCEL',
        btn1:'DELETE'
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.subscripition.push(
          this._user.deleteUsers({ userIds: this.userIds }).subscribe((response: any) => {
            this.userIds = [];
            this._toast.success(response?.message);
          },
            (error) => {
            this._toast.error(error?.message)
          })
          )
          this.getUserList();
      }
    })
  }

  ngOnDestroy() {
    if (this.subscripition.length) {
      this._common.unsubscribe(this.subscripition);
    }
  }

}
