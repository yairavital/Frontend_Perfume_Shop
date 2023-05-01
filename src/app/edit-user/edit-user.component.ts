import { Component, OnInit } from '@angular/core';
import { usersService } from '../users.service';
import { Iuser } from '../IuserData';
import { usersType } from '../usersType';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  userToUpdate: any;
  newUser: Iuser = {
    id: '',
    name: '',
    email: '',
    password: '',

    type: usersType.client,
  };
  user: any;
  constructor(private usersServ: usersService) {
    this.user = localStorage.getItem('userToUpdate');
    this.user = JSON.parse(this.user);
  }
  updateUser(
    id: string,
    name: string,
    email: string,
    newPassword: string,
    userType: string
  ) {
    this.newUser = {
      id: id,
      name: name,
      email: email,
      password: newPassword,
      type: usersType.client,
    };
    if (userType == 'admin') this.newUser.type = usersType.admin;
    localStorage.setItem('userToUpdate', JSON.stringify(this.newUser));
    this.usersServ.updateUser(this.newUser);
  }
  ngOnInit(): void {}
}
