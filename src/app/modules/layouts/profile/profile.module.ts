import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import { AbsoluteRoutingModule } from '../../../pipes/absolute-routing/absolute-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ProfileService } from './_service/profile.service';
import { EDIT, CHANGE_PASSWORD, DETAILS } from '../../../constants/routes';

const inrRoutes: Routes = [
  {
    path: '', component: ProfileComponent, children: [
      { path: '', redirectTo: DETAILS, pathMatch: 'full' },
      { path: DETAILS, loadChildren: () => import('./pages/basic-details/basic-details.module').then(m => m.BasicDetailsModule) },
      { path: EDIT, loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfileModule) },
      { path: CHANGE_PASSWORD, loadChildren: () => import('./pages/change-password/change-password.module').then(m => m.ChangePasswordModule) }
    ]
  }
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    AbsoluteRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [ProfileService]
})
export class ProfileModule { }
