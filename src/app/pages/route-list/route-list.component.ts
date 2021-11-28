import { Component, OnInit, SimpleChanges } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { GetRouteDetailInfoAction, GetRouteListAction, RouteDetailInfo, RouteInfo, SelectedCityAction, SelectedRouteAction } from '../../store/app.action'
import { MatTableDataSource } from '@angular/material/table'
import { Router } from '@angular/router'
export interface PeriodicElement {
  RouteUID: string,
  RouteID: string,
  HasSubRoutes: boolean,
  Operators: [
    {
      OperatorID: string,
      OperatorName: {
        Zh_tw: string,
        En: string
      },
      OperatorCode: string,
      OperatorNo: string
    }
  ],
  AuthorityID: string,
  ProviderID: string,
  SubRoutes: [{
    SubRouteUID: string,
    SubRouteID: string,
    OperatorIDs: [
      string
    ],
    SubRouteName: {
      Zh_tw: string,
      En: string
    },
    Headsign: string,
    Direction: 0
  }],
}

@Component({
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss']
})
export class RouteListComponent implements OnInit {
  // table
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['operator', 'name', 'sign']


  // routeList資料
  public routeList$: Observable<Array<any>>
  private routeList: any[] = [];

  constructor(private store: Store<{ city: string, routeUID: string, routeList: Array<RouteInfo> }>,private router: Router) {
    this.routeList$ = store.select('routeList')
    this.routeList$.subscribe(resp => { this.routeList = resp; console.log("[RouteList]:RouteList:", this.dataSource.data = resp) })
    console.log('%c [routeList]:this.dataSource.data', 'color: orange', this.dataSource.data)
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c ngOnChanges', 'color:yellow', changes)
  }

  gotoDetail(rowData: any) {
    console.log('[RouteList]-mat-table:e', rowData.RouteUID)
    this.store.dispatch(SelectedRouteAction({ payload: { routeUID: rowData.RouteUID } }));
    this.router.navigate(['/routeDetail']);
  }



}
