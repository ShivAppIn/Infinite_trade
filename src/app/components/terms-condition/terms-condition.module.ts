import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { TermsConditionComponent } from './terms-condition.component';
import { MatListModule } from '@angular/material/list';

const inrRoute: Routes = [
  { path: '', component:  TermsConditionComponent}
];


@NgModule({
  declarations: [TermsConditionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoute),
    AbsoluteRoutingModule,
    MatListModule
  ]
})
export class TermsConditionModule { }
