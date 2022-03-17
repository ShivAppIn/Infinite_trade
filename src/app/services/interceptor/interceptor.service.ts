import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { map, catchError, finalize, timeout } from 'rxjs/operators';
import { retryWithBackOff } from '../../constants/retryApiWithBackOff';
import { LoaderService } from '../../components/loader/loader.service';
import { StorageService } from '../storage/storage.service';
import { NO_INTERNET, INTERNAL_SERVER_ERROR } from '../../constants/messages';
import { ToastService } from '../../components/toast-notification/toast.service';

export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  constructor(
    @Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number,
    private _auth: AuthService,
    private _toast: ToastService,
    private _ls: LoaderService,
    private _store: StorageService,
    private _router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const timeoutValue = Number(req.headers.get('timeout')) || this.defaultTimeout;

    let authReq = req.clone({ setHeaders: this._auth.authorization() });

    return next.handle(authReq).pipe(retryWithBackOff(), timeout(timeoutValue), map((event: HttpEvent<any>) => {

      if (event instanceof HttpResponse) {
        this._ls.hide();
      }
      return event;

    }), catchError((error: HttpErrorResponse) => {

      this.errorState(error, error.error);
      return throwError(error.error ? error.error : error);

    }),

      finalize(() => {
        this._ls.hide();
      })

    );
  }

  errorState(error: any, data?: any) {
    this._ls.hide();
    if (error.status == 0) {
      if (!navigator.onLine) {
        this._toast.error(NO_INTERNET);
      } else {
        this._toast.error(INTERNAL_SERVER_ERROR);
      }
    } else if (error.status == 401) {
      this._toast.error(data ? data.message : error.message);
      this._store.logout();
    } else if (error.status == 404) {
      this._toast.error(data ? data.message : error.message);
      this._router.navigate(['404']);
    } else {
      this._toast.error(data ? data.message : error.message);
    }
  }

}
