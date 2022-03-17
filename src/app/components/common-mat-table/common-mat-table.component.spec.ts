import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonMatTableComponent } from './common-mat-table.component';

describe('CommonMatTableComponent', () => {
  let component: CommonMatTableComponent;
  let fixture: ComponentFixture<CommonMatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonMatTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
