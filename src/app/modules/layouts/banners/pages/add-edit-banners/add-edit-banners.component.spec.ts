import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddEditBannersComponent } from './add-edit-banners.component';

describe('AddEditBannersComponent', () => {
  let component: AddEditBannersComponent;
  let fixture: ComponentFixture<AddEditBannersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditBannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
