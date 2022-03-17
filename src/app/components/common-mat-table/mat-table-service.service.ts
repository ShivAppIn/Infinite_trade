import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatTableService {

  private table = new Subject<any>();
  public tableObs = this.table.asObservable();

  constructor() { }

  tableRender(data:any,tableName,subTableName) {
    setTimeout(() => {
      let tableData = {
        data: data,
        tableName: tableName,
        subTableName: subTableName
      }
      this.table.next(tableData);
    }, 10);
  }
}
