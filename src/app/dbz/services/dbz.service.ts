import { Injectable } from '@angular/core'; //es el decorador
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'
//Este decorador le dice a angular que es un servicio
@Injectable({
  providedIn: 'root'
}) //Si no pusiesemos esto providedIn: 'root',
//tendriamos que definir el servicio en la parte de los providers
//el el .ts principal deond evan los imports etc..
//Como esrta ahor afunciona en toda la app
export class DbzService {

  public characters : Character[] = [{
    name: 'Kuririn',
    id: uuid(),
    power:1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 8500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 15000

  }];


  addCharacter(character: Character):void
  {
    const newCharacter: Character = {
      id:uuid(), ...character
      //Esto loq ue hace es coger todas las propiedades y las esparce
      //En el objeto, por lo que se asignan automaticamente
    }
    this.characters.push(newCharacter);
  }

  deleteCharacterbyId(id:string){
    this.characters  = this.characters.filter(character => character.id !== id)
    // this.characters.filter(index,1);

  }


}
