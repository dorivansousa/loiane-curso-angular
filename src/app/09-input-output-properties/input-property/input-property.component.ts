import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // inputs: ['name'] //so por curiosidade
})
export class InputPropertyComponent implements OnInit {

  @Input('name') namePerson: String = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
