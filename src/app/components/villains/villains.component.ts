import { Component, OnInit } from '@angular/core';
import { PersonajeService, Personaje } from '../../service/personajes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit {

  // hero:any[]=[];
  personaje: Personaje[] = [];
  constructor(private _personajeService: PersonajeService, private _router: Router) {

  }

  ngOnInit(): void {
    this.personaje = this._personajeService.getPersonajes();
    console.log(this.personaje);
  }

  verVillano(id: number) {
    this._router.navigate(['/detalles', id]);
  }

}
