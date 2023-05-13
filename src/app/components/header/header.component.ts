import { Component} from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/model/persona.model';
import { ProfilesService } from 'src/app/services/profiles.service';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  persona : Persona = new Persona("","","","","","","");
  showEditHeader : boolean = false;
  subscription? : Subscription;
  idEdit : number = null!;

  constructor(public profilesService : ProfilesService, private uiServ : UiService){
    this.subscription = this.uiServ.onToggleEditHeader().subscribe(
      (value) => {this.showEditHeader = value}
    );
  }

  ngOnInit(): void{
    this.profilesService.getPersona().subscribe(data =>{this.persona = data});
  }
  ontShowEditHeader(){
    this.uiServ.toggleVisibilityEditHeader();

  };

  update(editPerfil : Persona){
    this.profilesService.updatePersona(editPerfil).subscribe(data =>
      {
        this.ontShowEditHeader();
        alert("Perfil Modificado exitosamente");
        this.ngOnInit();}, err => {
          alert("El Perfil no pudo ser modificado. Error: " + err.message);});
  }

}
