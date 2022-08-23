import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalculatorHistoryComponent } from './bmi-calculator-history.component';

describe('BmiCalculatorHistoryComponent', () => {
  let component: BmiCalculatorHistoryComponent;
  let fixture: ComponentFixture<BmiCalculatorHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiCalculatorHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiCalculatorHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
