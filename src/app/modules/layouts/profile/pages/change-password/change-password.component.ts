import { BC_CHANGE_PASSWORD } from './../../../../../constants/breadcrumb-routes';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { checkSpaceAtStartEnd } from '../../../../../constants/helper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PASSWORD_ERROR_MESSAGES } from '../../../../../constants/messages';
import { LIMIT, REGEX } from '../../../../../constants/validators';
import { Router } from '@angular/router';
import { ProfileService } from '../../_service/profile.service';
import { ToastService } from '../../../../../components/toast-notification/toast.service';
import { PROFILE } from '../../../../../constants/routes';
import { CommonService } from '../../../../../services/common/common.service';
import { BreadcrumbService } from '../../../../../components/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  providers: [ProfileService]
})
export class ChangePasswordComponent implements OnInit {
  hide = true; hide1 = true; hide2 = true;
  changePasswordForm: FormGroup;
  limit = LIMIT;
  errorMsg = PASSWORD_ERROR_MESSAGES;

  @ViewChild('oPass') oPass: ElementRef;
  @ViewChild('pass') pass: ElementRef;
  @ViewChild('cPass') cPass: ElementRef;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _profile: ProfileService,
    private _toast: ToastService,
    private _common: CommonService,
    private _bc: BreadcrumbService
  ) {
  }

  ngOnInit() {
    this._common.scrollTop();
    this._bc.setBreadcrumb(BC_CHANGE_PASSWORD);
    this.createForm();
  }

  createForm() {
    this.changePasswordForm = this._fb.group({
      oldPassword: ['', [Validators.pattern(REGEX.PASSWORD)]],
      password: ['', [Validators.pattern(REGEX.PASSWORD)]],
      confirmPassword: ['', [Validators.pattern(REGEX.PASSWORD)]],
    });
  }

  get f() { return this.changePasswordForm.controls; }

  changePasswordHandler() {
    this.changePasswordValidations();
    if (this.changePasswordForm.valid) {
      this.changePasswordConfirm();
    }
  }

  changePasswordConfirm() {
    delete this.changePasswordForm.value.confirmPassword;
    this._profile.changePassword(this.changePasswordForm.value).subscribe(res => {
      this.changePasswordForm.disable();
      this._toast.success(res.message);
      this.navigateToProfile();
    }, (error) => {
      if (error.statusCode == 400) {
        this.f.oldPassword.setErrors({ 'incorrect': true });
        this.oPass.nativeElement.focus();
        this.hide = false;
      }
    })
  }

  changePasswordValidations() {
    if (!this.f.oldPassword.valid) {
      this.oPass.nativeElement.focus();
      return
    }
    /*------Check Space In Old Pass---*/
    if (checkSpaceAtStartEnd(this.f.oldPassword.value)) {
      this.f.oldPassword.setErrors({ space: true });
      this.oPass.nativeElement.focus();
      return;
    }

    if (!this.f.password.valid) {
      this.pass.nativeElement.focus();
      return
    }
    /*------Check Space In New Pass---*/
    if (checkSpaceAtStartEnd(this.f.password.value)) {
      this.f.password.setErrors({ space: true });
      this.pass.nativeElement.focus();
      return;
    }

    if (!this.f.confirmPassword.valid) {
      this.cPass.nativeElement.focus()
      return
    }
    /*------Check Space In Confirm Pass---*/
    if (checkSpaceAtStartEnd(this.f.confirmPassword.value)) {
      this.f.confirmPassword.setErrors({ space: true });
      this.cPass.nativeElement.focus();
      return;
    }

    /*------Match/Not-Match Pass---*/
    if (this.f.oldPassword.value == this.f.password.value) {
      this.f.password.setErrors({ 'match': true });
      this.hide = false;
      this.hide1 = false;
      return
    }
    if (this.f.confirmPassword.value != this.f.password.value) {
      this.f.confirmPassword.setErrors({ 'notMatch': true });
      this.hide1 = false;
      this.hide2 = false;
      return
    }
  }

  onBlur(isForCp = true) {
    if (isForCp && this.f.password.invalid) {
      this.f.confirmPassword.setErrors({ required: true });
      this.f.confirmPassword.updateValueAndValidity();
    } else if (this.f.oldPassword.invalid) {
      this.f.password.setErrors({ required: true });
      this.f.password.updateValueAndValidity();
    }
  }

  resetControlError(isForCp = true) {
    if (isForCp) {
      this.f.confirmPassword.setErrors(null);
      this.f.confirmPassword.updateValueAndValidity();
    } else {
      this.f.password.setErrors(null);
      this.f.password.updateValueAndValidity();
    }
  }

  navigateToProfile() {
    this._router.navigate([PROFILE]);
  }

}
