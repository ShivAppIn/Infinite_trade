import { Component, OnInit, VERSION } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastService } from 'src/app/components/toast-notification/toast.service';
import { UsersService } from '../../_service/users.service';

@Component({
  selector: 'app-add-edit-oem',
  templateUrl: './add-edit-oem.component.html',
  styleUrls: ['./add-edit-oem.component.scss'],
})
export class AddEditOemComponent implements OnInit {

  constructor(
    private _dialogRef: MatDialogRef<AddEditOemComponent>,
    private _user: UsersService,
    private _toaster: ToastService
  ) { }

  ngOnInit() {
  }


  close(){
   this._dialogRef.close();
  }

  version = VERSION;

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
    this._dialogRef.close();
  }

}
