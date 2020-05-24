import { Component, OnInit } from '@angular/core';
import { PersonajeService, Personaje } from '../../../service/personajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  personaje: Personaje[] = [];
  constructor(private _personajeService: PersonajeService, private _router: Router) {

  }

  ngOnInit(): void {
    this.personaje = this._personajeService.getPersonajes();
    console.log(this.personaje);
  }
  buscarHeroe(palabra: string) {
    this._router.navigate(['/buscar', palabra]);
  }

}
