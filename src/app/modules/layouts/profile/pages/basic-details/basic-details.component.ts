import { BC_PROFILE } from './../../../../../constants/breadcrumb-routes';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../../../../services/common/common.service';
import { StorageService } from '../../../../../services/storage/storage.service';
import { DATE_TYPES } from '../../../../../constants/messages';
import { BreadcrumbService } from '../../../../../components/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements OnInit, OnDestroy {
  dateTypes = DATE_TYPES;

  constructor(
    private _common: CommonService,
    public storage: StorageService,
    private _bc: BreadcrumbService
  ) { }

  ngOnInit() {
    this._bc.setBreadcrumb(BC_PROFILE);
    this._common.addActiveClass();
    this._common.scrollTop();
  }

  ngOnDestroy() {
    this._common.removeActiveClass();
  }

}
