import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { ResendEmailComponent } from './resend-email.component';
import { FormsModule } from '@angular/forms';

const inrRoute: Routes = [
  { path: '', component: ResendEmailComponent }
];

@NgModule({
  declarations: [ResendEmailComponent],
  imports: [
    CommonModule,
    AbsoluteRoutingModule,
    RouterModule.forChild(inrRoute),
    FormsModule
  ]
})
export class ResendEmailModule { }
