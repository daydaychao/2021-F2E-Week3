import { Component, OnInit } from '@angular/core'


export interface PeriodicElement {
  PlateNumb?: string,
  StopUID: string,
  StopID: string,
  StopName: {
    Zh_tw: string,
    En: string
  },
  RouteUID: string,
  RouteID: string,
  RouteName: {
    Zh_tw: string,
    En: string
  },
  SubRouteUID: string,
  SubRouteID: string,
  SubRouteName: {
    Zh_tw: string,
    En: string
  },
  Direction: number,
  EstimateTime?: number,
  StopCountDown: number,
  CurrentStop: string,
  DestinationStop: string,
  StopSequence: number,
  StopStatus: number,
  MessageType: number,
  NextBusTime?: string,
  IsLastBus: boolean,
  Estimates?: [
    {
      PlateNumb?: string,
      EstimateTime?: number,
      IsLastBus?: boolean,
      VehicleStopStatus?: number
    }
  ],
  DataTime: string,
  TransTime?: string,
  SrcRecTime?: string,
  SrcTransTime?: string,
  SrcUpdateTime?: string,
  UpdateTime: string
}


const ELEMENT_DATA: PeriodicElement[] = [
  {
    "PlateNumb": "510-FY",
    "StopUID": "HSZ291265",
    "StopID": "291265",
    "StopName": {
      "Zh_tw": "東門市場",
      "En": "Dong Men Market"
    },
    "RouteUID": "HSZ0160",
    "RouteID": "0160",
    "RouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "SubRouteUID": "HSZ016002",
    "SubRouteID": "016002",
    "SubRouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "Direction": 1,
    "EstimateTime": 53,
    "StopCountDown": 2,
    "CurrentStop": "291419",
    "DestinationStop": "291746",
    "StopSequence": 14,
    "StopStatus": 0,
    "MessageType": 2,
    "IsLastBus": true,
    "DataTime": "2021-11-24T21:37:42+08:00",
    "SrcTransTime": "2021-11-24T21:37:49+08:00",
    "UpdateTime": "2021-11-24T21:37:54+08:00"
  },
  {
    "PlateNumb": "-1",
    "StopUID": "HSZ291419",
    "StopID": "291419",
    "StopName": {
      "Zh_tw": "北大教堂",
      "En": "Beida Church"
    },
    "RouteUID": "HSZ0160",
    "RouteID": "0160",
    "RouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "SubRouteUID": "HSZ016002",
    "SubRouteID": "016002",
    "SubRouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "Direction": 1,
    "StopCountDown": 0,
    "CurrentStop": "-1",
    "DestinationStop": "291746",
    "StopSequence": 12,
    "StopStatus": 3,
    "MessageType": 2,
    "IsLastBus": true,
    "DataTime": "2021-11-24T21:37:49+08:00",
    "SrcTransTime": "2021-11-24T21:37:49+08:00",
    "UpdateTime": "2021-11-24T21:37:54+08:00"
  },
  {
    "PlateNumb": "-1",
    "StopUID": "HSZ291420",
    "StopID": "291420",
    "StopName": {
      "Zh_tw": "北大橋",
      "En": "Bei-Da Bridge"
    },
    "RouteUID": "HSZ0160",
    "RouteID": "0160",
    "RouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "SubRouteUID": "HSZ016002",
    "SubRouteID": "016002",
    "SubRouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "Direction": 1,
    "StopCountDown": 0,
    "CurrentStop": "-1",
    "DestinationStop": "291746",
    "StopSequence": 11,
    "StopStatus": 3,
    "MessageType": 2,
    "IsLastBus": true,
    "DataTime": "2021-11-24T21:37:49+08:00",
    "SrcTransTime": "2021-11-24T21:37:49+08:00",
    "UpdateTime": "2021-11-24T21:37:54+08:00"
  },
  {
    "PlateNumb": "510-FY",
    "StopUID": "HSZ291422",
    "StopID": "291422",
    "StopName": {
      "Zh_tw": "地方法院",
      "En": "District Court"
    },
    "RouteUID": "HSZ0160",
    "RouteID": "0160",
    "RouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "SubRouteUID": "HSZ016002",
    "SubRouteID": "016002",
    "SubRouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "Direction": 1,
    "EstimateTime": 10,
    "StopCountDown": 1,
    "CurrentStop": "291419",
    "DestinationStop": "291746",
    "StopSequence": 13,
    "StopStatus": 0,
    "MessageType": 2,
    "IsLastBus": true,
    "DataTime": "2021-11-24T21:37:42+08:00",
    "SrcTransTime": "2021-11-24T21:37:49+08:00",
    "UpdateTime": "2021-11-24T21:37:54+08:00"
  },
  {
    "PlateNumb": "-1",
    "StopUID": "HSZ291487",
    "StopID": "291487",
    "StopName": {
      "Zh_tw": "台大醫院新竹分院",
      "En": "National Taiwan University Hospital Hsin-Chu Branch"
    },
    "RouteUID": "HSZ0160",
    "RouteID": "0160",
    "RouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "SubRouteUID": "HSZ016002",
    "SubRouteID": "016002",
    "SubRouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "Direction": 1,
    "StopCountDown": 0,
    "CurrentStop": "-1",
    "DestinationStop": "291746",
    "StopSequence": 1,
    "StopStatus": 3,
    "MessageType": 2,
    "IsLastBus": true,
    "DataTime": "2021-11-24T21:37:49+08:00",
    "SrcTransTime": "2021-11-24T21:37:49+08:00",
    "UpdateTime": "2021-11-24T21:37:54+08:00"
  },
  {
    "PlateNumb": "-1",
    "StopUID": "HSZ291496",
    "StopID": "291496",
    "StopName": {
      "Zh_tw": "水利局",
      "En": "Water Resource Bureau"
    },
    "RouteUID": "HSZ0160",
    "RouteID": "0160",
    "RouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "SubRouteUID": "HSZ016002",
    "SubRouteID": "016002",
    "SubRouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "Direction": 1,
    "StopCountDown": 0,
    "CurrentStop": "-1",
    "DestinationStop": "291746",
    "StopSequence": 10,
    "StopStatus": 3,
    "MessageType": 2,
    "IsLastBus": true,
    "DataTime": "2021-11-24T21:37:49+08:00",
    "SrcTransTime": "2021-11-24T21:37:49+08:00",
    "UpdateTime": "2021-11-24T21:37:54+08:00"
  },
  {
    "PlateNumb": "-1",
    "StopUID": "HSZ291498",
    "StopID": "291498",
    "StopName": {
      "Zh_tw": "北區區公所",
      "En": "North District Office"
    },
    "RouteUID": "HSZ0160",
    "RouteID": "0160",
    "RouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "SubRouteUID": "HSZ016002",
    "SubRouteID": "016002",
    "SubRouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "Direction": 1,
    "StopCountDown": 0,
    "CurrentStop": "-1",
    "DestinationStop": "291746",
    "StopSequence": 5,
    "StopStatus": 3,
    "MessageType": 2,
    "IsLastBus": true,
    "DataTime": "2021-11-24T21:37:49+08:00",
    "SrcTransTime": "2021-11-24T21:37:49+08:00",
    "UpdateTime": "2021-11-24T21:37:54+08:00"
  },
  {
    "PlateNumb": "-1",
    "StopUID": "HSZ291499",
    "StopID": "291499",
    "StopName": {
      "Zh_tw": "田美一站",
      "En": "Tianmei 1st Stop"
    },
    "RouteUID": "HSZ0160",
    "RouteID": "0160",
    "RouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "SubRouteUID": "HSZ016002",
    "SubRouteID": "016002",
    "SubRouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "Direction": 1,
    "StopCountDown": 0,
    "CurrentStop": "-1",
    "DestinationStop": "291746",
    "StopSequence": 8,
    "StopStatus": 3,
    "MessageType": 2,
    "IsLastBus": true,
    "DataTime": "2021-11-24T21:37:49+08:00",
    "SrcTransTime": "2021-11-24T21:37:49+08:00",
    "UpdateTime": "2021-11-24T21:37:54+08:00"
  },
  {
    "PlateNumb": "-1",
    "StopUID": "HSZ291500",
    "StopID": "291500",
    "StopName": {
      "Zh_tw": "田美二站",
      "En": "Tianmei 2nd Stop"
    },
    "RouteUID": "HSZ0160",
    "RouteID": "0160",
    "RouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "SubRouteUID": "HSZ016002",
    "SubRouteID": "016002",
    "SubRouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "Direction": 1,
    "StopCountDown": 0,
    "CurrentStop": "-1",
    "DestinationStop": "291746",
    "StopSequence": 7,
    "StopStatus": 3,
    "MessageType": 2,
    "IsLastBus": true,
    "DataTime": "2021-11-24T21:37:49+08:00",
    "SrcTransTime": "2021-11-24T21:37:49+08:00",
    "UpdateTime": "2021-11-24T21:37:54+08:00"
  },
  {
    "PlateNumb": "-1",
    "StopUID": "HSZ291501",
    "StopID": "291501",
    "StopName": {
      "Zh_tw": "光華國中",
      "En": "Guang Hua Junior High School"
    },
    "RouteUID": "HSZ0160",
    "RouteID": "0160",
    "RouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "SubRouteUID": "HSZ016002",
    "SubRouteID": "016002",
    "SubRouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "Direction": 1,
    "StopCountDown": 0,
    "CurrentStop": "-1",
    "DestinationStop": "291746",
    "StopSequence": 4,
    "StopStatus": 3,
    "MessageType": 2,
    "IsLastBus": true,
    "DataTime": "2021-11-24T21:37:49+08:00",
    "SrcTransTime": "2021-11-24T21:37:49+08:00",
    "UpdateTime": "2021-11-24T21:37:54+08:00"
  },
  {
    "PlateNumb": "-1",
    "StopUID": "HSZ291503",
    "StopID": "291503",
    "StopName": {
      "Zh_tw": "地政事務所",
      "En": "Land Office"
    },
    "RouteUID": "HSZ0160",
    "RouteID": "0160",
    "RouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "SubRouteUID": "HSZ016002",
    "SubRouteID": "016002",
    "SubRouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "Direction": 1,
    "StopCountDown": 0,
    "CurrentStop": "-1",
    "DestinationStop": "291746",
    "StopSequence": 3,
    "StopStatus": 3,
    "MessageType": 2,
    "IsLastBus": true,
    "DataTime": "2021-11-24T21:37:49+08:00",
    "SrcTransTime": "2021-11-24T21:37:49+08:00",
    "UpdateTime": "2021-11-24T21:37:54+08:00"
  },
  {
    "PlateNumb": "-1",
    "StopUID": "HSZ291504",
    "StopID": "291504",
    "StopName": {
      "Zh_tw": "金華二站",
      "En": "Jinhua 2nd Stop"
    },
    "RouteUID": "HSZ0160",
    "RouteID": "0160",
    "RouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "SubRouteUID": "HSZ016002",
    "SubRouteID": "016002",
    "SubRouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "Direction": 1,
    "StopCountDown": 0,
    "CurrentStop": "-1",
    "DestinationStop": "291746",
    "StopSequence": 2,
    "StopStatus": 3,
    "MessageType": 2,
    "IsLastBus": true,
    "DataTime": "2021-11-24T21:37:49+08:00",
    "SrcTransTime": "2021-11-24T21:37:49+08:00",
    "UpdateTime": "2021-11-24T21:37:54+08:00"
  },
  {
    "PlateNumb": "-1",
    "StopUID": "HSZ291505",
    "StopID": "291505",
    "StopName": {
      "Zh_tw": "金華大樓",
      "En": "Jinhua Building"
    },
    "RouteUID": "HSZ0160",
    "RouteID": "0160",
    "RouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "SubRouteUID": "HSZ016002",
    "SubRouteID": "016002",
    "SubRouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "Direction": 1,
    "StopCountDown": 0,
    "CurrentStop": "-1",
    "DestinationStop": "291746",
    "StopSequence": 6,
    "StopStatus": 3,
    "MessageType": 2,
    "IsLastBus": true,
    "DataTime": "2021-11-24T21:37:49+08:00",
    "SrcTransTime": "2021-11-24T21:37:49+08:00",
    "UpdateTime": "2021-11-24T21:37:54+08:00"
  },
  {
    "PlateNumb": "-1",
    "StopUID": "HSZ291506",
    "StopID": "291506",
    "StopName": {
      "Zh_tw": "曙光女中",
      "En": "Shu Guang Girls High School"
    },
    "RouteUID": "HSZ0160",
    "RouteID": "0160",
    "RouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "SubRouteUID": "HSZ016002",
    "SubRouteID": "016002",
    "SubRouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "Direction": 1,
    "StopCountDown": 0,
    "CurrentStop": "-1",
    "DestinationStop": "291746",
    "StopSequence": 9,
    "StopStatus": 3,
    "MessageType": 2,
    "IsLastBus": true,
    "DataTime": "2021-11-24T21:37:49+08:00",
    "SrcTransTime": "2021-11-24T21:37:49+08:00",
    "UpdateTime": "2021-11-24T21:37:54+08:00"
  },
  {
    "PlateNumb": "510-FY",
    "StopUID": "HSZ291746",
    "StopID": "291746",
    "StopName": {
      "Zh_tw": "火車站",
      "En": "Train Station"
    },
    "RouteUID": "HSZ0160",
    "RouteID": "0160",
    "RouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "SubRouteUID": "HSZ016002",
    "SubRouteID": "016002",
    "SubRouteName": {
      "Zh_tw": "16",
      "En": "16"
    },
    "Direction": 1,
    "EstimateTime": 103,
    "StopCountDown": 3,
    "CurrentStop": "291419",
    "DestinationStop": "291746",
    "StopSequence": 15,
    "StopStatus": 0,
    "MessageType": 2,
    "IsLastBus": true,
    "DataTime": "2021-11-24T21:37:42+08:00",
    "SrcTransTime": "2021-11-24T21:37:49+08:00",
    "UpdateTime": "2021-11-24T21:37:54+08:00"
  }
]
@Component({
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.scss']
})
export class RouteDetailComponent {
  displayedColumns: string[] = ['sort', 'name', 'stopName']
  dataSource = ELEMENT_DATA


}
