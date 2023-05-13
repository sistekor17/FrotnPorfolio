import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/model/persona.model';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-edit-header-form',
  templateUrl: './edit-header-form.component.html',
  styleUrls: ['./edit-header-form.component.css']
})
export class EditHeaderFormComponent {
  @Output() onEditHeader: EventEmitter<Persona> = new EventEmitter();
  id : number = null!;
  nombre : string = null!;
  titulo : string = null!;
  sobreMi : string = null!;
  banner : string = null!;
  img : string = null!;
  email : string = null!;
  curriculum : string = null!;
  showEditHeader : boolean = false;
  subscription? : Subscription;
  
  //constructor
  constructor(private uiServ : UiService){
    this.subscription = this.uiServ.onToggleEditHeader().subscribe(
      (value) => {this.showEditHeader = value}
    );
  }

  ontShowEditHeader(){
    this.uiServ.toggleVisibilityEditHeader();  
  };


  onSubmitPerfil(){
    const {nombre, titulo, sobreMi, banner, img, email, curriculum} = this;
    const editPerfil = {nombre, titulo, sobreMi, banner, img, email, curriculum};
 
    this.onEditHeader.emit(editPerfil);
   }

}
