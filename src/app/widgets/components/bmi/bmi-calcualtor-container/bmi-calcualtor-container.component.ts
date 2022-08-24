import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { BmiCalculatorService } from 'src/app/services/bmiCalculatorService.service';
import { BmiItemModel } from 'src/app/widgets/models/bmiItem.model';
import { BmiCalculatorHistoryComponent } from '../bmi-calculator-history/bmi-calculator-history.component';
import { BMICalculatorComponent } from '../bmiCalculator/bmiCalculator.component';
@Component({
  selector: 'app-bmi-calcualtor-container',
  templateUrl: './bmi-calcualtor-container.component.html',
  styleUrls: ['./bmi-calcualtor-container.component.css'],
})
export class BmiCalcualtorContainerComponent implements OnInit {
  constructor(private bmiCalculator: BmiCalculatorService) {}
  bmiData = new BmiItemModel(0, 0, 0);
  bmiResultValue: number = 0;

  @ViewChild('bmiCHS')
  historyViewChild: BmiCalculatorHistoryComponent;

  ngOnInit(): void {}

  onBmiresultCalculated(data: BmiItemModel) {
    this.bmiData = data;
    this.bmiResultValue = this.bmiCalculator.resultCalculator(
      data.weight,
      data.height
    );
    this.bmiData.result = this.bmiResultValue;

    this.historyViewChild.bmiResultHistory.push(this.bmiData);
    // this.bmiCalculator.resultCalculator(data.weight, data.height);
  }
}
