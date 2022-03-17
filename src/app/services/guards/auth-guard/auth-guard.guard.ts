import { StorageService } from './../../storage/storage.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ACCOUNT } from '../../../constants/routes';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _storage: StorageService,
  ) { }

  canActivate(): Observable<any> | Promise<any> | any {
    if (this._storage.token) {
      return new Observable(observer => {
        this._storage.getProfileDetail().then(result => {
          observer.next(true);
        }).catch(err => {
          observer.next(false);
        })
      })
    } else {
      const tree: UrlTree = this._router.parseUrl(ACCOUNT);
      return tree;
    }
  }

}
