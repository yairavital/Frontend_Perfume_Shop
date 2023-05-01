import { Component, OnInit } from '@angular/core';
import { min } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  constructor() {
    setInterval(() => {
      var now = new Date();
      var hours = now.getHours().toString();
      var minutes = now.getMinutes().toString();
      var seconds = now.getSeconds().toString();
      var TheTime = ' ' + (hours.length < 2 ? (hours = '0' + hours) : hours);
      if (TheTime == '0') TheTime = '12';
      TheTime +=
        minutes.length < 2 ? (minutes = ':0' + minutes) : ':' + minutes;
      TheTime +=
        seconds.length < 2 ? (seconds = ':0' + seconds) : ':' + seconds;
      this.myClockTime = TheTime;
    }, 1000);
  }
  myClockTime: string = '';

  ngOnInit(): void {}
}
