import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Output() ChangeValue = new EventEmitter();
  
  @Input() value: number = 10;

  constructor() { }

  ngOnInit(): void {
    this.ChangeValue.emit({newValue: this.value});
  }

  onIncrement() {
    this.value++;
    this.ChangeValue.emit({newValue: this.value});
  }

  onDecrement() {
    this.value--;
    this.ChangeValue.emit({newValue: this.value});
  }
}
