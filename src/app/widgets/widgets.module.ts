import { NgModule } from '@angular/core';
import { AppBannerComponent } from './components/appBanner/appBanner.component';
import { AppFooterComponent } from './components/appFooter/appFooter.component';
import { TimerComponent } from './components/timer/timer.component';
import { BMICalculatorComponent } from './components/bmiCalculator/bmiCalculator.component';

@NgModule({
  declarations: [
    AppBannerComponent,
    AppFooterComponent,
    TimerComponent,
    BMICalculatorComponent,
  ],
  exports: [
    AppBannerComponent,
    AppFooterComponent,
    TimerComponent,
    BMICalculatorComponent,
  ],
})
export class WidgetModule {}
