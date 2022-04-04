import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditOemComponent } from './add-edit-oem.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TabsModule } from 'src/app/components/tabs/tabs.module';
import {MatDialogModule} from '@angular/material/dialog';
import { TeamsModule } from './pages/teams/teams.module';
import { AddEditModule } from './pages/add-edit/add-edit.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from '../../../../../components/dialog/dialog.module';
import { MatTabsModule } from '@angular/material/tabs';

const inrRoutes: Routes = [
  { path: '', component: AddEditOemComponent
}
];


@NgModule({
  declarations: [AddEditOemComponent],
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
    TeamsModule,
    AddEditModule,
    BrowserAnimationsModule,
    DialogModule,
    MatTabsModule
  ],
})
export class AddEditOemModule { }
