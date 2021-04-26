import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './Component/brand/brand.component';
import { CarComponent } from './Component/car/car.component';
import { ColorComponent } from './Component/color/color.component';
import { CustomerComponent } from './Component/customer/customer.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { RentalComponent } from './Component/rental/rental.component';
import { RentSummaryComponent } from './Component/rent-summary/rent-summary.component';
import { CarDetailComponent } from './Component/car-detail/car-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    ColorComponent,
    CustomerComponent,
    NavbarComponent,
    RentalComponent,
    RentSummaryComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
