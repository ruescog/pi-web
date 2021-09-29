import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JugadorEquipoSpike } from './JugadorEquipoSpike';

@Injectable({
  providedIn: 'root'
})

export class CclService {

  private cclUrl = "https://pi-web-service.herokuapp.com/clasificacion-ccl"
  // private cclUrl = "http://127.0.0.1:30504/clasificacion-ccl"

  constructor(private http: HttpClient) { }

  getClasificacion(idtournament: number): Observable<JugadorEquipoSpike[]> {
    return this.http.get<JugadorEquipoSpike[]>(this.cclUrl + "/" + idtournament)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}