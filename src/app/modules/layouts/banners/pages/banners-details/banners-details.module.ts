import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersDetailsComponent } from './banners-details.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { EmptyValueModule } from '../../../../../pipes/empty-value/empty-value.module';
import { DataLoaderModule } from '../../../../../components/data-loader/data-loader.module';
import { MatIconModule } from '@angular/material/icon';
import { ItemBoxModule } from '../../../../../components/item-box/item-box.module';
import { FormatStatusModule } from '../../../../../pipes/format-status/format-status.module';

const inrRoutes: Routes = [
  {
    path: '', component: BannersDetailsComponent
  }
];

@NgModule({
  declarations: [BannersDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    MatButtonModule,
    EmptyValueModule,
    DataLoaderModule,
    MatIconModule,
    ItemBoxModule,
    FormatStatusModule
  ]
})
export class BannersDetailsModule { }
