import { DataLoaderModule } from './../../../../../../../components/data-loader/data-loader.module';
import { FormatStatusModule } from './../../../../../../../pipes/format-status/format-status.module';
import { EmptyValueModule } from './../../../../../../../pipes/empty-value/empty-value.module';
import { ShowPermissionsModule } from './../../../../../../../components/show-permissions/show-permissions.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubAdminsDetailComponent } from './sub-admins-detail.component';
import { Routes, RouterModule } from '@angular/router';

const inrRoutes: Routes = [
  {
    path: '', component: SubAdminsDetailComponent
  }
];

@NgModule({
  declarations: [SubAdminsDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    ShowPermissionsModule,
    EmptyValueModule,
    DataLoaderModule,
    FormatStatusModule
  ]
})
export class SubAdminsDetailModule { }
