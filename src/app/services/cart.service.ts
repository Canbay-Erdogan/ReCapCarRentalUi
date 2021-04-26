import { Injectable } from '@angular/core';
import { Car } from '../modals/car';
import { CartItem } from '../modals/cartItem';
import { CartItems } from '../modals/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car:Car){
    let item = CartItems.find(c=>c.car.id===car.id);
    if (item) {
      item.quantity +=1;
    }
    else{ let cartItem = new CartItem();
      cartItem.car=car;
      cartItem.quantity=1;
      CartItems.push(cartItem);
    }
   
  }

  removeFromCart(car:Car){
    let removeItem = CartItems.find(c=>c.car.id === car.id)
    CartItems.splice(CartItems.indexOf(removeItem),1) 
  }

  cartList():CartItem[]{
    return CartItems;
  }
}
