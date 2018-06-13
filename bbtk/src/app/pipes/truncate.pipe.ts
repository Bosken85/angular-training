import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, amount: number = 10, args?: any): any {
    return value.substring(0, amount);
  }

}
