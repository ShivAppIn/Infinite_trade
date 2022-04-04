import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TabsModule } from 'src/app/components/tabs/tabs.module';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from '../../../../../components/dialog/dialog.module';
import { MatTabsModule } from '@angular/material/tabs';
import { AddEditCompanyComponent } from './add-edit-company.component';
import { CompanyTeamsModule } from './pages/company-teams/company-teams.module';
import { AddEditCompModule } from './pages/add-edit-comp/add-edit-comp.module';



const inrRoutes: Routes = [
  { path: '', component: AddEditCompanyComponent }
];


@NgModule({
  declarations: [AddEditCompanyComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(inrRoutes),
    ReactiveFormsModule,
    MatAutocompleteModule,
    TabsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    DialogModule,
    MatTabsModule,
    CompanyTeamsModule,
    AddEditCompModule
  ]
})
export class AddEditCompanyModule { }
