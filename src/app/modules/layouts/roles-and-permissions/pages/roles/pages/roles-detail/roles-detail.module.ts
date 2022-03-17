import { FormatStatusModule } from './../../../../../../../pipes/format-status/format-status.module';
import { DataLoaderModule } from './../../../../../../../components/data-loader/data-loader.module';
import { EmptyValueModule } from './../../../../../../../pipes/empty-value/empty-value.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesDetailComponent } from './roles-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { ShowPermissionsModule } from '../../../../../../../components/show-permissions/show-permissions.module';

const inrRoutes: Routes = [
  {
    path: '', component: RolesDetailComponent
  }
];

@NgModule({
  declarations: [RolesDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    ShowPermissionsModule,
    EmptyValueModule,
    DataLoaderModule,
    FormatStatusModule
  ]
})
export class RolesDetailModule { }
