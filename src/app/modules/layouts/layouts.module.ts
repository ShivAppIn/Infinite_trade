import { ViewPermissionGuard } from './../../services/guards/view-permission/view-permission.guard';
import { PreventSubAdminGuard } from './../../services/guards/prevent-sub-admin/prevent-sub-admin.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { httpInterceptorProviders } from '../../services/interceptor/index';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../layout-parts/_components/header/header.component';
import { SidebarComponent } from '../layout-parts/_components/sidebar/sidebar.component';
import { AbsoluteRoutingModule } from '../../pipes/absolute-routing/absolute-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { DASHBOARD, PROFILE, CMS, NOTIFICATION, BANNERS, ROLES_ACCESS, USERS, OPPORTUNITIES } from '../../constants/routes';
import { ConfirmationModalModule } from '../../components/confirmation-modal/confirmation-modal.module';
import { BreadcrumbModule } from '../../components/breadcrumb/breadcrumb.module';
import { MatBadgeModule } from '@angular/material/badge';
import { LazyImageModule } from '../../components/lazy-image/lazy-image.module';
import { CommonNotificationListModule } from 'src/app/components/common-notification-list/common-notification-list.module';
import { MODULE_ID_OF } from '../../constants/messages';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AccountService } from '../accounts/_services/account.service';
import { UsersComponent } from './users/users.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';

const inrRoutes: Routes = [
  {
    path: '', component: LayoutsComponent, children: [
      { path: '', redirectTo: DASHBOARD, pathMatch: 'full' },
      {
        path: DASHBOARD,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: USERS,
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },

      {
        path: OPPORTUNITIES,
        loadChildren: () => import('./opportunities/opportunities.module').then(m => m.OpportunitiesModule)
      },
      {
        path: PROFILE,
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: BANNERS,
        loadChildren: () => import('./banners/banners.module').then(m => m.BannersModule),
        canActivate: [ViewPermissionGuard],
        data: { moduleId: MODULE_ID_OF.BANNERS }
      },
      {
        path: NOTIFICATION,
        loadChildren: () => import('./broadcast-notifications/broadcast-notifications.module').then(m => m.BroadcastNotificationsModule),
        canActivate: [ViewPermissionGuard],
        data: { moduleId: MODULE_ID_OF.BROADCAST_NOTIFICATIONS }
      },
      {
        path: ROLES_ACCESS,
        loadChildren: () => import('./roles-and-permissions/roles-and-permissions.module').then(m => m.RolesAndPermissionsModule),
        canActivate: [PreventSubAdminGuard]
      },
      {
        path: CMS,
        loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule),
        canActivate: [ViewPermissionGuard],
        data: { moduleId: MODULE_ID_OF.CMS }
      },
    ]
  }
];

@NgModule({
  declarations: [LayoutsComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    AbsoluteRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    ConfirmationModalModule,
    BreadcrumbModule,
    MatBadgeModule,
    LazyImageModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonNotificationListModule
  ],
  providers: [httpInterceptorProviders,AccountService]
})
export class LayoutsModule { }
