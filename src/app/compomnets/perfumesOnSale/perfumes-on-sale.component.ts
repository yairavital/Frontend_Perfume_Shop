import { Component, OnInit } from '@angular/core';
import { perfumesService } from 'src/app/perfumes.service';

@Component({
  selector: 'perfumes-on-sale',

  templateUrl: './perfumes-on-sale.component.html',
  styleUrls: ['./perfumes-on-sale.component.scss'],
})
export class PerfumesOnSaleComponent implements OnInit {
  perfumesOnSale: any;
  constructor(private cService: perfumesService) {
    this.perfumesOnSale = this.cService.onSalePerfumes;
  }

  ngOnInit(): void {}
}
