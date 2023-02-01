import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivetmeetingComponent } from './privetmeeting.component';

describe('PrivetmeetingComponent', () => {
  let component: PrivetmeetingComponent;
  let fixture: ComponentFixture<PrivetmeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivetmeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivetmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
