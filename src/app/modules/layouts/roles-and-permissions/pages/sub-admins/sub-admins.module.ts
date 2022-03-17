import { ADD, EDIT } from './../../../../../constants/routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubAdminsComponent } from './sub-admins.component';
import { RouterModule, Routes } from '@angular/router';

const inrRoutes: Routes = [
  {
    path: '', component: SubAdminsComponent, children: [
      { path: '', loadChildren: () => import('./pages/sub-admins-listing/sub-admins-listing.module').then(m => m.SubAdminsListingModule) },
      { path: ADD, loadChildren: () => import('./pages/add-edit-sub-admins/add-edit-sub-admins.module').then(m => m.AddEditSubAdminsModule) },
      { path: `${EDIT}/:subAdminId`, loadChildren: () => import('./pages/add-edit-sub-admins/add-edit-sub-admins.module').then(m => m.AddEditSubAdminsModule) },
      { path: ':subAdminId', loadChildren: () => import('./pages/sub-admins-detail/sub-admins-detail.module').then(m => m.SubAdminsDetailModule) }
    ]
  }
];

@NgModule({
  declarations: [SubAdminsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes)
  ]
})
export class SubAdminsModule { }
