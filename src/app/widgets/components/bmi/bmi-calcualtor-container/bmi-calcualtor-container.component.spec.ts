import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalcualtorContainerComponent } from './bmi-calcualtor-container.component';

describe('BmiCalcualtorContainerComponent', () => {
  let component: BmiCalcualtorContainerComponent;
  let fixture: ComponentFixture<BmiCalcualtorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiCalcualtorContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiCalcualtorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
