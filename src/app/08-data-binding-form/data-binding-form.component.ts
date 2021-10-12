import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-form',
  templateUrl: './data-binding-form.component.html',
  styleUrls: ['./data-binding-form.component.css']
})
export class DataBindingFormComponent implements OnInit {

  person: any = {
    name: 'Dorivan',
    age: 20
  }

  constructor() { }

  ngOnInit(): void {
  }

}
