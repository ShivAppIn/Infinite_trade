import { Injectable } from '@angular/core';
import { NOTIFICATION_ACTION_API, NOTIFICATION_API } from 'src/app/constants/api-end-point';
import { HttpService } from 'src/app/services/http/http.service';

@Injectable()
export class NotificationService {

  constructor(
    private _http: HttpService
  ) { }

  getNotificationList(query) {
    return this._http.get(NOTIFICATION_API, query);
  }

  sendNotification(body) {
    return this._http.post(NOTIFICATION_API, body);
  }

  rowActions(body: any) {
    return this._http.post(NOTIFICATION_ACTION_API, body);
  }

  getNotificationDetail(notificationId: string) {
    return this._http.get(`${NOTIFICATION_API}/${notificationId}`);
  }
}
