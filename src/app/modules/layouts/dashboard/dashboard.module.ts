import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardService } from './_service/dashboard.service';
import { UnderDevelopmentModule } from 'src/app/components/under-development/under-development.module';


const inrRoute: Routes = [
  {
    path: '', component: DashboardComponent  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoute),
    UnderDevelopmentModule
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
