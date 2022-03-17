import { Injectable } from '@angular/core';
import { HttpService } from '../../../../services/http/http.service';
import { BANNER_API, BANNER_BLOCK_UNBLOCK_API, BANNER_EXPORT_API } from '../../../../constants/api-end-point';

@Injectable()
export class BannerService {

  constructor(private _http: HttpService) { }

  getBannerList(query) {
    return this._http.get(BANNER_API, query);
  }

  addBanner(body) {
    return this._http.post(BANNER_API, body);
  }

  updateBanner(body) {
    return this._http.put(BANNER_API, body);
  }

  activateInactivate(body) {
    return this._http.patch(BANNER_BLOCK_UNBLOCK_API, body);
  }

  deleteBanner(bannerId: string) {
    return this._http.delete(`${BANNER_API}/${bannerId}`);
  }

  getBannerDetail(bannerId: string) {
    return this._http.get(`${BANNER_API}/${bannerId}`);
  }

  exportList(query) {
    return this._http.get(BANNER_EXPORT_API, query);
  }

}
