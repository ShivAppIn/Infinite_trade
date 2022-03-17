import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/components/toast-notification/toast.service';
import { infoKey } from 'src/app/constants/storage-keys';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-resend-email',
  templateUrl: './resend-email.component.html',
  styleUrls: ['./resend-email.component.scss']
})
export class ResendEmailComponent implements OnInit {
  

  constructor(private _account:AccountService,private _toast:ToastService) { }

  
  ngOnInit() {
    // might be needed in future
  }

  resendLink(){
    const info = atob(localStorage.getItem(infoKey));
    this._account.forgotPassword(info).subscribe(response => {
      this._toast.success(response.message)
    }, (error) => {
      if (error) {
        this._toast.error(error.message)
      }
    });
  }

}
