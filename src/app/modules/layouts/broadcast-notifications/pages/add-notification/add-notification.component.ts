import { isObjEmpty } from './../../../../../constants/helper';
import { BC_NOTIFICATION_ADD } from './../../../../../constants/breadcrumb-routes';
import { S3BucketService } from './../../../../../services/s3-bucket/s3-bucket.service';
import { ToastService } from './../../../../../components/toast-notification/toast.service';
import { CommonService } from './../../../../../services/common/common.service';
import { BreadcrumbService } from './../../../../../components/breadcrumb/breadcrumb.service';
import { MODULE_ID_OF, NOTIFICATION_ERROR_MESSAGES, NOTIFICATION_PLATFORM, NOTIFICATION_STATUS } from './../../../../../constants/messages';
import { LIMIT } from 'src/app/constants/validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from '../../_service/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { SchedulerPopupComponent } from '../../_components/scheduler-popup/scheduler-popup.component';
import { NOTIFICATION } from '../../../../../constants/routes';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss']
})
export class AddNotificationComponent implements OnInit {
  notificationForm: FormGroup;
  _limit = LIMIT;
  errMsg = NOTIFICATION_ERROR_MESSAGES;
  notificationPlatform = NOTIFICATION_PLATFORM;
  maxImageSelection = 1;
  selectedFile: any = [];
  notificationStatus = NOTIFICATION_STATUS;
  currentAction = this.notificationStatus.SENT;
  scheduledTime: any = '';

  constructor(
    private _bc: BreadcrumbService,
    private _fb: FormBuilder,
    private _common: CommonService,
    private _toast: ToastService,
    private _service: NotificationService,
    private _s3: S3BucketService,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this.createForm();
    this._bc.setBreadcrumb(BC_NOTIFICATION_ADD);
    let permission = this._common.getPermissionByModuleId(MODULE_ID_OF.BROADCAST_NOTIFICATIONS);
    if (!isObjEmpty(permission)) {
      if (!permission.add) {
        this.cancelHandler();
      }
    }
  }

  createForm() {
    this.notificationForm = this._fb.group({
      title: [''],
      message: [''],
      platform: [''],
    });
  }

  get f() { return this.notificationForm.controls } //return all form controls

  getSelectedFile(selectedFile) {
    this.selectedFile.push(selectedFile);
  }

  getCurrentIndex(currentIndex: number) {
    if (this.selectedFile.length > 0) {
      this.selectedFile.splice(currentIndex, 1);
    }
  }

  notificationHandler() {
    this.checkValidations();
    if (this.notificationForm.valid) {
      switch (this.currentAction) {
        case this.notificationStatus.SENT:
        case this.notificationStatus.DRAFTED:
          this.addNotificationHandler();
          break;

        case this.notificationStatus.SCHEDULED:
          this.openSchedulerForm();
          break;

        default:
          break;
      }
    }
  }

  async addNotificationHandler() {
    let formValue = this.notificationForm.value;
    if (this.currentAction == this.notificationStatus.SCHEDULED && this.scheduledTime) {
      formValue['scheduleTime'] = this.scheduledTime;
    } else {
      delete formValue.scheduleTime;
    }
    formValue['notificationStatus'] = this.currentAction;
    formValue['image'] = [];
    if (this.selectedFile.length > 0) {
      for (let file = 0; file < this.selectedFile.length; file++) {
        if (this.selectedFile[file] && this.selectedFile[file]['realFile']) {
          await this.uploadImage(this.selectedFile[file]['realFile'], formValue);
        } else {
          formValue.image.push(this.selectedFile[file]);
        }
      }
    }
    this.sendNewNotification(formValue);
  }

  uploadImage(selectedFile, formValue) {
    return new Promise((resolve, reject) => {
      this._s3.uploadFile(selectedFile).then((response: any) => {
        if (response && response.Location) {
          formValue.image.push(response.Location);
          resolve(true);
        }
      }, (error) => {
        reject(error);
      })
    })
  }

  sendNewNotification(formBody: any) {
    this._service.sendNotification(formBody).subscribe(res => {
      this.navigate(res.message);
    })
  }

  checkValidations() {
    for (const key in this.notificationForm.value) {
      if (this.notificationForm.value.hasOwnProperty(key) && typeof this.f[key].value == "string") {
        this.f[key].setValue(this.f[key].value.trim());
      }
    }
  }

  openSchedulerForm() {
    const dialogRef = this._dialog.open(SchedulerPopupComponent, {
      disableClose: true,
      width: '450px',
      data: {}
    })
    dialogRef.afterClosed().subscribe(dialogResponse => {
      if (dialogResponse) {
        this.scheduledTime = dialogResponse.scheduleTime;
        this.addNotificationHandler();
      }
    })
  }

  cancelHandler() {
    this._common.locationBack();
  }

  navigate(mssg?: string) {
    if (mssg) {
      this._toast.success(mssg);
    }
    this._common.navigate([NOTIFICATION]);
  }

}
