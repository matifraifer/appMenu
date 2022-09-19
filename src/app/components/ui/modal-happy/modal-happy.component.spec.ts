import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHappyComponent } from './modal-happy.component';

describe('ModalHappyComponent', () => {
  let component: ModalHappyComponent;
  let fixture: ComponentFixture<ModalHappyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHappyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHappyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
