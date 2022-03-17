import { checkSpaceAtStartEnd } from './../../../../constants/helper';
import { ACCOUNT_SUCCES_MESSAGES, PASSWORD_ERROR_MESSAGES } from './../../../../constants/messages';
import { REGEX, LIMIT } from './../../../../constants/validators';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { CommonService } from '../../../../services/common/common.service';
import { ToastService } from '../../../../components/toast-notification/toast.service';
import { ACCOUNT, LOGIN } from '../../../../constants/routes';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  resetForm: FormGroup;
  hide1 = true;
  hide2 = true;
  limit = LIMIT;
  errorMsg = PASSWORD_ERROR_MESSAGES;
  token: string
  toastMsg = ACCOUNT_SUCCES_MESSAGES;

  @ViewChild('pass') pass: ElementRef;
  @ViewChild('cPass') cPass: ElementRef;

  constructor(
    private _fb: FormBuilder,
    private _actRoute: ActivatedRoute,
    private _account: AccountService,
    private _common: CommonService,
    private _toast: ToastService
  ) { }

  ngOnInit() {
    this.createForm();
    this._actRoute.queryParams.subscribe((queryParams: Params) => {
      this.token = queryParams["token"];
    });
  }

  createForm() {
    this.resetForm = this._fb.group({
      password: ['', Validators.pattern(REGEX.PASSWORD)],
      confirmPassword: ['', Validators.pattern(REGEX.PASSWORD)]
    })
  }

  get frmCtrl() { return this.resetForm.controls; }

  resetHandler() {
    this.resetValidations();
    if (this.resetForm.valid) {
      const resetObj = {
        token: this.token,
        password: this.frmCtrl.password.value
      }
      this._account.resetPassword(resetObj).subscribe((response: any) => {
        this.resetForm.disable();
        this._toast.success(this.toastMsg.RESET_PASSWORD_SUCCESS);
        this._common.navigate([ACCOUNT, LOGIN]);
      }, (error: any) => {
        this._toast.error(error.message);
      })
    }
  }

  resetValidations() {
    if (!this.frmCtrl.password.valid) {
      this.pass.nativeElement.focus();
      return
    }
    /*------Check space---*/
    if (checkSpaceAtStartEnd(this.frmCtrl.password.value)) {
      this.frmCtrl.password.setErrors({ space: true });
      this.pass.nativeElement.focus();
      return;
    }
    if (!this.frmCtrl.confirmPassword.valid) {
      this.cPass.nativeElement.focus()
      return
    }
    /*------Check space---*/
    if (checkSpaceAtStartEnd(this.frmCtrl.confirmPassword.value)) {
      this.frmCtrl.confirmPassword.setErrors({ space: true });
      this.cPass.nativeElement.focus();
      return;
    }
    if (this.frmCtrl.confirmPassword.value != this.frmCtrl.password.value) {
      this.cPass.nativeElement.focus();
      this.frmCtrl.confirmPassword.setErrors({ 'notMatch': true });
      return
    }
  }

  onBlur() {
    if (this.frmCtrl.password.invalid) {
      this.frmCtrl.confirmPassword.setErrors({ required: true });
      this.frmCtrl.confirmPassword.updateValueAndValidity();
    }
  }

  resetControlError() {
    this.frmCtrl.confirmPassword.setErrors(null);
    this.frmCtrl.confirmPassword.updateValueAndValidity();
  }

}
