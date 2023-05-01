import { Component, OnInit } from '@angular/core';
import { hairCareService } from './hair-care.service';
@Component({
  selector: 'app-hair-care',
  templateUrl: './hair-care.component.html',
  styleUrls: ['./hair-care.component.scss'],
})
export class HairCareComponent implements OnInit {
  products: any;
  constructor(private cService: hairCareService) {
    this.products = cService.products;
  }

  ngOnInit(): void {}
}
