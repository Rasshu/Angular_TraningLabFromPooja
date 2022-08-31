import { Inject, inject, Injectable } from '@angular/core';
import { APILoggerService } from './apiLogger.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BmiCalculatorService {
  logger: APILoggerService;
  constructor(
    @Inject('logger') _logger: APILoggerService,
    private httpClient: HttpClient
  ) {
    this.logger = _logger;
  }

  // resultCalculator(weight: number, height: number) {
  //   let result = weight / ((height * height) / 10000);
  //   this.logger.write(result.toString());
  //   return result;
  // }
  calculateBmi(weight: number, height: number) {
    console.log(weight, height);
    return this.httpClient.post('http://localhost:3200/bmi/calculate', {
      height: height,
      weight: weight,
    });
  }

  showHistory() {
    // fetch the history of the calcualted results
    return this.httpClient.get('http://localhost:3200/bmi/history');
  }
}
