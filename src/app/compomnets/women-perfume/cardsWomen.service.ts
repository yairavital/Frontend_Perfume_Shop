import { Injectable } from '@angular/core';
import { perfumesService } from 'src/app/perfumes.service';

@Injectable()
export class cardsWomenService {
  perfumes: any;
  constructor(public perfumesService: perfumesService) {
    this.perfumes = this.perfumesService.womanPerfume;
  }
}
