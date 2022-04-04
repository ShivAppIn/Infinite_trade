import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditCompComponent } from './add-edit-comp.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TabsModule } from 'src/app/components/tabs/tabs.module';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'src/app/components/dialog/dialog.module';
import { RouterModule, Routes } from '@angular/router';
import { UploadImgModule } from 'src/app/components/upload-img/upload-img.module';
import { ItemBoxModule } from 'src/app/components/item-box/item-box.module';

const inrRoutes: Routes = [
  { path: '', component: AddEditCompComponent }
];

@NgModule({
  declarations: [
    AddEditCompComponent
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
    TabsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    DialogModule,
    UploadImgModule,
    ItemBoxModule
  ],
  exports:[AddEditCompComponent]
})
export class AddEditCompModule { }
