import { isObjEmpty } from './../../../../../constants/helper';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BannerService } from '../../_service/banner.service';
import { LIMIT } from '../../../../../constants/validators';
import { BANNER_ERROR_MESSAGES, BANNER_TEMPLATE_TYPE, FILE_EXIST, MAX_IMG_SELECTION, MODULE_ID_OF } from '../../../../../constants/messages';
import { BreadcrumbService } from '../../../../../components/breadcrumb/breadcrumb.service';
import { S3BucketService } from '../../../../../services/s3-bucket/s3-bucket.service';
import { ToastService } from '../../../../../components/toast-notification/toast.service';
import { CommonService } from '../../../../../services/common/common.service';
import { BC_BANNERS_EDIT, BC_BANNERS_ADD } from '../../../../../constants/breadcrumb-routes';
import { BANNERS } from '../../../../../constants/routes';
import { StorageService } from '../../../../../services/storage/storage.service';

@Component({
  selector: 'app-add-edit-banners',
  templateUrl: './add-edit-banners.component.html',
  styleUrls: ['./add-edit-banners.component.scss'],
  providers: [BannerService]
})
export class AddEditBannersComponent implements OnInit {
  bannerForm: FormGroup;
  bannerId: string;
  _limit = LIMIT;
  errMsg = BANNER_ERROR_MESSAGES;
  maxImageSelection = MAX_IMG_SELECTION;
  selectedBannerFiles: any = [];
  templateType = BANNER_TEMPLATE_TYPE;

  constructor(
    private _fb: FormBuilder,
    private _bc: BreadcrumbService,
    private _banner: BannerService,
    private _actRoute: ActivatedRoute,
    private _s3: S3BucketService,
    private _toast: ToastService,
    private _common: CommonService,
    private _router: Router,
    private _storage: StorageService
  ) { }

  ngOnInit() {
    this.bannerId = this._actRoute.snapshot.params['bannerId'];
    this.createForm();
    if (this._storage.profileDetail.userType === 'ADMIN') {
      this.adminRoleHandler();
    } else {
      this.subAdminRoleHandler();
    }
  }

  createForm() {
    this.bannerForm = this._fb.group({
      title: [''],
      heading: [''],
      content: [''],
      template: [BANNER_TEMPLATE_TYPE[2].value]
    })
  }

  get f() { return this.bannerForm.controls } //return form controls

  adminRoleHandler() {
    this.setBreadcrumbAndFetchDetail();
  }

  subAdminRoleHandler() {
    let permission = this._common.getPermissionByModuleId(MODULE_ID_OF.BANNERS);
    if (!isObjEmpty(permission)) {
      if (permission.add && permission.edit) {
        this.setBreadcrumbAndFetchDetail();
      }
      if (!this.bannerId && !permission.add) {
        this.cancelHandler();
      }
      if (this.bannerId && !permission.edit) {
        this.cancelHandler();
      }
    }
  }

  setBreadcrumbAndFetchDetail() {
    if (this.bannerId) {
      this._bc.setBreadcrumb(BC_BANNERS_EDIT);
      if (this._common.isValidId(this.bannerId)) {
        this.getBannerDetails(this.bannerId);
      }
    } else {
      this._bc.setBreadcrumb(BC_BANNERS_ADD);
    }
  }

  getBannerDetails(bannerId: string) {
    this._banner.getBannerDetail(bannerId).subscribe((res: any) => {
      this.bannerForm.patchValue(res.data);
      this.selectedBannerFiles = res.data.banner;
    })
  }

  getSelectedFile(selectedFile) {
    for (let index = 0; index < this.selectedBannerFiles.length; index++) {
      if (selectedFile.base64Url == this.selectedBannerFiles[index].base64Url) {
        this._toast.error(FILE_EXIST);
        return;
      }
    }
    this.selectedBannerFiles.push(selectedFile);
  }

  getCurrentIndex(currentIndex: number) {
    if (this.selectedBannerFiles.length > 0) {
      this.selectedBannerFiles.splice(currentIndex, 1);
    }
  }

  async bannerHandler() {
    this.checkValidation();
    // if (this.bannerForm.valid) {

    //   if (this.selectedBannerFiles.length <= 0) {
    //     this._toast.error(BANNER_ERROR_MESSAGES.IMG_REQ);
    //     return
    //   }

    //   let formValue = this.bannerForm.value;
    //   formValue['banner'] = [];
    //   if (this.selectedBannerFiles.length > 0) {
    //     for (let file = 0; file < this.selectedBannerFiles.length; file++) {
    //       if (this.selectedBannerFiles[file] && this.selectedBannerFiles[file]['realFile']) {
    //         await this.uploadImage(this.selectedBannerFiles[file]['realFile'], formValue);
    //       } else {
    //         formValue.banner.push(this.selectedBannerFiles[file]);
    //       }
    //     }
    //   }
    //   if (this.bannerId) {
    //     this.updateBanner(formValue);
    //   } else {
    //     this.addNewBanner(formValue);
    //   }
    // }
  }

  uploadImage(selectedFile, formValue) {
    return new Promise((resolve, reject) => {
      this._s3.uploadFile(selectedFile).then((response: any) => {
        if (response && response.Location) {
          formValue.banner.push(response.Location);
          resolve(true);
        }
      }, (error) => {
        reject(error);
      })
    })
  }

  addNewBanner(formBody: any) {
    this._banner.addBanner(formBody).subscribe(res => {
      this.navigate(res.message);
    })
  }

  updateBanner(formBody: any) {
    formBody['bannerId'] = this.bannerId;
    this._banner.updateBanner(formBody).subscribe(res => {
      this.navigate(res.message);
    })
  }

  checkValidation() {
    for (const key in this.bannerForm.value) {
      if (this.bannerForm.value.hasOwnProperty(key) && typeof this.f[key].value == "string") {
        this.f[key].setValue(this.f[key].value.trim());
      }
    }

    if (!this.f.content.value) {
      this._toast.error(BANNER_ERROR_MESSAGES.CONTENT_REQ);
      return
    }

  }

  cancelHandler() {
    this._common.locationBack();
  }

  navigate(mssg?: string) {
    if (mssg) {
      this._toast.success(mssg);
    }
    this._router.navigate([BANNERS]);
  }

}
