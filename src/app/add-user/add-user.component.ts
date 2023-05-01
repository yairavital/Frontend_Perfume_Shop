import { Component, OnInit } from '@angular/core';
import { usersService } from '../users.service';
import { Iuser } from '../IuserData';
import { usersType } from '../usersType';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  newUser: Iuser = {
    id: '',
    name: '',
    email: '',
    password: '',

    type: usersType.client,
  };
  constructor(public usersServ: usersService) {}
  addUser(
    id: string,
    name: string,
    email: string,
    pass: string,
    userType: string
  ) {
    this.newUser = {
      id: id,
      name: name,
      email: email,
      password: pass,
      type: usersType.client,
    };
    if (userType == 'admin') this.newUser.type = usersType.admin;
    console.log(this.newUser);
    this.usersServ.addUser(this.newUser);
  }
  ngOnInit(): void {}
}
