import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerclickloggerComponent } from './timerclicklogger.component';

describe('TimerclickloggerComponent', () => {
  let component: TimerclickloggerComponent;
  let fixture: ComponentFixture<TimerclickloggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerclickloggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerclickloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
