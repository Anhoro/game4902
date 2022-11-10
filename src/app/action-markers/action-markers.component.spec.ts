import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMarkersComponent } from './action-markers.component';

describe('ActionMarkersComponent', () => {
  let component: ActionMarkersComponent;
  let fixture: ComponentFixture<ActionMarkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionMarkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionMarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
