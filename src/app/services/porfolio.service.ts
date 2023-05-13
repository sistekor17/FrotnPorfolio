import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
// Los servicios siempre se inyectan en el constructor
  constructor(private http : HttpClient) { }

  // obtenerDatos():observable <any>{
  //   return this.http.get('json');
  // }
}
