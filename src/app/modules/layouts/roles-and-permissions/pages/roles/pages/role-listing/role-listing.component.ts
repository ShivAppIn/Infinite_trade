import { dateToMs } from './../../../../../../../constants/helper';
import { CommonService } from './../../../../../../../services/common/common.service';
import { RolesAndPermissionService } from './../../../../_service/roles-and-permission.service';
import { ToastService } from './../../../../../../../components/toast-notification/toast.service';
import { TableService } from './../../../../../../../components/mat-table-renderer/table.service';
import { BreadcrumbService } from './../../../../../../../components/breadcrumb/breadcrumb.service';
import { MatTableRendererComponent } from './../../../../../../../components/mat-table-renderer/mat-table-renderer.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ADD, EDIT, ROLES, ROLES_ACCESS } from './../../../../../../../constants/routes';
import { STATUS } from '../../../../../../../constants/messages';
import { Subscription } from 'rxjs';
import { Pagination } from '../../../../../../../constants/pagination';
import { Router } from '@angular/router';
import { BC_ROLES } from '../../../../../../../constants/breadcrumb-routes';

@Component({
  selector: 'app-role-listing',
  templateUrl: './role-listing.component.html',
  styleUrls: ['./role-listing.component.scss']
})
export class RoleListingComponent extends Pagination implements OnInit {
  heading = [
    { heading: 'Role', key: 'role', sort: true, type: "link", link: `/${ROLES_ACCESS}/${ROLES}` },
    { heading: "Created Date", key: "createdAt", align: "center", type: 'date', sort: true },
    { heading: "Modified Date", key: "updatedAt", align: "center", type: 'date', sort: true },
    { heading: "Status", key: "status", align: "center", type: 'formatStatus' },
    { heading: 'Action', key: 'status', type: 'action', action: [1, 2, 3] }
  ];
  tempList = [];
  filterForm: FormGroup;
  status = STATUS;
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
    this._bc.setBreadcrumb(BC_ROLES);
    this.createForm();
    this.getRolesListing();
  }

  createForm() {
    this.filterForm = this._fb.group({
      fromDate: [""],
      toDate: [""],
      status: [""]
    });
  }

  get f() { return this.filterForm.controls }  //return all form controls

  selectFromDate(event: any) {
    this.f.toDate.setValue(null);
  }

  getRolesListing() {
    this._table.tableRender({ data: [] });
    this.subscriptions.push(
      this._roles.getRolesList(this.validPageOptions).subscribe((response: any) => {
        this.tempList = response.data;
        this._table.tableRender(response);
      }, () => {
        this._table.tableRender({ data: [] });
      })
    )
  }

  addRoles(status: any) {
    /**
     * [ADD,EDIT]=[0,1]
     */
    if (status.id == 0) {
      this._router.navigate([`${ROLES_ACCESS}/${ROLES}/${ADD}`]);
    }
    else {
      this._router.navigate([`${ROLES_ACCESS}/${ROLES}/${EDIT}`, status.data._id]);
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
    this.getRolesListing();
  }

  sortByListing(event: any) {
    this.sortOptions = event;
    this.getRolesListing();
  }

  changeStatus(status: any) {
    switch (status.id) {
      case 1:
        this.addRoles(status); // Edit Role
        break;
      default:
        this.changeBannerStatus(status);
        break;
    }
  }

  changeBannerStatus(roleInfo: any) {
    if (roleInfo.action == this.API_EVENT.delete) {
      this.deleteRoleFromList(roleInfo);
    } else {
      this.activateInactivateBanners(roleInfo);
    }
  }

  activateInactivateBanners(roleInfo: any) {
    const updateObj = {
      roleId: roleInfo.data._id,
      status: roleInfo.action
    }
    this._roles.activateInactivateRole(updateObj).subscribe(res => {
      this.showListAfterAction(res);
    })
  }

  deleteRoleFromList(roleInfo: any) {
    this._roles.deleteRole(roleInfo.data._id).subscribe(res => {
      if ((roleInfo.data.s_no > 1 && roleInfo.data.s_no % (this.limit) == 1) && this.tempList.length == 1) {
        this.pageNo = this.pageNo - 1;
        this.tableRef.paginator.pageIndex = this.pageNo - 1;
      }
      this.showListAfterAction(res);
    })
  }

  showListAfterAction(res: any) {
    this._toast.success(res.message);
    this.getRolesListing();
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
    this.getRolesListing();
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
