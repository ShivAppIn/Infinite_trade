import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-notification-list',
  templateUrl: './common-notification-list.component.html',
  styleUrls: ['./common-notification-list.component.scss']
})
export class CommonNotificationListComponent implements OnInit {
  @Input() isListInMenu = false;
  @Input() notificationData: any;


  ngOnInit() {
    // might be needed in future
  }

}
