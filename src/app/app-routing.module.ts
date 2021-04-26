import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandComponent } from './Component/brand/brand.component';
import { CarDetailComponent } from './Component/car-detail/car-detail.component';
import { CarComponent } from './Component/car/car.component';
import { ColorComponent } from './Component/color/color.component';
import { RentalComponent } from './Component/rental/rental.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars/getbybrandid/:brandid",component:CarComponent},
  {path:"brands",component:BrandComponent},
  {path:"rentals",component:RentalComponent},
  {path:"cars/detail/:cardetailid",component:CarDetailComponent},
  {path:"cars/getbycolorid/:colorid",component:CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
