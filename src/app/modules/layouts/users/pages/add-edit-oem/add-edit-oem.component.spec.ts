import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOemComponent } from './add-edit-oem.component';

describe('AddEditOemComponent', () => {
  let component: AddEditOemComponent;
  let fixture: ComponentFixture<AddEditOemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditOemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditOemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
