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

import { HeroService } from './service/hero.service';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { BusquedaHeroeComponent } from './components/busqueda-heroe/busqueda-heroe.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroDetailsComponent,
    BusquedaHeroeComponent    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
