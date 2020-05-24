import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';

// RUTAS

import { APP_ROUTING } from './app.routes';


// SERVICIOS

import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { BusquedaHeroeComponent } from './components/busqueda-heroe/busqueda-heroe.component';
import { VillainsComponent } from './components/villains/villains.component';
import { PersonajeService } from './service/personajes.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroDetailsComponent,
    BusquedaHeroeComponent,
    VillainsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    PersonajeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
