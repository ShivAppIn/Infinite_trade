import { ACCOUNT, DASHBOARD } from './../../constants/routes';
import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';
import { userId } from '../../constants/storage-keys';
import { Router } from '@angular/router';
import { USER_INFO_API } from '../../constants/api-end-point';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  profileDetail: any;

  constructor(
    private _http: HttpService,
    private _router: Router,
  ) { }

  setUserToken(token) {
    localStorage.setItem('session_token', token);
  }

  get token() {
    return localStorage.getItem("session_token");
  }

  get userId() {
    return atob(localStorage.getItem(userId));
  }

  logout() {
    localStorage.clear();
    setTimeout(() => {
      this.profileDetail = null;
    }, 1000); // this is used for avoid random reflection on side bar if logout
    this._router.navigate([ACCOUNT]);
  }

  loginSuccessfully(response: any, responeFrom = '') {
    this.setUserToken(response.data.accessToken);
    localStorage.setItem(userId, btoa(response.data._id));
    this._router.navigate([DASHBOARD]);
  }

  getProfileDetail(showLoader = true) {
    return new Promise((resolve, reject) => {
      if (this.profileDetail) {
        resolve(this.profileDetail);
      } else {
        this._http.get(USER_INFO_API, '', showLoader).toPromise().then((response: any) => {
          this.profileDetail = response.data;
          resolve(this.profileDetail);
        }, error => {
          reject(error);
        });
      }
    });
  }

  deviceDetail(info?: number) {
    /*---1=device_token, 2=deviceId, 3=platform---*/
    switch (info) {
      case 1:
        let deviceToken = this.attachDeviceToken();
        return deviceToken;
      case 2:
        let deviceId = this.randomDeviceId();
        return deviceId;
      case 3:
        return "3";
      case 4:
        return this.getTimeZone();
    }
  }

  attachDeviceToken() {
    return (Date.now() + Math.floor(Math.random() * 1000000) + 1).toString();
  }

  randomDeviceId() {
    return (window.navigator.userAgent.replace(/\D+/g, ''));
  }

  getTimeZone() {
    let date = new Date();
    let offset = date.getTimezoneOffset() * -1;
    return offset * 60 * 1000;
  }

}
