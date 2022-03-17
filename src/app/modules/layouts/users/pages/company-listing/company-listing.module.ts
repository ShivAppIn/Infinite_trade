import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListingComponent } from './company-listing.component';
import { CommonMatTableModule } from 'src/app/components/common-mat-table/common-mat-table.module';

const inrRoutes: Routes = [
  { path: '', component: CompanyListingComponent }
];


@NgModule({
  declarations: [CompanyListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    CommonMatTableModule,
  ]
})
export class CompanyListingModule { }
