import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaHeroeComponent } from './busqueda-heroe.component';

describe('BusquedaHeroeComponent', () => {
  let component: BusquedaHeroeComponent;
  let fixture: ComponentFixture<BusquedaHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
