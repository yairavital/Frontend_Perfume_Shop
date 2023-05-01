import { Component, OnInit } from '@angular/core';
import { cardsManService } from './cardsMan.service';

@Component({
  selector: 'app-man-perfumes',
  templateUrl: './man-perfumes.component.html',
  styleUrls: ['./man-perfumes.component.scss'],
})
export class ManPerfumesComponent implements OnInit {
  products: any;
  constructor(private cService: cardsManService) {
    this.products = cService.products;
  }

  ngOnInit(): void {}
}
