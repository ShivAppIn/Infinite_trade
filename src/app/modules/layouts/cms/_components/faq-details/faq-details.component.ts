import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DATE_TYPES } from '../../../../../constants/messages';

@Component({
  selector: 'app-faq-details',
  templateUrl: './faq-details.component.html',
  styleUrls: ['./faq-details.component.scss']
})
export class FaqDetailsComponent implements OnInit {
  dateType = DATE_TYPES;

  constructor(
    public _dialogRef: MatDialogRef<FaqDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this._dialogRef._containerInstance._config.width = '650px';
    this._dialogRef._containerInstance._config.autoFocus = false;
  }

  ngOnInit() {
  }

}
