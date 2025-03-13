import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSegmentListComponent } from './business-segment-list.component';

describe('BusinessSegmentListComponent', () => {
  let component: BusinessSegmentListComponent;
  let fixture: ComponentFixture<BusinessSegmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessSegmentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessSegmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
