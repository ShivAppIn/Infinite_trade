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

const inrRoutes: Routes = [
  { path: '', component: AddEditOemComponent }
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
  ],
})
export class AddEditOemModule { }
