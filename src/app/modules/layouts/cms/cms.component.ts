import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common/common.service';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit {

  constructor(private _common: CommonService) { }

  ngOnInit() {
    this._common.scrollTop();
  }

}
