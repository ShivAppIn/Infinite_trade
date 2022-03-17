import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToastNotificationComponent } from './toast-notification.component';

describe('ToastNotificationComponent', () => {
  let component: ToastNotificationComponent;
  let fixture: ComponentFixture<ToastNotificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
