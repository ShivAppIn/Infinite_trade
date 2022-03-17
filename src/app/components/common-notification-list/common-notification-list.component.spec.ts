import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonNotificationListComponent } from './common-notification-list.component';

describe('CommonNotificationListComponent', () => {
  let component: CommonNotificationListComponent;
  let fixture: ComponentFixture<CommonNotificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonNotificationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonNotificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
