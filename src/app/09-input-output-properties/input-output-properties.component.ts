import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-properties',
  templateUrl: './input-output-properties.component.html',
  styleUrls: ['./input-output-properties.component.css']
})
export class InputOutputPropertiesComponent implements OnInit {

  inputName: String = 'Texto feito via input';

  outputValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeValue(obj: any) {
    this.outputValue = obj.newValue;
  }

}
