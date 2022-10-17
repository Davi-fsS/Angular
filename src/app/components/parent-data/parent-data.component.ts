import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent{
  @Input() name: string = ''
  @Input() date!: string
  @Input() dados!: {email:string, role:string} 
  @Input() titulo:string = ''
  @Input() info:number = 10 + 20
  @Input() infoFilho!:string
  constructor() { }

  ngOnInit(): void {
  }

}
