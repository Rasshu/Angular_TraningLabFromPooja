import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BmiItemModel } from 'src/app/widgets/models/bmiItem.model';

@Component({
  selector: 'app-bmi-calculator-history',
  templateUrl: './bmi-calculator-history.component.html',
  styleUrls: ['./bmi-calculator-history.component.css'],
})
export class BmiCalculatorHistoryComponent implements OnInit, OnChanges {
  constructor() {}
  @Input()
  bmiResultData = new BmiItemModel(0, 0, 0);
  bmiResultHistory: Array<any> = [];

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['bmiResultData'].firstChange) {
      this.bmiResultHistory.push(this.bmiResultData);
    }
  }
}
