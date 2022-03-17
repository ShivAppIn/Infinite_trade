import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCmsContentComponent } from './global-cms-content.component';

describe('GlobalCmsContentComponent', () => {
  let component: GlobalCmsContentComponent;
  let fixture: ComponentFixture<GlobalCmsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalCmsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCmsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
