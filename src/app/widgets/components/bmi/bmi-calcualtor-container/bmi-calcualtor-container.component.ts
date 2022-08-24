import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { BmiCalculatorService } from 'src/app/services/bmiCalculatorService.service';
import { ILogWriter } from 'src/app/services/iLogger.contract';
import { BmiItemModel } from 'src/app/widgets/models/bmiItem.model';
import { BmiCalculatorHistoryComponent } from '../bmi-calculator-history/bmi-calculator-history.component';
@Component({
  selector: 'app-bmi-calcualtor-container',
  templateUrl: './bmi-calcualtor-container.component.html',
  styleUrls: ['./bmi-calcualtor-container.component.css'],
})
export class BmiCalcualtorContainerComponent implements OnInit {
  logger: ILogWriter;
  constructor(
    private bmiCalculator: BmiCalculatorService,
    @Inject('logger') _logger: ILogWriter
  ) {
    this.logger = _logger;
  }
  bmiData = new BmiItemModel(0, 0, 0);
  bmiResultValue: number = 0;

  @ViewChild('bmiCHS')
  historyViewChild: BmiCalculatorHistoryComponent;

  ngOnInit(): void {}

  // onBmiresultCalculated(data: BmiItemModel) {
  //   this.bmiData = data;
  //   this.bmiResultValue = this.bmiCalculator.resultCalculator(
  //     data.weight,
  //     data.height
  //   );

  //   this.bmiData.result = this.bmiResultValue;

  //   this.historyViewChild.bmiResultHistory.push(this.bmiData);
  // }
  onBmiresultCalculated(data: BmiItemModel) {
    this.bmiData = data;
    this.bmiCalculator.calculateBmi(data.weight, data.height).subscribe(
      (data: any) => {
        this.bmiResultValue = data.bmiResult;
        this.bmiData.result = this.bmiResultValue;
        this.historyViewChild.showHistoryData();
        this.logger.write('Success');
      },
      (err: any) => {},
      () => {}
    );
  }
}
