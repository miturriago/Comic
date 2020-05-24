import { Component, OnInit } from '@angular/core';
import { PersonajeService, Personaje } from '../../service/personajes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html',
  styleUrls: ['./busqueda-heroe.component.css']
})
export class BusquedaHeroeComponent implements OnInit {

  personaje: any = [];
  imgCasa: string;

  constructor(private _activeRoute: ActivatedRoute, private _personjeService: PersonajeService) {

    this._activeRoute.params.subscribe(params => {
      //console.log(params['id']);
      this.personaje = this._personjeService.buscarPersonaje(params['nombre']);
      console.log(this.personaje);
    })
  }
  ngOnInit(): void {
  }

}
