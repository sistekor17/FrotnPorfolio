export class Experiencia{
  id: number;
  puesto: string; 
  inicio: string;
  fin : string;
  descripcion : string;
  imagen  : string;             
  empresa : string;
  personaid? : number;
  
  constructor(id: number, puesto: string, inicio: string, fin : string, descripcion: string, imagen : string, empresa : string, esTrabajoActual : boolean, personaid : number){
    this.id = id;
    this.puesto = puesto;
    this.inicio = inicio;
    this.fin = fin;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.empresa = empresa;
    this.personaid = personaid;
  }
  
}