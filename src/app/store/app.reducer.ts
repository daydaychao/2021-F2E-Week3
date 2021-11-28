import { Action, createReducer, on } from '@ngrx/store';
import * as AppAction from '../store/app.action';

export const initialSelectedCity: string = "";
export const initialSelectedRouteUID: string = "";
export const initialRouteList: Array<any> = [];
export const initialRouteDetailInfo: any = {};
export const initialRouteEstimatedInfo: any = {};

export const SelectedCityReducer = createReducer(
  initialSelectedCity,
  on(AppAction.SelectedCityAction, (state, action) => action.payload.city)
);

export const SelectedRouteUIDReducer = createReducer(
  initialSelectedRouteUID,
  on(AppAction.SelectedRouteAction, (state, action) => action.payload.routeUID)
);

export const RouteListReducer = createReducer(
  initialRouteList,
  on(AppAction.GetRouteListSuccessAction, (state, action) => action.payload.routeList),
  on(AppAction.GetRouteListFailedAction, (state, action) => initialRouteList)
);

export const RouteDetailInfoReducer = createReducer(
  initialRouteDetailInfo,
  on(AppAction.GetRouteDetailInfoSuccessAction, (state, action) => action.payload.routeDetailInfo),
  on(AppAction.GetRouteDetailInfoFailedAction, (state, action) => initialRouteDetailInfo)
);

export const RouteEstimatedInfoReducer = createReducer(
  initialRouteEstimatedInfo,
  on(AppAction.GetRouteEstimatedInfoSuccessAction, (state, action) => action.payload.routeEstimatedInfo),
  on(AppAction.GetRouteEstimatedInfoFailedAction, (state, action) => initialRouteEstimatedInfo)
);