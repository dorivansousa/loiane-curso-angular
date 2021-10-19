import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngMyElse]'
})
export class NgMyElseDirective {

  @Input() set ngMyElse(condition: Boolean) {
    if (!condition) {
      this._viewContainerRef.createEmbeddedView(this._templateRef)
    }else{
      this._viewContainerRef.clear; //nao funciona bem
    }
  }

  constructor(
      private _templateRef: TemplateRef<any>,
      private _viewContainerRef: ViewContainerRef
    ) { }

}
