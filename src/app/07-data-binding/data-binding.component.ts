import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: String;
  cursoAngular: Boolean = true;
  urlImage: String = 'http://lorempixel.com/100/100/nature';
  tagImageInterpolation = 'HTML <img src="{{ urlImage }}" alt="">';
  tagImagePropertyBinding = 'HTML <img [src]="urlImage" alt="">';

  constructor() { 
    this.url = "http:\\loiane.com";
  }

  getValor() {
    return 3;
  }

  getCursoAngular() {
    return false
  }

  ngOnInit(): void {
  }

}
