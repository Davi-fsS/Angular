import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  myNumber : number = 0
  cor! : string
  pesoCor! : string 
  nome!:string
  corNome!:string
  pesoCorNome!:string

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(){
    this.myNumber = Math.floor(Math.random()*100)
    if(this.myNumber % 2 == 0){
      this.cor = 'green'
      this.pesoCor = 'bolder'
    }
  }

  onChangeNames(){
    let nomes : string[] = ['Davi','Alexandre','Pedro','Enzo','Julia','Raquel','Raissa','Beatriz','Maisa','Silvia']
    let indice: number  = Math.floor(Math.random()*10)
    this.nome = nomes[indice]

    if(this.nome === 'Davi'){
      this.corNome = 'blue'
      this.pesoCorNome = 'bolder'
    }
    else{
      this.corNome = ''
      this.pesoCorNome = ''
    }

  }

}
