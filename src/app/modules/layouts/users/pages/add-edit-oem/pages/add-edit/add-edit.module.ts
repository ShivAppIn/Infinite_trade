import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditComponent } from './add-edit.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { UploadImgModule } from 'src/app/components/upload-img/upload-img.module';
import { ItemBoxModule } from 'src/app/components/item-box/item-box.module';


const inrRoutes: Routes = [
  { path: '', component: AddEditComponent }
];

@NgModule({
  declarations: [
    AddEditComponent
  ],
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
  exports:[AddEditComponent]
})
export class AddEditModule { }
