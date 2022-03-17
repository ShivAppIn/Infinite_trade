import { DATE_TYPES } from './../../../../../constants/messages';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NOTIFICATION_STATUS } from '../../../../../constants/messages';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.scss']
})
export class NotificationDetailsComponent implements OnInit {

  dateType = DATE_TYPES;
  notifStatus = NOTIFICATION_STATUS;
  constructor(
    public _dialogRef: MatDialogRef<NotificationDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this._dialogRef._containerInstance._config.autoFocus = false;
  }

  ngOnInit() {
  }

}
