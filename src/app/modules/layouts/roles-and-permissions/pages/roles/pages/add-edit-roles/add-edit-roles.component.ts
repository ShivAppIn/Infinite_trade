import { MANAGE_TYPE_OF, PERMISSIONS } from './../../../../../../../constants/messages';
import { ROLES, ROLES_ACCESS } from './../../../../../../../constants/routes';
import { BC_ROLES_ADD, BC_ROLES_EDIT } from './../../../../../../../constants/breadcrumb-routes';
import { CommonService } from './../../../../../../../services/common/common.service';
import { ToastService } from './../../../../../../../components/toast-notification/toast.service';
import { RolesAndPermissionService } from './../../../../_service/roles-and-permission.service';
import { BreadcrumbService } from './../../../../../../../components/breadcrumb/breadcrumb.service';
import { LIMIT } from './../../../../../../../constants/validators';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-roles',
  templateUrl: './add-edit-roles.component.html',
  styleUrls: ['./add-edit-roles.component.scss']
})
export class AddEditRolesComponent implements OnInit {
  roleForm: FormGroup;
  roleId: string;
  _limit = LIMIT;
  manageTypeValue = MANAGE_TYPE_OF;

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
    this.roleId = this._actRoute.snapshot.params['roleId'];
    this.createForm();
    if (this.roleId) {
      this._bc.setBreadcrumb(BC_ROLES_EDIT);
      if (this._common.isValidId(this.roleId)) {
        this.getRoleDetails(this.roleId);
      }
    } else {
      this._bc.setBreadcrumb(BC_ROLES_ADD);
      this.defaultPermissionRenderer();
    }
  }

  createForm() {
    this.roleForm = this._fb.group({
      role: [''],
      permission: this._fb.array([]),
    })
  }

  private permissionArray(data?: any) {
    return this._fb.group({
      module: [data ? data.module : ""],
      moduleId: [data ? data.moduleId : ""],
      all: [this.roleId ? data.all : false],
      view: [this.roleId ? data.view : true],
      add: [this.roleId ? data.add : false],
      edit: [this.roleId ? data.edit : false],
      delete: [this.roleId ? data.delete : false],
      activeInactive: [this.roleId ? data.activeInactive : false],
    });
  }

  get permissionKey() {
    return this.roleForm.get('permission') as FormArray;
  }

  permissionByIndex(index: number) {
    return this.roleForm.get('permission')['controls'][index] as FormArray;
  }

  addPermission(data?: any): void {
    this.permissionKey.push(this.permissionArray(data));
  }

  defaultPermissionRenderer() {
    PERMISSIONS.forEach((permission) => {
      this.addPermission(permission);
    });
  }

  get f() { return this.roleForm.controls } //return form controls

  getRoleDetails(roleId: string) {
    this._roles.getRoleDetail(roleId).subscribe((res: any) => {
      this.roleForm.patchValue(res.data);
      res.data.permission.forEach((permission, index) => {
        this.addPermission(permission);
        this.CheckBoxListener({ checked: permission.view }, index);
      });
    })
  }

  allPermissionCheckBoxListener(event: any, index: number, moduleName?) {
    let controls: any = this.permissionByIndex(index)['controls'];
    controls.view.setValue(true); //if select/deselect all
    controls.add.setValue(event.checked);
    controls.edit.setValue(event.checked);
    controls.delete.setValue(event.checked);
    controls.activeInactive.setValue(event.checked);
    if (!controls.all.value) {
      if (!controls.view.value) {
        controls.add.disable();
        controls.edit.disable();
        controls.delete.disable();
        controls.activeInactive.disable();
      }
    } else {
      controls.add.enable();
      controls.edit.enable();
      controls.delete.enable();
      controls.activeInactive.enable();
    }
  }

  CheckBoxListener(event: any, index: number, moduleName?) {
    let controls: any = this.permissionByIndex(index)['controls'];
    if (event.checked) {
      controls.add.enable();
      controls.edit.enable();
      controls.delete.enable();
      controls.activeInactive.enable();
      if (controls.add.value && controls.edit.value && controls.delete.value && controls.activeInactive.value && controls.view.value) {
        controls.all.setValue(true);
      }
    } else {
      controls.all.setValue(false);
      if (!controls.view.value) {
        controls.add.setValue(false);
        controls.edit.setValue(false);
        controls.delete.setValue(false);
        controls.activeInactive.setValue(false);
        controls.add.disable();
        controls.edit.disable();
        controls.delete.disable();
        controls.activeInactive.disable();
      }
    }
  }

  roleHandler() {
    this.checkValidation();
    if (this.roleForm.valid) {
      let formValue = this.roleForm.value;
      formValue.permission.forEach(element => {
        if (!element.view) {
          element['add'] = false;
          element['edit'] = false;
          element['delete'] = false;
          element['activeInactive'] = false;
        }
      });
      if (this.roleId) {
        this.updateRole(formValue);
      } else {
        this.addNewRole(formValue);
      }
    }
  }

  addNewRole(formBody: any) {
    this._roles.addRole(formBody).subscribe(res => {
      this.navigate(res.message);
    })
  }

  updateRole(formBody: any) {
    formBody['roleId'] = this.roleId;
    this._roles.updateRole(formBody).subscribe(res => {
      this.navigate(res.message);
    })
  }

  checkValidation() {
    for (const key in this.roleForm.value) {
      if (this.roleForm.value.hasOwnProperty(key) && typeof this.f[key].value == "string") {
        this.f[key].setValue(this.f[key].value.trim());
      }
    }

  }

  cancelHandler() {
    this._common.locationBack();
  }

  navigate(mssg?: string) {
    if (mssg) {
      this._toast.success(mssg);
    }
    this._router.navigate([ROLES_ACCESS, ROLES]);
  }


}
