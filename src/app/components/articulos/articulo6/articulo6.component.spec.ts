import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articulo6Component } from './articulo6.component';

describe('Articulo6Component', () => {
  let component: Articulo6Component;
  let fixture: ComponentFixture<Articulo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Articulo6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Articulo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
