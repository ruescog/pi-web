import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CclService } from '../ccl.service';

@Component({
  selector: 'app-ccl',
  templateUrl: './ccl.component.html',
  styleUrls: ['./ccl.component.css']
})
export class CclComponent implements OnInit {

  columnas = ["position", "coach_name", "team_name", "race_name", "wins", "draws", "losses", "ranking", "td", "cas"];
  clasificacion: any;
  entrenadores: any;
  razas: any;

  constructor(private barra_mensaje: MatSnackBar, private route: ActivatedRoute, private location: Location, private cclService: CclService) { }

  ngOnInit(): void {
    this.getClasificacion()
    this.barra_mensaje.open("La temporada termina el día 7/11/2021", "x");
  }

  getClasificacion(): void {
    const idtournament = Number(this.route.snapshot.paramMap.get("idtournament"))
    this.cclService.getClasificacion(idtournament).subscribe(jugadores => {
      // Recoge la clasificacion
      this.clasificacion = new MatTableDataSource(jugadores)
      var copia_jugadores = [...jugadores]

      // Calcula los entrenadores
      this.entrenadores = []
      copia_jugadores.forEach(jugador => this.entrenadores.push(jugador.coach_name))
      this.entrenadores = new Set(this.entrenadores).size
      copia_jugadores = [...jugadores]

      // Calcula las razas
      this.razas = []
      copia_jugadores.forEach(jugador => this.razas.push(jugador.race_name))
      this.razas = new Set(this.razas).size
    })
  }

  filtrar(event: Event): void {
    // Filtra los resultados
    const input = (event.target as HTMLInputElement).value;
    this.clasificacion.filter = input.trim().toLowerCase();

    // Calcula los nuevos jugadores
    var jugadores = this.clasificacion.filteredData;
    this.entrenadores = []
    jugadores.forEach((jugador: any) => this.entrenadores.push(jugador.coach_name))
    this.entrenadores = new Set(this.entrenadores).size

    // Calcula las nuevas razas
    var jugadores = this.clasificacion.filteredData;
    this.razas = []
    jugadores.forEach((jugador: any) => this.razas.push(jugador.race_name))
    this.razas = new Set(this.razas).size
  }
}
