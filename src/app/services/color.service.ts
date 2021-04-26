import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../modals/color';
import { ListResponseModel } from '../modals/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private apiUrl="https://localhost:44397/api/"

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newUrl = this.apiUrl+"colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newUrl);
  }
}
