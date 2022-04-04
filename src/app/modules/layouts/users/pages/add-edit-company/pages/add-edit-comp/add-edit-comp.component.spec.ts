import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCompComponent } from './add-edit-comp.component';

describe('AddEditCompComponent', () => {
  let component: AddEditCompComponent;
  let fixture: ComponentFixture<AddEditCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
