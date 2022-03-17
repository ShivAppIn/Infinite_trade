import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneSpaceBtwWordsDirective } from './one-space-btw-words.directive';

@NgModule({
  declarations: [OneSpaceBtwWordsDirective],
  imports: [
    CommonModule
  ],
  exports: [OneSpaceBtwWordsDirective]
})
export class OneSpaceBtwWordsModule { }
