import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 10, completeWords: boolean = false, ellipsis: string = '...'): string {
    if (!value) return '';
    if (completeWords) {
      limit = value.slice(0, limit).lastIndexOf(' ');
    }
    return value.length > limit ? value.slice(0, limit) + ellipsis : value;
  }

}
