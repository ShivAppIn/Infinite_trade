import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LazyImageModule } from '../../../../../components/lazy-image/lazy-image.module';
import { AbsoluteRoutingModule } from '../../../../../pipes/absolute-routing/absolute-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadImgModule } from '../../../../../components/upload-img/upload-img.module';
import { ItemBoxModule } from '../../../../../components/item-box/item-box.module';

const inrRoutes: Routes = [
  { path: '', component: EditProfileComponent }
];

@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    LazyImageModule,
    AbsoluteRoutingModule,
    ReactiveFormsModule,
    UploadImgModule,
    ItemBoxModule
  ]
})
export class EditProfileModule { }
