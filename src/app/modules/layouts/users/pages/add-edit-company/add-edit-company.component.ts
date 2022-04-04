import { Component, OnInit, VERSION } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastService } from 'src/app/components/toast-notification/toast.service';
import { UsersService } from '../../_service/users.service';

@Component({
  selector: 'app-add-edit-company',
  templateUrl: './add-edit-company.component.html',
  styleUrls: ['./add-edit-company.component.scss']
})
export class AddEditCompanyComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<AddEditCompanyComponent>,
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
