import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { CommonService } from '../../services/common/common.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-search-renderer',
  templateUrl: './search-renderer.component.html',
  styleUrls: ['./search-renderer.component.scss']
})
export class SearchRendererComponent implements OnInit, OnDestroy {
  @Input() placeholder: string;
  @Output() renderSearch = new EventEmitter();
  searchSub: Subscription;
  searchForm = new FormControl('');

  constructor(
    private _common: CommonService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.clearValue();
      });
  }

  ngOnInit() {
    this.realTimeSearch();
  }

  realTimeSearch() {
    this.searchSub = this.searchForm.valueChanges.pipe(debounceTime(800), distinctUntilChanged()).subscribe(value => {
      this.searchEmit(value);
    })
  }

  searchEmit(text) {
    if (text) {
      text = text.trim();
      if (text) {
        this.renderSearch.emit(text.toLowerCase());
      }
    } else if (text == '' || !text) {
      this.renderSearch.emit('');
    }
  }

  clearValue(callFromOther = false) {
    if (this.searchForm.value) {
      this.searchForm.setValue('');
    }

  }

  ngOnDestroy() {
    if (this.searchSub) {
      this.searchSub.unsubscribe();
    }
  }



}
