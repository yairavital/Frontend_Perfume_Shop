import { usersService } from 'src/app/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
})
export class ManageUsersComponent implements OnInit {
  usersList: any;
  constructor(private usersServ: usersService, private route: Router) {
    this.usersList = this.usersServ.getUsers();
  }
  deleteUser(user: any) {
    this.usersServ.deleteUser(user);
    this.usersServ.saveUsers();
  }
  updateUser(user: any) {
    localStorage.setItem('userToUpdate', JSON.stringify(user));
    this.route.navigate(['/editUser']);
  }

  ngOnInit(): void {}
}
