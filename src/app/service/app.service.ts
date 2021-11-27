import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsSHA from 'jssha'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly TDX_API_DOMAIN: string = "https://ptx.transportdata.tw/MOTC";
  private readonly GET_CITY_ROUTE_API: string = "/v2/Bus/Route/City";
  private readonly GET_STOP_OF_ROUTE_API: string = "/v2/Bus/StopOfRoute/City";
  private readonly GET_ESTIMATED_TIME_OF_ARRIVAL_STREAM_API: string = "/v2/Bus/EstimatedTimeOfArrival/Streaming/City";
  private readonly GET_ESTIMATED_TIME_OF_ARRIVAL_API: string = "/v2/Bus/EstimatedTimeOfArrival/City";

  constructor(private $http: HttpClient) { }

  private getAuthorizationHeader() {
    //  填入自己 ID、KEY 開始

    let AppID = 'bcee97e768f0431784373e00f3539404'
    let AppKey = 'bAY5MKsU_isyBjPsnFHcHlJgd1k'
    //  填入自己 ID、KEY 結束
    let GMTString = new Date().toUTCString()
    let ShaObj = new jsSHA('SHA-1', 'TEXT')
    ShaObj.setHMACKey(AppKey, 'TEXT')
    ShaObj.update('x-date: ' + GMTString)
    let HMAC = ShaObj.getHMAC('B64')
    let Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"'
    return { Authorization: Authorization, 'X-Date': GMTString }
  }

  public getCityRouteData(city: string, keyword: string) {
    let url = `${this.TDX_API_DOMAIN}${this.GET_CITY_ROUTE_API}/${city}/${keyword}`;
    return this.$http.get(url, { headers: this.getAuthorizationHeader() });
  }

  public getRouteStopData(city: string, routeUID: string) {
    let url = `${this.TDX_API_DOMAIN}${this.GET_STOP_OF_ROUTE_API}/${city}?$filter=RouteUID eq '${routeUID}'`;
    return this.$http.get(url, { headers: this.getAuthorizationHeader() });
  }

  public getRouteEstimatedTimeStreamData(city: string, routeUID: string) {
    let url = `${this.TDX_API_DOMAIN}${this.GET_ESTIMATED_TIME_OF_ARRIVAL_STREAM_API}/${city}?$filter=RouteUID eq '${routeUID}'&$orderby=StopSequence&$format=JSON`;
    return this.$http.get(url, { headers: this.getAuthorizationHeader() });
  }

  public getRouteEstimatedTimeData(city: string, routeUID: string) {
    let url = `${this.TDX_API_DOMAIN}${this.GET_ESTIMATED_TIME_OF_ARRIVAL_API}/${city}/?$filter=RouteUID eq '${routeUID}'&$orderby=StopSequence&$format=JSON`;
    return this.$http.get(url, { headers: this.getAuthorizationHeader() });
  }
}
