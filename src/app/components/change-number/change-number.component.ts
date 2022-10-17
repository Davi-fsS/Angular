import { Component, OnInit, Output, EventEmitter } from '@angular/core';         //do filho para o pai é necessario: OUTPUT e EVENT EMITTER

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {

  @Output() changeNumber : EventEmitter<number> = new EventEmitter()

  @Output() changeNames : EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.changeNumber.emit()
  }

  handleClickNames(){
    this.changeNames.emit()
  } 

}
