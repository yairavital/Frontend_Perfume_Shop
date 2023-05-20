import { usersService } from 'src/app/users.service';
import { cartService } from './../cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  isDisplay: boolean = false;
  isOpen: boolean = false;
  count: number = 1;
  cartService: any;
  isLogin: boolean = this.usersServ.checkLoginFromLocal();

  constructor(public cartServic: cartService, public usersServ: usersService) {
    this.cartService = cartServic;
    this.isLogin = this.usersServ.checkLoginFromLocal();
  }

  logOut() {
    this.isLogin = this.usersServ.logOut();
  }
  ngOnInit(): void {}
  dropDownListOnClick() {
    this.count % 2 == 1 ? (this.isDisplay = true) : (this.isDisplay = false);
    this.count++;
  }
  changeIsOpen() {
    this.isOpen = !this.isOpen;
  }
}
