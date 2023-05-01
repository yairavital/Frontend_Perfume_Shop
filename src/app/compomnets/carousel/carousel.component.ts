import { CommonModule } from '@angular/common';
import { Iimage } from 'src/app/IcarouselData';
import { Component, OnInit } from '@angular/core';
import { carouselDataService } from './carouselData.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel-basic',

  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  images: Iimage[];
  constructor(private imagesCarousel: carouselDataService) {
    this.images = imagesCarousel.images;
  }

  ngOnInit(): void {}
}
