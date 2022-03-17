import { BC_PROFILE_EDIT } from './../../../../../constants/breadcrumb-routes';
import { S3BucketService } from './../../../../../services/s3-bucket/s3-bucket.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../../../../services/common/common.service';
import { StorageService } from '../../../../../services/storage/storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LIMIT, REGEX } from '../../../../../constants/validators';
import { ACCOUNT_ERROR_MESSAGES } from '../../../../../constants/messages';
import { PROFILE } from '../../../../../constants/routes';
import { ProfileService } from '../../_service/profile.service';
import { ToastService } from '../../../../../components/toast-notification/toast.service';
import { BreadcrumbService } from '../../../../../components/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [ProfileService]
})
export class EditProfileComponent implements OnInit {
  profileForm: FormGroup;
  maxImageSelection = 1;
  selectedFile: any = [];
  limit = LIMIT;
  errorMsg = ACCOUNT_ERROR_MESSAGES;

  constructor(
    private _fb: FormBuilder,
    private _common: CommonService,
    public storage: StorageService,
    private _profile: ProfileService,
    private _toast: ToastService,
    private _s3: S3BucketService,
    private _bc: BreadcrumbService
  ) { }

  ngOnInit() {
    this._common.scrollTop();
    this._bc.setBreadcrumb(BC_PROFILE_EDIT);
    this.createForm();
    this.patchProfileInfo();
  }
  createForm() {
    this.profileForm = this._fb.group({
      name: [''],
      email: ['', Validators.pattern(REGEX.EMAIL)],
    })
  }

  get frmCtrl() { return this.profileForm.controls; }

  patchProfileInfo() {
    this.profileForm.patchValue(this.storage.profileDetail);
    this.selectedFile.push(this.storage.profileDetail.profilePicture);
  }

  getSelectedFile(selectedFile) {
    this.profileForm.markAsDirty();
    this.selectedFile.push(selectedFile);
  }

  getCurrentIndex(currentIndex: number) {
    if (this.selectedFile.length > 0) {
      this.profileForm.markAsDirty();
      this.selectedFile.splice(currentIndex, 1);
    }
  }

  async profileHandler() {
    this.profileValidation();
    if (this.profileForm.valid) {
      if (this.profileForm.dirty) {
        let formValue = this.profileForm.value;
        formValue.email = this.storage.profileDetail.email;
        formValue['profilePicture'] = '';
        if (this.selectedFile.length > 0) {
          for (let file = 0; file < this.selectedFile.length; file++) {
            if (this.selectedFile[file] && this.selectedFile[file]['realFile']) {
              await this.uploadImage(this.selectedFile[file]['realFile'], formValue);
            } else {
              formValue.profilePicture = this.selectedFile[file];
            }
          }
        }
        if (!formValue['profilePicture']) {
          delete formValue['profilePicture'];
        }
        this.updateProfileInfo(formValue);
      } else {
        this.navigateToProfile();
      }
    }
  }

  uploadImage(selectedFile, formValue) {
    return new Promise((resolve, reject) => {
      this._s3.uploadFile(selectedFile).then((response: any) => {
        if (response && response.Location) {
          formValue.profilePicture = response.Location;
          resolve(true);
        }
      }, (error) => {
        reject(error);
      })
    })
  }

  updateProfileInfo(formValue) {
    this._profile.updateProfileInfo(formValue).subscribe(res => {
      this.profileForm.disable();
      this._toast.success(res.message);
      this.storage.profileDetail.name = formValue.name;
      this.storage.profileDetail.profilePicture = formValue.profilePicture ? formValue.profilePicture : '';
      this.navigateToProfile();
    })
  }

  profileValidation() {
    for (const key in this.profileForm.value) {
      if (this.profileForm.value.hasOwnProperty(key)) {
        if (this.frmCtrl[key].value && typeof (this.frmCtrl[key].value) === 'string') {
          this.frmCtrl[key].patchValue(this.frmCtrl[key].value.trim());
        }
      }
    }
  }

  navigateToProfile() {
    this._common.navigate([PROFILE]);
  }

}
