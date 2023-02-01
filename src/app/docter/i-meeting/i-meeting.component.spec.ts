import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMeetingComponent } from './i-meeting.component';

describe('IMeetingComponent', () => {
  let component: IMeetingComponent;
  let fixture: ComponentFixture<IMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
