import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articulo4Component } from './articulo4.component';

describe('Articulo4Component', () => {
  let component: Articulo4Component;
  let fixture: ComponentFixture<Articulo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Articulo4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Articulo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
