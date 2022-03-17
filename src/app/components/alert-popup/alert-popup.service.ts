import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertPopupComponent } from './alert-popup.component';

@Injectable()
export class AlertPopupService {

  constructor(
    private _dialog: MatDialog,
    private _router: Router) { }

  popupBox( iconUrl, title?: string, message?: string, redirect?: any, btn?: string, showCrossBtn = false, queryParamInfo = {},isDisableClose = false) {
    const _dialog = this._dialog.open(AlertPopupComponent, {
      disableClose: isDisableClose,
      data: {
        showCrossBtn,
        iconUrl,
        title,
        message,
        btn
      }
    });
    _dialog.afterClosed().subscribe(result => {
      if (result) {
        if (btn == 'Login') localStorage.clear();
        this._router.navigate([redirect], { queryParams: queryParamInfo });
      }
    });
  }

}
