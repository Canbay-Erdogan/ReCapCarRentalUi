import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../modals/car';
import { CarDetail } from '../modals/carDetail';
import { Color } from '../modals/color';
import { ListResponseModel } from '../modals/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl="https://localhost:44397/api/"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+ "cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrandId(brandid):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+ "cars/getbybrandid/"+brandid;
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  GetByColorId(colorid):Observable<ListResponseModel<Car>>{
    let newUrl = this.apiUrl+"cars/getbycolorid/"+colorid;
    return this.httpClient.get<ListResponseModel<Car>>(newUrl);
  }

  getCarDetail(cardetailid):Observable<CarDetail>{
    let newUrl = this.apiUrl +"cars/getCarDetail/"+cardetailid;
    return this.httpClient.get<CarDetail>(newUrl);
  }
}
