import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'aa-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.scss']
})
export class AlertPopupComponent implements OnInit {

  constructor(private _dialogRef: MatDialogRef<AlertPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  submit(info: boolean) {
    this._dialogRef.close(info);
  }

}
