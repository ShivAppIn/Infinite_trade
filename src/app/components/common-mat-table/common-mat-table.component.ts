import { MatDialog } from '@angular/material/dialog';
import { Pagination } from 'src/app/constants/pagination';
import { MatTableService } from './mat-table-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { TABLE_ERROR_MSG } from 'src/app/constants/messages';

const ELEMENT_DATA = [];
export interface NotificationElement {
  fullName: string;
  location: string;
  mobileNo: number;
  email: string;
  createdAt: string;
  status: string;
}
@Component({
  selector: 'common-mat-table',
  templateUrl: './common-mat-table.component.html',
  styleUrls: ['./common-mat-table.component.scss'],
})
export class CommonMatTableComponent extends Pagination implements OnInit {
  length: 0;
  pageSize: 10;
  showLoader = false;
  adminStatId: any;
  tableName: string = '';
  subTableName: string = '';
  maxValue: any = '';
  notfound: boolean = false;
  userDetail: any = '';
  matHeaderRow: any = [];
  subscription: Subscription[] = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<NotificationElement>(true, []);
  errMsg = '';

  @Input() pageType;
  @Input() heading: any = [];
  @Output() sortData: EventEmitter<any> = new EventEmitter();
  @Output() checkUsers: EventEmitter<any> = new EventEmitter();
  @ViewChild('paginator') paginator: MatPaginator;
  @Output() page: EventEmitter<any> = new EventEmitter();

  constructor(
    private _actRoute: ActivatedRoute,
    private _tableSer: MatTableService,
    private _router: Router,
    private _dialog: MatDialog
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscription.push(
      this._actRoute.queryParams.subscribe((value: any) => {
        this.showLoader = true;
        this.length = 0;
        this.pageSize = 10;
        this.dataSource = new MatTableDataSource([]);
      })
    );
    this.matHeaderRow.push('select');
    this.heading.forEach((item) => {
      this.matHeaderRow.push(item.heading);
    });
    this.heading.push({ heading: 'select', key: 'check' });
    this.TableDatObserve();
  }

  TableDatObserve() {
    this._tableSer.tableObs.subscribe(
      (response: any) => {
        let respData;
        this.showLoader = false;
        this.tableName = response.tableName;
        this.subTableName = response.subTableName;
        this.setHeaders();
        if (
          this.tableName == 'employee' ||
          this.tableName == 'company' ||
          this.tableName == 'oem'
        ) {
          respData = response?.data;
        }

        if (respData) {
          this.dataSource = new MatTableDataSource(respData?.data);
          this.notfound = respData.data?.total == 0 ? true : false;
          this.setErrorMSg();
          this.length = response?.data?.total;
          this.pageSize = response?.data?.limit;
        }
      },
      () => {
        this.showLoader = false;
      }
    );
  }

  setHeaders() {
    if (this.subTableName != 'notification') {
      if (this.matHeaderRow.includes('checkValue')) {
        this.matHeaderRow.splice(this.matHeaderRow.indexOf('checkValue'), 1);
        this.heading = this.heading.filter(
          (value) => value.heading != 'checkValue'
        );
      }
    }
  }

  pageChange(event: any) {
    this.page.emit(event);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  selectSingleValue(event) {
    this.selection.toggle(event);
    this.checkUsers.emit(this.selection.selected);
  }

  selectAll() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
    this.checkUsers.emit(this.selection.selected);
  }

  sortingData(event) {
    for (let i = 0; i < this.heading.length; i++) {
      if (this.heading[i].heading == event.active) {
        event.active = this.heading[i].key;
        break;
      }
    }
    this.sortData.emit(event);
  }


  setErrorMSg() {
    switch (this.tableName) {
      case 'company':
        this.errMsg = TABLE_ERROR_MSG.COMPANY;
        break;
      case 'oem':
        this.errMsg = TABLE_ERROR_MSG.OEM;
        break;
      case 'employee':
        this.errMsg = TABLE_ERROR_MSG.EMPLOYEES;
        break;

      default:
        this.errMsg = '';
        break;
    }
  }
}
