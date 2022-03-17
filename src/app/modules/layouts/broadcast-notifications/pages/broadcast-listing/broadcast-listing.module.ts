import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BroadcastListingComponent } from './broadcast-listing.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableRendererModule } from '../../../../../components/mat-table-renderer/mat-table-renderer.module';
import { EmptyValueModule } from '../../../../../pipes/empty-value/empty-value.module';
import { ItemBoxModule } from '../../../../../components/item-box/item-box.module';
import { ConfirmationModalModule } from '../../../../../components/confirmation-modal/confirmation-modal.module';
import { NotificationService } from '../../_service/notification.service';
import { NotificationDetailsComponent } from '../../_components/notification-details/notification-details.component';

const inrRoutes: Routes = [
  { path: '', component: BroadcastListingComponent }
];

@NgModule({
  declarations: [
    BroadcastListingComponent,
    NotificationDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    ReactiveFormsModule,
    MatTableRendererModule,
    EmptyValueModule,
    ItemBoxModule,
    ConfirmationModalModule
  ],
  providers: [NotificationService]
})
export class BroadcastListingModule { }
