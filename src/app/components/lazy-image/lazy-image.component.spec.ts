import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LazyImageComponent } from './lazy-image.component';

describe('LazyImageComponent', () => {
  let component: LazyImageComponent;
  let fixture: ComponentFixture<LazyImageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
