import { usersService } from 'src/app/users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { usersType } from 'src/app/usersType';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(private usersServ: usersService) {}

  ngOnInit(): void {}
  newUser = { id: '', name: '', email: '', password: '', type: '' };
  isRegistered: boolean = false;
  form = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    repeatPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  get id() {
    return this.form.get('id');
  }
  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get repeatPassword() {
    return this.form.get('repeatPassword');
  }

  Submit() {
    if (this.form.valid && this.repeatPassword.value === this.password.value) {
      this.newUser = {
        id: this.id.value,
        name: this.name.value,
        email: this.email.value,
        password: this.password.value,
        type: usersType.client,
      };
      this.usersServ.addUser(this.newUser);
      this.isRegistered = this.usersServ.checkLoginFromLocal();

      this.usersServ.login(this.newUser.name, this.newUser.password);
    }
  }
}
