import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/modals/car';
import { CarDetail } from 'src/app/modals/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carService:CarService, 
    private carDetailService:CarDetailService,
    private activatedRoute: ActivatedRoute,
    private cartService:CartService) { }

  cars:Car[]=[];
  carDetailLoad:boolean;
  carDetail:CarDetail;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandid"]){
        this.getCarsByBrandId(params["brandid"]);
      }
      else if(params["colorid"]){
        this.getCarsByColorid(params["colorid"]);
      }
      else{
        this.getCars();
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data;
    })
  }

  getCarsByBrandId(brandid){
    this.carService.getCarsByBrandId(brandid).subscribe(response=>{
      this.cars = response.data;
    })
  }

  getCarsByColorid(colorid){
    this.carService.GetByColorId(colorid).subscribe(response=>{
      this.cars=response.data;
      debugger;
    })
  }

  addToCart(car){
    this.cartService.addToCart(car);
  }

}
