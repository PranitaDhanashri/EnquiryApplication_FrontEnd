import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTypeAddComponent } from './status-type-add.component';

describe('StatusTypeAddComponent', () => {
  let component: StatusTypeAddComponent;
  let fixture: ComponentFixture<StatusTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusTypeAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
