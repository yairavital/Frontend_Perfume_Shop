import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/IuserData';
import { usersService } from 'src/app/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usersList: Iuser[] = this.usersService.getUsers();
  isLogin: boolean = false;

  constructor(private usersService: usersService, public router: Router) {}
  Login(userName: string, password: string) {
    this.isLogin = this.usersService.login(userName, password);
    if (this.isLogin == true && userName == 'admin') {
      this.router.navigate(['/home']);
    } else if (this.isLogin == true && userName !== 'admin') {
      this.router.navigate(['/cart']);
    }
  }
  ngOnInit(): void {}
}
