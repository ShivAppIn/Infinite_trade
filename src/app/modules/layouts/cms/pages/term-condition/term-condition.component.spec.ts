import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TermConditionComponent } from './term-condition.component';

describe('TermConditionComponent', () => {
  let component: TermConditionComponent;
  let fixture: ComponentFixture<TermConditionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TermConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
