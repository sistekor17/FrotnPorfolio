// Profiles entity interface 
export class Persona{

  id? : number;
  nombre : string;
  sobreMi : string;
  banner : string;
  titulo : string;
  img : string;
  email : string;
  curriculum: string;

  constructor(nombre: string, titulo: string, banner: string, img :string, sobreMi: string, email: string, curriculum: string){
    this.nombre = nombre;
    this.titulo = titulo;
    this.banner = banner;
    this.img = img;
    this.sobreMi = sobreMi;
    this.email = email;
    this.curriculum = curriculum;
  }
}