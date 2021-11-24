
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { SeachBarComponent } from './components/seach-bar/seach-bar.component'
import { MainComponent } from './pages/main/main.component'
import { RouteListComponent } from './pages/route-list/route-list.component'
import { RouteDetailComponent } from './pages/route-detail/route-detail.component'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
import { FooterComponent } from './components/footer/footer.component'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTabsModule } from '@angular/material/tabs'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { SelectedCityReducer, SelectedRouteUIDReducer, RouteListReducer, RouteDetailInfoReducer, RouteEstimatedInfoReducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffect } from './store/app.effect';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeachBarComponent,
    MainComponent,
    RouteListComponent,
    RouteDetailComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    HttpClientModule,
    StoreModule.forRoot({ city: SelectedCityReducer, routeUID: SelectedRouteUIDReducer, routeList: RouteListReducer, routeDetailInfo: RouteDetailInfoReducer, routeEstimatedInfo: RouteEstimatedInfoReducer }),
    EffectsModule.forRoot([AppEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
