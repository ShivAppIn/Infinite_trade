import { Injectable } from '@angular/core';
import { HttpService } from '../../../../services/http/http.service';
import { UPDATE_CMS_API, FAQ_API } from '../../../../constants/api-end-point';

@Injectable()

export class CmsService {

  constructor(private _http: HttpService) { }

  getFaqList(query?: any, showLoader = false) {
    return this._http.get(FAQ_API, query, showLoader);
  }

  addFaq(body: any) {
    return this._http.post(FAQ_API, body);
  }

  updateFaq(body: any) {
    return this._http.put(FAQ_API, body);
  }

  deleteFaq(query: any) {
    return this._http.delete(FAQ_API, query);
  }

  updateCmsContents(body) {
    return this._http.put(UPDATE_CMS_API, body);
  }

}
