import { Injectable } from '@angular/core';
import { INVALID_ID_ERROR } from '../../constants/messages';
import { Router } from '@angular/router';
import { infoKey, forgotScreen } from '../../constants/storage-keys';
import { ACCOUNT, RECOVERY_EMAIL, VERIFY_OTP } from '../../constants/routes';
import { Subscription } from 'rxjs';
import { ToastService } from '../../components/toast-notification/toast.service';
import { HttpService } from '../http/http.service';
import { Location } from '@angular/common';
import { CMS_API } from '../../constants/api-end-point';
import { StorageService } from '../storage/storage.service';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  forForgotInfo = {} || null;
  isActiveClass = false;

  constructor(
    private _toast: ToastService,
    private _http: HttpService,
    private _storage: StorageService,
    private _loc: Location,
    private _router: Router) { }

  getCmsContents(type, query = {}, showLoader = false) {
    return this._http.get(CMS_API(type), query, showLoader);
  }

  locationBack() {
    this._loc.back();
  }

  scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  addActiveClass() {
    setTimeout(() => {
      this.isActiveClass = true;
    }, 0);
  }

  removeActiveClass() {
    this.isActiveClass = false;
  }

  isValidId(ID: string, isNavigate = true) {
    if ((/^[a-f\d]{24}$/i.test(ID))) {
      return true;
    } else {
      this._toast.error(INVALID_ID_ERROR);
      if (isNavigate) {
        this.navigate(['404']);
      } else {
        return false;
      }
    }
  }

  setOtpRelatedInfo(obj, screen, isNavigate = true) {
    switch (screen) {

      case atob(forgotScreen):
        this.setScreenInfo(forgotScreen);
        break;

      default:
        break;
    }
    localStorage.setItem(infoKey, btoa(JSON.stringify(obj)));
    if (isNavigate) {
      this.navigate([ACCOUNT, RECOVERY_EMAIL]);
    }
  }

  setScreenInfo(screenNameValue) {
    localStorage.setItem(screenNameValue, screenNameValue);
  }

  addClassOnBody(className) {
    document.body.classList.add(className);
  }

  removeClassOnBody(className) {
    document.body.classList.remove(className);
  }

  scrollViewById(elementId) {
    var myElement = document.getElementById(elementId);
    myElement.scrollIntoView();
  }

  underDevelopmentToast() {
    this._toast.error('Under Development !!');
  }

  /**
   * @RETURN_PERMISSION_DATA
   */
  getPermissionByModuleId(moduleId: string) {
    if (this._storage.profileDetail.permission.length > 0) {
      for (let index = 0; index < this._storage.profileDetail.permission.length; index++) {
        if (moduleId == this._storage.profileDetail.permission[index].moduleId) {
          return this._storage.profileDetail.permission[index];
        }
      }
    } else {
      return {};
    }
  }

  getClassToRemoveAddBtn() {
    return 'removeAddButton';
  }

  redirectToAnotherTab(url) {
    const anchor = document.createElement("a");
    anchor.setAttribute("href", url);
    anchor.setAttribute("target", "_blank");
    anchor.click();
  }

  navigate(route: any, query = {}, isMergeQuery = false) {
    this._router.navigate(route, { queryParams: query, queryParamsHandling: isMergeQuery ? 'merge' : '' })
  }

  /**
  * @UNSUBSCRIPTION Unsubscribe all subscriptions to avoid memory leak
  */
  unsubscribe(subscriptions: Subscription[]) {
    subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
