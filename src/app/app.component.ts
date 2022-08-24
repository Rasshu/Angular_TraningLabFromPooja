import { Component, Inject, inject } from '@angular/core';
import { ConsoleLoggerService } from './services/consoleLogger.service';
import { ILogWriter } from './services/iLogger.contract';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-demo';
  // logger = new ConsoleLoggerService();
  logger?: ILogWriter;
  // constructor(_logger: ConsoleLoggerService /*token*/) {
  //   // constructor create the dependency
  //   this.logger = _logger;
  //   this.logger.write('App component console');
  // }
  constructor(@Inject('logger') _logger: ILogWriter /*token*/) {
    // constructor create the dependency
    this.logger = _logger;
    this.logger.write('App component console');
  }
}
