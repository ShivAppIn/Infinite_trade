import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../services/storage/storage.service';
import { CommonService } from '../../../../services/common/common.service';
import { MSSG_CONFIRMATION, TITLE_CONFIRMATION } from 'src/app/constants/messages';
import { ConfirmationModalComponent } from 'src/app/components/confirmation-modal/confirmation-modal.component';
import { AccountService } from 'src/app/modules/accounts/_services/account.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  constructor(
    public storage: StorageService,
    private _dialog: MatDialog,
    private _common: CommonService,
    private _account:AccountService
  ) { }

  
  ngOnInit() {
    // might be needed in future
  }

  logoutHandler() {
    const dialog = this._dialog.open(ConfirmationModalComponent, {
      data: {
        title: TITLE_CONFIRMATION('Logout'),
        message: MSSG_CONFIRMATION('logout'),
        btn1: 'Logout',
        btn2: 'Cancel'
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

  underDevelopment() {
    this._common.underDevelopmentToast();
  }

}
