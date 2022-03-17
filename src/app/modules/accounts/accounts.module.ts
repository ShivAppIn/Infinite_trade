import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { RouterModule, Routes } from '@angular/router';
import {
  LOGIN,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  RECOVERY_EMAIL,
} from '../../constants/routes';
import { AccountService } from './_services/account.service';
import { VerifyRouteResolveService } from '../../services/verify-otp/verify-otp.service';

const inrRoute: Routes = [
  {
    path: '',
    component: AccountsComponent,
    children: [
      { path: '', redirectTo: LOGIN },
      {
        path: LOGIN,
        loadChildren: () =>
          import('./pages/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: FORGOT_PASSWORD,
        loadChildren: () =>
          import('./pages/forgot/forgot.module').then((m) => m.ForgotModule),
      },
      {
        path: RECOVERY_EMAIL,
        loadChildren: () =>
          import('./pages/resend-email/resend-email.module').then(
            (m) => m.ResendEmailModule
          ),
      },
      {
        path: RESET_PASSWORD,
        loadChildren: () =>
          import('./pages/reset/reset.module').then((m) => m.ResetModule),
      }
    ],
  },
];

@NgModule({
  declarations: [AccountsComponent],
  imports: [CommonModule, RouterModule.forChild(inrRoute)],
  providers: [AccountService, VerifyRouteResolveService],
})
export class AccountsModule {}
