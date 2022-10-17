import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',                           //utilizar isso como uma tag no app-component.html
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  
  nome:string = 'Davi'
  idade:number = 20
  competencias ={
    'linguagem1': 'javascript',
    'linguagem2': 'java',
    'linguagem3': 'python'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
