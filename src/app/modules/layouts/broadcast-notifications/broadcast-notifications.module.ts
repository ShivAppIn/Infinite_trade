import { ADD } from 'src/app/constants/routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BroadcastNotificationsComponent } from './broadcast-notifications.component';
import { RouterModule, Routes } from '@angular/router';

const inrRoutes: Routes = [
  {
    path: '', component: BroadcastNotificationsComponent, children: [
      { path: '', loadChildren: () => import('./pages/broadcast-listing/broadcast-listing.module').then(m => m.BroadcastListingModule) },
      { path: ADD, loadChildren: () => import('./pages/add-notification/add-notification.module').then(m => m.AddNotificationModule) },
    ]
  }
]

@NgModule({
  declarations: [
    BroadcastNotificationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes)
  ]
})
export class BroadcastNotificationsModule { }
