import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTypeListComponent } from './status-type-list.component';

describe('StatusTypeListComponent', () => {
  let component: StatusTypeListComponent;
  let fixture: ComponentFixture<StatusTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusTypeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
