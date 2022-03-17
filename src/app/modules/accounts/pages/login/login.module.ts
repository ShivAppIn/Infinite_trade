import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NumberModule } from '../../../../directives/number/number.module';
import { PreventKeysModule } from '../../../../directives/prevent-keys/prevent-keys.module';

const inrRoute: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoute),
    AbsoluteRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    NumberModule,
    PreventKeysModule
  ]
})
export class LoginModule { }
