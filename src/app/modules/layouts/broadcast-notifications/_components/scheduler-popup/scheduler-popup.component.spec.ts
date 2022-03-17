import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerPopupComponent } from './scheduler-popup.component';

describe('SchedulerPopupComponent', () => {
  let component: SchedulerPopupComponent;
  let fixture: ComponentFixture<SchedulerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
