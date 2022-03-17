import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { GRAPH_FILTER_ERROR, DURATION_CYCLE, MONTHS } from '../../constants/messages';

@Component({
  selector: 'app-graph-filter',
  templateUrl: './graph-filter.component.html',
  styleUrls: ['./graph-filter.component.scss']
})
export class GraphFilterComponent implements OnInit {
  filterForm: FormGroup;
  _error = GRAPH_FILTER_ERROR;
  durations = DURATION_CYCLE;
  years = [];
  months = MONTHS;
  @ViewChild("form") filterFormRef: NgForm;
  @Output() sendFilterQuery = new EventEmitter();

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.generateYears();
    this.setValidMonths();
    this.emitQuery();
  }

  createForm() {
    this.filterForm = this._fb.group({
      type: [this.durations[0].value],
      month: [new Date().getMonth() + 1],
      year: [new Date().getFullYear()]
    })
  }

  get f() { return this.filterForm.controls } // return sort form controls

  generateYears() {
    const year = new Date().getFullYear();
    for (let i = 2020; i <= year; i++) {
      this.years.push(i);
    }
  }

  filterGraph() {
    if (this.filterForm.dirty) {
      if (this.filterForm.valid) {
        this.emitQuery();
      }
    }
  }

  resetfilterGraph() {
    if (this.filterForm.dirty) {
      this.filterFormRef.resetForm();
      this.f.type.setValue(this.durations[0].value);
      this.f.year.setValue(new Date().getFullYear());
      this.setValidMonths();
      this.f.month.setValue(new Date().getMonth() + 1);
      this.emitQuery();
    }
  }

  emitQuery() {
    Object.keys(this.filterForm.value).forEach(key => (this.filterForm.value[key] == null || this.filterForm.value[key] == "") && delete this.filterForm.value[key]);
    this.sendFilterQuery.emit(this.filterForm.value);
  }

  /**
   * @SET set year and month on selection of duration type
   */
  setYearAndMonth(event) {
    switch (event.value) {
      case this.durations[0].value:
        this.setCurrentMonthAndYear();
        break;

      case this.durations[1].value:
        // this.f.year.setValue(new Date().getFullYear());
        this.errorFreeMonth();
        break;

      default:
        break;
    }
    this.setValidMonths();
  }

  /**
   * @REMOVE remove selected month and year if year is not current year
   */
  removeSelectedCurrentMonth(event) {
    if (event.value == new Date().getFullYear()) {
      if (this.f.type.value !== this.durations[1].value) {
        this.f.month.setValue(new Date().getMonth() + 1);
      }
    }
    this.setValidMonths();
  }


  /**
   * @month get months and set it to month dropdown
   */
  setValidMonths() {
    if (new Date().getFullYear() == this.f.year.value) {
      this.months = this.months.slice(0, new Date().getMonth() + 1);
    } else {
      this.months = MONTHS;
    }
  }

  setCurrentMonthAndYear() {
    this.f.month.setValue(new Date().getMonth() + 1);
    // this.f.year.setValue(new Date().getFullYear());
  }

  errorFreeMonth() {
    this.f.month.setValue(null);
    this.f.month.setErrors(null);
  }

}
