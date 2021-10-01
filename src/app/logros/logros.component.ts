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
  {nombre: "Planes seguros", descripcion: "Has tenido un equipo con tres segundas oportunidades y un jugador con la habilidad líder."},
  {nombre: "Por los pelos", descripcion: "Has clasificado un equipo con una diferencia de puntuación de menos de un punto con el primer equipo no clasificado."},
  {nombre: "Victoria royale", descripcion: "Has jugado diez partidos y has ganado todos."}
];

const LOGROS_JUGADORES_DATA: Logro[] = [
  {nombre: "Alumno experimentado", descripcion: "Has tenido un jugador de nivel 4."},
  {nombre: "Armario empotrado", descripcion: "Has tenido un big guy con placar."},
  {nombre: "Asesino", descripcion: "Has tenido un jugador con golpe mortífero, aplastar y placaje defensivo."},
  {nombre: "Ayuda del maestro", descripcion: "Has tenido un jugador posicional con 0 PX mientras que otro jugador que ocupa la misma posición es de nivel 4 o más."},
  {nombre: "Baño de masas", descripcion: "Has tenido un equipo con 12 de factor fan o más."},
  {nombre: "Caerse y volver a levantarse", descripcion: "Has tenido un jugador con saltar y en pié de un salto."},
  {nombre: "Catedrático", descripcion: "Has tenido un jugador de nivel 7."},
  {nombre: "Confiado", descripcion: "Has tenido seis jugadores con placar y esquivar."},
  {nombre: "Derrochador nato", descripcion: "Has gastado 100.000 monedas de oro o más para no aumentar tu valor de equipo por culpa de la tesorería."},
  {nombre: "Doctorante", descripcion: "Has tenido un jugador de nivel 6."},
  {nombre: "El elegido", descripcion: "Has contratado a un mercenario que ha conseguido 6 o más PX."},
  {nombre: "El más rápido del oeste", descripcion: "Has tenido un jugador con +2 puntos de movimiento."},
  {nombre: "El novato paga el plato", descripcion: "Has tenido un jugador que ha muerto con 0 PX."},
  {nombre: "Enemigo de la sociedad", descripcion: "Has tenido un jugador one turner natural."},
  {nombre: "Etéreo", descripcion: "Has tenido un jugador con esquivar y mantenerse firme."},
  {nombre: "Fieles consejeros", descripcion: "Has tenido un equipo con dos ayudantes de entrenador y dos animadoras."},
  {nombre: "Inamovible", descripcion: "Has tenido un jugador con defensa, placar y mantenerse firme."},
  {nombre: "Jugador fiable", descripcion: "Has tenido un jugador con esquivar, manos seguras y pies firmes."},
  {nombre: "Las dos torres", descripcion: "Has tenido dos jugadores con defensa, placar y mantenerse firme."},
  {nombre: "Pié quebrado", descripcion: "Has tenido un equipo con cuatro mercenarios."},
  {nombre: "Polifacético", descripcion: "Has tenido un jugador con una habilidad de cada categoría (general, agilidad, pase y fuerza)."},
  {nombre: "Semidios", descripcion: "Has tenido un jugador con dos subidas de atributo."},
  {nombre: "Universitario", descripcion: "Has tenido un jugador de nivel 5."},
  {nombre: "Verso alejandrino", descripcion: "Has tenido un equipo con 14 jugadores."}
];

