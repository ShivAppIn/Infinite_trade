import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { checkSpaceAtStartEnd } from 'src/app/constants/helper';
import { REGEX } from 'src/app/constants/validators';
import { UsersService } from '../../_service/users.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss'],
})
export class AddEditUserComponent implements OnInit {
  addUserForm: FormGroup;
  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('email') emailRef: ElementRef;
 

  constructor(
    private _dialogRef: MatDialogRef<AddEditUserComponent>,
    private _fb: FormBuilder,
    private _user:UsersService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addUserForm = this._fb.group({
      fullName: ['', Validators.pattern(REGEX.NAME)],
      email: ['', [Validators.pattern(REGEX.EMAIL)]],
      password: ['', Validators.pattern(REGEX.PASSWORD)],
      contact: ['', Validators.pattern(REGEX.NUMBER)],
      company: ['', Validators.required],
      // deviceToken: [this._storage.deviceDetail(1)],
      // deviceId: [this._storage.deviceDetail(2)],
      // platform: [this._storage.deviceDetail(3)]
    });
  }

  get frmCtrl() { return this.addUserForm.controls; }


  addUser() {
    console.log(this.addUserForm)
    this.addUserValidation();
    if (this.addUserForm.valid) {
      this.confirmAddUser();
      this.close();
    }
  }

  confirmAddUser() {
    // for future refrence
  }

  addUserValidation() {
    if (!this.frmCtrl.email.valid) {
      this.emailRef.nativeElement.focus();
      return;
    }
    if (!this.frmCtrl.fullName.valid) {
      this.nameRef.nativeElement.focus();
      return;
    }
    if (checkSpaceAtStartEnd(this.frmCtrl.fullName.value)) {
      this.frmCtrl.fullName.setErrors({ space: true });
      this.nameRef.nativeElement.focus();
      return;
    }
  }


  close(){
    this._dialogRef.close();
  }
}
