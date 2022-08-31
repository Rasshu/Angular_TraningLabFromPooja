import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsModule } from './accounts/accounts.module';

import { AppComponent } from './app.component';
import { OutputComponent } from './output/output.component';
import { APILoggerService } from './services/apiLogger.service';
import { BmiCalculatorService } from './services/bmiCalculatorService.service';
import { ConsoleLoggerService } from './services/consoleLogger.service';
import { WidgetModule } from './widgets/widgets.module';
import { StoreModule } from '@ngrx/store';
import { calculatorReducer } from './reducers/bmiCalculator.reducer';
import { historyReducer } from './reducers/bmiHistory.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BMICalculatorEffects } from './bmiCalculator.efffects';

@NgModule({
  declarations: [AppComponent, OutputComponent],
  imports: [
    BrowserModule,
    WidgetModule,
    AccountsModule,
    HttpClientModule,
    StoreModule.forRoot({
      bmiResult: calculatorReducer,
      bmiResultHistory: historyReducer,
    }),
    EffectsModule.forRoot([BMICalculatorEffects]),
  ],
  providers: [
    {
      useClass: APILoggerService,
      provide: 'logger',
    },
    BmiCalculatorService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
