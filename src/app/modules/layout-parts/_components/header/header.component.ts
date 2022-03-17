import { Component, OnInit } from '@angular/core';
import { TITLE_CONFIRMATION, MSSG_CONFIRMATION } from '../../../../constants/messages';
import { MatDialog } from '@angular/material/dialog';
import { Renderer2 } from '@angular/core';
import { StorageService } from '../../../../services/storage/storage.service';
import { AccountService } from '../../../accounts/_services/account.service';
import { ConfirmationModalComponent } from '../../../../components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AccountService]
})
export class HeaderComponent implements OnInit {
  flag = true;

  constructor(
    private _dialog: MatDialog,
    public storage: StorageService,
    private _account: AccountService,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
  }

  sidebarCollaped() {
    if (this.flag === true) {
      this.renderer.addClass(document.body, "collapsed");
      this.renderer.addClass(document.body, "showing-icons-on-collapse"); /* For showing icons on sidebar collapsed*/
      this.flag = !this.flag;
    } else {
      this.renderer.removeClass(document.body, "collapsed");
      this.renderer.removeClass(document.body, "showing-icons-on-collapse"); /* For showing icons on sidebar collapsed*/
      this.flag = !this.flag;
    }
  }

  logoutHandler() {
    const dialog = this._dialog.open(ConfirmationModalComponent, {
      data: {
        title: TITLE_CONFIRMATION('Logout'),
        message: MSSG_CONFIRMATION('logout'),
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.confirmLogout();
      }
    })
  }

  confirmLogout() {
    this._account.logOut().subscribe(res => {
      this.storage.logout();
    })
  }


}
