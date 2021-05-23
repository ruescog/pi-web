import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultadoTorneo } from './ResultadoTorneo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndiceService {

  private circuitoUrl = "https://pi-web-service.herokuapp.com/indice"
  // private circuitoUrl = "http://127.0.0.1:30504/indice"

  constructor(private http: HttpClient) { }

  getClasificacion(): Observable<ResultadoTorneo[]> {
    return this.http.get<ResultadoTorneo[]>(this.circuitoUrl)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
