import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { LoaderService } from '../../components/loader/loader.service';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../../constants/interface';

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private _apiUrl: string;

  constructor(private _http: HttpClient, private _loaderService: LoaderService) {
    this._apiUrl = environment.API_BASE_PATH;
  }

  post<T>(url, data, loader = true): Observable<ApiResponse<T>> {
    if (loader) {
      this._loaderService.show();
    }
    return this._http.post<ApiResponse<T>>(this._apiUrl + url, data);
  }

  put<T>(url, data?, loader = true): Observable<ApiResponse<T>> {
    if (loader) {
      this._loaderService.show();
    }
    return this._http.put<ApiResponse<T>>(this._apiUrl + url, data);
  }

  delete<T>(url, query?: any, loader = true): Observable<ApiResponse<T>> {
    if (loader) {
      this._loaderService.show();
    }
    return this._http.delete<ApiResponse<T>>(this._apiUrl + url, { params: query });
  }

  patch<T>(url, data, option?, loader = true): Observable<ApiResponse<T>> {
    if (loader) {
      this._loaderService.show();
    }
    return this._http.patch<ApiResponse<T>>(this._apiUrl + url, data, { params: option });
  }

  get<T>(url, httpParams?: any, loader = true): Observable<ApiResponse<T>> {
    if (loader) {
      this._loaderService.show();
    }
    return this._http.get<ApiResponse<T>>(this._apiUrl + url, { params: httpParams });
  }

  getLocal(url: string): Observable<any> {
    return this._http.get(url).pipe(catchError((err: HttpErrorResponse) => throwError(err)));
  }
}
