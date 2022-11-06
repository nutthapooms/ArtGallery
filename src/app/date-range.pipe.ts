import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateRange',
  pure: true
})
export class DateRangePipe implements PipeTransform {

  transform(value: string): unknown {
    return '('+value;
  }

}
@Pipe({
  name: 'dateEnd',
  pure: true
})
export class DateEndPipe implements PipeTransform {

  transform(value: string): unknown {
    let returnString : string
    value == null ?  returnString = ')' : returnString = '-'+value+')';
    return returnString
  }

}
