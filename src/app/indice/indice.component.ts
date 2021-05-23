import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { IndiceService } from '../indice.service';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {

  clasificacion: any
  columnas = ["position", "coach_name", "wins", "draws", "losses", "td", "ctd", "dtd", "cas", "ccas", "dcas", "concesions", "points"]

  constructor(private indiceService: IndiceService) { }

  ngOnInit(): void {
    this.getClasificacion()
  }

  getClasificacion(): void {
    this.indiceService.getClasificacion()
      .subscribe(posiciones => this.clasificacion = new MatTableDataSource(posiciones))
  }

  filtrar(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.clasificacion.filter = input.trim().toLowerCase();
  }
}
