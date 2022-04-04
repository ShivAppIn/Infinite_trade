import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditUserComponent } from './add-edit-user.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { UploadImgModule } from 'src/app/components/upload-img/upload-img.module';
import { ItemBoxModule } from 'src/app/components/item-box/item-box.module';


const inrRoutes: Routes = [
  { path: '', component: AddEditUserComponent }
];


@NgModule({
  declarations: [AddEditUserComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(inrRoutes),
    ReactiveFormsModule,
    MatAutocompleteModule,
    UploadImgModule,
    ItemBoxModule
  ],
})
export class AddEditUserModule { }
