import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articulo1Component } from './articulo1.component';

describe('Articulo1Component', () => {
  let component: Articulo1Component;
  let fixture: ComponentFixture<Articulo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Articulo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Articulo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
