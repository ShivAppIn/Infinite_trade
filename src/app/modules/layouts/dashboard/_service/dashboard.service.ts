import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Injectable()
export class DashboardService {
  
  constructor(
    private _http: HttpService
  ) { }

}
