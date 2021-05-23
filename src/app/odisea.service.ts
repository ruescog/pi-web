import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JugadorEquipoSpike } from './JugadorEquipoSpike';

@Injectable({
  providedIn: 'root'
})
export class OdiseaService {

  private odiseaUrl = "https://pi-web-service.herokuapp.com/clasificacion-odisea"
  // private odiseaUrl = "http://127.0.0.1:30504/clasificacion-odisea"

  constructor(private http: HttpClient) { }

  getClasificacion(idtournament: number): Observable<JugadorEquipoSpike[]> {
    return this.http.get<JugadorEquipoSpike[]>(this.odiseaUrl + "/" + idtournament)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
