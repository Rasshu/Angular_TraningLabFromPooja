import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmiCalculator.component.html',
  styleUrls: ['./bmiCalculator.component.css'],
})
export class BMICalculatorComponent {
  bmiResult: string = '';
  height: number = 0;
  weight: number = 0;
  constructor() {}
  setHeight(height: string) {
    this.height = parseInt(height);
  }
  setWeight(weight: string) {
    this.weight = parseInt(weight);
  }
  calculateBMI(): void {
    this.bmiResult = (
      this.weight /
      ((this.height * this.height) / 10000)
    ).toFixed(2);
  }
}
