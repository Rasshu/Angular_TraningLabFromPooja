import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BmiCalculatorService } from 'src/app/services/bmiCalculatorService.service';
import { BmiItemModel } from 'src/app/widgets/models/bmiItem.model';
import { fetchHistory } from '../../../../actions/bmiCalculator.actions';

@Component({
  selector: 'app-bmi-calculator-history',
  templateUrl: './bmi-calculator-history.component.html',
  styleUrls: ['./bmi-calculator-history.component.css'],
})
export class BmiCalculatorHistoryComponent implements OnInit {
  bmiResultHistory$ = this.store.select('bmiResultHistory');
  constructor(
    private bmiService: BmiCalculatorService,
    private store: Store<{ bmiResultHistory: Array<any> }>
  ) {}
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
  showHistoryData() {
    // this.bmiService.showHistory().subscribe((data: any) => {
    //   this.bmiResultHistory = data;
    // });
    this.store.dispatch(fetchHistory());
    this.bmiResultHistory$.subscribe((data: any) => {
      this.bmiResultHistory = data.bmiResultHistory;
    });
    console.log('bmiResultHistory', this.bmiResultHistory$);
  }
}
