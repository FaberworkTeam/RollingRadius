import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CoreModule } from "./core/core.module";
import { HomeComponent } from "./home/home.component";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { AuthComponent } from "./auth/auth.component";
import { VehicleSearchComponent } from "./vehicle-search/vehicle-search.component";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoadingSpinnerComponent,
    AuthComponent,
    VehicleSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
