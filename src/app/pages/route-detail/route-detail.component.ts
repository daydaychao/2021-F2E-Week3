import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { Store } from '@ngrx/store'
import { Observable, zip } from 'rxjs'
import { GetRouteDetailInfoAction, GetRouteEstimatedInfoAction } from 'src/app/store/app.action'

@Component({
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.scss']
})
export class RouteDetailComponent {
  dataSourceDeparture = new MatTableDataSource<any>();
  dataSourceReturn = new MatTableDataSource<any>();

  displayedColumns: string[] = ['sort', 'name', 'stopName']
  private readonly INRERVAL_TIMER: number = 60000;

  private city$: Observable<string>
  private routeUID$: Observable<string>
  private routeDetailInfo$: Observable<Array<any>>
  private routeEstimatedInfo$: Observable<Array<any>>

  private city: string = "";
  private routeUID: string = "";
  private _timer: any

  public routeName: string = "";
  public departureStop: string = "";
  public returnStop: string = "";

  constructor(private store: Store<{ city: string, routeUID: string, routeDetailInfo: any, routeEstimatedInfo: any }>) {

    this.city$ = store.select('city')
    this.city$.subscribe(resp => { if (resp) this.city = resp; console.log("city:", resp) })

    this.routeUID$ = store.select('routeUID')
    this.routeUID$.subscribe(resp => { if (resp) this.routeUID = resp; console.log("routeUID:", resp) })

    this.routeDetailInfo$ = this.store.select('routeDetailInfo')
    this.routeEstimatedInfo$ = this.store.select('routeEstimatedInfo')

    const combine = zip(this.routeDetailInfo$, this.routeEstimatedInfo$)
    combine.subscribe(resp => {
      console.log(resp)
      if (resp[0] && resp[1]) {
        let routeStopInfo = resp[0]
        let routeEstimatedInfo = resp[1]

        if (routeStopInfo[0]) {
          this.routeName = routeStopInfo[0].RouteName.Zh_tw

          this.dataSourceDeparture.data = this._formatRouteStopInfo(routeStopInfo[0])
          this.departureStop = this.dataSourceDeparture.data[this.dataSourceDeparture.data.length - 1].StopName?.Zh_tw || ""
          this.dataSourceDeparture.data = this._formatRouteEstimatedInfo(routeEstimatedInfo, this.dataSourceDeparture.data)
          // console.log("Departure:", this.dataSourceDeparture.data)
        }
        if (routeStopInfo[1]) {
          this.dataSourceReturn.data = this._formatRouteStopInfo(routeStopInfo[1])
          this.returnStop = this.dataSourceReturn.data[this.dataSourceReturn.data.length - 1].StopName?.Zh_tw || ""
          this.dataSourceReturn.data = this._formatRouteEstimatedInfo(routeEstimatedInfo, this.dataSourceReturn.data)
          // console.log("Return:", this.dataSourceReturn.data)
        }
      }
    })
  }

  ngOnInit(): void {
    this._getData()
  }

  ngAfterContentInit(): void {
    this._startSyncTimer()
  }

  ngOnDestroy(): void {
    this._stopSyncTimer()
  }

  private _formatRouteStopInfo(originData: any) {
    let result = []
    let stopList: Array<StopInfo> = originData?.Stops
    for (let i = 0; i < stopList.length; i++) {
      let stop = {
        StopUID: stopList[i].StopUID,
        StopID: stopList[i].StopID,
        StopName: stopList[i].StopName,
        StopSequence: stopList[i].StopSequence,
        StopStatus: stopList[i].StopStatus
      }
      result.push(stop)
    }
    return result
  }

  private _formatRouteEstimatedInfo(originData: any, targetData: any) {
    let estimatedInfoMap: any = {}
    for (let j = 0; j < originData.length; j++) {
      estimatedInfoMap[originData[j].StopUID] = originData[j]
    }

    for (let i = 0; i < targetData.length; i++) {
      targetData[i]['EstimateTime'] = estimatedInfoMap[targetData[i].StopUID]?.EstimateTime
      targetData[i]['StopStatus'] = estimatedInfoMap[targetData[i].StopUID]?.StopStatus
      targetData[i]['NextBusTime'] = estimatedInfoMap[targetData[i].StopUID]?.NextBusTime
    }
    return targetData
  }

  private _getData() {
    this.store.dispatch(GetRouteDetailInfoAction({ payload: { city: this.city, routeUID: this.routeUID } }))
    this.store.dispatch(GetRouteEstimatedInfoAction({ payload: { city: this.city, routeUID: this.routeUID } }))
  }

  private _startSyncTimer() {
    this._timer = setInterval(() => { this._getData() }, this.INRERVAL_TIMER)
  }

  private _stopSyncTimer() {
    clearInterval(this._timer)
  }
}

interface StopInfo {
  Direction: number | null
  EstimateTime: number | null
  RouteID: string | null
  RouteName: Locale | null
  RouteUID: string | null
  StopUID: string | null
  StopID: string | null
  StopName: Locale | null
  StopStatus: number | null
  StopSequence: number | null
}

interface Locale {
  Zh_tw: string
  En: string
}
