import { Injectable } from '@angular/core';
import { Jugador } from './Jugador';

@Injectable({
  providedIn: 'root'
})
export class IndiceService {

  constructor() { }

  getClasificacion(): Jugador[] {
    return [
      {id:1, nombre:"Andriy"},
      {id:2, nombre:"MEMEN"}
    ]
  }
}
