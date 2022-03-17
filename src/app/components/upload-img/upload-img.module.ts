import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImgComponent } from './upload-img.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UploadImgComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [UploadImgComponent]
})
export class UploadImgModule { }
