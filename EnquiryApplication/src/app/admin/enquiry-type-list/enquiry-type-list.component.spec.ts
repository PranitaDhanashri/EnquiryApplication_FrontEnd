import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryTypeListComponent } from './enquiry-type-list.component';

describe('EnquiryTypeListComponent', () => {
  let component: EnquiryTypeListComponent;
  let fixture: ComponentFixture<EnquiryTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnquiryTypeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
