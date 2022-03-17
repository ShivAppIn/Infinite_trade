import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonService } from '../../../services/common/common.service';
import { StorageService } from '../../../services/storage/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  opened = true;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(public common: CommonService, public storage: StorageService) { }

  ngOnInit() {
    if (this.sidenav) {
      if (window.innerWidth < 1100) {
        this.sidenav.fixedTopGap = 56;
        this.opened = false;
      } else {
        this.sidenav.fixedTopGap = 64;
        this.opened = true;
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.sidenav) {
      if (event.target.innerWidth < 1100) {
        this.sidenav.fixedTopGap = 56;
        this.opened = false;
      } else {
        this.sidenav.fixedTopGap = 64;
        this.opened = true;
      }
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 1100) {
      return true;
    } else {
      return false;
    }
  }

  closeSideNav() {
    if (window.innerWidth < 1100) {
      this.opened = false;
    }
  }

}
