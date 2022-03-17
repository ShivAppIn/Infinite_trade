import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {
  constructor(
    private dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.dialogRef._containerInstance._config.width = '480px';
    this.dialogRef._containerInstance._config.autoFocus = false;
  }


  onNoClick(): void {
    this.dialogRef.close(false);
  }

  confirm() {
    this.dialogRef.close(true);
  }

}
