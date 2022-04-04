import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { map} from 'rxjs/operators';
import { checkSpaceAtStartEnd } from 'src/app/constants/helper';
import { ACCOUNT_ERROR_MESSAGES, MAX_USER_IMAGE_SELECTION } from 'src/app/constants/messages';
import { LIMIT, REGEX } from 'src/app/constants/validators';
import { UsersService } from '../../_service/users.service';
import { Pagination } from 'src/app/constants/pagination';
import { ToastService } from 'src/app/components/toast-notification/toast.service';
import { CommonService } from 'src/app/services/common/common.service';
import { S3BucketService } from 'src/app/services/s3-bucket/s3-bucket.service';

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
  pictures:any =[]
  maxUserImageSelection = MAX_USER_IMAGE_SELECTION;
  

  constructor(
    private _dialogRef: MatDialogRef<AddEditUserComponent>,
    private _fb: FormBuilder,
    private _user: UsersService,
    private _toaster: ToastService,
    private _common: CommonService,
    private _s3:S3BucketService, 
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
        this.companyBoolean()
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
      companyIds: this._fb.array([], [Validators.required]),
      profilePicture:['']
    });
  }

companyBoolean() {
    if (this.arrOfCompany.length === 1 && this.arrOfCompany[0]?._id) {
      if (this.companySearch.value === this.arrOfCompany[0].businessName) {
        this.companyIds.push(this._fb.control(this.arrOfCompany[0]?._id));
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

  async addUser() {
    let formValue = this.addUserForm.value;
    if (this.pictures) {
      for (let i = 0; i < this.pictures.length; i++) {
        await this.uploadImage(this.pictures[i]['realFile'], formValue );
      }
    }
    this.addUserValidation();
    if (this.addUserForm.valid) {
      this.confirmAddUser();
    }
  }

  confirmAddUser() {
    console.log('fv', this.addUserForm.value);
    this.subscripition.push(this._user.addEmployee(this.addUserForm.value).subscribe((response) => {
      this._toaster.success(response.message);
      this._user._addEmployeeListing.next('true');
      this.close();
    }, (error) => {
      this._toaster.error(error?.message)
    }
    ))
  }

  uploadImage(selectedFile, formValue) {
    return new Promise((resolve, reject) => {
      this._s3.uploadFile(selectedFile).then((response: any) => {
        if (response && response.Location) {
          formValue.profilePicture = response.Location;
          resolve(true);
        }
      }, (error) => {
        reject(error);
      })
    })
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

 async getSelectedFile(selectedFile) {
    for (let index = 0; index < this.pictures.length; index++) {
      if (selectedFile.base64Url == this.pictures[index].base64Url) {
        //this._toast.error(FILE_EXIST);
        return;
      }
    }
    //this.frmCtrlVessel.images['controls']['imageUrl'].markAsDirty();
    //console.log(selectedFile)
    this.pictures.push(selectedFile);
    // if(this.data && !this.data.imageUrl){
    //   this.data['imageUrl'] = this.boatPicture[0].base64Url;
    // }
  }

  getCurrentIndex(currentIndex: number) {
    if (this.pictures.length > 0) {
      this.pictures.splice(currentIndex, 1);
    }
  }

  ngOnDestroy() {
    if (this.subscripition.length) {
      this._common.unsubscribe(this.subscripition);
    }
  }
}
