import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Countdowntimer2Component } from './countdowntimer2.component';

describe('Countdowntimer2Component', () => {
  let component: Countdowntimer2Component;
  let fixture: ComponentFixture<Countdowntimer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Countdowntimer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Countdowntimer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
