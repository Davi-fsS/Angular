import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  show : boolean = true
  mensagem : string = 'sumir!'
  resposta : string = 'Ola'
  corBotao : string = '#B3093F'
  corText : string = 'blue'

  constructor() { }

  ngOnInit(): void {
  }

  showMessage() : void {
    if(this.show == false){           //podemos utilizar o toggle (this.show = !this.show) assim ele trabalha sempre com o inverso
      this.show = true
      this.mensagem = 'sumir!'
      this.resposta = 'Voltei!'
      this.corBotao = '#B3093F'
      this.corText = 'purple'
    }
    else{                        
      this.show = false
      this.corBotao = 'green'
      this.mensagem = 'aparecer!'
    }
  }

}
