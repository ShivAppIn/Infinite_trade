import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BannersListingComponent } from './banners-listing.component';

describe('BannersListingComponent', () => {
  let component: BannersListingComponent;
  let fixture: ComponentFixture<BannersListingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BannersListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
