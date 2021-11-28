import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainComponent } from './pages/main/main.component'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
import { RouteDetailComponent } from './pages/route-detail/route-detail.component'
import { RouteListComponent } from './pages/route-list/route-list.component'

const routes: Routes = [
  { path: 'routeList', component: RouteListComponent },
  { path: 'routeDetail', component: RouteDetailComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' }, // redirect to `main`
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
