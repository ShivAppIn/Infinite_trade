import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotComponent } from './forgot.component';
import { Routes, RouterModule } from '@angular/router';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { NumberModule } from '../../../../directives/number/number.module';
import { PreventKeysModule } from '../../../../directives/prevent-keys/prevent-keys.module';

const inrRoute: Routes = [
  { path: '', component: ForgotComponent }
];

@NgModule({
  declarations: [ForgotComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoute),
    AbsoluteRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    NumberModule,
    PreventKeysModule
  ]
})
export class ForgotModule { }
