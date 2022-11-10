import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeishasComponent } from './geishas.component';

describe('GeishasComponent', () => {
  let component: GeishasComponent;
  let fixture: ComponentFixture<GeishasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeishasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeishasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
