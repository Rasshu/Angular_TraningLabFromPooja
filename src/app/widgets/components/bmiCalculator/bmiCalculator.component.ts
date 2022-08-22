import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmiCalculator.component.html',
  styleUrls: ['./bmiCalculator.component.css'],
})
export class BMICalculatorComponent {
  bmiResult: string = '';
  constructor() {}
  calculateBMI(): void {
    let height: any = (<HTMLInputElement>document.getElementById('height'))
      .value;
    let weight: any = (<HTMLInputElement>document.getElementById('weight'))
      .value;
    this.bmiResult = (weight / ((height * height) / 10000)).toFixed(2);
  }
}
