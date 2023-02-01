import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserreqComponent } from './userreq.component';

describe('UserreqComponent', () => {
  let component: UserreqComponent;
  let fixture: ComponentFixture<UserreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserreqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
