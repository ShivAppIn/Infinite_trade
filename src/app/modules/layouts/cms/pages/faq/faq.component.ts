import { isObjEmpty } from './../../../../../constants/helper';
import { MODULE_ID_OF } from './../../../../../constants/messages';
import { BC_FAQ } from './../../../../../constants/breadcrumb-routes';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BreadcrumbService } from '../../../../../components/breadcrumb/breadcrumb.service';
import { Pagination } from '../../../../../constants/pagination';
import { Subscription } from 'rxjs';
import { MatTableRendererComponent } from '../../../../../components/mat-table-renderer/mat-table-renderer.component';
import { TableService } from '../../../../../components/mat-table-renderer/table.service';
import { ToastService } from '../../../../../components/toast-notification/toast.service';
import { CommonService } from '../../../../../services/common/common.service';
import { CmsService } from '../../_service/cms.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditFaqComponent } from '../../_components/add-edit-faq/add-edit-faq.component';
import { FaqDetailsComponent } from '../../_components/faq-details/faq-details.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent extends Pagination implements OnInit, OnDestroy {
  heading = [
    { heading: "Question", key: "question", type: 'link', faqContent: true },
    { heading: "Display Order", key: "position", align: "center" },
    { heading: "Added On", key: "created", align: "center", type: 'date' },
    { heading: "Action", key: "status", type: "action", action: [1, 3] }
  ];
  tempList = [];
  subscriptions: Subscription[] = [];
  @ViewChild(MatTableRendererComponent) tableRef: MatTableRendererComponent;

  constructor(
    private _bc: BreadcrumbService,
    private _table: TableService,
    private _toast: ToastService,
    private _cms: CmsService,
    private _common: CommonService,
    private _dialog: MatDialog
  ) { super() }

  ngOnInit() {
    this._bc.setBreadcrumb(BC_FAQ);
    this.permissionHandler();
    this.getFaqListing();
  }

  permissionHandler() {
    let permission = this._common.getPermissionByModuleId(MODULE_ID_OF.CMS);
    if (!isObjEmpty(permission)) {
      if (!permission.add && !permission.edit && !permission.delete) {
        this.removeOnlyAddBtn();
        this.removeActionObj();
      } else if (!permission.edit && !permission.delete) {
        this.removeActionObj();
      } else if (!permission.add && !permission.edit) {
        this.removeOnlyAddBtn();
        this.removeActionOperation(1);
      } else {
        if (!permission.add) {
          this.removeOnlyAddBtn();
        }
        if (!permission.edit) {
          this.removeActionOperation(1);
        }
        if (!permission.delete) {
          this.removeActionOperation(3);
        }
      }
    }
  }

  removeOnlyAddBtn() {
    this.permissionClass = this._common.getClassToRemoveAddBtn();
  }

  removeActionObj() {
    this.heading.splice((this.heading.length - 1), 1);
  }

  removeActionOperation(operationValue) {
    this.heading[this.heading.length - 1].action = this.removeAction([operationValue]);
  }

  removeAction(valuesToRemove) {
    return this.heading[this.heading.length - 1].action.filter(item => !valuesToRemove.includes(item));
  }

  getFaqListing(showLoader = false) {
    this.subscriptions.push(
      this._cms.getFaqList(this.pageParams, showLoader).subscribe((response: any) => {
        this.tempList = response.data;
        this._table.tableRender(response);
      }, () => {
        this._table.tableRender({ data: [] });
      })
    );
  }

  showDetailInPopup(rowData) {
    this._dialog.open(FaqDetailsComponent, {
      autoFocus: false,
      data: rowData
    })
  }

  addEditFaq(status: any) {
    /**
     * [ADD,EDIT]=[0,1]
     */
    const dialog = this._dialog.open(AddEditFaqComponent, {
      autoFocus: false,
      disableClose: true,
      data: status
    })
    dialog.afterClosed().subscribe(result => {
      if (result && result.isHitApi) {
        this.getFaqListing(true);
      }
    });
  }

  paginationWithSearch(ev: any, id: number) {
    switch (id) {
      case 0:
        this.resetPages();
        this.search = ev;
        if (this.tableRef.paginator) {
          this.tableRef.paginator.firstPage();
        }
        break;
      default:
        this.pageOptionsOnChange = ev;
        break;
    }
    this.getFaqListing(true);
  }

  sortByListing(event: any) {
    this.sortOptions = event;
    this.getFaqListing(true);
  }

  changeStatus(status: any) {
    switch (status.id) {
      case 1:
        this.addEditFaq(status);
        break;
      default:
        this.changeFaqStatus(status);
        break;
    }
  }

  changeFaqStatus(faqInfo: any) {
    const updateObj = {
      faqId: faqInfo.data._id
    };
    this._cms.deleteFaq(updateObj).subscribe(response => {
      if (faqInfo.action == this.API_EVENT.delete && (faqInfo.data.s_no > 1 && faqInfo.data.s_no % (this.limit) == 1) && this.tempList.length == 1) {
        this.pageNo = this.pageNo - 1;
        this.tableRef.paginator.pageIndex = this.pageNo - 1;
      }
      this.getFaqListing(true);
      this._toast.success(response.message);
    });
  }

  /**
   * @UNSUBSCRIPTION Unsubscribe all subscriptions to avoid memory leak
   */
  ngOnDestroy() {
    if (this.subscriptions.length > 0) {
      this._common.unsubscribe(this.subscriptions);
    }
  }


}
