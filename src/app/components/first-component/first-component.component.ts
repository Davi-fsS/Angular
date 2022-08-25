import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',                           //utilizar isso como uma tag no app.component
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
