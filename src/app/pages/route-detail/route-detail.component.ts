import { THIS_EXPR } from '@angular/compiler/src/output/output_ast'
import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { GetRouteDetailInfoAction, GetRouteDetailInfoFailedAction, GetRouteEstimatedInfoAction, RouteDetailInfo } from 'src/app/store/app.action'

@Component({
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.scss']
})
export class RouteDetailComponent {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['sort', 'name', 'stopName']

  private city$: Observable<string>;
  private routeUID$: Observable<string>;
  private city: string = "NewTaipei";
  private routeUID: string = "NWT16485";
  public routeInfo$: Observable<Array<any>>;
  public routeEstimatedInfo$: Observable<Array<any>>;

  constructor(private store: Store<{ city: string, routeUID: string, routeDetailInfo: any, routeEstimatedInfo: any }>) {

    this.city$ = store.select('city');
    this.city$.subscribe(resp => { if (resp) this.city = resp; console.log("city:", resp); });

    this.routeUID$ = store.select('routeUID');
    this.routeUID$.subscribe(resp => { if (resp) this.routeUID = resp; console.log("routeUID:", resp); });

    this.routeInfo$ = this.store.select('routeDetailInfo');
    this.routeInfo$.subscribe((resp: any) => {
      // this.dataSource.data = resp[0]?.Stops;
      // for(let i=0;i<resp[0]?.Stops;i++){

      // }
    })

    this.routeEstimatedInfo$ = this.store.select('routeEstimatedInfo');
    this.routeEstimatedInfo$.subscribe((resp) => {
      if(resp[0]){
        let result = resp.map((obj)=>{
          var rObj:any = {};
          rObj[obj.StopUID] = obj;
          return rObj;
        })
        let routeInfo:any = this.dataSource.data;
        for(let i=0;i<routeInfo.length;i++){
          routeInfo[i]['EstimatedInfo'] = result[routeInfo[i].StopUID];
        } 
        this.dataSource.data = routeInfo;
        console.log("routeEstimatedInfo:", resp)
      }

    })

  }

  ngOnInit(): void {
    this.getRouteAllStops();
    this.getDeaprture();
  }

  public getRouteAllStops() {
    this.store.dispatch(GetRouteDetailInfoAction({ payload: { city: this.city, routeUID: this.routeUID, direction: '0' } }))
  }

  public getDeaprture() {
    this.store.dispatch(GetRouteEstimatedInfoAction({ payload: { city: this.city, routeUID: this.routeUID, direction: '0' } }))
  }

  public getReturn() {
    this.store.dispatch(GetRouteEstimatedInfoAction({ payload: { city: this.city, routeUID: this.routeUID, direction: '1' } }))
  }

  public handleTabChange(tabInfo: any) {
    switch (tabInfo.index) {
      case 1:
        this.getReturn();
        break;
      case 0:
        this.getDeaprture()
        break;
      default:
    }
  }
}