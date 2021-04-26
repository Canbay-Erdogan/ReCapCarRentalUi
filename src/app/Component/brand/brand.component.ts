import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/modals/brand';
import { Color } from 'src/app/modals/color';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private brandService:BrandService) { }

  brands:Brand[]=[];
  colors:Color[]=[];
  currentBrand:Brand;

  ngOnInit(): void {
    console.log("init çalıştı")
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data;
    })
  }


  setCurrentBrand(){

  }

  getCurrentCarClass(){

  }

  AllCars(){
    this.currentBrand=null;
  }

  getAllCarClass(){
    if(!this.currentBrand){
      return "list-group-item active"
    }
    return "list-group-item"
  }
  setActive(brand:Brand){
    this.currentBrand=brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand){
      return "list-group-item active"
  }
  return "list-group-item"

}
}
