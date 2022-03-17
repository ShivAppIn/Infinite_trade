import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatTableRendererComponent } from './mat-table-renderer.component';

describe('MatTableRendererComponent', () => {
  let component: MatTableRendererComponent;
  let fixture: ComponentFixture<MatTableRendererComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MatTableRendererComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
