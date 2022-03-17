import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphFilterComponent } from './graph-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [GraphFilterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [GraphFilterComponent]
})
export class GraphFilterModule { }
