import { createReducer, on } from '@ngrx/store';
import { storeBmiResult } from '../actions/bmiCalculator.actions';

export interface State {
  bmiResultHistory: Array<any>;
}
export const initialState: State = {
  bmiResultHistory: [],
};
export const historyReducer = (state: any = initialState, action: any) => {
  console.log('action', action);
  switch (action.type) {
    case '[BMI History show] Fetch BMI History':
      return { ...state, bmiResultHistory: action.historyResult };
    default:
      return state;
  }
};
