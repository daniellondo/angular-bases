import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      id:uuid(),
      name: "Krilin",
      power: 500
    },
    {
      id:uuid(),
      name: "Goku",
      power: 10000
    },
    {
      id:uuid(),
      name: "Vegeta",
      power: 7000
    }
  ];

  AddCharacter(character : Character) : void {
      character.id = uuid();
      this.characters.push(character);
  }

  // onDelete(index : number): void {
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
