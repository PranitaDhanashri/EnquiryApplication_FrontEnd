import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryTypeAddComponent } from './enquiry-type-add.component';

describe('EnquiryTypeAddComponent', () => {
  let component: EnquiryTypeAddComponent;
  let fixture: ComponentFixture<EnquiryTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnquiryTypeAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
