import { Iproduct } from './../../IProudctData';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class cartService {
  constructor() {
    localStorage.setItem('cart', JSON.stringify(this.productsList));

    localStorage.setItem('cart', JSON.stringify(this.getCart()));
    this.countItemBSub.subscribe((num) => (this.countItem = num));
  }
  productsList: Iproduct[] = [
    {
      id: 0,
      imgSrc: '',
      title: '',
      price: 0,
      onSale: false,
      quantity: 0,
    },
  ];
  countItem: number = 0;
  countItemBSub: BehaviorSubject<number> = new BehaviorSubject(0);
  total: number = 0;
  returntotal(): number {
    return this.productsList.reduce(
      (acc, prod) => (acc += prod.price * prod.quantity),
      0
    );
  }
  cart: any;
  cheackIfExist: boolean = false;

  deleteItem(product: any) {
    const indexOfItemToRemove = this.productsList.indexOf(product);

    if (indexOfItemToRemove == 0)
      this.productsList.splice(indexOfItemToRemove, 1, {
        id: 0,
        imgSrc: '',
        title: '',
        price: 0,
        onSale: false,
        quantity: 0,
      });
    else this.productsList.splice(indexOfItemToRemove, 1);
    this.saveCart();
  }
  getCart() {
    this.cart = localStorage.getItem('cart');
    this.productsList = JSON.parse(this.cart);
    if (this.productsList == null) this.countItem = 0;
    else if (this.productsList[0]?.id == 0)
      this.countItem = this.productsList.length - 1;
    else this.countItem = this.productsList.length;
    return this.productsList;
  }
  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.productsList));
  }
  index: number = 0;
  addItem(product: any) {
    this.productsList = this.getCart();
    this.productsList.forEach((p, index) => {
      if (p.id == product.id) {
        this.cheackIfExist = true;
        this.index = index;
      }
    });
    if (this.cheackIfExist && product.quantity != 0) {
      this.productsList[this.index].quantity += product.quantity;
    } else if (!this.cheackIfExist && product.quantity != 0) {
      if (this.productsList[0].id == 0) {
        this.productsList.splice(0, 1);
      }
      this.countItemBSub.next(this.productsList.length + 1);

      this.productsList.push(product);
    }
    this.saveCart();
  }
}
