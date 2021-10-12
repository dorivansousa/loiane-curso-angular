import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Output() onChangeValue = new EventEmitter();
  
  @Input('initialValue') value: number = 10;

  constructor() { }

  ngOnInit(): void {
    this.onChangeValue.emit({newValue: this.value});
  }

  onIncrement() {
    this.value++;
    this.onChangeValue.emit({newValue: this.value});
  }

  onDecrement() {
    this.value--;
    this.onChangeValue.emit({newValue: this.value});
  }
}
