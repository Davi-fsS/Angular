import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  dateObj : Date = new Date()
  dateType : string = 'medium'

  constructor() { }

  ngOnInit(): void {
  }

  changeDate(){
    if(this.dateType === 'medium')
      this.dateType = 'short' 
    else{
      this.dateType = 'medium' 
    }
  }
}
