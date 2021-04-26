import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/modals/car';
import { Color } from 'src/app/modals/color';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor(private colorService:ColorService, 
    private activatedRoute:ActivatedRoute,
    private carService:CarService) { }

  colors:Color[]=[];
  currentColor:Color;
  cars:Car[]=[];

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data;
    })
  }

  setActive(color){
   this.currentColor=color;
  }

  AllColors(){
    this.currentColor=null;
  }

  getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item active"
    }
    return "list-group-item"
  }
  

  getCurrentColorClass(color:Color){
    if(color==this.currentColor){
      return "list-group-item active"
  }
  return "list-group-item"
  }

}
