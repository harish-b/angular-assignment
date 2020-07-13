import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinputComponent } from './tinput.component';

describe('TinputComponent', () => {
  let component: TinputComponent;
  let fixture: ComponentFixture<TinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
