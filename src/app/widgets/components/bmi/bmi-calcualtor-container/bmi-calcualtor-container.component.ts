import { Component, OnInit } from '@angular/core';
import { BmiItemModel } from 'src/app/widgets/models/bmiItem.model';
type Nullable<T> = T | null;
@Component({
  selector: 'app-bmi-calcualtor-container',
  templateUrl: './bmi-calcualtor-container.component.html',
  styleUrls: ['./bmi-calcualtor-container.component.css'],
})
export class BmiCalcualtorContainerComponent implements OnInit {
  constructor() {}
  bmiData?: BmiItemModel;
  ngOnInit(): void {}

  onBmiresultCalculated(data: BmiItemModel) {
    this.bmiData = data;
  }
}
