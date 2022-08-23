import { Component, EventEmitter, Output } from '@angular/core';
import { BmiItemModel } from 'src/app/widgets/models/bmiItem.model';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmiCalculator.component.html',
  styleUrls: ['./bmiCalculator.component.css'],
})
export class BMICalculatorComponent {
  bmiResult: number = 0;
  height: number = 0;
  weight: number = 0;
  width: number = 0;
  @Output()
  resultCalculated = new EventEmitter<BmiItemModel>();

  constructor() {}
  setHeight(height: string) {
    this.height = parseInt(height);
  }
  setWeight(weight: string) {
    this.weight = parseInt(weight);
  }
  calculateBMI(): void {
    this.bmiResult = this.weight / ((this.height * this.height) / 10000);
    this.resultCalculated.emit(
      new BmiItemModel(this.height, this.weight, this.bmiResult)
    );
  }

  clearValue(): void {
    this.height = 0;
    this.weight = 0;
    this.bmiResult = 0;
    this.width = 0;
  }
}
