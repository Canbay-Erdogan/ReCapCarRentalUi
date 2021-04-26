import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/modals/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-rent-summary',
  templateUrl: './rent-summary.component.html',
  styleUrls: ['./rent-summary.component.css']
})
export class RentSummaryComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getCart();
  }

  cartItems:CartItem[]=[];

  getCart(){
   this.cartItems= this.cartService.cartList();  
  }

  removeFromCart(car){
    this.cartService.removeFromCart(car);
  }
}
