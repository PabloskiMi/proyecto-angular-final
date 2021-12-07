import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articulo5Component } from './articulo5.component';

describe('Articulo5Component', () => {
  let component: Articulo5Component;
  let fixture: ComponentFixture<Articulo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Articulo5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Articulo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
