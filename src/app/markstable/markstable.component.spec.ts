import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkstableComponent } from './markstable.component';

describe('MarkstableComponent', () => {
  let component: MarkstableComponent;
  let fixture: ComponentFixture<MarkstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
