import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SeachBarComponent } from './components/seach-bar/seach-bar.component';
import { MainComponent } from './pages/main/main.component';
import { RouteListComponent } from './pages/route-list/route-list.component';
import { RouteDetailComponent } from './pages/route-detail/route-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
