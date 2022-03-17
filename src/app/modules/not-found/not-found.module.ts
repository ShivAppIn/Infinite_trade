import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

const inrRoutes: Routes = [
  { path: '', component: NotFoundComponent },
];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatIconModule
  ]
})
export class NotFoundModule { }
