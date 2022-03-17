import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SearchRendererComponent } from 'src/app/components/search-renderer/search-renderer.component';
import { BUTTON_TEXT } from 'src/app/constants/messages';
import {
  COMPANY_LISTING,
  EMPLOYEES_LISTING,
  OEM_LISTING,
} from 'src/app/constants/routes';
import { BreadcrumbService } from '../../../components/breadcrumb/breadcrumb.service';
import { AddEditCompanyComponent } from '../users/pages/add-edit-company/add-edit-company.component';
import { AddEditOemComponent } from '../users/pages/add-edit-oem/add-edit-oem.component';
import { AddEditUserComponent } from '../users/pages/add-edit-user/add-edit-user.component';
import { UsersService } from './_service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild(SearchRendererComponent)
  searchRendererComponentRef: SearchRendererComponent;
  buttonText = BUTTON_TEXT.EMPLOYEES;
  currRoute: string;
  searchdata:any

  constructor(
    private _dialog: MatDialog,
    private _bc: BreadcrumbService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _user:UsersService
  ) {
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currRoute = event.url;
        this.setButtonText();
      });
  }

  ngOnInit() {
    this._bc.setBreadcrumb(null);
    this.currRoute = this._router.url;
    this.setButtonText();
  }

  addNewUser() {
    if (this.currRoute.includes(EMPLOYEES_LISTING)) {
      this._dialog.open(AddEditUserComponent);
    }
    if (this.currRoute.includes(OEM_LISTING)) {
      this._dialog.open(AddEditOemComponent);
    }
    if (this.currRoute.includes(COMPANY_LISTING)) {
      this._dialog.open(AddEditCompanyComponent);

    }
  }

  searchCriteria($event) {
    this.searchdata = '';
    this.searchdata = $event;
    this._user._searchSubject.next(this.searchdata);
  }

  setButtonText() {
    if (this.currRoute.includes(EMPLOYEES_LISTING)) {
      this.buttonText = BUTTON_TEXT.EMPLOYEES;
    }
    if (this.currRoute.includes(OEM_LISTING)) {
      this.buttonText = BUTTON_TEXT.OEM;
    }
    if (this.currRoute.includes(COMPANY_LISTING)) {
      this.buttonText = BUTTON_TEXT.COMPANY;
    }
  }
}
