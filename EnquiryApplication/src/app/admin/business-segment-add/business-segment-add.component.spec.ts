import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSegmentAddComponent } from './business-segment-add.component';

describe('BusinessSegmentAddComponent', () => {
  let component: BusinessSegmentAddComponent;
  let fixture: ComponentFixture<BusinessSegmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessSegmentAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessSegmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
