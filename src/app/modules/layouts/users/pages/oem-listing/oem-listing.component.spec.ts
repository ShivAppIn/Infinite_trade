import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OemListingComponent } from './oem-listing.component';

describe('OemListingComponent', () => {
  let component: OemListingComponent;
  let fixture: ComponentFixture<OemListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OemListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OemListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
