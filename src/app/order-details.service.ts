import { Iproduct } from './IProudctData';
import { cartService } from './compomnets/cart/cart.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderDetailsService {
  orderList: Iproduct[] = this.cartService.getCart();
  total: number = 0;
  order: any;

  constructor(private cartService: cartService) {}
  reciveOrder(order: any) {
    if (order.id != 0) this.orderList.push(order);
    localStorage.setItem('orders', JSON.stringify([this.orderList]));
  }
}
