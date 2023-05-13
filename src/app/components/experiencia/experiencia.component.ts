import { Component,Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  
  isLogged:boolean = false;
  idEdit : number = null!;  
  experiencias: Experiencia[]=[];
  subcription? :Subscription ;
  showAddExp : boolean = false;
  showEditExp : boolean = false;

  // Contructor
  constructor(private tokenService: TokenService, private sExperiencia: ExperienciaService, private uiServ : UiService){
    this.subcription = this.uiServ.onToggleAdd().subscribe(
      (value) => {
        this.showAddExp = value});
    this.subcription = this.uiServ.onToggleEdit().subscribe(
      (value) => {
        this.showEditExp = value});

  }
 
  @Output() onAddExp = new EventEmitter();
  
  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data => {this.experiencias=data});}

  ngOnInit():void{
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

    toggleShowAddEp(){
      this.uiServ.toggleVisibilityExp();
    }

    toggleShowEditExp(id:number){
      this.uiServ.toggleVisibilityEditExp();
      //capatura el id de la exp a modificar.
      this.idEdit = id;
    }


    create(newExp: Experiencia){
      this.sExperiencia.crear(newExp).subscribe(data => {
        this.toggleShowAddEp()
        alert("Experiencia creada correctamente.")
        this.cargarExperiencia();
        },err => {
          alert("No se puedo crear la nueva experiencia.");})
    }

    edit(id: number, editexp : Experiencia) {
      this.sExperiencia.editar(id, editexp).subscribe(data => {
        this.uiServ.toggleVisibilityEditExp();
        alert("Experiencia modificada correctamente.")
        this.cargarExperiencia();
        },err => {
          alert("No se puedo editar la experiencia.");});
        
    }

    delete(id : number){
      if(id != undefined && this.isLogged == true)
      {this.sExperiencia.delete(id).subscribe( data =>{
            alert("Experiencia eliminada correctamente")
            this. cargarExperiencia();}, err =>{
            alert("no se pudo eliminar la experiencia")})} }
    
 
  
    
    
        
      
  
}
