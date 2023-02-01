import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmeetingComponent } from './cmeeting.component';

describe('CmeetingComponent', () => {
  let component: CmeetingComponent;
  let fixture: ComponentFixture<CmeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
