import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PorfolioService } from './services/porfolio.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'
import { ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor.service';
import { ExpModuloComponent } from './components/exp-modulo/exp-modulo.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { EditHeaderFormComponent } from './components/edit-header-form/edit-header-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    ExpModuloComponent,
    EditFormComponent,
    EditHeaderFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
