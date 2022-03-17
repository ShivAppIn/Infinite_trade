import { ADD, EDIT } from './../../../../../constants/routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { RouterModule, Routes } from '@angular/router';

const inrRoutes: Routes = [
  {
    path: '', component: RolesComponent, children: [
      { path: '', loadChildren: () => import('./pages/role-listing/role-listing.module').then(m => m.RoleListingModule) },
      { path: ADD, loadChildren: () => import('./pages/add-edit-roles/add-edit-roles.module').then(m => m.AddEditRolesModule) },
      { path: `${EDIT}/:roleId`, loadChildren: () => import('./pages/add-edit-roles/add-edit-roles.module').then(m => m.AddEditRolesModule) },
      { path: ':roleId', loadChildren: () => import('./pages/roles-detail/roles-detail.module').then(m => m.RolesDetailModule) }
    ]
  }
];

@NgModule({
  declarations: [RolesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes)
  ]
})
export class RolesModule { }
