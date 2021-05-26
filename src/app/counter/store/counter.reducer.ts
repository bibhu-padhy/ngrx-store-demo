import { Action, createReducer, on, State } from '@ngrx/store';
import { decrement, increment, reset, times5 } from './counter.action';

export const initialState = 0;

const featureReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => state = initialState),
  on(times5, (state) => state * 5)
);

export function counterReducer(state = initialState, action: Action) {
  return featureReducer(state, action);
}
