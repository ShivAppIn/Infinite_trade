import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Web Rcc App';
  onlineEvent: Observable<Event>;
  offlineEvent: Observable<Event>;
  subscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit() {
    this.chechStatus();
  }


  /**
   * @ONLINE_OFFLINE Get the online/offline status from browser window
   */
  chechStatus() {
    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');

    this.subscriptions.push(this.onlineEvent.subscribe(e => {
      window.location.reload();
    }));
    this.subscriptions.push(this.offlineEvent.subscribe(e => {
    }));
  }

}
