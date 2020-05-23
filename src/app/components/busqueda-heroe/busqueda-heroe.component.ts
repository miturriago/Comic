import { Component, OnInit } from '@angular/core';
import { HeroService, Hero } from '../../service/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html',
  styleUrls: ['./busqueda-heroe.component.css']
})
export class BusquedaHeroeComponent implements OnInit {

  hero: any = [];
  imgCasa: string;

  constructor(private _activeRoute: ActivatedRoute, private _heroService: HeroService) {

    this._activeRoute.params.subscribe(params => {
      //console.log(params['id']);
      this.hero = this._heroService.buscarHeroe(params['nombre']);
      console.log(this.hero);
    })
  }
  ngOnInit(): void {
  }

}
