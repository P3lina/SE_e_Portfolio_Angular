import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appGreenBackground]'
})
export class GreenBackgroundDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}
