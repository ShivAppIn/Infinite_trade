import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowPermissionsComponent } from './show-permissions.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ShowPermissionsComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [ShowPermissionsComponent]
})
export class ShowPermissionsModule { }
