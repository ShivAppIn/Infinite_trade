import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableRendererComponent } from './mat-table-renderer.component';
import { SearchRendererModule } from '../search-renderer/search-renderer.module';
import { TableService } from './table.service';
import { ConfirmationModalModule } from '../confirmation-modal/confirmation-modal.module';
import { FilterModule } from './filter/filter.module';
import { EmptyValueModule } from '../../pipes/empty-value/empty-value.module';
import { LazyImageModule } from '../lazy-image/lazy-image.module';
import { DataLoaderModule } from '../data-loader/data-loader.module';
import { RouterModule } from '@angular/router';
import { ResultNotFoundModule } from '../result-not-found/result-not-found.module';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { FormatStatusModule } from '../../pipes/format-status/format-status.module';

@NgModule({
  declarations: [MatTableRendererComponent],
  imports: [
    CommonModule,
    SearchRendererModule,
    RouterModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTooltipModule,
    MatSortModule,
    ConfirmationModalModule,
    ResultNotFoundModule,
    FilterModule,
    EmptyValueModule,
    LazyImageModule,
    MatButtonToggleModule,
    DataLoaderModule,
    MatMenuModule,
    FormatStatusModule,
  ],
  exports: [
    MatTableRendererComponent,
    CommonModule,
    SearchRendererModule,
    RouterModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTooltipModule,
    MatSortModule,
    ResultNotFoundModule,
    FilterModule,
    EmptyValueModule,
    LazyImageModule,
    MatButtonToggleModule,
    DataLoaderModule,
    MatMenuModule,
    FormatStatusModule
  ],
  providers: [TableService]
})
export class MatTableRendererModule { }
