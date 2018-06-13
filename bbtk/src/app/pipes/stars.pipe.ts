import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: number): any {
    let result = '&#9733;'.repeat(value);
    result += '&#9734;'.repeat(5 - value);
    return this.sanitizer.bypassSecurityTrustHtml(result);
  }
}
