import { THIS_EXPR } from '@angular/compiler/src/output/output_ast'
import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { TimeInterval } from 'rxjs/internal/operators/timeInterval'
import { GetRouteDetailInfoAction, GetRouteEstimatedInfoAction } from 'src/app/store/app.action'

@Component({
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.scss']
})
export class RouteDetailComponent {
  dataSourceDeparture = new MatTableDataSource<any>();
  dataSourceReturn = new MatTableDataSource<any>();

  displayedColumns: string[] = ['sort', 'name', 'stopName']

  private city$: Observable<string>;
  private routeUID$: Observable<string>;
  // private city: string = "NewTaipei";
  // private routeUID: string = "NWT10116";
  // private city: string = "Tainan";
  // private routeUID: string = "TNN10019";
  public city: string = "Kaohsiung";
  private routeUID: string = "KHH100";
  public departureStop: string = "";
  public returnStop: string = "";
  public routeDetailInfo$: Observable<Array<any>>;
  public routeEstimatedInfo$: Observable<Array<any>>;
  private _timer:any;

  constructor(private store: Store<{ city: string, routeUID: string, routeDetailInfo: any, routeEstimatedInfo: any }>) {

    this.city$ = store.select('city');
    this.city$.subscribe(resp => { if (resp) this.city = resp; console.log("city:", resp); });

    this.routeUID$ = store.select('routeUID');
    this.routeUID$.subscribe(resp => { if (resp) this.routeUID = resp; console.log("routeUID:", resp); });

    this.routeDetailInfo$ = this.store.select('routeDetailInfo');
    this.routeDetailInfo$.subscribe((resp: any) => {
      if (resp[0]) {
        let result = [];
        let stopList: Array<StopInfo> = resp[0]?.Stops;
        for (let i = 0; i < stopList.length; i++) {
          let stop = {
            StopUID: stopList[i].StopUID,
            StopID: stopList[i].StopID,
            StopName: stopList[i].StopName,
            StopSequence: stopList[i].StopSequence,
            StopStatus: stopList[i].StopStatus
          };
          result.push(stop);
        }
        this.dataSourceDeparture.data = result;
        this.departureStop = result[result.length-1].StopName?.Zh_tw||"";
      }

      if (resp[1]) {
        let result = [];
        let stopList: Array<StopInfo> = resp[1]?.Stops;
        for (let i = 0; i < stopList.length; i++) {
          let stop = {
            StopUID: stopList[i].StopUID,
            StopID: stopList[i].StopID,
            StopName: stopList[i].StopName,
            StopSequence: stopList[i].StopSequence,
            StopStatus: stopList[i].StopStatus
          };
          result.push(stop);
        }
        this.dataSourceReturn.data = result;
        this.returnStop = result[result.length-1].StopName?.Zh_tw||"";
      }
    })

    this.routeEstimatedInfo$ = this.store.select('routeEstimatedInfo');
    this.routeEstimatedInfo$.subscribe((resp) => {
      if (resp[0]) {
        let estimatedInfoMap: any = {};
        for (let j = 0; j < resp.length; j++) {
          estimatedInfoMap[resp[j].StopUID] = resp[j];
        }

        let routeInfoList: any = this.dataSourceDeparture.data;
        for (let i = 0; i < routeInfoList.length; i++) {
          routeInfoList[i]['EstimateTime'] = estimatedInfoMap[routeInfoList[i].StopUID]?.EstimateTime;
          routeInfoList[i]['StopStatus'] = estimatedInfoMap[routeInfoList[i].StopUID]?.StopStatus;
          routeInfoList[i]['NextBusTime'] = estimatedInfoMap[routeInfoList[i].StopUID]?.NextBusTime;
        }

        this.dataSourceDeparture.data = routeInfoList;
        console.log(this.dataSourceDeparture.data)
      }

      if (resp[1]) {
        let estimatedInfoMap: any = {};
        for (let j = 0; j < resp.length; j++) {
          estimatedInfoMap[resp[j].StopUID] = resp[j];
        }

        let routeInfoList: any = this.dataSourceReturn.data;
        for (let i = 0; i < routeInfoList.length; i++) {
          routeInfoList[i]['EstimateTime'] = estimatedInfoMap[routeInfoList[i].StopUID]?.EstimateTime;
          routeInfoList[i]['StopStatus'] = estimatedInfoMap[routeInfoList[i].StopUID]?.StopStatus;
          routeInfoList[i]['NextBusTime'] = estimatedInfoMap[routeInfoList[i].StopUID]?.NextBusTime;
        }

        this.dataSourceReturn.data = routeInfoList;
        console.log(this.dataSourceReturn.data)
      }

    })
  }

  ngOnInit(): void {
   this.getRouteDetailInfo();
  }

  ngAfterContentInit(): void {
    this.startSyncTimer();
  }

  ngOnDestroy(): void {
    this.stopSyncTimer();
  }

  private getRouteDetailInfo(){
    this.store.dispatch(GetRouteDetailInfoAction({ payload: { city: this.city, routeUID: this.routeUID } }))
    this.store.dispatch(GetRouteEstimatedInfoAction({ payload: { city: this.city, routeUID: this.routeUID } }))
  }

  private startSyncTimer() {
    this._timer = setInterval(()=>{this.getRouteDetailInfo()},60000);
  }

  private stopSyncTimer() {
    clearInterval(this._timer);
  }
}

interface StopInfo {
  Direction: number | null;
  EstimateTime: number | null;
  RouteID: string | null;
  RouteName: Locale | null;
  RouteUID: string | null;
  StopUID: string | null;
  StopID: string | null;
  StopName: Locale | null;
  StopStatus: number | null;
  StopSequence: number | null;
}

interface Locale {
  Zh_tw: string;
  En: string;
}