import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TclickloggerComponent } from './tclicklogger.component';

describe('TclickloggerComponent', () => {
  let component: TclickloggerComponent;
  let fixture: ComponentFixture<TclickloggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TclickloggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TclickloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
