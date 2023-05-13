import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  isLogged = false;
  
  constructor(private router: Router, private tokenService : TokenService){}

  ngOnInit():void{
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  public login(){
    this.router.navigate(['/login']);
  }

  public onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }



}
