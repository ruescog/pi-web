import { Component, OnInit } from '@angular/core';
import { Logro } from '../Logro';
import { MatTableDataSource } from '@angular/material/table';

const LOGROS_RUN_DATA: Logro[] = [
  {nombre: "Conciencia de juego", descripcion: "Has jugado 40 partidos o más."},
  {nombre: "Conquistando la cima", descripcion: "Has alcanzado el top tres de una raza."},
  {nombre: "Derrota en la cumbre", descripcion: "Has jugado contra el mejor equipo de una raza y has perdido."},
  {nombre: "Golpe de estado", descripcion: "Has jugado contra el mejor equipo de tu raza y has ganado."},
  {nombre: "Invicto", descripcion: "Has jugado diez partidos y no has perdido ninguno."},
  {nombre: "Mata reyes", descripcion: "Has obligado a un jugador en el top tres de una raza a borrar su equipo."},
  {nombre: "Múltiples opciones", descripcion: "Has podido elegir entre dos equipos clasificados para jugar los playoffs."},
  {nombre: "Opción segura", descripcion: "Uno de tus equipos ha tenido una puntuación superior a 75."},
  {nombre: "Planes seguros", descripcion: 'Has tenido un equipo con tres "Segundas oportunidades" y un jugador con la habilidad "Líder".'},
  {nombre: "Por los pelos", descripcion: "Has clasificado un equipo con una diferencia de puntuación de menos de un punto con el primer equipo no clasificado."},
  {nombre: "Victoria royale", descripcion: "Has jugado diez partidos y has ganado todos."}
];

const LOGROS_JUGADORES_DATA: Logro[] = [
  {nombre: "Alumno experimentado", descripcion: "Has tenido un jugador de nivel 4."},
  {nombre: "Armario empotrado", descripcion: 'Has tenido un "Big Guy" con "Placar".'},
  {nombre: "Asesino", descripcion: 'Has tenido un jugador con "Golpe mortífero", "Aplastar" y "Placaje defensivo".'},
  {nombre: "Ayuda del maestro", descripcion: 'Has tenido un jugador posicional con 0 "PX" mientras que otro jugador que ocupa la misma posición es de nivel 4 o más.'},
  {nombre: "Baño de masas", descripcion: 'Has tenido un equipo con 12 de "Factor fan" o más.'},
  {nombre: "Caerse y volver a levantarse", descripcion: 'Has tenido un jugador con "Saltar" y "En pié de un salto".'},
  {nombre: "Catedrático", descripcion: "Has tenido un jugador de nivel 7."},
  {nombre: "Confiado", descripcion: 'Has tenido seis jugadores con "Placar" y "Esquivar".'},
  {nombre: "Derrochador nato", descripcion: "Has gastado 100.000 monedas de oro o más para no aumentar tu valor de equipo por culpa de la tesorería."},
  {nombre: "Doctorante", descripcion: "Has tenido un jugador de nivel 6."},
  {nombre: "El elegido", descripcion: 'Has contratado a un "Mercenario" que ha conseguido 6 o más "PX".'},
  {nombre: "El más rápido del oeste", descripcion: "Has tenido un jugador con +2 puntos de movimiento."},
  {nombre: "El novato paga el plato", descripcion: 'Has tenido un jugador que ha muerto con 0 "PX".'},
  {nombre: "Enemigo de la sociedad", descripcion: 'Has tenido un jugador "One turner natural".'},
  {nombre: "Estratega frustrado", descripcion: 'Has perdido la "Segunda oportunidad" que otorga la habilidad "Líder" porque te han sacado al jugador con esa habilidad antes de usarla.'},
  {nombre: "Etéreo", descripcion: 'Has tenido un jugador con "Esquivar" y "Mantenerse firme".'},
  {nombre: "Fieles consejeros", descripcion: "Has tenido un equipo con dos ayudantes de entrenador y dos animadoras."},
  {nombre: "Inamovible", descripcion: 'Has tenido un jugador con "Defensa", "Placar" y "Mantenerse firme".'},
  {nombre: "Jugador fiable", descripcion: 'Has tenido un jugador con "Esquivar", "Manos seguras" y "Pies firmes".'},
  {nombre: "Las dos torres", descripcion: 'Has tenido dos jugadores con "Defensa", "Placar" y "Mantenerse firme".'},
  {nombre: "Pié quebrado", descripcion: 'Has tenido un equipo con cuatro "Mercenarios".'},
  {nombre: "Polifacético", descripcion: 'Has tenido un jugador con una habilidad de cada categoría ("General", "Agilidad", "Pase" y "Fuerza").'},
  {nombre: "Semidios", descripcion: "Has tenido un jugador con dos subidas de atributo."},
  {nombre: "Universitario", descripcion: "Has tenido un jugador de nivel 5."},
  {nombre: "Verso alejandrino", descripcion: "Has tenido un equipo con 14 jugadores."}
];

const LOGROS_JUGADAS_DATA: Logro[] = [
  {nombre: "El golpe es la clave", descripcion: 'Has utilizado la habilidad "Golpe mortífero" para lesionar a un jugador.'},
  {nombre: "Sin miedo a los rojos", descripcion: 'Has "Surfeado" a un jugador placando a dos dados en contra.'},
  {nombre: "Ya no es tan fácil", descripcion: 'Has utilizado la habilidad "Cola prensil" para hacer que un jugador falle una esquiva.'}
];

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columnas: string[] = ["nombre", "descripcion"];
  datasource_run = new MatTableDataSource(LOGROS_RUN_DATA);
  datasource_jugadores = new MatTableDataSource(LOGROS_JUGADORES_DATA);
  datasource_jugadas = new MatTableDataSource(LOGROS_JUGADAS_DATA);

  filtrar(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.datasource_run.filter = input.trim().toLowerCase();
    this.datasource_jugadores.filter = input.trim().toLowerCase();
    this.datasource_jugadas.filter = input.trim().toLowerCase();
  }
}
