import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../_service/banner.service';
import { DATE_TYPES } from '../../../../../constants/messages';
import { Pagination } from '../../../../../constants/pagination';
import { Subscription } from 'rxjs';
import { BreadcrumbService } from '../../../../../components/breadcrumb/breadcrumb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../../../components/toast-notification/toast.service';
import { CommonService } from '../../../../../services/common/common.service';
import { BC_BANNERS_DETAILS } from '../../../../../constants/breadcrumb-routes';
import { BANNERS } from '../../../../../constants/routes';

@Component({
  selector: 'app-banners-details',
  templateUrl: './banners-details.component.html',
  styleUrls: ['./banners-details.component.scss'],
  providers: [BannerService]
})
export class BannersDetailsComponent extends Pagination implements OnInit {
  bannerDetails: any;
  isApiCallInProgress = false;
  dateType = DATE_TYPES;
  subscriptions: Subscription[] = [];

  constructor(
    private _bc: BreadcrumbService,
    private _actRoute: ActivatedRoute,
    private _banner: BannerService,
    private _router: Router,
    private _toast: ToastService,
    private _common: CommonService
  ) { super() }

  ngOnInit() {
    this._bc.setBreadcrumb(BC_BANNERS_DETAILS);
    this.validateIdAndFetchDetails();
  }

  validateIdAndFetchDetails() {
    if (this._common.isValidId(this._actRoute.snapshot.params['bannerId'])) {
      this.fetchBannerDetails();
    }
  }

  fetchBannerDetails() {
    this.isApiCallInProgress = true;
    this.subscriptions.push(
      this._banner.getBannerDetail(this._actRoute.snapshot.params['bannerId']).subscribe((res: any) => {
        this.isApiCallInProgress = false;
        this.bannerDetails = res.data;
      }, (error) => {
        this.isApiCallInProgress = false;
        if (error.statusCode == 400) {
          this._toast.error(error.message);
          this._router.navigate([BANNERS]);
        }
      })
    );
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
