import { FUTURE_TIME, NOTIFICATION_ERROR_MESSAGES } from './../../../../../constants/messages';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pagination } from '../../../../../constants/pagination';
import { combineTimeWithDate, todayFormatDateWithTime } from '../../../../../constants/helper';
import { ToastService } from '../../../../../components/toast-notification/toast.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-scheduler-popup',
  templateUrl: './scheduler-popup.component.html',
  styleUrls: ['./scheduler-popup.component.scss']
})
export class SchedulerPopupComponent extends Pagination implements OnInit {
  schedulerForm: FormGroup;
  errMsg = NOTIFICATION_ERROR_MESSAGES;

  constructor(
    public _dialogRef: MatDialogRef<SchedulerPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private _toast: ToastService
  ) {
    super();
    this._dialogRef._containerInstance._config.autoFocus = false;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.schedulerForm = this._fb.group({
      date: [''],
      time: ['']
    })
  }

  get f() { return this.schedulerForm.controls } //return all form controls

  schedulerFormHandler() {
    if (this.schedulerForm.valid) {
      let formValue = this.schedulerForm.value;
      formValue.time = combineTimeWithDate(todayFormatDateWithTime(formValue.time), formValue.date);
      let selectedTime = new Date(formValue.time);
      if ((selectedTime.getTime()) < Date.now()) {
        this._toast.error(FUTURE_TIME);
        return;
      }
      this._dialogRef.close({ scheduleTime: formValue.time });
    }
    else {
      this.f.time.markAsTouched();
    }
  }

  close() {
    this._dialogRef.close();
  }

}
