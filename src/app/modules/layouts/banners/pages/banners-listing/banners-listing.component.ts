import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { BannerService } from '../../_service/banner.service';
import { Pagination } from '../../../../../constants/pagination';
import { BANNERS, ADD, EDIT } from '../../../../../constants/routes';
import { MatTableRendererComponent } from '../../../../../components/mat-table-renderer/mat-table-renderer.component';
import { BreadcrumbService } from '../../../../../components/breadcrumb/breadcrumb.service';
import { TableService } from '../../../../../components/mat-table-renderer/table.service';
import { ToastService } from '../../../../../components/toast-notification/toast.service';
import { CommonService } from '../../../../../services/common/common.service';
import { BC_BANNERS } from '../../../../../constants/breadcrumb-routes';
import { titleCase, dateToMs, isObjEmpty } from '../../../../../constants/helper';
import { FormGroup, FormBuilder } from '@angular/forms';
import { STATUS, MODULE_ID_OF } from '../../../../../constants/messages';

@Component({
  selector: 'app-banners-listing',
  templateUrl: './banners-listing.component.html',
  styleUrls: ['./banners-listing.component.scss'],
  providers: [BannerService]
})
export class BannersListingComponent extends Pagination implements OnInit {
  heading = [
    { heading: 'Banner Title', key: 'title', sort: true, type: "link", link: `/${BANNERS}` },
    { heading: "Banner Used", key: "template", align: "center", type: 'formatStatus' },
    { heading: "Created Date", key: "createdAt", align: "center", type: 'date', sort: true },
    { heading: "Modified By (Role)", key: "modifiedBy", align: "center" },
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
    private _banner: BannerService,
    private _router: Router,
    private _common: CommonService
  ) { super() }

  ngOnInit() {
    this._bc.setBreadcrumb(BC_BANNERS);
    this.createForm();
    this.permissionHandler();
    this.getBannerListing();
  }

  createForm() {
    this.filterForm = this._fb.group({
      fromDate: [""],
      toDate: [""],
      status: [""]
    });
  }

  get f() { return this.filterForm.controls }  //return all form controls

  permissionHandler() {
    let permission = this._common.getPermissionByModuleId(MODULE_ID_OF.BANNERS);
    if (!isObjEmpty(permission)) {
      if (!permission.add && !permission.edit && !permission.delete && !permission.activeInactive) {
        this.removeOnlyAddBtn();
        this.removeActionObj();
      } else if (!permission.edit && !permission.delete && !permission.activeInactive) {
        this.removeActionObj();
      } else if (!permission.add && !permission.edit) {
        this.removeOnlyAddBtn();
        this.removeActionOperation(1);
      } else {
        if (!permission.add) {
          this.removeOnlyAddBtn();
        }
        if (!permission.edit) {
          this.removeActionOperation(1);
        }
        if (!permission.delete) {
          this.removeActionOperation(3);
        }
        if (!permission.activeInactive) {
          this.removeActionOperation(2);
        }
      }
    }
  }

  removeOnlyAddBtn() {
    this.permissionClass = this._common.getClassToRemoveAddBtn();
  }

  removeActionObj() {
    this.heading.splice((this.heading.length - 1), 1);
  }

  removeActionOperation(operationValue) {
    this.heading[this.heading.length - 1].action = this.removeAction([operationValue]);
  }

  removeAction(valuesToRemove) {
    return this.heading[this.heading.length - 1].action.filter(item => !valuesToRemove.includes(item));
  }

  selectFromDate(event: any) {
    this.f.toDate.setValue(null);
  }

  getBannerListing() {
    this._table.tableRender({ data: [] });
    return
    this.subscriptions.push(
      this._banner.getBannerList(this.validPageOptions).subscribe((response: any) => {
        this.tempList = response.data;
        response.data.forEach(element => {
          element['modifiedBy'] = element.modifiedBy ?
            `${titleCase(element.modifiedBy)} (${element.userType == 'ADMIN' ? 'Admin' : 'Sub Admin'})` :
            '-';
        })
        this._table.tableRender(response);
      }, () => {
        this._table.tableRender({ data: [] });
      })
    )
  }

  addBanners(status: any) {
    /**
     * [ADD,EDIT]=[0,1]
     */
    if (status.id == 0) {
      this._router.navigate([`${BANNERS}/${ADD}`]);
    }
    else {
      this._router.navigate([`${BANNERS}/${EDIT}`, status.data._id]);
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
    this.getBannerListing();
  }

  sortByListing(event: any) {
    this.sortOptions = event;
    this.getBannerListing();
  }

  changeStatus(status: any) {
    switch (status.id) {
      case 1:
        this.addBanners(status); // Edit Banner
        break;
      default:
        this.changeBannerStatus(status);
        break;
    }
  }

  changeBannerStatus(bannerInfo: any) {
    if (bannerInfo.action == this.API_EVENT.delete) {
      this.deleteBannerFromList(bannerInfo);
    } else {
      this.activateInactivateBanners(bannerInfo);
    }
  }

  activateInactivateBanners(bannerInfo: any) {
    const updateObj = {
      bannerId: bannerInfo.data._id,
      status: bannerInfo.action
    }
    this._banner.activateInactivate(updateObj).subscribe(res => {
      this.showListAfterAction(res);
    })
  }

  deleteBannerFromList(bannerInfo: any) {
    this._banner.deleteBanner(bannerInfo.data._id).subscribe(res => {
      if ((bannerInfo.data.s_no > 1 && bannerInfo.data.s_no % (this.limit) == 1) && this.tempList.length == 1) {
        this.pageNo = this.pageNo - 1;
        this.tableRef.paginator.pageIndex = this.pageNo - 1;
      }
      this.showListAfterAction(res);
    })
  }

  showListAfterAction(res: any) {
    this._toast.success(res.message);
    this.getBannerListing();
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
    this.getBannerListing();
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

  downloadList(event) {
    let exportObj = {
      'sortBy': this.validPageOptions['sortBy'],
      'sortOrder': this.validPageOptions['sortOrder']
    }
    if (this.filterOptions) {
      if (this.filterOptions.status) {
        exportObj['status'] = this.filterOptions.status;
      }
      if (this.filterOptions.fromDate) {
        exportObj['fromDate'] = this.filterOptions.fromDate;
      }
      if (this.filterOptions.toDate) {
        exportObj['toDate'] = this.filterOptions.toDate;
      }
    }
    if (this.search) {
      exportObj['searchKey'] = this.search;
    }
    this._banner.exportList(exportObj).subscribe(res => {
      if (res && res.data) {
        this._common.redirectToAnotherTab(res.data);
      }
    })
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
