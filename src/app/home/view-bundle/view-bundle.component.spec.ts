import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBundleComponent } from './view-bundle.component';

describe('ViewBundleComponent', () => {
  let component: ViewBundleComponent;
  let fixture: ComponentFixture<ViewBundleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBundleComponent]
    });
    fixture = TestBed.createComponent(ViewBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
