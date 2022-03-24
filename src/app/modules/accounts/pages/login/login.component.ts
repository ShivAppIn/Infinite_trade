import { ACCOUNT_ERROR_MESSAGES } from './../../../../constants/messages';
import { REGEX, LIMIT } from './../../../../constants/validators';
import { StorageService } from './../../../../services/storage/storage.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../_services/account.service';
import { checkSpaceAtStartEnd } from '../../../../constants/helper';
import { ToastService } from 'src/app/components/toast-notification/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  limit = LIMIT;
  hide = true;
  errorMsg = ACCOUNT_ERROR_MESSAGES;

  @ViewChild('email') emailRef: ElementRef;
  @ViewChild('pass') passRef: ElementRef;

  constructor(
    private _fb: FormBuilder,
    private _storage: StorageService,
    private _account: AccountService,
    private _toast:ToastService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.pattern(REGEX.EMAIL)]],
      password: ['', Validators.pattern(REGEX.PASSWORD)],
      deviceToken: [this._storage.deviceDetail(1)],
      deviceId: [this._storage.deviceDetail(2)],
      platform: [this._storage.deviceDetail(3)]
    });
  }

  get frmCtrl() { return this.loginForm.controls; }

  loginHandler() {
    this.loginValidation();
    if (this.loginForm.valid) {
      this.confirmLogIn();
    }
  }

  confirmLogIn() {
    let formValue = this.loginForm.value;
    this._account.logIn(formValue).subscribe(response => {
      this._storage.loginSuccessfully(response);
    }, (error) => {
      if (error) {
        if (error.statusCode == 403) {
          this.frmCtrl.password.reset();
          this.passRef.nativeElement.focus();
        } else if (error.statusCode == 400) {
          this.emailRef.nativeElement.focus();
        }
      }
    });
  }

  trimValues() {
    for (const key in this.loginForm.value) {
      if (this.loginForm.value.hasOwnProperty(key)) {
        if (this.frmCtrl[key].value && typeof (this.frmCtrl[key].value) === 'string') {
          this.frmCtrl[key].patchValue(this.frmCtrl[key].value.trim());
        }
      }
    }
  }

  loginValidation() {
    if (!this.frmCtrl.email.valid) {
      this.emailRef.nativeElement.focus();
      return;
    }
    if (!this.frmCtrl.password.valid) {
      this.passRef.nativeElement.focus();
      return;
    }
    if (checkSpaceAtStartEnd(this.frmCtrl.password.value)) {
      this.frmCtrl.password.setErrors({ space: true });
      this.passRef.nativeElement.focus();
      return;
    }
  }

}
