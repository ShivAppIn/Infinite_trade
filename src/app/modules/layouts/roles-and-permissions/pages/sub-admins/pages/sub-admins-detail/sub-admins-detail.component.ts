import { BC_SUB_ADMIN_DETAILS } from './../../../../../../../constants/breadcrumb-routes';
import { ROLES_ACCESS } from './../../../../../../../constants/routes';
import { CommonService } from './../../../../../../../services/common/common.service';
import { ToastService } from './../../../../../../../components/toast-notification/toast.service';
import { BreadcrumbService } from './../../../../../../../components/breadcrumb/breadcrumb.service';
import { DATE_TYPES } from './../../../../../../../constants/messages';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RolesAndPermissionService } from '../../../../_service/roles-and-permission.service';
import { SUB_ADMINS } from '../../../../../../../constants/routes';

@Component({
  selector: 'app-sub-admins-detail',
  templateUrl: './sub-admins-detail.component.html',
  styleUrls: ['./sub-admins-detail.component.scss']
})
export class SubAdminsDetailComponent implements OnInit {
  subAdminDetails: any;
  isApiCallInProgress = false;
  dateType = DATE_TYPES;
  subscriptions: Subscription[] = [];

  constructor(
    private _bc: BreadcrumbService,
    private _actRoute: ActivatedRoute,
    private _roles: RolesAndPermissionService,
    private _toast: ToastService,
    private _common: CommonService
  ) { }

  ngOnInit() {
    this._bc.setBreadcrumb(BC_SUB_ADMIN_DETAILS);
    this.validateIdAndFetchDetails();
  }

  validateIdAndFetchDetails() {
    if (this._common.isValidId(this._actRoute.snapshot.params['subAdminId'])) {
      this.fetchSubAdminDetails();
    }
  }

  fetchSubAdminDetails() {
    this.isApiCallInProgress = true;
    this.subscriptions.push(
      this._roles.getSubAdminDetail(this._actRoute.snapshot.params['subAdminId']).subscribe((res: any) => {
        this.isApiCallInProgress = false;
        this.subAdminDetails = res.data;
      }, (error) => {
        this.isApiCallInProgress = false;
        if (error.statusCode == 400) {
          this._toast.error(error.message);
          this._common.navigate([ROLES_ACCESS, SUB_ADMINS]);
        }
      })
    );
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
