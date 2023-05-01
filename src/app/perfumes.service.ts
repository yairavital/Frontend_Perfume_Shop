import { PerfumesOnSaleComponent } from './compomnets/perfumesOnSale/perfumes-on-sale.component';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class perfumesService {
  isExist: boolean = false;
  index: any;

  perfumes = [
    {
      id: 1,
      imgSrc: 'https://img.zap.co.il/pics/6/9/5/0/47700596c.gif',
      title: 'chanelBlu',
      price: 245,
      gender: 'Man',
      onSale: false,
      quantity: 0,
    },
    {
      id: 2,
      imgSrc: 'https://ksp.co.il/shop/items/512/50083.jpg?V=23020508',
      title: 'SauvageDior',
      price: 200,
      gender: 'Man',
      onSale: false,
      quantity: 0,
    },
    {
      id: 3,
      imgSrc:
        'https://la-essence.com/wp-content/uploads/2021/12/Cat_491009_1064-300x300.jpg',
      title: 'Lacost Home',
      price: 185,
      gender: 'Man',
      onSale: false,
      quantity: 0,
    },
    {
      id: 4,
      imgSrc: './assets/Images/PerfumesImages/Explorer.jpg',
      title: 'Explorer',
      price: 175,
      gender: 'Man',
      onSale: true,
      quantity: 0,
    },
    {
      id: 5,
      imgSrc:
        './assets/Images/PerfumesImages/Hermes-Terre-DHermes-Parfum-200ml-.jpeg',
      title: 'Terre DHermes',
      price: 160,
      gender: 'Man',
      onSale: true,
      quantity: 0,
    },
    {
      id: 6,
      imgSrc:
        'https://www.lovenmour.co.il/images/thumbs/002/0022419_-tester-dior-homme-sport-125ml-edt-_360.jpeg',
      title: 'DIOR HOMME SPORT',
      price: 190,
      gender: 'Man',
      onSale: true,
      quantity: 0,
    },
    {
      id: 7,
      imgSrc: './assets/Images/PerfumesImages/StrongerArmaniMan.jpg',
      title: 'STRONGER ARMANI',
      price: 245,
      gender: 'Man',
      onSale: false,
      quantity: 0,
    },
    {
      id: 8,
      imgSrc: './assets/Images/PerfumesImages/HUGO_BOSS_BOTTLED.jpg',
      title: 'HUGO BOSS BOTTLED',
      price: 150,
      gender: 'Man',
      onSale: false,
      quantity: 0,
    },
    {
      id: 9,
      imgSrc: 'https://img.zap.co.il/pics/2/2/9/3/41023922c.gif',
      title: 'Coco Chanel',
      price: 145,
      gender: 'Female',
      onSale: true,
      quantity: 0,
    },
    {
      id: 10,
      imgSrc: './assets/Images/PerfumesImages/ChanelWoman.jpeg',
      title: 'Gabrielle',
      price: 245,
      gender: 'Female',
      onSale: true,
      quantity: 0,
    },
    {
      id: 11,
      imgSrc: 'https://img.zap.co.il/pics/9/5/3/9/47679359c.gif',
      title: 'Icon Roses',
      price: 200,
      gender: 'Female',
      onSale: true,
      quantity: 0,
    },
    {
      id: 12,
      imgSrc: 'https://img.zap.co.il/pics/5/2/5/6/51736525c.gif',
      title: 'Icon Sense',
      price: 120,
      gender: 'Female',
      onSale: true,
      quantity: 0,
    },
    {
      id: 13,
      imgSrc: './assets/Images/PerfumesImages/MonParisWoman.png',
      title: 'Mon Paris',
      price: 250,
      gender: 'Female',
      onSale: false,
      quantity: 0,
    },
    {
      id: 14,
      imgSrc: './assets/Images/PerfumesImages/Lancom1Woman.jpg',
      title: 'Lancom',
      price: 180,
      gender: 'Female',
      onSale: false,
      quantity: 0,
    },
    {
      id: 15,
      imgSrc: 'https://img.zap.co.il/pics/0/6/1/1/42951160c.gif',
      title: 'ROBERTO CAVALLI ',
      price: 200,
      gender: 'Female',
      onSale: false,
      quantity: 0,
    },
    {
      id: 16,
      imgSrc: './assets/Images/PerfumesImages/EuphoriaWoman.jpg',
      title: 'Euphoria',
      price: 175,
      gender: 'Female',
      onSale: false,
      quantity: 0,
    },
    {
      id: 17,
      imgSrc:
        'https://il.loccitane.com/media/catalog/product/cache/868d7666b4c2dfc365705813a2412c33/2/4/24et050c20.png',
      title: 'Loccitane',
      price: 100,
      gender: 'Female',
      onSale: false,
      quantity: 0,
    },
  ];
  womanPerfume: any = [];
  mansPerfumes: any = [];
  onSalePerfumes: any = [];

  onSalePerf: Subject<[]> = new Subject();
  perfumesFromLocal: any;
  constructor(private route: Router) {
    this.savePerfumes();
    this.perfumeSorting();
    this.onSalePerf.subscribe((ne) => (this.onSalePerfumes = ne));
    this.onSalePerf.next(this.onSalePerfumes);
    this.perfumesFromLocal = localStorage.getItem('perfumes');
    this.perfumes = JSON.parse(this.perfumesFromLocal);
  }

  perfumeSorting() {
    this.getPerfumes().forEach((item) => {
      if (item.onSale === true) this.onSalePerfumes.push(item);
      if (item.gender == 'Female') this.womanPerfume.push(item);
      else this.mansPerfumes.push(item);
    });
  }
  deletePerfume(productItem: any) {
    const indexOfperfumeToRemove = this.perfumes.indexOf(productItem);
    if (indexOfperfumeToRemove !== null)
      this.perfumes.splice(indexOfperfumeToRemove, 1);
    this.savePerfumes();
  }
  savePerfumes() {
    localStorage.setItem('perfumes', JSON.stringify(this.perfumes));
  }
  getPerfumes() {
    this.perfumesFromLocal = localStorage.getItem('perfumes');
    this.perfumes = JSON.parse(this.perfumesFromLocal);
    return this.perfumes;
  }
  addItem(perfume: any) {
    this.perfumes = this.getPerfumes();

    this.perfumes.forEach((item) => {
      if (item.id == perfume.id) this.isExist = true;
    });
    if (this.isExist == false) this.perfumes.push(perfume);
    else alert('The item already exists');
    this.savePerfumes();
  }
  onSale: any = [];
  updatePerfume(perfume: any) {
    this.perfumes = this.getPerfumes();

    this.perfumes.forEach((item, index) => {
      if (item.id == perfume.id) this.index = index;
    });
    this.perfumes[this.index] = perfume;
    this.savePerfumes();
    this.getPerfumes().forEach((item) => {
      if (item.onSale === true) this.onSale.push(item);
    });
    this.onSalePerf.next(this.onSale);

    alert('The details have been successfully updated ');
    this.route.navigate(['/manageProducts']);
    localStorage.removeItem('perfumeToUpdate');
  }
}
