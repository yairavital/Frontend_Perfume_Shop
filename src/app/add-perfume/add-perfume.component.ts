import { perfumesService } from 'src/app/perfumes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-perfume',
  templateUrl: './add-perfume.component.html',
  styleUrls: ['./add-perfume.component.scss'],
})
export class AddPerfumeComponent implements OnInit {
  newPerfume: any;

  constructor(public perfumesService: perfumesService, private route: Router) {}

  ngOnInit(): void {}
  addPerfume(
    id: string,
    imgSrc: string,
    name: string,
    price: string,
    gender: string,
    sale: string
  ) {
    this.newPerfume = {
      id: id,
      imgSrc: imgSrc,
      title: name,
      price: price,
      gender: gender,
      onSale: sale,
      quantity: 0,
    };
    this.newPerfume.onSale.value === 'true'
      ? (this.newPerfume.onSale = true)
      : (this.newPerfume.onSale = false);
    this.perfumesService.addItem(this.newPerfume);
    this.route.navigate(['/editProducts']);
  }
}
