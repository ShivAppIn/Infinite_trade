import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../toast-notification/toast.service';
import { infoKey, forgotScreen } from '../../constants/storage-keys';
import { VERIFICATION_CODE } from '../../constants/messages';
import { VerifyOtpService } from '../../services/verify-otp/verify-otp.service';

@Component({
  selector: 'app-otp-box',
  templateUrl: './otp-box.component.html',
  styleUrls: ['./otp-box.component.scss']
})
export class OtpBoxComponent implements OnInit {

  verifyForm: FormGroup;
  otpTimerObj = {
    otpTime: '01:59',
    interval: undefined,
    timer: '0:00'
  }
  otpObj = {
    otp1: '',
    otp2: '',
    otp3: '',
    otp4: ''
  }
  routerResolverObj = {
    info: {},
    screenType: ''
  }
  isOtpFilled: boolean | any = false;
  showEditPhoneOption = false;

  constructor(
    private _fb: FormBuilder,
    private _verifyService: VerifyOtpService,
    private _toast: ToastService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setSomeInfo();
    this.createForm();
    this.reverseTiming();
  }

  createForm() {
    this.verifyForm = this._fb.group({
      email: [''],
      otp: ['']
    });
  }

  getControl(control) {
    return this.verifyForm.controls[control] as FormControl;
  }

  setSomeInfo() {
    if (this._activatedRoute.snapshot.data.info) {
      this.routerResolverObj.info = JSON.parse(atob(this._activatedRoute.snapshot.data.info));
    } else {
      if (localStorage.getItem(infoKey)) {
        this.routerResolverObj.info = JSON.parse(atob(localStorage.getItem(infoKey)));
      }
    }
    this.routerResolverObj.screenType = this.getScreenName();
  }

  getScreenName() {

    if (localStorage.getItem(forgotScreen)) {
      this.showEditPhoneOption = false;
      return atob(localStorage.getItem(forgotScreen));
    }

  }

  /**
    * @OTP_AUTO_FOCUS
  */
  keytab(event: any, val: any) {
    if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105)) {
      return;
    }
    if (event.which !== 8 && event.which !== 37 && event.which !== 46) {
      const nextInput = event.srcElement.nextElementSibling;
      if (nextInput !== null) {
        nextInput.focus();
      }
    }
    else if (event.which == 37) {
      let prevInput = event.srcElement.previousElementSibling;
      if (prevInput === null) {
        return;
      } else {
        prevInput.focus();

      }
    }
    this.isOtpFilledInBox();
  }

  onBackspace(event) {
    let prevInput = event.srcElement.previousElementSibling;
    if (prevInput) {
      prevInput.focus();
    }
    this.isOtpFilledInBox();
  }

  isOtpFilledInBox() {
    this.isOtpFilled = this.getCombinedOtp(false);
  }

  verifyOtp() {
    if (this.verifyForm.invalid || this.verifyForm.disabled) {
      this._toast.error(VERIFICATION_CODE);
      return;
    }
    this.verifyForm.disable();
    const data = { ...this.verifyForm.value };
    data['email'] = this.routerResolverObj.info['email'];
    data.otp = this.getCombinedOtp();

    if (!data.otp) {
      this.verifyForm.enable();
      this._toast.error(VERIFICATION_CODE);
      return;
    }

    this._verifyService.verifyOtp(data, this.routerResolverObj.screenType).subscribe(res => {
      this.verifyForm.enable();
    }, error => {
      this.resetOtp();
      this.verifyForm.enable();
    });
  }

  getCombinedOtp(isOtpValue = true) {
    if (this.otpObj.otp1 && this.otpObj.otp2 && this.otpObj.otp3 && this.otpObj.otp4) {
      return isOtpValue ? (this.otpObj.otp1 + this.otpObj.otp2 + this.otpObj.otp3 + this.otpObj.otp4) : true;
    } else {
      return false;
    }
  }

  reSendOtp() {
    this._verifyService.reSendOtp(this.routerResolverObj.info, this.routerResolverObj.screenType).subscribe(res => {
      this.reverseTiming();
    });
  }

  /**
   * @REVERSE_TIME_COUNTER
   */
  reverseTiming() {
    this.resetOtp();
    this.otpTimerObj.timer = this.otpTimerObj.otpTime;
    clearInterval(this.otpTimerObj.interval);

    this.otpTimerObj.interval = setInterval(() => {
      let timer: any = this.otpTimerObj.timer;
      timer = timer.split(':');
      let minutes = timer[0];
      let seconds = timer[1];
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
        minutes -= 1;
        seconds = 59;
      }
      else if (seconds < 10) {
        seconds = '0' + seconds;
      }
      this.otpTimerObj.timer = minutes + ':' + seconds;
      if (minutes == 0 && seconds == 0) clearInterval(this.otpTimerObj.interval);
    }, 1000);
  }

  resetOtp() {
    for (var key in this.otpObj) {
      if (this.otpObj.hasOwnProperty(key)) {
        this.otpObj[key] = '';
      }
    }
  }

  ngOnDestroy() {
    let storedKeys = [infoKey, forgotScreen];
    storedKeys.forEach(storedKey => {
      localStorage.removeItem(storedKey);
    });
  }

}
