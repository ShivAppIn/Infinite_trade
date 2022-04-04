import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ToastService } from 'src/app/components/toast-notification/toast.service';
import {
  ACCOUNT_ERROR_MESSAGES,
  Location,
  MAX_USER_IMAGE_SELECTION,
} from 'src/app/constants/messages';
import { LIMIT, REGEX } from 'src/app/constants/validators';
import { UsersService } from '../../../../_service/users.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
  addOemForm: FormGroup;
  subscripition: Subscription[] = [];
  errorMsg = ACCOUNT_ERROR_MESSAGES;

  options = Location;
  locationSearch = new FormControl();
  filteredOptions: Observable<any>;
  filterValues: any;
  maxUserImageSelection = MAX_USER_IMAGE_SELECTION;
  pictures = [];

  constructor(
    private _fb: FormBuilder,
    private _user: UsersService,
    private _toaster: ToastService
  ) {}

  ngOnInit() {
    this.createForm();
    this.filteredOptions = this.locationSearch.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    this.filterValues = this.options.filter((option) =>
      option.address.toLowerCase().includes(filterValue)
    );
    this.addLocationValues();
    return this.filterValues;
  }

  addLocationValues() {
    if (this.filterValues.length === 1 && this.filterValues[0]?.address) {
      if (this.locationSearch.value == this.filterValues[0].address) {
        this.cordinate.push(
          this._fb.control(this.filterValues[0]?.coordinates[0])
        );
        this.cordinate.push(
          this._fb.control(this.filterValues[0]?.coordinates[1])
        );
        this.addOemForm.controls['location']['controls']['address'].patchValue(
          this.filterValues[0]?.address
        );
      } else {
        this.addOemForm.controls['location']['controls']['address'].patchValue(
          ''
        );
        this.cordinate?.removeAt(0);
      }
    }
    if (!this.filterValues?.length) {
      this.frmCtrl['location']['controls']['address'].patchValue('');
      this.cordinate.removeAt(0);
    }
  }

  get cordinate() {
    return this.addOemForm.controls['location']['controls'][
      'coordinates'
    ] as FormArray;
  }

  createForm() {
    this.addOemForm = this._fb.group({
      name: [
        '',
        [
          Validators.pattern(REGEX.BUSINESS_NAME),
          Validators.minLength(LIMIT.MIN_NAME_LENGTH),
          Validators.maxLength(LIMIT.MAX_BUSINESS_NAME),
        ],
      ],
      email: ['', [Validators.pattern(REGEX.EMAIL)]],
      location: this._fb.group({
        address: ['', Validators.required],
        coordinates: this._fb.array([], [Validators.required]),
      }),
    });
  }

  get frmCtrl() {
    return this.addOemForm.controls;
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

  addOem() {
    if (this.addOemForm.valid) {
      this.confirmAddOem();
    }
  }

  confirmAddOem() {
    this.subscripition.push(
      this._user.addOem(this.addOemForm.value).subscribe(
        (response) => {
          this._toaster.success(response.message);
          this._user._addOEMListing.next('true');
        },
        (error) => {
          this._toaster.error(error?.message);
        }
      )
    );
  }
}
