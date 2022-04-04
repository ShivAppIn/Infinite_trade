import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyTeamsComponent } from './company-teams.component';
import { RouterModule, Routes } from '@angular/router';

const inrRoutes: Routes = [
  { path: '', component: CompanyTeamsComponent }
];

@NgModule({
  declarations: [
    CompanyTeamsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
  ],
  exports:[CompanyTeamsComponent]
})
export class CompanyTeamsModule { }
