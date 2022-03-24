import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { map} from 'rxjs/operators';
import { checkSpaceAtStartEnd } from 'src/app/constants/helper';
import { ACCOUNT_ERROR_MESSAGES } from 'src/app/constants/messages';
import { LIMIT, REGEX } from 'src/app/constants/validators';
import { UsersService } from '../../_service/users.service';
import { Pagination } from 'src/app/constants/pagination';
import { ToastService } from 'src/app/components/toast-notification/toast.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss'],
})
export class AddEditUserComponent extends Pagination implements OnInit,OnDestroy {
  addUserForm: FormGroup;
  @ViewChild('name') nameRef: ElementRef;

  errorMsg = ACCOUNT_ERROR_MESSAGES;
  queryObj = {};
  arrOfCompany = [];

  companySearch = new FormControl();
  filteredOptions: Observable<any[]>;
  subscripition: Subscription[] = []
 

  constructor(
    private _dialogRef: MatDialogRef<AddEditUserComponent>,
    private _fb: FormBuilder,
    private _user: UsersService,
    private _toaster: ToastService,
    private _common:CommonService
    
  ) {
    super();
  }

  ngOnInit() {
    this.createForm();
    this.filteredOptions = this.companySearch.valueChanges.pipe(
      map(value =>
        this._filter(value)),
    );
  }


  private _filter(val: string) {
    this.arrOfCompany=[]
    this.queryObj = {
      ...this.params,
      ...{searchKey:val},
    }
    if (val.length >= 1) {
      this.subscripition.push(this._user.companySearch(this.queryObj).subscribe((response => {
        this.arrOfCompany.push.apply(this.arrOfCompany, response.data);
        this.companyBoolean
      })))

      return this.arrOfCompany
    } else {
      return null
    }
   
  }

  createForm() {
    this.addUserForm = this._fb.group({
      name: ['', [Validators.pattern(REGEX.NAME),Validators.minLength(LIMIT.MIN_NAME_LENGTH),Validators.maxLength(LIMIT.MAX_NAME_LENGTH)]],
      email: ['', [Validators.pattern(REGEX.EMAIL)]],
      mobileNo: ['', [Validators.pattern(REGEX.NUMBER), Validators.minLength(LIMIT.MIN_MOBILE_LENGTH)]],
      companyIds: this._fb.array([],[Validators.required]),
    });
  }

  get companyBoolean() {
    if (this.arrOfCompany.length === 1 && this.arrOfCompany[0]?._id) {
      if (this.companySearch.value === this.arrOfCompany[0].businessName) {
        this.companyIds.push(this._fb.control(this.arrOfCompany[0]?._id));
        return true
      } else {
        this.companyIds.removeAt(0);
      }
    }
    if (!this.arrOfCompany.length) {
      this.companyIds.removeAt(0);
    }
  }

  get frmCtrl() { return this.addUserForm.controls; }

  get companyIds() {
    return this.addUserForm.controls['companyIds'] as FormArray;
  }

  addUser() {
    this.addUserValidation();
    if (this.addUserForm.valid) {
      this.confirmAddUser();
    }
  }

  confirmAddUser() {
    this.subscripition.push(this._user.addEmployee(this.addUserForm.value).subscribe((response) => {
      this._toaster.success(response.message);
      this._user._addEmployeeListing.next('true');
      this.close();
    }, (error) => {
      this._toaster.error(error?.message)
    }
    )
      
    )
  }


  addUserValidation() {
    if (checkSpaceAtStartEnd(this.frmCtrl.name.value)) {
      this.frmCtrl.fullName.setErrors({ space: true });
      this.nameRef.nativeElement.focus();
      return;
    }
  }


  close(){
    this._dialogRef.close();
  }

  ngOnDestroy() {
    if (this.subscripition.length) {
      this._common.unsubscribe(this.subscripition);
    }
  }
}
