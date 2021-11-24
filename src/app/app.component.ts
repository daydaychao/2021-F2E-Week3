import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetRouteDetailInfoAction, GetRouteListAction, RouteDetailInfo, RouteInfo, SelectedCityAction } from './store/app.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public city: string = "";
  private city$: Observable<string>;

  public routeList: Array<RouteInfo> = [];
  private routeList$: Observable<Array<RouteInfo>>;

  public routeDetailInfo: RouteDetailInfo = {};
  private routeDetailInfo$: Observable<RouteDetailInfo>;

  constructor(private store: Store<{ city: string, routeList: Array<RouteInfo>, routeDetailInfo: RouteDetailInfo }>) {
    /* 透過觀察者 city$ 取得 store中的city，並保存至變數city */
    this.city$ = store.select('city');
    this.city$.subscribe(resp => { this.city = resp; console.log("city:",resp); });

    this.routeList$ = store.select('routeList');
    this.routeList$.subscribe(resp => { this.routeList = resp; console.log("RouteList:",resp); });

    this.routeDetailInfo$ = store.select('routeDetailInfo');
    this.routeDetailInfo$.subscribe(resp => { this.routeDetailInfo = resp; console.log("RouteDetailInfo:",resp); });
    
    
  }

  ngOnInit(): void {
    // 取用範例
    this.store.dispatch(SelectedCityAction({ payload:{city: "Taipei" }}));
    this.store.dispatch(GetRouteListAction({ payload:{city: "Taipei", keyword: "234" }}));
    this.store.dispatch(GetRouteDetailInfoAction({ payload:{city: "Taipei", routeUID: 'TPE10132' }}));
  }

  ngOnDestroy(): void {
  }
}
