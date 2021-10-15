import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  task: any = {
    description: "Descrição da Tarefa",
    owner: null
  }

  constructor() { }

  ngOnInit(): void {
  }

}
