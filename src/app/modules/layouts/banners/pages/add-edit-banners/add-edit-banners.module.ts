import { PreventAddEditGuard } from './../../../../../services/guards/prevent-add-edit/prevent-add-edit.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditBannersComponent } from './add-edit-banners.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UploadImgModule } from '../../../../../components/upload-img/upload-img.module';
import { ItemBoxModule } from '../../../../../components/item-box/item-box.module';
import { SafeModule } from '../../../../../pipes/safe/safe.module';
import { QuillModule } from 'ngx-quill';
import { MODULE_ID_OF } from '../../../../../constants/messages';

const inrRoutes: Routes = [
  {
    path: '', component: AddEditBannersComponent,
    canActivate: [PreventAddEditGuard],
    data: { moduleId: MODULE_ID_OF.BANNERS }
  }
];

@NgModule({
  declarations: [AddEditBannersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    UploadImgModule,
    ItemBoxModule,
    SafeModule,
    QuillModule.forRoot()
  ]
})
export class AddEditBannersModule { }
