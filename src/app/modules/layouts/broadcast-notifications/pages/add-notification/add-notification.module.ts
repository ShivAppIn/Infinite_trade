import { MODULE_ID_OF } from './../../../../../constants/messages';
import { PreventAddEditGuard } from './../../../../../services/guards/prevent-add-edit/prevent-add-edit.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNotificationComponent } from './add-notification.component';
import { Routes, RouterModule } from '@angular/router';
import { SchedulerPopupComponent } from '../../_components/scheduler-popup/scheduler-popup.component';
import { NotificationService } from '../../_service/notification.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadImgModule } from '../../../../../components/upload-img/upload-img.module';
import { ItemBoxModule } from '../../../../../components/item-box/item-box.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatSelectModule } from '@angular/material/select';

const inrRoutes: Routes = [
  {
    path: '', component: AddNotificationComponent,
    canActivate: [PreventAddEditGuard],
    data: { moduleId: MODULE_ID_OF.BROADCAST_NOTIFICATIONS }
  }
];

@NgModule({
  declarations: [
    AddNotificationComponent,
    SchedulerPopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    UploadImgModule,
    ItemBoxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule
  ],
  providers: [NotificationService]
})
export class AddNotificationModule { }
