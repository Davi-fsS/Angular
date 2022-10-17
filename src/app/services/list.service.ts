import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a)=>animal.name !== a.name);
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
}
