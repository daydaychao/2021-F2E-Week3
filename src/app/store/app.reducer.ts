import { Action, createReducer, on } from '@ngrx/store';
import * as AppAction from '../store/app.action';

export const initialCity: string = "";

export const CityReducer = createReducer(
    initialCity,
    on(AppAction.SelectedCity, (state, action) => action.city)
  );