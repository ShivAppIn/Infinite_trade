import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonNotificationListComponent } from './common-notification-list.component';
import { LazyImageModule } from '../lazy-image/lazy-image.module';
import { EmptyValueModule } from '../../pipes/empty-value/empty-value.module';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  declarations: [CommonNotificationListComponent],
  imports: [
    CommonModule,
    LazyImageModule,
    EmptyValueModule,
    TimeagoModule.forRoot()
  ],
  exports: [CommonNotificationListComponent]
})
export class CommonNotificationListModule { }
