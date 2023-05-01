import { Injectable } from '@angular/core';
import { Iimage } from 'src/app/IcarouselData';

@Injectable()
export class carouselDataService {
  images: Iimage[] = [
    {
      imageSrc: './assets/Images/PerfumesImages/MonParisWoman.png',
      perfumeName: 'Mon Paris Women',
    },
    {
      imageSrc: './assets/Images/PerfumesImages/EuphoriaWoman-removebg.png',
      perfumeName: 'Euphoria Woman',
    },

    {
      imageSrc:
        'https://il.loccitane.com/media/catalog/product/cache/868d7666b4c2dfc365705813a2412c33/2/4/24et050c20.png',
      perfumeName: 'Loccitane Women',
    },
  ];
  constructor() {}
}
