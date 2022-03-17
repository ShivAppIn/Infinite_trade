import { DASHBOARD } from './../../../constants/routes';
import { StorageService } from './../../storage/storage.service';
import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogInGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _storage: StorageService,
  ) { }

  canActivate(): boolean | UrlTree {
    if (this._storage.token) {
      const tree: UrlTree = this._router.parseUrl(DASHBOARD);
      return tree;
    } else {
      return true;
    }
  }

}
