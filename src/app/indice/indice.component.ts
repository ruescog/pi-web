import { Component, OnInit } from '@angular/core';
import { IndiceService } from '../indice.service';
import { Jugador } from '../Jugador';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {

  clasificacion: Jugador[] = []
  columnas: string[] = ["id", "nombre"] //TODO añadir esto bien

  constructor(private indiceService: IndiceService) { }

  ngOnInit(): void {
    this.getClasificacion()
  }

  getClasificacion(): void {
    this.clasificacion = this.indiceService.getClasificacion()
  }

}