const LOGROS_JUGADAS_DATA: Logro[] = [
  {nombre: "Análisis de impacto", descripcion: "Has lanzado una bola de fuego que ha derribado a cinco jugadores o más."},
  {nombre: "Asesino de titanes", descripcion: "Has matado a un jugador de nivel 6."},
  {nombre: "Asesino experimentado", descripcion: "Has matado a un jugador de nivel 5."},
  {nombre: "Bancarrota", descripcion: "Has sacado un uno en la recaudación del partido tras volver a tirar sobre un resultado de uno."},
  {nombre: "Barriendo los restos", descripcion: "Has surfeado a un jugador que estaba en el suelo."},
  {nombre: "Bienvenido al Blood Bowl", descripcion: "Has fracasado una jugada ganadora tras fallar el a por ellos en la casilla de touchdown."},
  {nombre: "Cajas laterales inefectivas", descripcion: "Has surfeado a un jugador entrando en una caja lateral."},
  {nombre: "Caraanchoa", descripcion: "Has lesionado y has sido lesionado tras elegir un resultado de ambos placados en un placaje."},
  {nombre: "Cata de POWs", descripcion: "Has obtenido un resultado de ambos placados, empujado derribado y POW en un placaje."},
  {nombre: "CheiCheiChei", descripcion: "Has matado a un jugador tras obtener doble seis en la tirada de armadura y herida."},
  {nombre: "Cobrador del Frak", descripcion: "Has matado a un jugador de nivel 4."},
  {nombre: "David contra Goliat", descripcion: "Has lesionado a un big guy placándole a un dado."},
  {nombre: "Deberías echar la lotería", descripcion: "Has obtenido un resultado de triple calvo tras usar una segunda oportunidad en un resultado de triple calvo."},
  {nombre: "Doble uno", descripcion: "Has obtenido un resultado de uno tras usar una segunda oportunidad sobre un resultado de uno."},
  {nombre: "Doble mortal hacia atrás", descripcion: "Uno de tus jugadores ha muerto saltando."},
  {nombre: "Donde caben 2, caben 4", descripcion: "Has obtenido un resultado de doble calvo tras usar una segunda oportunidad en un resultado de doble calvo."},
  {nombre: "Dos en contra doble POW", descripcion: "Has obtenido un resultado de doble POW placando a dos dados en contra."},
  {nombre: "El beso de la muerte", descripcion: "El apotecario a salvado la vida a un jugador muerto."},
  {nombre: "El golpe es la clave", descripcion: "Has utilizado la habilidad golpe mortífero para lesionar a un jugador."},
  {nombre: "El último paso", descripcion: "Uno de tus jugadores ha muerto haciendo un a por ellos."},
  {nombre: "Estratega frustrado", descripcion: "Has perdido la segunda oportunidad que otorga la habilidad líder porque te han sacado al jugador con esa habilidad antes de usarla."},
  {nombre: "Estrella estrellado", descripcion: "Has lesionado a un jugador estrella en el turno uno."},
  {nombre: "Exito fracasado", descripcion: "No has logrado realizar una jugada ganadora porque uno de tus jugadores ha atrapado un rebote."},
  {nombre: "Explota explota me explo, explota explota mi corazón", descripcion: "Has causado un removal a cada jugador situado en la LoS en el primer turno de tu drive de ataque."},
  {nombre: "Family friendly", descripcion: "No has conseguido ningún removal."},
  {nombre: "Flash, zum, cabóm", descripcion: "Has lesionado a un jugador rival en el evento de penetración."},
  {nombre: "Fracaso exitoso", descripcion: "Uno de tus jugadores ha atrapado un pase impreciso."},
  {nombre: "Gran pérdida", descripcion: "Has perdido a un jugador que tenía una valoración de 200.000 monedas de oro o más."},
  {nombre: "Hooligan en la sombra", descripcion: "Has ganado la tirada de fama para el evento pedrada aún teniendo tu rival la fama."},
  {nombre: "Jugador precoz", descripcion: "Has obtenido turn over en tres turnos consecutivos."},
  {nombre: "Kratos", descripcion: "Has matado a un jugador de nivel 7."},
  {nombre: "La cerdo-one", descripcion: "Has realizado una jugada ganadora en un evento de penetración."},
  {nombre: "La cerveza era veneno", descripcion: "Has fallado cinco tiradas de levantar a los KO."},
  {nombre: "La chapa nueve son los padres", descripcion: "Has causado dos removals por placajes a jugadores con armadura 9 en un turno."},
  {nombre: "La danza de la esquiva", descripcion: "Has realizado una jugada ganadora tras esquivar cinco veces o más."},
  {nombre: "La semi-one", descripcion: "Has realizado una jugada ganadora en un ataque de un solo turno realizando chain pushes a los jugadores rivales."},
  {nombre: "Lo que ya está muerto no puede morir", descripcion: "Has tenido éxito en cinco o más tiradas de regeneración."},
  {nombre: "Los 300", descripcion: "Has ganado un partido teniendo una desventaja numérica de un jugador por cada 3."},
  {nombre: "Luck 3%", descripcion: "Has realizado una jugada ganadora que tenía una probabilidad del 3% o inferior de conseguirse."},
  {nombre: "Médico forense", descripcion: "El apotecario a matado a un jugador muerto."},
  {nombre: "Nuffle no cambia de opinión", descripcion: "Has obtenido el mismo resultado en un placaje tras usar una segunda oportunidad."},
  {nombre: "Optimizador", descripcion: "Todos los placajes de tus big guys han sido a tres dados."},
  {nombre: "Pase de Dios", descripcion: "Uno de tus jugadores a atrapado un pase a lo loco."},
  {nombre: "Pichiclín", descripcion: "Has hecho un pitch clear."},
  {nombre: "Pisa, coño", descripcion: "Has sido expulsado tres veces realizando faltas."},
  {nombre: "Plan B", descripcion: "Has realizado una jugada ganadora haciendo un seis o más sin repetir esa tirada."},
  {nombre: "Seguro de vida", descripcion: "Has jugado con dos apotecarios."},
  {nombre: "Sin miedo a los rojos", descripcion: "Has surfeado a un jugador placando a dos dados en contra."},
  {nombre: "Stunty en mano y ciento volando", descripcion: "Has lesionado a un jugador rival tras impactarlo con un lanzamiento de compañero."},
  {nombre: "Surfeo múltiple", descripcion: "Has surfeado a varios jugadores en un turno."},
  {nombre: "Un bache en el camino", descripcion: "Has sacado un triple calvo en un placaje."},
  {nombre: "Usa el apotecario ahora", descripcion: "Has matado a un jugador enemigo inmediatamente después de que tu rival haya gastado el apotecario en un jugador KO o con herida sin efecto."},
  {nombre: "Venganza", descripcion: "Uno de tus jugadores lesionados en este partido ha lesionado al jugador que lo lesionó."},
  {nombre: "Ya no es tan fácil", descripcion: "Has utilizado la habilidad cola prensil para hacer que un jugador falle una esquiva."},
  {nombre: "Zeus", descripcion: "Has matado a un jugador lanzándole un rayo."},
  {nombre: "5353456", descripcion: "Has obtenido una combinación de dados de 5, 3, 5, 3, 4, 5, 6"}
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
