import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { USER_LIST_API } from 'src/app/constants/api-end-point';
import { HttpService } from 'src/app/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public _searchSubject: Subject<string> = new Subject();

  constructor(private _http: HttpService) { 
  }

  userList(body: any){
    return this._http.get(USER_LIST_API, body);
  }
}
