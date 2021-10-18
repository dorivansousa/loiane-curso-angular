import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[backgroundYellow]'
})
export class BackgroundYellowDirective {

  constructor(
      private _elementRef: ElementRef, 
      private _renderer: Renderer2
    ) { 
    // console.log(_elementRef);
    
    // _elementRef.nativeElement.style.backgroundColor = 'yellow'    
    _renderer.setStyle(
      _elementRef.nativeElement,
      'background-color',
      'yellow'
    )
  }

}
