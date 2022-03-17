import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BannersDetailsComponent } from './banners-details.component';

describe('BannersDetailsComponent', () => {
  let component: BannersDetailsComponent;
  let fixture: ComponentFixture<BannersDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BannersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
