import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss']
})
export class LazyImageComponent implements OnInit {
  /**
    * @SETTER_GETTER using Input & Output
  */
  _img: any;
  get img(): any {
    return this._img;
  }
  @Input() set img(value: any) {
    this._img = value;
  }

 
  ngOnInit() {
    // might be needed in future
  }

}
