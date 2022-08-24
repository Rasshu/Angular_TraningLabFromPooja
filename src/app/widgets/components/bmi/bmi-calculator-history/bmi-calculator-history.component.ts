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
export class BmiCalculatorHistoryComponent implements OnInit {
  constructor() {}
  @Input()
  bmiResultData = new BmiItemModel(0, 0, 0);
  bmiResultHistory: Array<any> = [];

  ngOnInit(): void {}
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(
  //     "changes['bmiResultData'].firstChange",
  //     changes['bmiResultData'].firstChange
  //   );
  //   if (!changes['bmiResultData'].firstChange) {
  //     this.bmiResultHistory.push(this.bmiResultData);
  //     console.log('bmiResultHistory', this.bmiResultHistory);
  //   }
  // }
}
