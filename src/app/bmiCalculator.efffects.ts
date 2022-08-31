import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import {
  calculate,
  storeBmiResult,
  fetchHistory,
  storeHistory,
} from './actions/bmiCalculator.actions';
import { BmiCalculatorService } from './services/bmiCalculatorService.service';
@Injectable()
export class BMICalculatorEffects {
  calculateBMI$ = createEffect(() =>
    this.actions$.pipe(
      ofType(calculate),
      mergeMap((action) =>
        this.bmiCalculatorService
          .calculateBmi(action.weight, action.height)
          .pipe(
            map((data: any) => storeBmiResult({ bmiResult: data.bmiResult })),
            catchError((error) => of(error))
          )
      )
    )
  );

  showBmiHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchHistory),
      mergeMap((action) =>
        this.bmiCalculatorService.showHistory().pipe(
          map((data: any) => {
            //console.log(data);
            return storeHistory({historyResult:data});
          }),
          catchError((err) => of(err))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private bmiCalculatorService: BmiCalculatorService
  ) {}
}
