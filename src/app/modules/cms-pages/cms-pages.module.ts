import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsPagesComponent } from './cms-pages.component';
import { Routes, RouterModule } from '@angular/router';
import { GlobalCmsContentModule } from '../../components/global-cms-content/global-cms-content.module';

const inrRoutes: Routes = [
  { path: '', component: CmsPagesComponent },
];

@NgModule({
  declarations: [CmsPagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    GlobalCmsContentModule
  ]
})
export class CmsPagesModule { }
