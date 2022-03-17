import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ResetComponent } from './reset.component';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';

const inrRoute: Routes = [
  { path: '', component: ResetComponent }
];

@NgModule({
  declarations: [ResetComponent],
  imports: [
    CommonModule,
    AbsoluteRoutingModule,
    RouterModule.forChild(inrRoute),
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class ResetModule { }
