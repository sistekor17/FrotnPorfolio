import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url='https://backendporfoliojamesserrato.onrender.com/experiencia/'

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
    }

  public crear(newExp : Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', newExp);
    }

  public editar(id :number, editExp : Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, editExp);
  }
}
