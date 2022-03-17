import { ROLES_ACCESS } from './../../../../../../../constants/routes';
import { BC_SUB_ADMIN_ADD, BC_SUB_ADMIN_EDIT } from './../../../../../../../constants/breadcrumb-routes';
import { SUB_ADMIN_ERROR_MESSAGES } from './../../../../../../../constants/messages';
import { RolesAndPermissionService } from './../../../../_service/roles-and-permission.service';
import { CommonService } from './../../../../../../../services/common/common.service';
import { ToastService } from './../../../../../../../components/toast-notification/toast.service';
import { BreadcrumbService } from './../../../../../../../components/breadcrumb/breadcrumb.service';
import { LIMIT, REGEX } from './../../../../../../../constants/validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SUB_ADMINS } from '../../../../../../../constants/routes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-edit-sub-admins',
  templateUrl: './add-edit-sub-admins.component.html',
  styleUrls: ['./add-edit-sub-admins.component.scss']
})
export class AddEditSubAdminsComponent implements OnInit {
  subAdminForm: FormGroup;
  subAdminId: string;
  _limit = LIMIT;
  errMsg = SUB_ADMIN_ERROR_MESSAGES;
  roles = [];
  isRoleApiCallInProgress = false;
  subscriptions: Subscription[] = [];
  selectedRolePermission = [];

  constructor(
    private _fb: FormBuilder,
    private _bc: BreadcrumbService,
    private _roles: RolesAndPermissionService,
    private _actRoute: ActivatedRoute,
    private _toast: ToastService,
    private _common: CommonService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.subAdminId = this._actRoute.snapshot.params['subAdminId'];
    this.createForm();
    this.fetchCreatedRoles();
    if (this.subAdminId) {
      this._bc.setBreadcrumb(BC_SUB_ADMIN_EDIT);
      if (this._common.isValidId(this.subAdminId)) {
        this.getSubAdminDetails(this.subAdminId);
      }
    } else {
      this._bc.setBreadcrumb(BC_SUB_ADMIN_ADD);
    }
  }

  createForm() {
    this.subAdminForm = this._fb.group({
      name: [''],
      email: ['', [Validators.pattern(REGEX.EMAIL)]],
      roleId: ['']
    })
  }

  get f() { return this.subAdminForm.controls } //return form controls

  fetchCreatedRoles() {
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

  onChangeRoleSelection(currentRoleId: string) {
    for (let find = 0; find < this.roles.length; find++) {
      if (currentRoleId == this.roles[find]._id) {
        this.selectedRolePermission = this.roles[find].permission;
        break;
      }
    }
  }

  getSubAdminDetails(subAdminId: string) {
    this._roles.getSubAdminDetail(subAdminId).subscribe((res: any) => {
      this.subAdminForm.patchValue(res.data);
      this.onChangeRoleSelection(res.data.roleId);
    })
  }

  subAdminHandler() {
    this.checkValidation();
    if (this.subAdminForm.valid) {
      let formValue = this.subAdminForm.value;
      if (this.subAdminId) {
        if (this.subAdminForm.dirty) {
          this.updateSubAdmin(formValue);
        } else {
          this.cancelHandler();
        }
      } else {
        this.addNewSubAdmin(formValue);
      }
    }
  }

  addNewSubAdmin(formBody: any) {
    this._roles.addSubAdmin(formBody).subscribe(res => {
      this.navigate(res.message);
    })
  }

  updateSubAdmin(formBody: any) {
    formBody['adminId'] = this.subAdminId;
    delete formBody['email'];
    this._roles.updateSubAdmin(formBody).subscribe(res => {
      this.navigate(res.message);
    })
  }

  trimValues() {
    for (const key in this.subAdminForm.value) {
      if (this.subAdminForm.value.hasOwnProperty(key) && typeof this.f[key].value == "string") {
        this.f[key].setValue(this.f[key].value.trim());
      }
    }
  }

  checkValidation() {
    this.trimValues();
  }

  cancelHandler() {
    this._common.locationBack();
  }

  navigate(mssg?: string) {
    if (mssg) {
      this._toast.success(mssg);
    }
    this._router.navigate([ROLES_ACCESS, SUB_ADMINS]);
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
