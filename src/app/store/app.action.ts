import { createAction, props } from '@ngrx/store';

export enum ActionType {
    SelectedCity = "[Search Bar] selected city",
    SelectedRoute = "[Route List] selected route",
    GetRouteList = "[Main] get route list.",
    UpdateRouteList = "[Main] update route list.",
    GetRouteDetail = "[Route List] get route detail.",
    UpdateRouteDetail = "[Route List] update route detail.",
    SwitchBusTerminus = "[Route Detail] Switch bus terminus."
}

export const SelectedCity = createAction(
    ActionType.SelectedCity,
    props<{ city: string }>()
);

export const SelectedRoute = createAction(
    ActionType.SelectedRoute,
    props<{ city: string, routeUID: string }>()
);

export const GetRouteList = createAction(
    ActionType.GetRouteList,
    props<{ city: string, keyword: String }>()
);

export const UpdateRouteList = createAction(
    ActionType.UpdateRouteList,
    props<{ routeList: object }>()
);

export const GetRouteDetail = createAction(
    ActionType.GetRouteDetail,
    props<{ city: string, routeUID: string }>()
);

export const UpdateRouteDetail = createAction(
    ActionType.UpdateRouteDetail,
    props<{ routeDetail: object }>()
);

export const SwitchBusTerminus = createAction(
    ActionType.SwitchBusTerminus
);


