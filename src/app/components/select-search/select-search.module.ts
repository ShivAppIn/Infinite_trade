import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectSearchComponent } from './select-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SelectSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [SelectSearchComponent]
})
export class SelectSearchModule { }
