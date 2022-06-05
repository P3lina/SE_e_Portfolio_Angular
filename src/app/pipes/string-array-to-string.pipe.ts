import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringArrayToString'
})
export class StringArrayToStringPipe implements PipeTransform {

  transform(value: string[]): unknown {
    return value.join(' ');
  }

}
