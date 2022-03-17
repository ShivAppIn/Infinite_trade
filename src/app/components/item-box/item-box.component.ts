import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.scss']
})
export class ItemBoxComponent implements OnInit {
  @Input() boxType = 'ONLY_IMAGE';
  @Input() data: any;
  @Input() currentIndex: number;
  @Input() showDeleteOption = true;
  @Output() sendCurrentIndex = new EventEmitter();

  constructor(

  ) { }

  ngOnInit() {
  }

  emitCurrentIndex(index: number) {
    this.sendCurrentIndex.emit(index);
  }

}
