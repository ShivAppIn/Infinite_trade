import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAdminsDetailComponent } from './sub-admins-detail.component';

describe('SubAdminsDetailComponent', () => {
  let component: SubAdminsDetailComponent;
  let fixture: ComponentFixture<SubAdminsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubAdminsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAdminsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
