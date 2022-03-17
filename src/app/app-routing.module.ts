import { AuthGuard } from './services/guards/auth-guard/auth-guard.guard';
import { LogInGuard } from './services/guards/log-in/log-in.guard';
import { NgModule } from '@angular/core';
import { ACCOUNT, TERM_CONDITIONS, PRIVACY_POLICY, ABOUT_US, FAQ } from './constants/routes';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: ACCOUNT, pathMatch: 'full' },
  { path: ACCOUNT, loadChildren: () => import('./modules/accounts/accounts.module').then(m => m.AccountsModule), canActivate: [LogInGuard] },
  { path: '', loadChildren: () => import('./modules/layouts/layouts.module').then(m => m.LayoutsModule), canActivate: [AuthGuard] },
  { path: TERM_CONDITIONS, loadChildren: () => import('./components/terms-condition/terms-condition.module').then((m) => m.TermsConditionModule) },
  // { path: PRIVACY_POLICY, loadChildren: () => import('./modules/cms-pages/cms-pages.module').then((m) => m.CmsPagesModule) },
  // { path: ABOUT_US, loadChildren: () => import('./modules/cms-pages/cms-pages.module').then((m) => m.CmsPagesModule) },
  // { path: FAQ, loadChildren: () => import('./modules/cms-pages/cms-pages.module').then((m) => m.CmsPagesModule) },
  { path: '**', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
