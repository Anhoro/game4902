import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandCardComponent } from './hand-card.component';

describe('HandComponent', () => {
  let component: HandCardComponent;
  let fixture: ComponentFixture<HandCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
