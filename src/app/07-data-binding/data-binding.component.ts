import { Component, OnInit } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  person: any = {
    name: 'Dorivan',
    age: 20
  }

  name: String = 'abc';
  url: String;
  cursoAngular: Boolean = true;
  urlImage: String = 'http://lorempixel.com/100/100/nature';
  tagImageInterpolation = 'HTML <img src="{{ urlImage }}" alt="">';
  tagImagePropertyBinding = 'HTML <img [src]="urlImage" alt="">';
  inputValue: String = '';
  inputValueSave: String = '';

  isMouseOver: boolean = false;

  constructor() { 
    this.url = "http:\\loiane.com";
  }

  getValor() {
    return 3;
  }

  getCursoAngular() {
    return false
  }

  onButtonClick () {
    alert('oi');
  }

  onInputKeyUp(event: KeyboardEvent) {
   this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onInputKeyUpEnter(value: any) {
    this.inputValueSave = value;

  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  ngOnInit(): void {
  }

}
