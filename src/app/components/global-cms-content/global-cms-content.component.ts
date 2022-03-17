import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRIVACY_POLICY, ABOUT_US, FAQ } from '../../constants/routes';
import { CommonService } from '../../services/common/common.service';
import { CONTENT_TYPES } from '../../constants/messages';
import { CmsService } from '../../modules/layouts/cms/_service/cms.service';

@Component({
  selector: 'app-global-cms-content',
  templateUrl: './global-cms-content.component.html',
  styleUrls: ['./global-cms-content.component.scss'],
  providers: [CmsService]
})
export class GlobalCmsContentComponent implements OnInit {
  title: string;
  data: any | [];
  isApiCallInProgress = false;
  isForHelp = false;

  constructor(
    private _common: CommonService,
    private _cms: CmsService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.fetchAndSetData();
  }

  fetchAndSetData() {
    let currentUrl = this._router.url.split('/')[1];
    switch (currentUrl) {
      case PRIVACY_POLICY:
        this.title = 'Privacy Policy';
        this.isForHelp = false;
        this.getCurrentData(CONTENT_TYPES.PRIVACY_POLICY);
        break;

      case ABOUT_US:
        this.title = 'About Us';
        this.isForHelp = false;
        this.getCurrentData(CONTENT_TYPES.ABOUT_US);
        break;

      case FAQ:
        this.title = "Help (FAQ's)";
        this.isForHelp = true;
        this.getFaqList();
        break;

      default:
        this.title = 'Terms & Conditions';
        this.isForHelp = false;
        this.getCurrentData(CONTENT_TYPES.TERMS_AND_CONDITIONS);
        break;
    }
  }

  getCurrentData(type) {
    this.isApiCallInProgress = true;
    this._common.getCmsContents(type).subscribe((res: any) => {
      this.isApiCallInProgress = false;
      this.data = res.data.data;
    }, () => {
      this.isApiCallInProgress = false;
    })
  }

  getFaqList() {
    this.isApiCallInProgress = true;
    this._cms.getFaqList({ pageNo: 1, limit: 100 }).subscribe((res: any) => {
      this.isApiCallInProgress = false;
      this.data = res.data && res.data.length > 0 ? res.data : '';
    }, () => {
      this.isApiCallInProgress = false;
    })
  }

  isQuestionExpanded(event, index) {
    if (event) {
      this.data[index]['isCssClassAdded'] = true;
    } else {
      this.data[index]['isCssClassAdded'] = false;
    }
  }

}
