import { Component, OnInit } from '@angular/core';
import { cardsWomenService } from './cardsWomen.service';

@Component({
  selector: 'app-women-perfume',
  templateUrl: './women-perfume.component.html',
  styleUrls: ['./women-perfume.component.scss'],
})
export class WomenPerfumeComponent implements OnInit {
  perfumes: any;
  constructor(private cService: cardsWomenService) {
    this.perfumes = this.cService.perfumes;
  }

  ngOnInit(): void {}
}
