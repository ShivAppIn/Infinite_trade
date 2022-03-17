import { ROLES, SUB_ADMINS } from './../../../constants/routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesAndPermissionsComponent } from './roles-and-permissions.component';
import { TabsModule } from '../../../components/tabs/tabs.module';
import { RouterModule, Routes } from '@angular/router';
import { RolesAndPermissionService } from './_service/roles-and-permission.service';

const inrRoutes: Routes = [
  {
    path: '', component: RolesAndPermissionsComponent,
    children: [
      { path: '', redirectTo: ROLES, pathMatch: 'full' },
      {
        path: ROLES, loadChildren: () => import('./pages/roles/roles.module').then(m => m.RolesModule)
      },
      {
        path: SUB_ADMINS, loadChildren: () => import('./pages/sub-admins/sub-admins.module').then(m => m.SubAdminsModule)
      }
    ]
  }
];


@NgModule({
  declarations: [RolesAndPermissionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    TabsModule
  ],
  providers: [RolesAndPermissionService]
})
export class RolesAndPermissionsModule { }
