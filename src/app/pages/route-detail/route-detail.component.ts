import { Component, OnInit } from '@angular/core'
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

const ELEMENT_DATA: PeriodicElement[] = [
  {
    "RouteUID": "KHH100",
    "RouteID": "100",
    "HasSubRoutes": true,
    "Operators": [
      {
        "OperatorID": "10270",
        "OperatorName": {
          "Zh_tw": "統聯客運",
          "En": "United Highway Bus Co., Ltd."
        },
        "OperatorCode": "UnitedHighwayBus",
        "OperatorNo": "1201"
      }
    ],
    "AuthorityID": "009",
    "ProviderID": "009",
    "SubRoutes": [
      {
        "SubRouteUID": "KHH100",
        "SubRouteID": "100",
        "OperatorIDs": [
          "10270"
        ],
        "SubRouteName": {
          "Zh_tw": "100百貨幹線",
          "En": "100 "
        },
        "Headsign": "瑞豐站－高雄火車站",
        "Direction": 0
      },
    ]
  }]

@Component({
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.scss']
})
export class RouteDetailComponent implements OnInit {

  displayedColumns: string[] = ['name', 'sign'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
