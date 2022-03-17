import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListingComponent } from './employees-listing.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonMatTableModule } from 'src/app/components/common-mat-table/common-mat-table.module';


const inrRoutes: Routes = [
  { path: '', component: EmployeesListingComponent }
];


@NgModule({
  declarations: [EmployeesListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    CommonMatTableModule,
  ]
})
export class EmployeesListingModule { }
