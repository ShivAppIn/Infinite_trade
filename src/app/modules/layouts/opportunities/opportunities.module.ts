import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunitiesComponent } from './opportunities.component';
import { RouterModule, Routes } from '@angular/router';
import { UnderDevelopmentModule } from 'src/app/components/under-development/under-development.module';



const inrRoute: Routes = [
  {
    path: '', component: OpportunitiesComponent  }
];

@NgModule({
  declarations: [OpportunitiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoute),
    UnderDevelopmentModule
  ]
})
export class OpportunitiesModule { }
