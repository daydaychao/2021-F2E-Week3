import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { GetRouteDetailInfoAction, GetRouteListAction, RouteDetailInfo, RouteInfo, SelectedCityAction } from '../../store/app.action'



export interface typeMatSelect {
  value: string
  viewValue: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  public city$: Observable<string>
  public city: string = ""; //城市 (keyword的顯示依據)
  private keyword: string = ""; //打的字串
  private routeList: any[] = []; //取得的資料


  constructor(private store: Store<{ city: string, routeList: Array<RouteInfo>, routeDetailInfo: RouteDetailInfo }>, private router: Router) {
    /* 透過觀察者 city$ 取得 store中的city，並保存至變數city */
    this.city$ = store.select('city')
    this.city$.subscribe(resp => { this.city = resp; console.log("[header]city:", resp) })
  }

  cityList: typeMatSelect[] = [
    { value: 'Taipei', viewValue: '臺北市' },
    { value: 'NewTaipei', viewValue: '新北市' },
    { value: 'HsinchuCounty', viewValue: '新竹縣' },
    { value: 'Keelung', viewValue: '基隆市' },
    { value: 'Taoyuan', viewValue: '桃園市' },
    { value: 'Hsinchu', viewValue: '新竹市' },
    { value: 'YilanCounty', viewValue: '宜蘭縣' },
    { value: 'MiaoliCounty', viewValue: '苗栗縣' },
    { value: 'Taichung', viewValue: '臺中市' },
    { value: 'ChanghuaCounty', viewValue: '彰化縣' },
    { value: 'NantouCounty', viewValue: '南投縣' },
    { value: 'YunlinCounty', viewValue: '雲林縣' },
    { value: 'Chiayi', viewValue: '嘉義市' },
    { value: 'ChiayiCounty', viewValue: '嘉義縣' },
    { value: 'Tainan', viewValue: '臺南市' },
    { value: 'Kaohsiung', viewValue: '高雄市' },
    { value: 'PingtungCounty', viewValue: '屏東縣' },
    { value: 'PenghuCounty', viewValue: '澎湖縣' },
    { value: 'TaitungCounty', viewValue: '臺東縣' },
    { value: 'HualienCounty', viewValue: '花蓮縣' },
    { value: 'KinmenCounty', viewValue: '金門縣' },
    { value: 'LienchiangCounty', viewValue: '連江縣' },
  ];


  onChangeSelectCity(e: any) {
    let selectCityValue = e.target.value
    this.city = selectCityValue
    this.store.dispatch(SelectedCityAction({ payload: { city: selectCityValue } }))
    this.store.dispatch(GetRouteListAction({ payload: { city: selectCityValue, keyword: this.keyword } }))
    if (!this.router.url.includes('routeList')) {
      this.gotoRouteList()
    }
  }

  getDataByKeyword(e: any) {
    this.store.dispatch(GetRouteListAction({ payload: { city: this.city, keyword: e } }))
    if (!this.router.url.includes('routeList')) {
      this.gotoRouteList()
    }
  }

  gotoHome() {
    console.log('goHome')
    this.router.navigate(['/main'])
  }
  gotoRouteList() {
    this.router.navigate(['/routeList'])
  }

  ngOnInit(): void {
    // this.store.dispatch(GetRouteDetailInfoAction({ payload: { city: "Taipei", routeUID: 'TPE10132' } }))
  }

}
