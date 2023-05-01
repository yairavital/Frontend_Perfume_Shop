import { Component, OnInit } from '@angular/core';
import { perfumesService } from '../perfumes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss'],
})
export class EditProductsComponent implements OnInit {
  productsList: any;

  constructor(public perfumesList: perfumesService, public route: Router) {
    this.productsList = perfumesList.getPerfumes();
  }
  deletePerfume(productItem: any) {
    this.perfumesList.deletePerfume(productItem);
  }
  addItem(perfume: any) {
    this.perfumesList.addItem(perfume);
  }
  updatePerfume(perfume: any) {
    localStorage.setItem('perfumeToUpdate', JSON.stringify(perfume));
  }

  ngOnInit(): void {}
}
