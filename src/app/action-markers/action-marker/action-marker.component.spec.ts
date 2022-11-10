import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMarkerComponent } from './action-marker.component';

describe('ActionMarkersComponent', () => {
  let component: ActionMarkerComponent;
  let fixture: ComponentFixture<ActionMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionMarkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
