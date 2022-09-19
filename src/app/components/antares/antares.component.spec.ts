import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntaresComponent } from './antares.component';

describe('AntaresComponent', () => {
  let component: AntaresComponent;
  let fixture: ComponentFixture<AntaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
