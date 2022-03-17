import { Pipe, PipeTransform } from '@angular/core';
import { Pagination } from '../../constants/pagination';
import { BANNER_TEMPLATE_TYPE } from '../../constants/messages';

@Pipe({
  name: 'formatStatus'
})
export class FormatStatusPipe extends Pagination implements PipeTransform {

  transform(value: any, extraArgument?: string): any {
    switch (value) {

      case this.API_EVENT.block:
        return extraArgument == 'User' ? 'Blocked' : 'Inactive';
      case this.API_EVENT.active:
        return 'Active';
      case this.API_EVENT.delete:
        return 'Deleted';

      case BANNER_TEMPLATE_TYPE[0].value:
        return BANNER_TEMPLATE_TYPE[0].name;
      case BANNER_TEMPLATE_TYPE[1].value:
        return BANNER_TEMPLATE_TYPE[1].name;
      case BANNER_TEMPLATE_TYPE[2].value:
        return 'Before & After Login';

      default:
        return '-'
    }
  }

}
