import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertPopupComponent } from './alert-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AlertPopupService } from './alert-popup.service';

@NgModule({
  declarations: [AlertPopupComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [AlertPopupComponent],
  providers: [AlertPopupService]
})
export class AlertPopupModule { }
