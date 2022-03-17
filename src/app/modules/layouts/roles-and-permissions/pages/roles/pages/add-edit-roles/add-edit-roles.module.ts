import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditRolesComponent } from './add-edit-roles.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PreventKeysModule } from '../../../../../../../directives/prevent-keys/prevent-keys.module';
import { MatCheckboxModule } from '@angular/material/checkbox';


const inrRoutes: Routes = [
  {
    path: '', component: AddEditRolesComponent
  }
];

@NgModule({
  declarations: [AddEditRolesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    PreventKeysModule,
    MatCheckboxModule
  ]
})
export class AddEditRolesModule { }
