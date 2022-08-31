import { createAction, props } from '@ngrx/store';
export const calculate = createAction(
  '[BMI Container Component] calculate',
  props<{ weight: number; height: number }>()
);

export const storeBmiResult = createAction(
  '[BMI Container Component] BMI result',
  props<{ bmiResult: number }>()
);
export const fetchHistory = createAction('[BMI History Component] BMI History');
export const storeHistory = createAction(
  '[BMI History show] Fetch BMI History',
  props<{ historyResult: Array<any> }>()
);
