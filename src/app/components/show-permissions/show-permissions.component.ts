import { Component, Input, OnInit } from '@angular/core';
import { MANAGE_TYPE_OF } from '../../constants/messages';

@Component({
  selector: 'app-show-permissions',
  templateUrl: './show-permissions.component.html',
  styleUrls: ['./show-permissions.component.scss']
})
export class ShowPermissionsComponent implements OnInit {

  @Input() permissions = [];
  manageTypeValue = MANAGE_TYPE_OF;

  ngOnInit() {
    // might be needed in future
  }

}
