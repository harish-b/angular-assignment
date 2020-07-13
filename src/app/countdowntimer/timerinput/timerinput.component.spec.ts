import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerinputComponent } from './timerinput.component';

describe('TimerinputComponent', () => {
  let component: TimerinputComponent;
  let fixture: ComponentFixture<TimerinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
