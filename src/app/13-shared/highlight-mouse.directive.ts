import { Directive, HostListener,ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightmouse]'
})
export class HighlightmouseDirective {
  
  private backgroundColor: String;

  initialBackgroudColor: String = 'white';

  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'green'
    // )
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   this.initialBackgroudColor
    // )
    this.backgroundColor = this.initialBackgroudColor;
  }

  // @HostBinding('style.backgroundColor') backgroundColor: String;

  // caso precise maninupular algo
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  constructor(
      private _elementRef: ElementRef, 
      // private _renderer: Renderer2
    ) { 
      // console.log(_elementRef.nativeElement)
      this.initialBackgroudColor = _elementRef.nativeElement.style.backgroundColor;
    }
}
