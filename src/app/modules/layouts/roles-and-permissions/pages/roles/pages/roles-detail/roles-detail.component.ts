import { CommonService } from './../../../../../../../services/common/common.service';
import { ToastService } from './../../../../../../../components/toast-notification/toast.service';
import { RolesAndPermissionService } from './../../../../_service/roles-and-permission.service';
import { BreadcrumbService } from './../../../../../../../components/breadcrumb/breadcrumb.service';
import { BC_ROLES_DETAILS } from './../../../../../../../constants/breadcrumb-routes';
import { DATE_TYPES } from './../../../../../../../constants/messages';
import { ROLES, ROLES_ACCESS } from './../../../../../../../constants/routes';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roles-detail',
  templateUrl: './roles-detail.component.html',
  styleUrls: ['./roles-detail.component.scss']
})
export class RolesDetailComponent implements OnInit {
  roleDetails: any;
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
    this._bc.setBreadcrumb(BC_ROLES_DETAILS);
    this.validateIdAndFetchDetails();
  }

  validateIdAndFetchDetails() {
    if (this._common.isValidId(this._actRoute.snapshot.params['roleId'])) {
      this.fetchRoleDetails();
    }
  }

  fetchRoleDetails() {
    this.isApiCallInProgress = true;
    this.subscriptions.push(
      this._roles.getRoleDetail(this._actRoute.snapshot.params['roleId']).subscribe((res: any) => {
        this.isApiCallInProgress = false;
        this.roleDetails = res.data;
      }, (error) => {
        this.isApiCallInProgress = false;
        if (error.statusCode == 400) {
          this._toast.error(error.message);
          this._common.navigate([ROLES_ACCESS, ROLES]);
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
