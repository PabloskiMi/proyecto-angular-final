import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articulo2Component } from './articulo2.component';

describe('Articulo2Component', () => {
  let component: Articulo2Component;
  let fixture: ComponentFixture<Articulo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Articulo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Articulo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
