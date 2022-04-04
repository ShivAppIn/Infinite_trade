import {
  Component,
  Input,
  TemplateRef,
  ViewChild,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { Subscription } from 'rxjs';

@Component({
  selector: 'zps-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: [ './dialog.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
  dialog: MatDialogRef<any>;
  afterClosedSubscription: Subscription;
  afterOpenedSubscription: Subscription;

  @Input()
  autoFocus = true;

  @Output()
  close = new EventEmitter<void>();

  @Output()
  afterOpen = new EventEmitter<void>();

  @ViewChild('ref')
  templateRef: TemplateRef<any>;

  @Input()
  set open(v: boolean) {
    if (v === true) {
      setTimeout(() => {
        this.dialog = this._dialog.open(this.templateRef, {
          disableClose: true,
          autoFocus: this.autoFocus
        });

        this.afterClosedSubscription = this.dialog.afterClosed().subscribe(() => {
          this.close.emit();
        });

        this.afterOpenedSubscription = this.dialog.afterOpened().subscribe(() => {
          this.afterOpen.emit();
        });
      });
    } else if (this.dialog) {
      this.dialog.close();
      this.afterClosedSubscription.unsubscribe();
      this.afterOpenedSubscription.unsubscribe();
    }
  }

  constructor(private _dialog: MatDialog) { }

}
