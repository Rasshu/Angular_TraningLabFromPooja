import { NgModule } from '@angular/core';
import { AppBannerComponent } from './components/appBanner/appBanner.component';
import { AppFooterComponent } from './components/appFooter/appFooter.component';
import { TimerComponent } from './components/timer/timer.component';
import { BMICalculatorComponent } from './components/bmi/bmiCalculator/bmiCalculator.component';
import { FormsModule } from '@angular/forms';
import { DocumentComponent } from './components/document/document/document.component';
import { BmiCalcualtorContainerComponent } from './components/bmi/bmi-calcualtor-container/bmi-calcualtor-container.component';
import { BmiCalculatorHistoryComponent } from './components/bmi/bmi-calculator-history/bmi-calculator-history.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppBannerComponent,
    AppFooterComponent,
    TimerComponent,
    BMICalculatorComponent,
    DocumentComponent,
    BmiCalcualtorContainerComponent,
    BmiCalculatorHistoryComponent,
  ],
  exports: [
    AppBannerComponent,
    AppFooterComponent,
    TimerComponent,
    BMICalculatorComponent,
    DocumentComponent,
    BmiCalcualtorContainerComponent,
    BmiCalculatorHistoryComponent,
  ],
  imports: [FormsModule, CommonModule],
})
export class WidgetModule {}
