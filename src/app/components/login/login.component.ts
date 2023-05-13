import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  isLogged = false;
  isLogginfail = false;
  loginUsuario! : LoginUsuario;
  nombreUsuario: string = "";
  password : string = "";
  roles: string[] = [];
  errMj! : string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router){}
    
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginfail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin() {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLogginfail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate([''])
    }, err =>{
      this.isLogged = false;
      this.isLogginfail = true;
      this.errMj = err.error.mensaje;
      console.log(this.errMj);
    })
  }
}
    

