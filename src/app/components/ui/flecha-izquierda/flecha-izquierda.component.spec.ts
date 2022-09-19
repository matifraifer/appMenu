import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlechaIzquierdaComponent } from './flecha-izquierda.component';

describe('FlechaIzquierdaComponent', () => {
  let component: FlechaIzquierdaComponent;
  let fixture: ComponentFixture<FlechaIzquierdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlechaIzquierdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlechaIzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
