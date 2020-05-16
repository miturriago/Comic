import { Component, OnInit } from '@angular/core';
import { HeroService ,Hero  } from '../../service/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styles: [
  ]
})
export class HeroDetailsComponent implements OnInit {

   hero:any = [];
   imgCasa:string;

  constructor(private _activeRoute: ActivatedRoute, private _heroService:HeroService) {
   
    this._activeRoute.params.subscribe( params=>{
      //console.log(params['id']);
      this.hero = this._heroService.getHero(params['id']);
    })
   }
  ngOnInit(): void {
  }
  


}
