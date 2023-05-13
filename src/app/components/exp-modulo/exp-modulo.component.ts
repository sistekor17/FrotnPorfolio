import { Component, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Experiencia } from 'src/app/model/experiencia';




@Component({
  selector: 'app-exp-modulo',
  templateUrl: './exp-modulo.component.html',
  styleUrls: ['./exp-modulo.component.css']
})
export class ExpModuloComponent {
  @Output() onAddExp :EventEmitter<Experiencia> = new EventEmitter();
  

  id : number = null!;
  puesto : string = "";
  inicio : string = "";
  fin : string = "";
  descripcion : string = "";
  imagen : string = "";
  empresa : string = "";
  showAddExp : boolean = false;
  showEditExp : boolean = false;
  subcription? :Subscription ;

  constructor(private uiServ : UiService){
    this.subcription = this.uiServ.onToggleAdd().subscribe(
      (value) => {
        this.showAddExp = value});
  }

  toggleShowAddExp(){
  this.uiServ.toggleVisibilityExp();
  }
  
  onSubmitExp(){
   const {id, puesto, inicio, fin, descripcion, imagen, empresa} = this;
   const newExp = {id, puesto, inicio, fin, descripcion, imagen, empresa};

   this.onAddExp.emit(newExp);
  }

  
}

