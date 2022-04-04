import { Component, OnInit } from '@angular/core';
import { MAX_USER_IMAGE_SELECTION } from 'src/app/constants/messages';

@Component({
  selector: 'app-add-edit-comp',
  templateUrl: './add-edit-comp.component.html',
  styleUrls: ['./add-edit-comp.component.scss']
})
export class AddEditCompComponent implements OnInit {
  maxUserImageSelection = MAX_USER_IMAGE_SELECTION;
  pictures =[]
  constructor() { }

  ngOnInit(): void {
  }

}
