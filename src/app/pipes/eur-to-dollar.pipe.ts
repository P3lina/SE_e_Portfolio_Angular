import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eurToDollar'
})
export class EurToDollarPipe implements PipeTransform {

  transform(value: string): unknown {

    return Number(value.split('€')[0])* 1.07 + '$';
  }

}
