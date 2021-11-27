import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { AppService } from '../service/app.service';
import { ActionType, AllAction, GetRouteDetailInfoAction, GetRouteEstimatedInfoAction, GetRouteListAction } from './app.action';

@Injectable()
export class AppEffect {
    constructor(
        private actions$: Actions,
        private appService: AppService
    ) { }

    getRouteList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionType.GET_ROUTE_LIST),
            switchMap((action: AllAction) => this.appService.getCityRouteData(action.payload.city, action.payload.keyword)
                .pipe(
                    map(routeList => ({ type: ActionType.GET_ROUTE_LIST_SUCCESS, payload: { routeList: routeList } })),
                    catchError((error) => of({ type: ActionType.GET_ROUTE_LIST_FAILED, payload: { error: error } }))
                )
            )
        )
    );

    getRouteDetailInfo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionType.GET_ROUTE_DETAIL_INFO),
            switchMap((action: AllAction) => this.appService.getRouteStopData(action.payload.city, action.payload.routeUID, action.payload.direction)
                .pipe(
                    map(routeDetailInfo => ({ type: ActionType.GET_ROUTE_DETAIL_INFO_SUCCESS, payload: { routeDetailInfo: routeDetailInfo } })),
                    catchError((error) => of({ type: ActionType.GET_ROUTE_DETAIL_INFO_FAILED, payload: { error: error } }))
                )
            )
        )
    );

    getRouteEstimatedInfo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionType.GET_ROUTE_ESTIMATED_INFO),
            switchMap((action: AllAction) => {
                switch (action.payload.city) {
                    case "Hsinchu":
                    case "HsinchuCounty":
                    case "MiaoliCounty":
                    case "ChanghuaCounty":
                    case "NantouCounty":
                    case "YunlinCounty":
                    case "ChiayiCounty":
                    case "Chiayi":
                    case "PingtungCounty":
                    case "YilanCounty":
                    case "HualienCounty":
                    case "TaitungCounty":
                    case "PenghuCounty":
                        return this.appService.getRouteEstimatedTimeStreamData(action.payload.city, action.payload.routeUID, action.payload.direction)
                            .pipe(
                                map(routeEstimatedInfo => ({ type: ActionType.GET_ROUTE_ESTIMATED_INFO_SUCCESS, payload: { routeEstimatedInfo: routeEstimatedInfo } })),
                                catchError((error) => of({ type: ActionType.GET_ROUTE_ESTIMATED_INFO_FAILED, payload: { error: error } }))
                            )
                    case "Taipei":
                    case "NewTaipei":
                    case "Taoyuan":
                    case "Taichung":
                    case "Tainan":
                    case "Kaohsiung":
                    case "Keelung":
                    case "KinmenCounty":
                    case "LienchiangCounty":
                    default:
                        return this.appService.getRouteEstimatedTimeData(action.payload.city, action.payload.routeUID, action.payload.direction)
                            .pipe(
                                map(routeEstimatedInfo => ({ type: ActionType.GET_ROUTE_ESTIMATED_INFO_SUCCESS, payload: { routeEstimatedInfo: routeEstimatedInfo } })),
                                catchError((error) => of({ type: ActionType.GET_ROUTE_ESTIMATED_INFO_FAILED, payload: { error: error } }))
                            )
                }

            })
        )
    );
}