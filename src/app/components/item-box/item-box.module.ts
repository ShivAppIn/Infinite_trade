import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemBoxComponent } from './item-box.component';
import { LazyImageModule } from '../lazy-image/lazy-image.module';

@NgModule({
  declarations: [ItemBoxComponent],
  imports: [
    CommonModule,
    LazyImageModule,
  ],
  exports: [
    ItemBoxComponent,
    LazyImageModule
  ],
})
export class ItemBoxModule { }
