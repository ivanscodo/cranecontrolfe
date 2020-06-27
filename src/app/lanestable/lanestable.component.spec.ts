import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanestableComponent } from './lanestable.component';

describe('LanestableComponent', () => {
  let component: LanestableComponent;
  let fixture: ComponentFixture<LanestableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanestableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
