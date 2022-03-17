import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

const inrRoutes: Routes = [
  { path: '', component: ChangePasswordComponent }
];

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class ChangePasswordModule { }
