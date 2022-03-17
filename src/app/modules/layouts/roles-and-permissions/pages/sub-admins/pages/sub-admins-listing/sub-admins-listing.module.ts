import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubAdminsListingComponent } from './sub-admins-listing.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableRendererModule } from '../../../../../../../components/mat-table-renderer/mat-table-renderer.module';

const inrRoutes: Routes = [
  {
    path: '', component: SubAdminsListingComponent
  }
];

@NgModule({
  declarations: [SubAdminsListingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    ReactiveFormsModule,
    MatTableRendererModule
  ]
})
export class SubAdminsListingModule { }
