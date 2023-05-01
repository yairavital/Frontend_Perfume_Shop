import { formatDate } from '@angular/common';
import { cartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/IProudctData';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.scss'],
})
export class OrderConfirmComponent implements OnInit {
  productsList: Iproduct[];
  total: number = 0;
  myDate = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  constructor(cartService: cartService) {
    this.productsList = cartService.getCart();
    this.total = cartService.returntotal();
    localStorage.removeItem('cart');
    localStorage.setItem(
      'cart',
      JSON.stringify([
        {
          id: 0,
          imgSrc: '',
          title: '',
          price: 0,
          onSale: false,
          quantity: 0,
        },
      ])
    );
  }

  ngOnInit(): void {}
}
