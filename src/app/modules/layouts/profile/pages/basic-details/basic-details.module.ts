import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDetailsComponent } from './basic-details.component';
import { RouterModule, Routes } from '@angular/router';
import { AbsoluteRoutingModule } from '../../../../../pipes/absolute-routing/absolute-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { LazyImageModule } from '../../../../../components/lazy-image/lazy-image.module';
import { EmptyValueModule } from '../../../../../pipes/empty-value/empty-value.module';
import { ShowPermissionsModule } from '../../../../../components/show-permissions/show-permissions.module';

const inrRoutes: Routes = [
  { path: '', component: BasicDetailsComponent }
];

@NgModule({
  declarations: [BasicDetailsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(inrRoutes),
    AbsoluteRoutingModule,
    LazyImageModule,
    EmptyValueModule,
    ShowPermissionsModule
  ]
})
export class BasicDetailsModule { }
