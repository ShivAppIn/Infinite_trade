import { ShowPermissionsModule } from './../../../../../../../components/show-permissions/show-permissions.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditSubAdminsComponent } from './add-edit-sub-admins.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { PreventKeysModule } from '../../../../../../../directives/prevent-keys/prevent-keys.module';

const inrRoutes: Routes = [
  {
    path: '', component: AddEditSubAdminsComponent
  }
];

@NgModule({
  declarations: [AddEditSubAdminsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    ShowPermissionsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    PreventKeysModule
  ]
})
export class AddEditSubAdminsModule { }
