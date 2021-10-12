import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // inputs: ['name'] //so por curiosidade
})
export class InputPropertyComponent {

  @Input() name: String = '';
  
  constructor() { }

}
