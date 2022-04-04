import { Component, OnInit, Input } from "@angular/core";
import { ABS_ADD_EDIT_OEM, ABS_OEM_TEAMS } from "src/app/constants/absolute-route";
import { TERM_CONDITIONS, PRIVACY_POLICY, ABOUT_US, FAQ, ROLES, SUB_ADMINS, COMPANY_LISTING, OEM_LISTING, EMPLOYEES_LISTING, OEM_TEAM_LISTING, ADD_OEM } from '../../constants/routes';

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit {
  @Input() tabName;
  @Input() userId;
  @Input() isIndividuallySubscribed = false;
  @Input() addEditOEM:any

  navLinks: any;


  ngOnInit() {
    this.showTabs();
  }

  showTabs() {
    switch (this.tabName) {
      case 'cmsTabs':
        this.navLinks = CMS_TAB_LINKS;
        break;

      case 'rolesAccessTabs':
        this.navLinks = ROLES_ACCESS_TAB_LINKS;
        break;
      
      case 'userManagementListing':
          this.navLinks = USERS_MANAGMENT_LISTING;
        break;
      default:
        break;
    }
  }
}

export const CMS_TAB_LINKS = [
  { path: TERM_CONDITIONS, label: "Terms & Conditions" },
  { path: PRIVACY_POLICY, label: "Privacy Policy" },
  { path: ABOUT_US, label: "About Us" },
  { path: FAQ, label: "FAQ's" }
]

export const ROLES_ACCESS_TAB_LINKS = [
  { path: ROLES, label: "Roles" },
  { path: SUB_ADMINS, label: "Sub Admins" },
]


export const USERS_MANAGMENT_LISTING = [
  { path: COMPANY_LISTING, label: "COMPANY" },
  { path: OEM_LISTING, label: "OEM" },
  { path: EMPLOYEES_LISTING, label: "EMPLOYEES" }
]

