import { createReducer, on } from '@ngrx/store';
import { storeBmiResult } from '../actions/bmiCalculator.actions';

export interface State {
  bmiResult: number;
}
export const initialState: State = {
  bmiResult: 0,
};
export const calculatorReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case '[BMI Container Component] BMI result':
      return {
        ...state,
        bmiResult: action.bmiResult,
      };
    default:
      return state;
  }
};
