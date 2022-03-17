import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleListingComponent } from './role-listing.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableRendererModule } from '../../../../../../../components/mat-table-renderer/mat-table-renderer.module';

const inrRoutes: Routes = [
  {
    path: '', component: RoleListingComponent
  }
];

@NgModule({
  declarations: [RoleListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    ReactiveFormsModule,
    MatTableRendererModule
  ]
})
export class RoleListingModule { }
