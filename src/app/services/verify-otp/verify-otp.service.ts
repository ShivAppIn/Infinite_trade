import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { forgotScreen, infoKey } from '../../constants/storage-keys';
import { HttpService } from '../http/http.service';
import { tap, catchError } from 'rxjs/operators';
import { VERIFY_OTP_API, FORGOT_PASSWORD_API } from '../../constants/api-end-point';
import { CommonService } from '../common/common.service';
import { ACCOUNT, RESET_PASSWORD } from '../../constants/routes';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyOtpService {

  constructor(
    private _http: HttpService,
    private _common: CommonService,
    private _storage: StorageService
  ) { }

  verifyOtp(data, screenType?) {
    return this.otpVerification(data, screenType);
  }

  otpVerification(data, screenType?) {
    return this._http.post(VERIFY_OTP_API, data).pipe(
      tap(res => {
        if (screenType && screenType == atob(forgotScreen)) {
          this._common.navigate([ACCOUNT, RESET_PASSWORD, res.data['token']]);
        } else {
          this._storage.loginSuccessfully(res, 'OTP');
        }
      }),
      catchError(err => throwError(err))
    );
  }

  reSendOtp(info, screenType?) {
    return this._http.post(FORGOT_PASSWORD_API, info).pipe(
      tap(res => {
        // might be needed in future
      }),
      catchError(err => throwError(err))
    );
  }

}


@Injectable()
export class VerifyRouteResolveService implements Resolve<any> {
  constructor(
    private _router: Router
  ) {

  }
  resolve() {
    const info = localStorage.getItem(infoKey);
    if (!info) {
      this._router.navigate(['']);
      return of([false]);
    }
    return of(info);
  }

}
