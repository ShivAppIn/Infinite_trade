import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MAX_IMG_SELECTION_ERR, MAX_IMG_SELECTION } from '../../constants/messages';
import { ToastService } from '../toast-notification/toast.service';
import imageCompression from 'browser-image-compression';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.scss']
})
export class UploadImgComponent implements OnInit {
  @Input() showButtonHandler = true;
  @Input() isMultiSelection = true;
  @Input() textInfo = `You can select upto ${MAX_IMG_SELECTION} images, Max 2 MB size and supported JPEG, PNG, JPG only`;
  @Output() sendFiles = new EventEmitter();
  realFile: any;

  constructor(
    private _toast: ToastService,
  ) {
  }

  ngOnInit() {
  }

  async fileChangeEvent(event: any) {
    if (event.target.files.length <= 0) {
      return;
    }

    let filesAmount = event.target.files.length;
    if (filesAmount > MAX_IMG_SELECTION) {
      this.showMssg(MAX_IMG_SELECTION_ERR());
      return;
    }

    for (let findFile = 0; findFile < filesAmount; findFile++) {

      if (event.target.files[findFile].size < 5000) {
        this.showMssg('Please select more than 5 KB image');
        return;
      }

      if (event.target.files[findFile].size > 2000000) {
        this.showMssg('Please select image of less than 2 MB');
        return;
      }

      let typesOfImages = [];
      if (event.target.files[findFile].type !== "") {
        typesOfImages = event.target.files[findFile].type.split("/");
      }

      if (typesOfImages.length <= 0 || (typesOfImages[1].toLowerCase() !== "png" && typesOfImages[1].toLowerCase() !== "jpg" && typesOfImages[1].toLowerCase() !== "jpeg")) {
        this.showMssg('Uploaded file is not a valid image. Only JPG, PNG & JPEG files are allowed');
        return;
      }

    }
    this.realFile = event.target.files[0];
    this.selectedFile(event);
  }

  async selectedFile(event) {
    let base64UrlOfSelectedFiles = [];
    for (let i = 0; i < event.target.files.length; i++) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        base64UrlOfSelectedFiles.push(event.target.result);
      }
      reader.readAsDataURL(event.target.files[i]);
    }
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      const compressedFile = await imageCompression(this.realFile, options);
      this.sendFiles.emit({
        realFile: compressedFile, base64Url: base64UrlOfSelectedFiles[0]
      });
    } catch (error) {
      console.log(error);
    }
  }

  showMssg(mssg: string) {
    this._toast.error(mssg);
  }

}
