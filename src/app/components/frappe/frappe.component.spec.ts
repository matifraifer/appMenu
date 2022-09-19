import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrappeComponent } from './frappe.component';

describe('FrappeComponent', () => {
  let component: FrappeComponent;
  let fixture: ComponentFixture<FrappeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrappeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrappeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
