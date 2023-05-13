import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  
  apiURL = 'https://backendporfoliojamesserrato.onrender.com/persona/';

  constructor(private http:HttpClient) { }

   public getPersona(): Observable<Persona> {

      return this.http.get<Persona>(this.apiURL + 'detail/1');
   }

   public updatePersona( editPerfil : Persona): Observable<any>{
      console.log(editPerfil);
      return this.http.put<any>(this.apiURL + 'update/1', editPerfil).pipe(
         catchError((error: HttpErrorResponse) => {
           console.error('Error al actualizar el perfil:', error);
           return throwError(error);
         })
       );
   }

   



}
