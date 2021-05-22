import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OdiseaService } from '../odisea.service';

@Component({
  selector: 'app-odisea',
  templateUrl: './odisea.component.html',
  styleUrls: ['./odisea.component.css']
})
export class OdiseaComponent implements OnInit {

  clasificacion: any
  columnas = ["position", "coach_name", "team_name", "idrace", "wins", "draws", "losses", "ranking", "td", "cas"]

  constructor(private odiseaService: OdiseaService) { }

  ngOnInit(): void {
    this.getClasificacion()
  }

  getClasificacion(): void {
    this.odiseaService.getClasificacion()
      .subscribe(jugadores => this.clasificacion = new MatTableDataSource(jugadores))
  }

  filtrar(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.clasificacion.filter = input.trim().toLowerCase();
  }
}
