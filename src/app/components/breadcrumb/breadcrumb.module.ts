import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbService } from './breadcrumb.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [BreadcrumbComponent],
  providers: [BreadcrumbService]
})
export class BreadcrumbModule { }
