import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDComponent } from './history-d.component';

describe('HistoryDComponent', () => {
  let component: HistoryDComponent;
  let fixture: ComponentFixture<HistoryDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
