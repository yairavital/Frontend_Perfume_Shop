import { perfumesService } from 'src/app/perfumes.service';
import { Component, OnInit } from '@angular/core';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-edit-perfume',
  templateUrl: './edit-perfume.component.html',
  styleUrls: ['./edit-perfume.component.scss'],
})
export class EditPerfumeComponent implements OnInit {
  perfumeToUpdate: any;
  newPerfume: any;

  perfumeFromLocal: any;
  constructor(private perfService: perfumesService) {
    this.perfumeFromLocal = localStorage.getItem('perfumeToUpdate');
    this.perfumeToUpdate = JSON.parse(this.perfumeFromLocal);
  }

  updatePerfume(
    id: string,
    title: string,
    imgSrc: string,
    onSale: string,
    price: number,
    gender: string
  ) {
    this.newPerfume = {
      id: id,
      name: name,
      title: title,
      imgSrc: imgSrc,
      onSale: onSale === 'true' ? true : false,
      price: price,
      gender: gender,
    };
    this.newPerfume.quantity = 0;

    localStorage.setItem('perfumeToUpdate', JSON.stringify(this.newPerfume));
    this.perfService.updatePerfume(this.newPerfume);
  }

  ngOnInit(): void {}
}
