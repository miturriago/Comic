import { Component, OnInit } from '@angular/core';
import { PersonajeService,Personaje } from '../../service/personajes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  
  // hero:any[]=[];
  personaje:Personaje[]=[];
  constructor( private _personajeService: PersonajeService, private _router: Router) { 

  }

  ngOnInit(): void {
    this.personaje = this._personajeService.getPersonajes();
    console.log(this.personaje);
  }
  
  verHeroe(id:number){
    this._router.navigate(['/detalles',id]);
  }


}
