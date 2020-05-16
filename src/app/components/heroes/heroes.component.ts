import { Component, OnInit } from '@angular/core';
import { HeroService,Hero } from '../../service/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  
  // hero:any[]=[];
  hero:Hero[]=[];
  constructor( private _heroService: HeroService, private _router: Router) { 

  }

  ngOnInit(): void {
    this.hero = this._heroService.getHeros();
    console.log(this.hero);
  }
  
  verHeroe(id:number){
    this._router.navigate(['/detalles',id]);
  }


}
