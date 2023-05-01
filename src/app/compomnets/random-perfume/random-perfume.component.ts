import { perfumesService } from './../../perfumes.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, observable, Subject } from 'rxjs';

@Component({
  selector: 'app-random-perfume',

  templateUrl: './random-perfume.component.html',
  styleUrls: ['./random-perfume.component.scss'],
})
export class RandomPerfumeComponent implements OnInit {
  constructor(public perfumes: perfumesService) {}
  products: any;
  randomIndex: any;
  ngOnInit(): void {}
  randomPerfumeItem: any;
  showCard = new BehaviorSubject(false);
  perfumeContainer: HTMLElement = document.querySelector(
    '.perfumeContainer'
  ) as HTMLElement;
  rangeInput: HTMLInputElement = document.getElementById(
    'myRange'
  ) as HTMLInputElement;
  genderSelect: any = '';
  onSelected(value: string) {
    this.genderSelect = value;
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  randomPerfume(range: string) {
    if (this.genderSelect === 'female')
      this.products = this.perfumes.womanPerfume;
    else this.products = this.perfumes.mansPerfumes;
    this.randomIndex = this.getRandomInt(this.products.length + 1);
    while (this.products[this.randomIndex].price > parseInt(range)) {
      this.randomIndex = this.getRandomInt(this.products.length + 1);
    }

    this.randomPerfumeItem = this.products[this.randomIndex];
    this.showCard.next(true);
  }
}
