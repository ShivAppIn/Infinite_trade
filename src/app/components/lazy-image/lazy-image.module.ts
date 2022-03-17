import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImageComponent } from './lazy-image.component';
import { LazyModule } from '../../directives/lazy/lazy.module';

@NgModule({
  declarations: [LazyImageComponent],
  imports: [
    CommonModule,
    LazyModule
  ],
  exports: [LazyImageComponent, LazyModule]
})
export class LazyImageModule { }
