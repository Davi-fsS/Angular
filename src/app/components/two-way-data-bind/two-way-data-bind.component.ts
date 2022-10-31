import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-bind',
  templateUrl: './two-way-data-bind.component.html',
  styleUrls: ['./two-way-data-bind.component.css']
})
export class TwoWayDataBindComponent implements OnInit {

  nomeDigitado!:string
  emailDigitado!:string
  cpfDigitado!:string
  buttonStatus : boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  
  handleStatus(){
    this.buttonStatus = true
  }

}
