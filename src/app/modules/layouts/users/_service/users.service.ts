import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ADD_EMPLOYEE, ADD_OEM, COMPANY_SEARCH, USER_LIST_API } from 'src/app/constants/api-end-point';
import { HttpService } from 'src/app/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public _searchSubject: Subject<string> = new Subject();
  public _addEmployeeListing: Subject<string> = new Subject();
  public _addOEMListing: Subject<string> = new Subject();

  

  constructor(private _http: HttpService) { 
  }

  userList(body: any){
    return this._http.get(USER_LIST_API, body);
  }

  companySearch(body:any) {
    return this._http.get(COMPANY_SEARCH,body)
  }

  addEmployee(body: any) {
    return this._http.post(ADD_EMPLOYEE,body)
  }

  addOem(body: any) {
    return this._http.post(ADD_OEM, body);
  }
}
