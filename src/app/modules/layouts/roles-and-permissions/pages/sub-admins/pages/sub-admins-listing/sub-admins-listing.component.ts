import { dateToMs } from './../../../../../../../constants/helper';
import { CommonService } from './../../../../../../../services/common/common.service';
import { ToastService } from './../../../../../../../components/toast-notification/toast.service';
import { TableService } from './../../../../../../../components/mat-table-renderer/table.service';
import { BreadcrumbService } from './../../../../../../../components/breadcrumb/breadcrumb.service';
import { MatTableRendererComponent } from './../../../../../../../components/mat-table-renderer/mat-table-renderer.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pagination } from '../../../../../../../constants/pagination';
import { ADD, EDIT, ROLES_ACCESS, SUB_ADMINS } from './../../../../../../../constants/routes';
import { STATUS } from '../../../../../../../constants/messages';
import { Subscription } from 'rxjs';
import { RolesAndPermissionService } from '../../../../_service/roles-and-permission.service';
import { Router } from '@angular/router';
import { BC_SUB_ADMINS } from '../../../../../../../constants/breadcrumb-routes';

@Component({
  selector: 'app-sub-admins-listing',
  templateUrl: './sub-admins-listing.component.html',
  styleUrls: ['./sub-admins-listing.component.scss']
})
export class SubAdminsListingComponent extends Pagination implements OnInit {
  heading = [
    { heading: 'Name', key: 'name', sort: true, type: "link", link: `/${ROLES_ACCESS}/${SUB_ADMINS}` },
    { heading: "Email", key: "email", align: "center" },
    { heading: "Role", key: "role", align: "center", sort: true },
    { heading: "Created Date", key: "createdAt", align: "center", type: 'date', sort: true },
    { heading: "Status", key: "status", align: "center", type: 'formatStatus' },
    { heading: 'Action', key: 'status', type: 'action', action: [1, 2, 3] }
  ];
  tempList = [];
  filterForm: FormGroup;
  status = STATUS;
  roles = [];
  subscriptions: Subscription[] = [];
  @ViewChild(MatTableRendererComponent) tableRef: MatTableRendererComponent;

  constructor(
    private _bc: BreadcrumbService,
    private _fb: FormBuilder,
    private _table: TableService,
    private _toast: ToastService,
    private _roles: RolesAndPermissionService,
    private _router: Router,
    private _common: CommonService
  ) { super() }

  ngOnInit() {
    this._bc.setBreadcrumb(BC_SUB_ADMINS);
    this.createForm();
    this.fetchCreatedRoles();
    this.getSubAdminListing();
  }

  createForm() {
    this.filterForm = this._fb.group({
      fromDate: [""],
      toDate: [""],
      status: [""],
      roleId: [""]
    });
  }

  get f() { return this.filterForm.controls }  //return all form controls

  selectFromDate(event: any) {
    this.f.toDate.setValue(null);
  }

  fetchCreatedRoles() {
    return
    let queryObj = {
      pageNo: 1,
      limit: 100,
      sortOrder: 1,
      sortBy: 'role'
    }
    this.subscriptions.push(
      this._roles.getRolesList(queryObj).subscribe((res: any) => {
        this.roles = res.data.list;
      })
    )
  }

  getSubAdminListing() {
    this._table.tableRender({ data: [] });
    return
    this.subscriptions.push(
      this._roles.getSubAdminsList(this.validPageOptions).subscribe((response: any) => {
        this.tempList = response.data;
        this._table.tableRender(response);
      }, () => {
        this._table.tableRender({ data: [] });
      })
    )
  }

  addSubAdmins(status: any) {
    /**
     * [ADD,EDIT]=[0,1]
     */
    if (status.id == 0) {
      this._router.navigate([`${ROLES_ACCESS}/${SUB_ADMINS}/${ADD}`]);
    }
    else {
      this._router.navigate([`${ROLES_ACCESS}/${SUB_ADMINS}/${EDIT}`, status.data._id]);
    }
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
    this.getSubAdminListing();
  }

  sortByListing(event: any) {
    this.sortOptions = event;
    this.getSubAdminListing();
  }

  changeStatus(status: any) {
    switch (status.id) {
      case 1:
        this.addSubAdmins(status); // Edit SubAdmin
        break;
      default:
        this.changeBannerStatus(status);
        break;
    }
  }

  changeBannerStatus(subAdminInfo: any) {
    if (subAdminInfo.action == this.API_EVENT.delete) {
      this.deleteSubAdminFromList(subAdminInfo);
    } else {
      this.activateInactivateBanners(subAdminInfo);
    }
  }

  activateInactivateBanners(subAdminInfo: any) {
    const updateObj = {
      adminId: subAdminInfo.data._id,
      status: subAdminInfo.action
    }
    this._roles.activateInactivateSubAdmin(updateObj).subscribe(res => {
      this.showListAfterAction(res);
    })
  }

  deleteSubAdminFromList(subAdminInfo: any) {
    this._roles.deleteSubAdmin(subAdminInfo.data._id).subscribe(res => {
      if ((subAdminInfo.data.s_no > 1 && subAdminInfo.data.s_no % (this.limit) == 1) && this.tempList.length == 1) {
        this.pageNo = this.pageNo - 1;
        this.tableRef.paginator.pageIndex = this.pageNo - 1;
      }
      this.showListAfterAction(res);
    })
  }

  showListAfterAction(res: any) {
    this._toast.success(res.message);
    this.getSubAdminListing();
  }

  filterApply(event: any) {
    if (!this.filterForm.dirty) {
      return;
    }
    if (event.apply) {
      this.filterOptions = this.changeDateFormat(this.filterForm.value);
    } else {
      this.filterOptions = null;
      this.filterForm.reset();
    }
    this.resetPages();
    if (this.tableRef.paginator) {
      this.tableRef.paginator.firstPage();
    }
    this.getSubAdminListing();
  }

  changeDateFormat(obj: any) {
    if (obj.fromDate) {
      obj.fromDate = dateToMs(obj.fromDate);
    }
    if (obj.toDate) {
      obj.toDate = dateToMs(obj.toDate, true);
    }
    return obj;
  }

  /**
   * @UNSUBSCRIPTION Unsubscribe all subscriptions to avoid memory leak
   */
  ngOnDestroy() {
    if (this.subscriptions.length > 0) {
      this._common.unsubscribe(this.subscriptions);
    }
  }

}
