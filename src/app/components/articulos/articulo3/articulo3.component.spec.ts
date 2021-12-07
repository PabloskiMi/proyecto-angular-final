import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articulo3Component } from './articulo3.component';

describe('Articulo3Component', () => {
  let component: Articulo3Component;
  let fixture: ComponentFixture<Articulo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Articulo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Articulo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
