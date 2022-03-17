import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpBoxComponent } from './otp-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberModule } from '../../directives/number/number.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [OtpBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    NumberModule
  ],
  exports: [OtpBoxComponent]
})
export class OtpBoxModule { }
