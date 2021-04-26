import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../modals/listResponseModel';
import { Rental } from '../modals/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private apiUrl="https://localhost:44397/api/rentals/getRentals";

  constructor(private httpClient:HttpClient) { }

  getRentals(){
    this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
}
