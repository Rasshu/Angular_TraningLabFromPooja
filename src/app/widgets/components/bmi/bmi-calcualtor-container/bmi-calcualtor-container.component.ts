import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { BmiCalculatorService } from 'src/app/services/bmiCalculatorService.service';
import { ILogWriter } from 'src/app/services/iLogger.contract';
import { BmiItemModel } from 'src/app/widgets/models/bmiItem.model';
import { Store } from '@ngrx/store';
import { calculate } from '../../../../actions/bmiCalculator.actions';
import { BmiCalculatorHistoryComponent } from '../bmi-calculator-history/bmi-calculator-history.component';
@Component({
  selector: 'app-bmi-calcualtor-container',
  templateUrl: './bmi-calcualtor-container.component.html',
  styleUrls: ['./bmi-calcualtor-container.component.css'],
})
export class BmiCalcualtorContainerComponent implements OnInit {
  bmiResult$ = this.store.select('bmiResult');
  logger: ILogWriter;

  constructor(
    private bmiCalculator: BmiCalculatorService,
    @Inject('logger') private _logger: ILogWriter,
    private store: Store<{ bmiResult: number }>
  ) {
    this.logger = _logger;
  }
  bmiData = new BmiItemModel(0, 0, 0);
  bmiResultValue: number = 0;

  @ViewChild('bmiCHS')
  historyViewChild: BmiCalculatorHistoryComponent;

  ngOnInit(): void {}
  /*Using service direclty */
  // onBmiresultCalculated(data: BmiItemModel) {
  //   this.bmiData = data;
  //   this.bmiResultValue = this.bmiCalculator.resultCalculator(
  //     data.weight,
  //     data.height
  //   );
  //   this.bmiData.result = this.bmiResultValue;
  //   this.historyViewChild.bmiResultHistory.push(this.bmiData);
  // }
  /*Using ngRX store to disptach the action to store the value */
  onBmiresultCalculated(data: BmiItemModel) {
    this.bmiData = data;
    this.store.dispatch(
      calculate({ weight: data.weight, height: data.height })
    );
    this.historyViewChild.showHistoryData();
  }
}
