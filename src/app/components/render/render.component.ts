import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';
import { Pessoa } from 'src/app/Pessoa';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {

  corBackground!: string
  soma : number = 0
  idade! : string

  animals : Animal[] = [
    {name: 'Turca', type:'Dog', age: 4},
    {name: 'Tom', type:'Cat', age: 10},
    {name: 'Frida', type:'Cat', age: 5},
    {name: 'Bob', type:'Horse', age: 1},
  ]

  pessoas : Pessoa[] = [
    {id:1, data:'20/10/2022',situacao:'Reprovado',motivo:'foto com boné'},
    {id:2, data:'22/10/2022',situacao:'Reprovado',motivo:'foto com óculos'},
    {id:3, data:'23/10/2022',situacao:'Reprovado',motivo:'pouca qualidade'},
    {id:4, data:'25/10/2022',situacao:'Aprovado',motivo:''},
  ]

  constructor(private listService : ListService) { }                    //colocar o service

  ngOnInit(): void {
    this.mudaBorda()
    this.somaIdades()
  }

  removeAnimal(animal : Animal){
    this.animals = this.listService.remove(this.animals,animal)
  }
  
  removePessoa(pessoa : Pessoa){  
    this.pessoas = this.listService.removeP(this.pessoas,pessoa)
  }

  mudaBorda(): void{
    let a = this.listService.changeBord(this.animals)

    if(a[0] > a[1] && a[0] > a[2])
      this.corBackground = "green"
    if(a[1] > a[0] && a[1] > a[2])
      this.corBackground = 'red'
    if(a[2] > a[0] && a[2] > a[1])
      this.corBackground = 'purple'

  }

  somaIdades() : void{
    for(let i = 0; i < this.animals.length; i++){
      this.soma += this.animals[i].age
    }
  }

  showAges(animals: Animal): void{
    if(animals.age > 1)
      this.idade = `O pet ${animals.name} tem ${animals.age} anos`
    else{
      this.idade = `O pet ${animals.name} tem ${animals.age} ano`
    }  
  }

}
