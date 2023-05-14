import { Component} from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/model/persona.model';
import { ProfilesService } from 'src/app/services/profiles.service';
import { TokenService } from 'src/app/services/token.service';
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
  isLogged : boolean = false; 

  constructor(public profilesService : ProfilesService, private uiServ : UiService, private tokenService : TokenService){
    this.subscription = this.uiServ.onToggleEditHeader().subscribe(
      (value) => {this.showEditHeader = value}
    );
  }

  ngOnInit(): void{
    this.profilesService.getPersona().subscribe(data =>{this.persona = data});
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
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
