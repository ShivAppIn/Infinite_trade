import { FormatStatusModule } from './../../pipes/format-status/format-status.module';
import { MatTableService } from './mat-table-service.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonMatTableComponent } from './common-mat-table.component';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [CommonMatTableComponent],
  imports: [
    CommonModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
    MatRippleModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    FormatStatusModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  exports: [
    CommonMatTableComponent,
    CommonModule,
    MatOptionModule,
    MatSelectModule,
    MatRippleModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormatStatusModule
  ],
  providers: [
    MatTableService
  ]
})
export class CommonMatTableModule { }
