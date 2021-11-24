import { createAction, props, Action } from '@ngrx/store';

export enum ActionType {
    SELECT_CITY = "[Search Bar] selected city",
    GET_ROUTE_LIST = "[Main Page] get route list.",
    GET_ROUTE_LIST_SUCCESS = "[Main Page] get route list success.",
    GET_ROUTE_LIST_FAILED = "[Main Page] get route list failed.",
    SELECT_ROUTE = "[Route List Page] selected route",
    GET_ROUTE_DETAIL_INFO = "[Route List Page] get route detail info.",
    GET_ROUTE_DETAIL_INFO_SUCCESS = "[Route List Page] get route detail info success.",
    GET_ROUTE_DETAIL_INFO_FAILED = "[Route List Page] get route detail info failed.",
    GET_ROUTE_ESTIMATED_INFO = "[Route Detail Page] get route estimated info.",
    GET_ROUTE_ESTIMATED_INFO_SUCCESS = "[Route Detail Page] get route estimated info success.",
    GET_ROUTE_ESTIMATED_INFO_FAILED = "[Route Detail Page] get route estimated info failed.",
}
export const SelectedCityAction = createAction(
    ActionType.SELECT_CITY,
    props<{ payload:{city: string }}>()
);

export const SelectedRouteAction = createAction(
    ActionType.SELECT_ROUTE,
    props<{ payload:{city: string, routeUID: string }}>()
);

export const GetRouteListAction = createAction(
    ActionType.GET_ROUTE_LIST,
    props<{ payload:{city: string, keyword: string }}>()
);

export const GetRouteListSuccessAction = createAction(
    ActionType.GET_ROUTE_LIST_SUCCESS,
    props<{ payload:{routeList: any }}>()
);

export const GetRouteListFailedAction = createAction(
    ActionType.GET_ROUTE_LIST_FAILED,
    props<{ payload:{error: any }}>()
);

export const GetRouteDetailInfoAction = createAction(
    ActionType.GET_ROUTE_DETAIL_INFO,
    props<{ payload:{city: string, routeUID: string }}>()
);

export const GetRouteDetailInfoSuccessAction = createAction(
    ActionType.GET_ROUTE_DETAIL_INFO_SUCCESS,
    props<{ payload:{routeDetailInfo: any }}>()
);

export const GetRouteDetailInfoFailedAction = createAction(
    ActionType.GET_ROUTE_DETAIL_INFO_FAILED,
    props<{ payload:{error: any }}>()
);

export const GetRouteEstimatedInfoAction = createAction(
    ActionType.GET_ROUTE_ESTIMATED_INFO,
    props<{ payload:{city: string, routeUID: string }}>()
);

export const GetRouteEstimatedInfoSuccessAction = createAction(
    ActionType.GET_ROUTE_ESTIMATED_INFO_SUCCESS,
    props<{ payload:{routeEstimatedInfo: any }}>()
);

export const GetRouteEstimatedInfoFailedAction = createAction(
    ActionType.GET_ROUTE_ESTIMATED_INFO_FAILED,
    props<{ payload:{error: any }}>()
);


export interface AllAction {
    payload: any,
    type: string,
    city: string;
    routeUID: string;
    keyword: string;
    routeList: Array<RouteInfo>;
    routeDetailInfo: RouteDetailInfo;
    routeEstimatedInfo: RouteEstimatedInfo;
    error: any;
}

export interface RouteInfo {

}

export interface RouteDetailInfo {

}

export interface RouteEstimatedInfo {

}

// export class SelectedCityAction implements Action {
//     readonly type = ActionType.SELECT_CITY;
//     constructor(public payload: { city: string }) { }
// }

// export class SelectedRouteAction implements Action {
//     readonly type = ActionType.SELECT_ROUTE;
//     constructor(public payload: { city: string, routeUID: string }) { }
// }

// export class GetRouteListAction implements Action {
//     readonly type = ActionType.GET_ROUTE_LIST;
//     constructor(public payload: { city: string, keyword: string }) { }
// }

// export class GetRouteListSuccessAction implements Action {
//     readonly type = ActionType.GET_ROUTE_LIST_SUCCESS;
//     constructor(public payload: { routeList: any }) { }
// }

// export class GetRouteListFailedAction implements Action {
//     readonly type = ActionType.GET_ROUTE_LIST_FAILED;
//     constructor(public payload: { error: any }) { }
// }

// export class GetRouteDetailInfoAction implements Action {
//     readonly type = ActionType.GET_ROUTE_DETAIL_INFO;
//     constructor(public payload: { city: string, routeUID: string }) { }
// }

// export class GetRouteDetailInfoSuccessAction implements Action {
//     readonly type = ActionType.GET_ROUTE_DETAIL_INFO_SUCCESS;
//     constructor(public payload: { routeDetailInfo: any }) { }
// }

// export class GetRouteDetailInfoFailedAction implements Action {
//     readonly type = ActionType.GET_ROUTE_DETAIL_INFO_FAILED;
//     constructor(public payload: { error: any }) { }
// }

// export class GetRouteEstimatedInfoAction implements Action {
//     readonly type = ActionType.GET_ROUTE_ESTIMATED_INFO;
//     constructor(public payload: { city: string, routeUID: string }) { }
// }

// export class GetRouteEstimatedInfoSuccessAction implements Action {
//     readonly type = ActionType.GET_ROUTE_ESTIMATED_INFO_SUCCESS;
//     constructor(public payload: { routeEstimatedInfo: any }) { }
// }

// export class GetRouteEstimatedInfoFailedAction implements Action {
//     readonly type = ActionType.GET_ROUTE_ESTIMATED_INFO_FAILED;
//     constructor(public payload: { error: any }) { }
// }


