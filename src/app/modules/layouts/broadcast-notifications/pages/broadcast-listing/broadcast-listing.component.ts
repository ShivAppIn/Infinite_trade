import { ConfirmationModalComponent } from './../../../../../components/confirmation-modal/confirmation-modal.component';
import { dateToMs, isObjEmpty, titleCase } from './../../../../../constants/helper';
import { BC_NOTIFICATION } from './../../../../../constants/breadcrumb-routes';
import { CommonService } from './../../../../../services/common/common.service';
import { ToastService } from './../../../../../components/toast-notification/toast.service';
import { TableService } from './../../../../../components/mat-table-renderer/table.service';
import { BreadcrumbService } from './../../../../../components/breadcrumb/breadcrumb.service';
import { MatTableRendererComponent } from './../../../../../components/mat-table-renderer/mat-table-renderer.component';
import { formatPlatform, MODULE_ID_OF, NOTIFICATION_PLATFORM, NOTIFICATION_STATUS, NOTIFICATION_STATUS_LIST } from './../../../../../constants/messages';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Pagination } from '../../../../../constants/pagination';
import { NotificationService } from '../../_service/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationDetailsComponent } from '../../_components/notification-details/notification-details.component';
import { ADD, NOTIFICATION } from '../../../../../constants/routes';

@Component({
  selector: 'app-broadcast-listing',
  templateUrl: './broadcast-listing.component.html',
  styleUrls: ['./broadcast-listing.component.scss']
})
export class BroadcastListingComponent extends Pagination implements OnInit {

  heading = [
    { heading: "Title", key: "title", type: "link", faqContent: true, sort: true },
    { heading: "Platform", key: "platform", align: "center" },
    { heading: "Added On", key: "createdAt", align: "center", type: 'date', sort: true },
    { heading: "Sent Time", key: "sentTime", align: "center", type: 'dateTime' },
    { heading: "Notification Status", key: "notificationStatus", align: "center" },
    { heading: "Action", key: "status", type: "action", action: [4] }
  ];
  tempList = [];
  filterForm: FormGroup;
  subscriptions: Subscription[] = [];
  notificationPlatform = NOTIFICATION_PLATFORM;
  notificationStatus = NOTIFICATION_STATUS_LIST;
  @ViewChild(MatTableRendererComponent) tableRef: MatTableRendererComponent;

  constructor(
    private _bc: BreadcrumbService,
    private _fb: FormBuilder,
    private _table: TableService,
    private _toast: ToastService,
    private _common: CommonService,
    private _service: NotificationService,
    private _dialog: MatDialog
  ) { super() }

  ngOnInit() {
    this._bc.setBreadcrumb(BC_NOTIFICATION);
    this.createForm();
    this.permissionHandler();
    this.getNotificationListing();
  }

  createForm() {
    this.filterForm = this._fb.group({
      fromDate: [""],
      toDate: [""],
      platform: [''],
      notificationStatus: ['']
    })
  }

  get f() { return this.filterForm.controls }  //return all form controls

  permissionHandler() {
    let permission = this._common.getPermissionByModuleId(MODULE_ID_OF.BROADCAST_NOTIFICATIONS);
    if (!isObjEmpty(permission)) {
      if (!permission.add && !permission.edit) {
        this.removeOnlyAddBtn();
        this.removeActionObj();
      } else {
        if (!permission.add) {
          this.removeOnlyAddBtn();
        }
        if (!permission.edit) {
          this.removeActionObj();
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

  selectFromDate(event: any) {
    this.f.toDate.setValue(null);
  }

  getNotificationListing() {
    this._table.tableRender({ data: [] });
    this.subscriptions.push(
      this._service.getNotificationList(this.validPageOptions).subscribe((response: any) => {
        this.tempList = response.data;
        response.data.forEach(element => {
          element['platform'] = element.platform ? formatPlatform(element.platform) : '-';
          element['notificationStatus'] = element.notificationStatus ? titleCase(element.notificationStatus) : '-';
        });
        this._table.tableRender(response);
      }, () => {
        this._table.tableRender({ data: [] });
      })
    )
  }

  showDetailInPopup(rowData) {
    this._dialog.open(NotificationDetailsComponent, {
      data: rowData
    })
  }


  addEditNotification(status: any) {
    /**
     * [ADD,EDIT]=[0,1]
     */
    if (status.id == 0) {
      this._common.navigate([`${NOTIFICATION}/${ADD}`]);
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
    this.getNotificationListing();
  }

  sortByListing(event: any) {
    this.sortOptions = event;
    this.getNotificationListing();
  }

  changeStatus(status: any) {
    switch (status.id) {
      case 4:
        this.confirmationDialog(status);
        break;

      default:
        break;
    }
  }

  confirmationDialog(rowData) {
    const dialog = this._dialog.open(ConfirmationModalComponent, {
      data: {
        title: 'Notification Sent Confirmation',
        message: 'Are you sure you want to perform this action?',
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.sendNotification(rowData);
      }
    });
  }

  sendNotification(rowData: any) {
    let sentObj = {
      notificationId: rowData.data._id,
      notificationStatus: NOTIFICATION_STATUS.SENT
    }
    this._service.rowActions(sentObj).subscribe(res => {
      this._toast.success(res.message);
      this.getNotificationListing();
    })
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
    this.getNotificationListing();
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
