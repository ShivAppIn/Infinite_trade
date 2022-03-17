import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditCompanyComponent } from './add-edit-company.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



const inrRoutes: Routes = [
  { path: '', component: AddEditCompanyComponent }
];


@NgModule({
  declarations: [AddEditCompanyComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(inrRoutes),
  ]
})
export class AddEditCompanyModule { }
