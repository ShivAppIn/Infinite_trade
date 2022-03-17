import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchRendererComponent } from './search-renderer.component';

describe('SearchRendererComponent', () => {
  let component: SearchRendererComponent;
  let fixture: ComponentFixture<SearchRendererComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchRendererComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
