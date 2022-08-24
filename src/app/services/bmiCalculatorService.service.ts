import { Inject, inject, Injectable } from '@angular/core';
import { APILoggerService } from './apiLogger.service';

@Injectable()
export class BmiCalculatorService {
  logger: APILoggerService;
  constructor(@Inject('logger') _logger: APILoggerService) {
    this.logger = _logger;
  }

  resultCalculator(weight: number, height: number) {
    let result = weight / ((height * height) / 10000);
    this.logger.write(result.toString());
    return result;
  }
}
