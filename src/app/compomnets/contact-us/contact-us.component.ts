import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  isSend = false;
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get subject() {
    return this.form.get('subject');
  }
  get message() {
    return this.form.get('message');
  }
  userMessage: any;
  constructor() {}
  Submit() {
    if (
      this.email?.valid &&
      this.name?.valid &&
      this.subject?.valid &&
      this.message?.valid
    ) {
      this.userMessage = {
        name: this.name.value,
        email: this.email.value,
        subject: this.subject.value,
        message: this.message.value,
      };
      this.isSend = true;
      localStorage.setItem('usersMessage', JSON.stringify(this.userMessage));
      console.log(localStorage.getItem('usersMessage'));
    } else alert('Fill in all the details !');
  }

  ngOnInit(): void {}
}
