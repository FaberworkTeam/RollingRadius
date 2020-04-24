import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { VehicleSearchComponent } from './vehicle-search/vehicle-search.component';


const routes: Routes = [
  {path:'', redirectTo:'', pathMatch:'full'},
  {
    path:'home', 
    component: HomeComponent,

  },
  {path:'auth', component: AuthComponent},
  {path:'vehicle-search', component: VehicleSearchComponent},
  {path:'**', component: PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
