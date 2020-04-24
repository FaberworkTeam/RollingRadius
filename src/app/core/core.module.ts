import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PlansComponent } from './plans/plans.component';


@NgModule({
  declarations: [NavbarComponent, BannerComponent, TestimonialsComponent, PlansComponent, FooterComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[NavbarComponent, BannerComponent, TestimonialsComponent, PlansComponent, FooterComponent]
})
export class CoreModule { }
