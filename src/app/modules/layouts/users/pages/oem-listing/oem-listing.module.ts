import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OemListingComponent } from './oem-listing.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonMatTableModule } from 'src/app/components/common-mat-table/common-mat-table.module';

const inrRoutes: Routes = [
  { path: '', component: OemListingComponent }
];


@NgModule({
  declarations: [OemListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    CommonMatTableModule,

  ]
})
export class OemListingModule { }
