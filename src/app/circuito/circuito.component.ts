import { Component, OnInit } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

import { CircuitoService } from '../circuito.service';

@Component({
  selector: 'app-circuito',
  templateUrl: './circuito.component.html',
  styleUrls: ['./circuito.component.css']
})
export class CircuitoComponent implements OnInit {

  clasificacion: any
  columnas = ["position", "coach_name", "wins", "draws", "losses", "td", "ctd", "dtd", "cas", "ccas", "dcas", "concesions", "points"]

  constructor(private barra_mensaje: MatSnackBar, private circuitoService: CircuitoService) { }

  ngOnInit(): void {
    this.getClasificacion();
    this.barra_mensaje.open("Última actualización: 02/06/2021", "x");
  }

  getClasificacion(): void {
    this.circuitoService.getClasificacion()
      .subscribe(posiciones => this.clasificacion = new MatTableDataSource(posiciones))
  }

  filtrar(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.clasificacion.filter = input.trim().toLowerCase();
  }
}
