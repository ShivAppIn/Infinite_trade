import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditOemComponent } from './add-edit-oem.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

const inrRoutes: Routes = [
  { path: '', component: AddEditOemComponent }
];


@NgModule({
  declarations: [AddEditOemComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    RouterModule.forChild(inrRoutes),
  ],
})
export class AddEditOemModule { }
