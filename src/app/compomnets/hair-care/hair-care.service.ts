import { Injectable } from '@angular/core';

@Injectable()
export class hairCareService {
  products: any = [
    {
      id: 50,
      imgSrc:
        'https://www.kerastase-usa.com/on/demandware.static/-/Sites-kerastase-master-catalog/default/dw855b5ca9/2019/full-size/blond-absolu/kerastase-blond-absolu-masque-ultra-violet-purple-hair-mask.png',
      title: 'Kerastase',
      price: 45,
      quantity: 0,
    },
    {
      id: 51,
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-G7m_QiKgKe4h8dVKMgFSM29-Ns3lNqeoPA&usqp=CAU',
      title: 'SheaMoisture',
      price: 13,
      quantity: 0,
    },
    {
      id: 52,
      imgSrc:
        'https://media.allure.com/photos/60ae7a8d05e44d9caa4bda2a/1:1/w_1200,h_1200,c_limit/Pantene%20Pro-V%20Soothing%20Recovery%20Mask%20for%20Unruly%20Frizzy%20Hair.jpg',
      title: 'Pantene',
      price: 15,

      quantity: 0,
    },

    {
      id: 54,
      imgSrc:
        'https://media.allure.com/photos/60ae83569b3b5f2e8e7ae2d0/1:1/w_1300,h_1300,c_limit/Eva%20NYC%20Therapy%20Session%20Hair%20Mask.jpg',
      title: 'Eva NYC',
      price: 20,
      quantity: 0,
    },
    {
      id: 53,
      imgSrc: './assets/Images/BlowDryConcentrate.png',
      title: 'Blow Dry Concentrate',
      price: 45,
      quantity: 0,
    },
  ];

  constructor() {}
}
