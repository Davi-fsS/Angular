import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { Pessoa } from '../Pessoa';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a)=>animal.name !== a.name);
  }

  removeP(pessoas: Pessoa[], pessoa:Pessoa){
    return pessoas.filter((a)=>pessoa.situacao !== a.situacao)
  }

  changeBord(animals : Animal[]){
    let countDog : number = 0
    let countCat : number = 0
    let countHorse : number = 0
    let a : number[] = []

    for(let i = 0; i < animals.length; i++){
      if(animals[i].type === 'Dog')
        countDog++
      if(animals[i].type === 'Cat')
        countCat++
      if(animals[i].type === 'Horse')
        countHorse++
    }
    a.push(countDog, countCat, countHorse)
    return a
  }

  changeStatus(pessoas : Pessoa[]){
    return pessoas.map(a => {
      if(a.situacao === "Reprovado"){
        a.situacao = "Aprovado"
      }
    });
  }
}
