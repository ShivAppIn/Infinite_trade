import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { S3BucketService } from '../../../../../services/s3-bucket/s3-bucket.service';
import { ToastService } from '../../../../../components/toast-notification/toast.service';
import { CmsService } from '../../_service/cms.service';
import { LIMIT, REGEX } from '../../../../../constants/validators';
import { FAQ_ERROR_MESSAGES } from '../../../../../constants/messages';
import { dataURLtoFile } from '../../../../../constants/helper';

@Component({
  selector: 'app-add-edit-faq',
  templateUrl: './add-edit-faq.component.html',
  styleUrls: ['./add-edit-faq.component.scss']
})
export class AddEditFaqComponent implements OnInit {
  faqForm: FormGroup;
  _limit = LIMIT;
  errMsg = FAQ_ERROR_MESSAGES;

  constructor(
    public _dialogRef: MatDialogRef<AddEditFaqComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private _cms: CmsService,
    private _s3: S3BucketService,
    private _toast: ToastService) {
    this._dialogRef._containerInstance._config.width = '680px';
    this._dialogRef._containerInstance._config.autoFocus = false;
  }

  ngOnInit() {
    this.createForm();
    if (this.data.id == 1) {
      this.patchFaqData();
    }
  }

  createForm() {
    this.faqForm = this._fb.group({
      question: [''],
      answer: ['', Validators.required],
      position: [, [Validators.pattern(REGEX.AMOUNT)]],
    })
  }

  get f() { return this.faqForm.controls; } //return form controls

  async faqHandler() {
    if (this.faqForm.valid) {
      this.getQuilEditorImages(() => {
        let formValue = this.faqForm.value;
        formValue.position = Number(formValue.position);

        if (this.data.id == 0) {
          this.confirmAddFaq(formValue);
        } else {
          this.confirmEditFaq(formValue);
        }

      })
    } else {
      this.f.answer.markAsDirty();
    }
  }

  /**
  * @function getQuilEditorImages
  * @summary get images from editor and convert that base64 to image file by running a loop asynchronously and then make a api call
  * @param callback @returns confirm Going to API
  */
  async getQuilEditorImages(callback?) {

    const getQlEditor1: any = document.querySelectorAll('#ql-editor1 img');
    for (let find = 0; find < getQlEditor1.length; find++) {
      const currentBase64 = getQlEditor1[find].src;
      if (currentBase64.length > 500) {
        await this.fileReaderBase64ToFile(currentBase64).then(res => {
          getQlEditor1[find].src = res;
        });
      }
    }
    const getFullDom1 = document.getElementById("ql-editor1").innerHTML;
    this.f.answer.setValue(getFullDom1);

    callback(true);
  }

  /**
   * @function fileReaderBase64ToFile
   * @summary converting base64 to file
   * @param file base64 file got from editor
   */
  fileReaderBase64ToFile(file: any) {
    return new Promise((resolve, reject) => {
      dataURLtoFile(file, null, (result) => {
        this.uploadImage(result, function (imageURL) {
          resolve(imageURL)
        })
      })
    });
  }

  /**
   * @function uploadImage
   * @summary upload file to S3
   * @param file file to upload
   * @param callback @returns url recieved from S3
   */
  uploadImage(file: any, callback?) {
    this._s3.uploadFile(file).then((res: any) => {
      callback(res.Location);
    })
  }

  confirmAddFaq(formBody) {
    this._cms.addFaq(formBody).subscribe((response: any) => {
      this.closePopup(response);
    }, (error) => {
      if (error.statusCode == 401) {
        this.closePopup('', false);
      }
    })
  }

  confirmEditFaq(formBody) {
    if (!this.faqForm.dirty) {
      this._dialogRef.close(false);
      return
    }
    formBody['faqId'] = this.data.data._id;
    this._cms.updateFaq(formBody).subscribe((response: any) => {
      this.closePopup(response);
    }, (error) => {
      if (error.statusCode == 401) {
        this.closePopup('', false);
      }
    })
  }

  closePopup(response?, showMssg = true) {
    this._dialogRef.close({ isHitApi: showMssg ? true : false });
    if (showMssg) {
      this._toast.success(response.message);
    }
  }

  patchFaqData() {
    this.faqForm.patchValue(this.data.data);
  }

}
