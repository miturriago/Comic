import { Component, OnInit } from '@angular/core';
import { HeroService, Hero } from '../../../service/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  hero: Hero[] = [];
  constructor(private _heroService: HeroService, private _router: Router) {

  }

  ngOnInit(): void {
    this.hero = this._heroService.getHeros();
    console.log(this.hero);
  }
  buscarHeroe(palabra: string) {
    this._router.navigate(['/buscar', palabra]);
  }

}
