import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/modals/car';
import { CarDetail } from 'src/app/modals/carDetail';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private carService:CarService,
    private cartService:CartService) { }

    carDetail:CarDetail;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["cardetailid"]) {
        this.getCarDetail(params["cardetailid"]);
      }
    })
  }
  getCarDetail(cardetailid) {
    debugger;
    this.carService.getCarDetail(cardetailid).subscribe(response=>{
      this.carDetail=response;
      debugger;
    })
  }
 
}
