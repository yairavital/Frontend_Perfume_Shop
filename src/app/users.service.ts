import { Injectable } from '@angular/core';
import { Iuser } from './IuserData';
import { usersType } from './usersType';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class usersService {
  adminLoggedIn: boolean = false;
  userLog: any;
  usersFromLocal: any;
  isExist: boolean = false;
  index: number = 0;
  isLogin: BehaviorSubject<boolean> = new BehaviorSubject(
    this.checkLoginFromLocal()
  );
  checkLogin: any;
  loginFromLocal: any;

  usersList: Iuser[] = [
    {
      id: '209190844',
      name: 'Eli Cohen',
      email: 'Eli_Cohen@gmail.com',
      password: '123',
      type: usersType.client,
    },
    {
      id: '209190845',
      name: 'admin',
      email: 'admin@gmail.com',
      password: '0000',
      type: usersType.admin,
    },
  ];

  saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.usersList));
  }
  constructor(public router: Router) {
    this.saveUsers();
    this.usersFromLocal = localStorage.getItem('users');
    this.usersList = JSON.parse(this.usersFromLocal);

    this.isLogin.subscribe((log) => {
      localStorage.setItem('login', JSON.stringify(log));
    });
  }

  deleteUser(user: any) {
    const indexOfUserToRemove = this.usersList.indexOf(user);

    if (indexOfUserToRemove !== null)
      this.usersList.splice(indexOfUserToRemove, 1);
    this.saveUsers();
  }

  getUsers() {
    this.usersFromLocal = localStorage.getItem('users');
    this.usersList = JSON.parse(this.usersFromLocal);
    return this.usersList;
  }
  addUser(user: any) {
    this.usersList = this.getUsers();

    this.usersList.forEach((us) => {
      if (us.id == user.id) this.isExist = true;
    });
    if (this.isExist == true) alert('The user already exists');
    else {
      this.usersList.push(user);
      alert('The user has successfully registered');
    }
    this.saveUsers();
  }
  updateUser(user: Iuser) {
    this.usersList = this.getUsers();

    this.usersList.forEach((us, index) => {
      if (us.id == user.id) this.index = index;
    });
    this.usersList[this.index] = user;
    this.saveUsers();
    localStorage.removeItem('userToUpdate');
    alert('The details have been successfully updated ');
    this.router.navigate(['/mangeUsers']);
  }
  login(userName: string, password: string): boolean {
    this.usersList = this.getUsers();
    this.usersList.forEach((us) => {
      if (us.name == userName && us.password == password) {
        this.isLogin.next(true);
        this.SaveUserLogin(us);
      }
    });

    this.checkLogin = this.checkLoginFromLocal();
    if (this.checkLogin == false)
      alert('The username or password is incorrect');
    return this.checkLogin;
  }
  logOut(): boolean {
    this.isLogin.next(false);

    this.checkLogin = this.checkLoginFromLocal();
    localStorage.removeItem('userLoggedIn');
    this.router.navigate(['/home']);
    return this.checkLogin;
  }
  checkLoginFromLocal(): boolean {
    this.loginFromLocal = localStorage.getItem('login');
    this.checkLogin = JSON.parse(this.loginFromLocal);
    return this.checkLogin;
  }
  SaveUserLogin(user: Iuser) {
    localStorage.setItem('userLoggedIn', JSON.stringify(user));
  }
  ReturnUserLogin() {
    this.userLog = localStorage.getItem('userLoggedIn');
    return JSON.parse(this.userLog);
  }
  checkAdminLogin(): boolean {
    this.adminLoggedIn =
      this.checkLoginFromLocal() && this.ReturnUserLogin().name == 'admin';
    return this.adminLoggedIn;
  }
}
