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

@NgModule({
  declarations: [AppComponent, OutputComponent],
  imports: [BrowserModule, WidgetModule, AccountsModule, HttpClientModule],
  providers: [
    {
      useClass: APILoggerService,
      provide: 'logger',
    },
    // {useClass:BmiCalculatorService, provide:BmiCalculatorService},
    BmiCalculatorService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
