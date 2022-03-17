import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsComponent } from './cms.component';
import { Routes, RouterModule } from '@angular/router';
import { CmsService } from './_service/cms.service';
import { TERM_CONDITIONS, PRIVACY_POLICY, ABOUT_US, FAQ } from '../../../constants/routes';
import { TabsModule } from '../../../components/tabs/tabs.module';

const inrRoutes: Routes = [
  {
    path: '', component: CmsComponent,
    children: [
      { path: '', redirectTo: TERM_CONDITIONS, pathMatch: 'full' },
      {
        path: TERM_CONDITIONS, loadChildren: () => import('./pages/term-condition/term-condition.module').then(m => m.TermConditionModule)
      },
      {
        path: ABOUT_US, loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
      },
      {
        path: PRIVACY_POLICY, loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
      },
      {
        path: FAQ, loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqModule)
      }
    ]
  }
];

@NgModule({
  declarations: [CmsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inrRoutes),
    TabsModule
  ],
  providers: [CmsService]
})
export class CmsModule { }
