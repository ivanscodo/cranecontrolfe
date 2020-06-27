import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaneformComponent } from './laneform.component';

describe('LaneformComponent', () => {
  let component: LaneformComponent;
  let fixture: ComponentFixture<LaneformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaneformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaneformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
