import { usersService } from 'src/app/users.service';
import { BehaviorSubject } from 'rxjs';
import { cartService } from './cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/order-details.service';
import { Iproduct } from 'src/app/IProudctData';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  paymentHandler: any = null;
  total = new BehaviorSubject(0);
  finalTotal: number | undefined;
  order_success: boolean = false;

  productsList: Iproduct[];

  constructor(
    public router: Router,
    public proudctsListFromService: cartService,
    public orderService: OrderDetailsService,
    private usersList: usersService
  ) {
    this.productsList = proudctsListFromService.getCart();
    this.total.next(proudctsListFromService.returntotal());
    this.total.subscribe((t) => (this.finalTotal = t));
  }
  ngOnInit() {
    this.invokeStripe();
  }
  quantityChange(quantity: number, product: any) {
    this.productsList[this.productsList.indexOf(product)].quantity = quantity;
    this.proudctsListFromService.saveCart();
    this.total.next(this.proudctsListFromService.returntotal());
  }
  emptyCart() {
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
    this.proudctsListFromService.countItemBSub.next(0);
  }

  deleteItem(productItem: any) {
    this.proudctsListFromService.deleteItem(productItem);
    this.productsList = this.proudctsListFromService.getCart();

    this.total.next(this.proudctsListFromService.returntotal());
  }
  makePayment(amount: any) {
    if (this.usersList.checkLoginFromLocal()) {
      const paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51MaQURL8BOZoghcmQUJsG18zCSkFe4J4xZkt7GgeSwbXlsXrtwSXbXQWxQrYaTsatqW40lk0wtJYbclAmjt2hr5s00YFpMnkiW',
        locale: 'auto',
        token: (stripeToken: any) => {
          console.log(stripeToken);
          alert('Payment has been successfull!');
          this.router.navigate(['/orderComplete']);
          this.orderService.reciveOrder(this.proudctsListFromService.getCart());
          this.order_success = true;
        },
      });
      paymentHandler.open({
        name: 'Credit card payment',
        description: '3 widgets',
        amount: amount * 100,
      });
    } else {
      alert('You need to login first');
      this.router.navigate(['/login']);
    }
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51MaQURL8BOZoghcmQUJsG18zCSkFe4J4xZkt7GgeSwbXlsXrtwSXbXQWxQrYaTsatqW40lk0wtJYbclAmjt2hr5s00YFpMnkiW',
          locale: 'auto',
          token: (stripeToken: any) => {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
}
