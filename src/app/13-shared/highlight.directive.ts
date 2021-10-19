import { Directive, OnInit, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() defaultColor: String = 'gray';
  
  //pra usar o mesmo nome do input e a da diretiva, eu nao gostei
  @Input('highlight') highlightColor: String;

  @HostBinding('style.backgroundColor') backgroundColor: String; 

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.backgroundColor = this.defaultColor; 
  }
}
