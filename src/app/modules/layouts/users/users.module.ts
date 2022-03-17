import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TabsModule } from 'src/app/components/tabs/tabs.module';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { SearchRendererModule } from 'src/app/components/search-renderer/search-renderer.module';

import {  ADD_EDIT_COMPANY, ADD_EDIT_OEM, ADD_EDIT_USERS, COMPANY_LISTING, EMPLOYEES_LISTING, OEM_LISTING } from 'src/app/constants/routes';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UsersComponent } from './users.component';
import { UsersService } from './_service/users.service';

const inrRoute: Routes = [
  {
    path: '', component: UsersComponent, children: [
      { path: '', redirectTo: EMPLOYEES_LISTING },
      { path: OEM_LISTING, loadChildren: () => import('../users/pages/oem-listing/oem-listing.module').then(m => m.OemListingModule) },
      { path: EMPLOYEES_LISTING, loadChildren: () => import('../users/pages/employees-listing/employees-listing.module').then(m => m.EmployeesListingModule) },
      { path: COMPANY_LISTING, loadChildren: () => import('../users/pages/company-listing/company-listing.module').then(m => m.CompanyListingModule) },
       { path: ADD_EDIT_USERS, loadChildren: () => import('../users/pages/add-edit-user/add-edit-user.module').then(m => m.AddEditUserModule) },
      { path: ADD_EDIT_OEM, loadChildren: () => import('../users/pages/add-edit-oem/add-edit-oem.module').then(m => m.AddEditOemModule) },
      { path: ADD_EDIT_COMPANY, loadChildren: () => import('../users/pages/add-edit-company/add-edit-company.module').then(m => m.AddEditCompanyModule) }

    ]
  }
];

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoute),
    AbsoluteRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    SearchRendererModule,
    TabsModule,
    MatFormFieldModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
