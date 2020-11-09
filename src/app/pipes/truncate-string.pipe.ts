import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateString'
})
export class TruncateStringPipe implements PipeTransform {

  transform(value: string, maxStringLength: number): string {
    if (value.length <= maxStringLength)
      return value
    return `${value.slice(0, maxStringLength)}...`;
  }
}
