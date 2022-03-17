import { Injectable } from '@angular/core';
import { HttpService } from '../../../../services/http/http.service';
import { USER_INFO_API, CHANGE_PASSWORD_API, } from '../../../../constants/api-end-point';

@Injectable()
export class ProfileService {

  constructor(private _http: HttpService) { }

  updateProfileInfo(body: any) {
    return this._http.put(USER_INFO_API, body);
  }

  changePassword(body: any) {
    return this._http.post(CHANGE_PASSWORD_API, body);
  }

}
