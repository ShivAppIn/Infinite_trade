import { ACCOUNT_ERROR_MESSAGES } from './../../../../constants/messages';
import { REGEX, LIMIT } from './../../../../constants/validators';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CommonService } from '../../../../services/common/common.service';
import { AccountService } from '../../_services/account.service';
import { isObjEmpty } from '../../../../constants/helper';
import { forgotScreen } from '../../../../constants/storage-keys';
import { ToastService } from 'src/app/components/toast-notification/toast.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  limit = LIMIT;
  forgotForm: FormGroup;
  errorMsg = ACCOUNT_ERROR_MESSAGES;
  @ViewChild('email') emailRef: ElementRef;

  constructor(
    private _fb: FormBuilder,
    private _common: CommonService,
    private _account: AccountService,
    private _toast:ToastService
  ) { }

  ngOnInit() {
    this.createForm();
    this.checkForgotStoredInfo();
  }

  createForm() {
    this.forgotForm = this._fb.group({
      email: ['', [Validators.pattern(REGEX.EMAIL)]],
    })
  }

  get frmCtrl() { return this.forgotForm.controls; }

  checkForgotStoredInfo() {
    if (this._common.forForgotInfo && !isObjEmpty(this._common.forForgotInfo)) {
      this.forgotForm.patchValue(this._common.forForgotInfo);
    }
  }

  forgotHandler() {
    this.forgotValidation();
    if (this.forgotForm.valid) {
      this.confirmForgot();
    }
  }

  confirmForgot() {
    let formValue = this.forgotForm.value;
    this._account.forgotPassword(formValue).subscribe(response => {
      this._common.setOtpRelatedInfo(formValue, atob(forgotScreen));
    }, (error) => {
      if (error) {
        if (error.statusCode == 400) {
          //this._toast.error(ACCOUNT_ERROR_MESSAGES.INVALID_EMAIL);
          this.emailRef.nativeElement.focus();
        }
      }
    });
  }

  trimValues() {
    for (const key in this.forgotForm.value) {
      if (this.forgotForm.value.hasOwnProperty(key)) {
        if (this.frmCtrl[key].value && typeof (this.frmCtrl[key].value) === 'string') {
          this.frmCtrl[key].patchValue(this.frmCtrl[key].value.trim());
        }
      }
    }
  }

  forgotValidation() {
    if (!this.frmCtrl.email.valid) {
      this.emailRef.nativeElement.focus();
      return;
    }
  }

}
