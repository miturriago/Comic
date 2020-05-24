import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainsDetailsComponent } from './villains-details.component';

describe('VillainsDetailsComponent', () => {
  let component: VillainsDetailsComponent;
  let fixture: ComponentFixture<VillainsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
