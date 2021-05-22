import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JugadorEquipoSpike } from './JugadorEquipoSpike';

@Injectable({
  providedIn: 'root'
})
export class OdiseaService {

  private odiseaUrl = "http://127.0.0.1:30504/clasificacion-odisea"

  constructor(private http: HttpClient) { }

  getClasificacion(): Observable<JugadorEquipoSpike[]> {
    return this.http.get<JugadorEquipoSpike[]>(this.odiseaUrl)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
