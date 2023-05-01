import { Injectable } from '@angular/core';
import { perfumesService } from 'src/app/perfumes.service';

@Injectable()
export class cardsManService {
  products: any;

  constructor(private perfumesService: perfumesService) {
    this.products = this.perfumesService.mansPerfumes;
  }
}
