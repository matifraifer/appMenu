import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPostComponent } from './data-post.component';

describe('DataPostComponent', () => {
  let component: DataPostComponent;
  let fixture: ComponentFixture<DataPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
