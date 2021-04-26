import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../modals/car';
import { CarDetail } from '../modals/carDetail';
import { ListResponseModel } from '../modals/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  private apiUrl="https://localhost:44397/api/"

  constructor(private httpClient:HttpClient) { }

  getCarDetail(cardetailid):Observable<CarDetail>{
    let newurl=this.apiUrl+"cars/getcardetail/"+cardetailid
    return this.httpClient.get<CarDetail>(newurl);
  }
}
