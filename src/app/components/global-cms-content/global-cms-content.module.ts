import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { DataLoaderModule } from '../data-loader/data-loader.module';
import { ResultNotFoundModule } from '../result-not-found/result-not-found.module';
import { SafeModule } from '../../pipes/safe/safe.module';
import { GlobalCmsContentComponent } from './global-cms-content.component';

@NgModule({
  declarations: [GlobalCmsContentComponent],
  imports: [
    CommonModule,
    DataLoaderModule,
    ResultNotFoundModule,
    SafeModule,
    MatExpansionModule,
  ],
  exports: [GlobalCmsContentComponent]
})
export class GlobalCmsContentModule { }
