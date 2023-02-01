import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetdoctorComponent } from './meetdoctor.component';

describe('MeetdoctorComponent', () => {
  let component: MeetdoctorComponent;
  let fixture: ComponentFixture<MeetdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetdoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
