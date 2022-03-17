import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, format: string = 'MMM dd` yyyy'): any {
    return value ? this.setDateTimeFormat(value, format) : '-';
  }

  setDateTimeFormat(date, format) {
    let format_date = new Date(date);
    let str = '';
    if (format_date.toDateString() == new Date().toDateString()) {
      str = `Today`;
    } else {
      str = (new DatePipe('en-US').transform(date, format)).toUpperCase();
    }
    return str;
  }

}
