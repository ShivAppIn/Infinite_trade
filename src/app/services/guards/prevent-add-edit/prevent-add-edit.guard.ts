import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { StorageService } from '../../storage/storage.service';
import { DASHBOARD } from './../../../constants/routes';

@Injectable({
  providedIn: 'root'
})
export class PreventAddEditGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _storage: StorageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this._storage.profileDetail.permission.length > 0) {
      for (let index = 0; index < this._storage.profileDetail.permission.length; index++) {
        if (route.data.moduleId == this._storage.profileDetail.permission[index].moduleId) {
          if (!this._storage.profileDetail.permission[index].add && !this._storage.profileDetail.permission[index].edit) {
            this._router.navigate([DASHBOARD]);
            return false;
          } else {
            return true;
          }
        }
      }
    } else {
      return true;
    }
  }

}
