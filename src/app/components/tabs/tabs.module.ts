import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule
  ],
  exports: [TabsComponent]
})
export class TabsModule { }
