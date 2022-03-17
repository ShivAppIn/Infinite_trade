import { Component, OnInit, Output, EventEmitter, OnDestroy, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { TableService } from './table.service';
import { StorageService } from '../../services/storage/storage.service';
import { slideInDownAnimation } from './filter-animation';
import { CommonService } from '../../services/common/common.service';
import { Pagination } from '../../constants/pagination';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DATE_TYPES, LISTING_COMMON_MESSAGES } from '../../constants/messages';

const ELEMENT_DATA = [];

@Component({
  selector: 'mat-table-renderer',
  templateUrl: './mat-table-renderer.component.html',
  styleUrls: ['./mat-table-renderer.component.scss'],
  animations: [slideInDownAnimation]
})
export class MatTableRendererComponent extends Pagination implements OnInit, OnDestroy {
  isOpen = false;
  matHeaderRow: any = [];
  notData: boolean = false;
  length: 0;
  pageSize: 10;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  subscriptions: Subscription[] = [];
  dateType = DATE_TYPES;
  showLoader = false;

  @Input() pageType;
  @Input() openFilter: boolean = false;
  @Input() cls: string;
  @Input() addCustomClass: string = 'removeExportBtn';
  @Input() heading: any = [];
  @Input() notFound: string;
  @Input() removeId: number = -1;
  @Input() placeholder: string = "Search";
  @Input() listType: string = '';
  @Input() isPageForBulkOperation = false;
  @Input() dataFromPerent: boolean = false;
  @Input() set tableData(value) {
    if (value) {
      this.setTableData(value);
    }
  }
  @Output() page: EventEmitter<any> = new EventEmitter();
  @Output() find: EventEmitter<any> = new EventEmitter();
  @Output() sort: EventEmitter<any> = new EventEmitter();
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() status: EventEmitter<any> = new EventEmitter();
  @Output() filter: EventEmitter<any> = new EventEmitter();
  @Output() open: EventEmitter<any> = new EventEmitter(); /*--open close filter--*/
  @Output() export: EventEmitter<any> = new EventEmitter();
  @Output() detailInPopup: EventEmitter<any> = new EventEmitter();
  @Output() bulkOperation: EventEmitter<any> = new EventEmitter();
  @ViewChild('paginator') paginator: MatPaginator;

  constructor(
    private _table: TableService,
    private _dialog: MatDialog,
    public storage: StorageService,
    public common: CommonService
  ) { super(); }

  ngOnInit() {
    this.showLoader = true;
    this.matHeaderRow.push("#");
    this.heading.forEach(item => {
      this.matHeaderRow.push(item.heading);
    });
    this.heading.push({ heading: "#", key: "s_no" });
    if (!this.dataFromPerent) {
      this.TableDatObserve();
    }
    this.notFoundErrorHandler(respond.added);
  }

  TableDatObserve() {
    this.subscriptions.push(
      this._table.tableObserve.subscribe((response: any) => {
        this.setTableData(response);
      }, () => {
        this.showLoader = false;
      })
    );
  }

  setTableData(response) {
    this.showLoader = false;
    response.data.forEach((list, index) => {
      list["s_no"] = response.limit * (response.pageNo - 1) + (index + 1);
    });
    this.dataSource = new MatTableDataSource(response.data);
    this.length = response.total;
    this.pageSize = response.limit;
    if (response.data.length == 0) {
      this.notData = true;
    } else {
      this.notData = false;
    }
  }

  /**
   * @param text common not found text handel
   */
  notFoundErrorHandler(text: string) {
    if (this.notFound) {
      const notFoundText = this.notFound.split(" ");
      if (notFoundText[notFoundText.length - 1].toLowerCase() == respond.added || notFoundText[notFoundText.length - 1].toLowerCase() == respond.found) {
        notFoundText[notFoundText.length - 1] = text;
        this.notFound = notFoundText.join(" ");
      }
    }
  }

  onPageHandler(ev: any) {
    this.page.emit(ev);
  }

  searchTable(search: string) {
    this.find.emit(search);
    if (search == "") {
      this.notFoundErrorHandler(respond.added);
    } else {
      this.notFoundErrorHandler(respond.found);
    }
  }

  addListing(status: number, data?: any) {
    /*--0=add, +1=edit--*/
    this.add.emit({ id: status, data: data });
  }

  exportList() {
    this.export.emit(true);
  }

  sortingData(event) {
    for (let find = 0; find < this.heading.length; find++) {
      if (this.heading[find].heading == event.active) {
        event.active = this.heading[find].key;
        break;
      }
    }
    this.sort.emit(event);
  }

  changeStatus(id: number, data: any, index: any, listType?) {
    const body = {
      id: id,
      index: index,
      data: data
    };
    switch (id) {
      case 1:
        this.status.emit(body);
        break;

      case 4:
        this.status.emit(body); // form sending notification
        break;

      default:
        this.confirmationDialog(id, body, listType);
        break;
    }
  }

  tableFilter(isOpen: boolean) {
    this.isOpen = isOpen;
    this.open.emit(this.isOpen);
  }

  confirmationDialog(id: number, body: any, listType?) {
    // let message = LISTING_COMMON_MESSAGES.DELETE_MSG;
    // let title = LISTING_COMMON_MESSAGES.DELETE_TITLE;
    // body["action"] = this.API_EVENT.delete;
    // if (id == 2) {
    //   if (body.data.status == this.API_EVENT.active) {
    //     message = listType == 'User' ? LISTING_COMMON_MESSAGES.BLOCK_MSG : LISTING_COMMON_MESSAGES.INACTIVATE_MSG;
    //     title = listType == 'User' ? LISTING_COMMON_MESSAGES.BLOCK_TITLE : LISTING_COMMON_MESSAGES.INACTIVATE_TITLE;
    //     body["action"] = this.API_EVENT.block;
    //   } else {
    //     message = listType == 'User' ? LISTING_COMMON_MESSAGES.ACTIVE_MSG : LISTING_COMMON_MESSAGES.ACTIVATE_MSG;
    //     title = listType == 'User' ? LISTING_COMMON_MESSAGES.ACTIVE_TITLE : LISTING_COMMON_MESSAGES.ACTIVATE_TITLE;
    //     body["action"] = this.API_EVENT.active;
    //   }
    // }
    // const dialog = this._dialog.open(ConfirmationModalComponent, {
    //   data: {
    //     title: title,
    //     message: message,
    //     listType: (body.action == this.API_EVENT.block || body.action == this.API_EVENT.delete) ? this.listType : ''
    //   }
    // });
    // dialog.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.status.emit(body);
    //   }
    // });
  }

  applyFilter(event) {
    if (event.apply == null) {
      this.notFoundErrorHandler(respond.added);
      this.tableFilter(false);
    } else {
      if (event.apply) {
        this.notFoundErrorHandler(respond.found);
      } else {
        this.notFoundErrorHandler(respond.added);
      }
      this.tableFilter(false);
      this.filter.emit(event);
    }
  }

  /**
  * @UNSUBSCRIPTION Unsubscribe all subscriptions to avoid memory leak
  */
  ngOnDestroy() {
    if (this.subscriptions.length > 0) {
      this.common.unsubscribe(this.subscriptions);
    }
  }
}

enum respond {
  added = "added",
  found = "found"
}
