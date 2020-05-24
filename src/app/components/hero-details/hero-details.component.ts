import { Component, OnInit } from '@angular/core';
import { PersonajeService ,Personaje  } from '../../service/personajes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styles: [
  ]
})
export class HeroDetailsComponent implements OnInit {

   personaje:any = [];
   imgCasa:string;

  constructor(private _activeRoute: ActivatedRoute, private _heroService:PersonajeService) {
   
    this._activeRoute.params.subscribe( params=>{
      //console.log(params['id']);
      this.personaje = this._heroService.getPersonaje(params['id']);
    })
   }
  ngOnInit(): void {
  }
  


}
