import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  buscarHeroe(palabra:string){
    console.log(palabra);
    // Reenviar datos a un componente nuevo llamado busquedaHeroe en componente instanciar el servicio y consultar el metodo buscar heroe
  }

}
